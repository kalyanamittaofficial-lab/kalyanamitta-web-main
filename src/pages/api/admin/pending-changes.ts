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
  const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours from now
  
  notifications.push({
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    recipientUsername,
    type,
    action,
    status,
    itemTitle,
    approvedBy,
    reason,
    createdAt: now.toISOString(),
    expiresAt: expiresAt.toISOString()
  });
  
  await fs.writeFile(notificationsPath, JSON.stringify(notifications, null, 2));
}

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // Verify authentication
    const token = cookies.get('auth_token')?.value;
    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const session = await verifySession(token);
    if (!session || !session.permissions.approveChanges) {
      return new Response(JSON.stringify({ error: 'Forbidden - No approval permission' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify CSRF token
    const csrfToken = request.headers.get('X-CSRF-Token');
    if (!csrfToken || csrfToken !== session.csrfToken) {
      return new Response(JSON.stringify({ error: 'Invalid CSRF token' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const body = await request.json();
    const { id, action, reason } = body;

    if (!id || !action) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const pendingChanges = await readPendingChanges();
    const changeIndex = pendingChanges.findIndex(c => c.id === id);

    if (changeIndex === -1) {
      return new Response(JSON.stringify({ error: 'Change not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const change = pendingChanges[changeIndex];

    // Get item title for notification
    let itemTitle = 'Unknown';
    if (change.data.title) {
      itemTitle = change.data.title;
    } else if (change.data.name) {
      itemTitle = change.data.name;
    }

    if (action === 'approve') {
      // Apply the change to the actual data file
      const dataFile = await readDataFile(change.type);

      if (change.action === 'create') {
        dataFile.push(change.data);
      } else if (change.action === 'update') {
        const itemIndex = dataFile.findIndex((item: any) => item.id === change.originalId);
        if (itemIndex !== -1) {
          dataFile[itemIndex] = change.data;
        }
      } else if (change.action === 'delete') {
        const itemIndex = dataFile.findIndex((item: any) => item.id === change.originalId);
        if (itemIndex !== -1) {
          dataFile.splice(itemIndex, 1);
        }
      }

      await writeDataFile(change.type, dataFile);
    }

    // Create notification for the submitter
    await createNotification(
      change.submittedBy,
      change.type,
      change.action,
      action === 'approve' ? 'approved' : 'rejected',
      itemTitle,
      session.username,
      reason
    );

    // Remove from pending changes
    pendingChanges.splice(changeIndex, 1);
    await writePendingChanges(pendingChanges);

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
