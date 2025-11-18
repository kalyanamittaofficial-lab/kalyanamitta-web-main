import type { APIRoute } from 'astro';
import { verifySession } from '../../../lib/auth';

interface PendingChange {
  id: string;
  type: 'news' | 'events' | 'posts' | 'library';
  action: 'create' | 'update' | 'delete';
  data: any;
  originalId?: string;
  submittedBy: string;
  submittedAt: string;
  reason?: string;
}

async function readPendingChanges(): Promise<PendingChange[]> {
  const fs = await import('fs/promises');
  const path = await import('path');
  const pendingPath = path.join(process.cwd(), 'src', 'data', 'pending-changes.json');
  const data = await fs.readFile(pendingPath, 'utf-8');
  return JSON.parse(data);
}

async function writePendingChanges(changes: PendingChange[]): Promise<void> {
  const fs = await import('fs/promises');
  const path = await import('path');
  const pendingPath = path.join(process.cwd(), 'src', 'data', 'pending-changes.json');
  await fs.writeFile(pendingPath, JSON.stringify(changes, null, 2));
}

async function readDataFile(type: string): Promise<any[]> {
  const fs = await import('fs/promises');
  const path = await import('path');
  const dataPath = path.join(process.cwd(), 'src', 'data', `${type}.json`);
  const data = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(data);
}

async function writeDataFile(type: string, data: any): Promise<void> {
  const fs = await import('fs/promises');
  const path = await import('path');
  const dataPath = path.join(process.cwd(), 'src', 'data', `${type}.json`);
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
}

async function createNotification(
  recipientUsername: string,
  type: 'news' | 'events' | 'posts' | 'library',
  action: 'create' | 'update' | 'delete',
  status: 'approved' | 'rejected',
  itemTitle: string,
  approvedBy: string,
  reason?: string
): Promise<void> {
  const fs = await import('fs/promises');
  const path = await import('path');
  const notificationsPath = path.join(process.cwd(), 'src', 'data', 'notifications.json');
  
  const notifications = JSON.parse(await fs.readFile(notificationsPath, 'utf-8'));
  
  const now = new Date();
  
  notifications.push({
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    recipientUsername,
    type,
    action,
    status,
    itemTitle,
    approvedBy,
    reason,
    createdAt: now.toISOString()
  });
  
  await fs.writeFile(notificationsPath, JSON.stringify(notifications, null, 2));
}

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    console.log('=== Pending Changes API Called ===');
    
    // Verify authentication
    const token = cookies.get('auth_token')?.value;
    console.log('Auth token present:', !!token);
    
    if (!token) {
      console.log('ERROR: No auth token');
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const session = await verifySession(token);
    console.log('Session:', session ? { username: session.username, hasApproveChanges: session.permissions.approveChanges } : null);
    
    if (!session || !session.permissions.approveChanges) {
      console.log('ERROR: No approval permission');
      return new Response(JSON.stringify({ error: 'Forbidden - No approval permission' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify CSRF token
    const csrfToken = request.headers.get('X-CSRF-Token');
    console.log('CSRF token present:', !!csrfToken);
    console.log('CSRF tokens match:', csrfToken === session.csrfToken);
    
    if (!csrfToken || csrfToken !== session.csrfToken) {
      console.log('ERROR: Invalid CSRF token');
      return new Response(JSON.stringify({ error: 'Invalid CSRF token' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const body = await request.json();
    const { id, action, reason } = body;
    console.log('Request body:', { id, action, reason });

    if (!id || !action) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const pendingChanges = await readPendingChanges();
    console.log('Total pending changes:', pendingChanges.length);
    console.log('Pending change IDs:', pendingChanges.map(c => c.id));
    
    const changeIndex = pendingChanges.findIndex(c => c.id === id);
    console.log('Change index found:', changeIndex);

    if (changeIndex === -1) {
      console.log('ERROR: Change not found for ID:', id);
      return new Response(JSON.stringify({ error: 'Change not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const change = pendingChanges[changeIndex];
    console.log('Processing change:', { type: change.type, action: change.action, submittedBy: change.submittedBy });

    // Get item title for notification
    let itemTitle = 'Unknown';
    if (change.data.title) {
      itemTitle = change.data.title;
    } else if (change.data.name) {
      itemTitle = change.data.name;
    }
    console.log('Item title:', itemTitle);

    if (action === 'approve') {
      console.log('APPROVING change...');
      // Apply the change to the actual data file
      const dataFile = await readDataFile(change.type);

      if (change.action === 'create') {
        dataFile.push(change.data);
      } else if (change.action === 'update') {
        // Handle both numeric and string IDs
        const itemIndex = dataFile.findIndex((item: any) => 
          item.id == change.originalId || item.id === change.originalId
        );
        if (itemIndex !== -1) {
          dataFile[itemIndex] = change.data;
        }
      } else if (change.action === 'delete') {
        // Handle both numeric and string IDs with loose equality
        const itemIndex = dataFile.findIndex((item: any) => 
          item.id == change.originalId || item.id === change.originalId
        );
        if (itemIndex !== -1) {
          dataFile.splice(itemIndex, 1);
        } else {
          console.error('Item not found for deletion:', { 
            originalId: change.originalId, 
            originalIdType: typeof change.originalId,
            availableIds: dataFile.map((item: any) => ({ id: item.id, type: typeof item.id }))
          });
        }
      }

      console.log('Writing updated data file for:', change.type);
      await writeDataFile(change.type, dataFile);
      console.log('Data file updated successfully');
    }

    // Create notification for the submitter
    console.log('Creating notification for:', change.submittedBy);
    await createNotification(
      change.submittedBy,
      change.type,
      change.action,
      action === 'approve' ? 'approved' : 'rejected',
      itemTitle,
      session.username,
      reason
    );
    console.log('Notification created');

    // Remove from pending changes
    pendingChanges.splice(changeIndex, 1);
    console.log('Removed from pending changes, remaining:', pendingChanges.length);
    await writePendingChanges(pendingChanges);
    console.log('Pending changes file updated');

    console.log('=== Success ===');
    return new Response(JSON.stringify({ 
      success: true,
      message: action === 'approve' ? 'Change approved and applied' : 'Change rejected'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Pending change action error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
