import type { APIRoute } from 'astro';
import { verifySession, hashPassword } from '../../../lib/auth';
import type { User } from '../../../lib/auth';

async function readUsers(): Promise<User[]> {
  const fs = await import('fs/promises');
  const path = await import('path');
  const usersPath = path.join(process.cwd(), 'src', 'data', 'users.json');
  const data = await fs.readFile(usersPath, 'utf-8');
  return JSON.parse(data);
}

async function writeUsers(users: User[]): Promise<void> {
  const fs = await import('fs/promises');
  const path = await import('path');
  const usersPath = path.join(process.cwd(), 'src', 'data', 'users.json');
  await fs.writeFile(usersPath, JSON.stringify(users, null, 2));
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
    if (!session || session.role !== 'admin' || !session.permissions.manageUsers) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
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
    const { id, username, password, role, permissions } = body;

    if (!id || !username || !role || !permissions) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!password) {
      return new Response(JSON.stringify({ error: 'Password is required for new users' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const users = await readUsers();

    // Check if username already exists
    if (users.some(u => u.username === username)) {
      return new Response(JSON.stringify({ error: 'Username already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create new user
    const newUser: User = {
      id,
      username,
      passwordHash,
      role: role as 'admin' | 'moderator',
      permissions,
      status: 'active',
      createdAt: new Date().toISOString(),
      lastLogin: null
    };

    users.push(newUser);
    await writeUsers(users);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Create user error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const PUT: APIRoute = async ({ request, cookies }) => {
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
    if (!session || session.role !== 'admin' || !session.permissions.manageUsers) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
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
    const { id, username, password, role, permissions } = body;

    if (!id || !username || !role || !permissions) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const users = await readUsers();
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if username is taken by another user
    if (users.some(u => u.username === username && u.id !== id)) {
      return new Response(JSON.stringify({ error: 'Username already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Update user
    users[userIndex] = {
      ...users[userIndex],
      username,
      role: role as 'admin' | 'moderator',
      permissions
    };

    // Update password if provided
    if (password) {
      users[userIndex].passwordHash = await hashPassword(password);
    }

    await writeUsers(users);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Update user error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const DELETE: APIRoute = async ({ request, cookies }) => {
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
    if (!session || session.role !== 'admin' || !session.permissions.manageUsers) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
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
    const { id } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: 'Missing user ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const users = await readUsers();
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Toggle status
    users[userIndex].status = users[userIndex].status === 'active' ? 'suspended' : 'active';
    await writeUsers(users);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Toggle user status error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
