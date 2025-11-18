import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');

interface Notification {
  id: string;
  recipientUsername: string;
  type: 'news' | 'events' | 'posts' | 'library';
  action: 'create' | 'update' | 'delete';
  status: 'approved' | 'rejected';
  itemTitle: string;
  approvedBy: string;
  reason?: string;
  createdAt: string;
}

async function readNotifications(): Promise<Notification[]> {
  const filePath = path.join(DATA_DIR, 'notifications.json');
  const content = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(content);
}

async function writeNotifications(notifications: Notification[]): Promise<void> {
  const filePath = path.join(DATA_DIR, 'notifications.json');
  await fs.writeFile(filePath, JSON.stringify(notifications, null, 2), 'utf-8');
}

// GET - Fetch notifications for current user
export const GET: APIRoute = async ({ locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const notifications = await readNotifications();
    
    // Filter notifications for current user
    const userNotifications = notifications.filter(
      n => n.recipientUsername === locals.user!.username
    );

    return new Response(
      JSON.stringify(userNotifications),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error reading notifications:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to read notifications' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// DELETE - Remove a notification
export const DELETE: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Verify CSRF token
    const csrfToken = request.headers.get('X-CSRF-Token');
    if (!csrfToken || csrfToken !== locals.csrfToken) {
      return new Response(
        JSON.stringify({ error: 'Invalid CSRF token' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return new Response(
        JSON.stringify({ error: 'ID is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    let notifications = await readNotifications();
    
    // Only allow users to delete their own notifications
    notifications = notifications.filter(
      n => !(n.id === id && n.recipientUsername === locals.user!.username)
    );
    
    await writeNotifications(notifications);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error deleting notification:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to delete notification' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
