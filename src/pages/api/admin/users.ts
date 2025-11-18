import type { APIRoute } from 'astro';
import { verifySession, hashPassword } from '../../../lib/auth';
import type { User } from '../../../lib/auth';

// Activity Log Entry Interface
interface ActivityLog {
  timestamp: string;
  action: 'created' | 'updated' | 'suspended' | 'activated' | 'deleted';
  performedBy: string;
  userId: string;
  username: string;
  details?: string;
}

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

async function logActivity(log: ActivityLog): Promise<void> {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    const logPath = path.join(process.cwd(), 'src', 'data', 'user-activity.json');
    
    let logs: ActivityLog[] = [];
    try {
      const data = await fs.readFile(logPath, 'utf-8');
      logs = JSON.parse(data);
    } catch {
      // File doesn't exist yet, start with empty array
    }
    
    logs.push(log);
    
    // Keep only last 1000 logs to prevent file from growing too large
    if (logs.length > 1000) {
      logs = logs.slice(-1000);
    }
    
    await fs.writeFile(logPath, JSON.stringify(logs, null, 2));
  } catch (error) {
    console.error('Failed to log activity:', error);
  }
}

// Validation Functions
function validateUsername(username: string): { valid: boolean; error?: string } {
  if (!username || username.trim().length === 0) {
    return { valid: false, error: 'Username is required' };
  }
  if (username.length < 3) {
    return { valid: false, error: 'Username must be at least 3 characters long' };
  }
  if (username.length > 30) {
    return { valid: false, error: 'Username must not exceed 30 characters' };
  }
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
    return { valid: false, error: 'Username can only contain letters, numbers, underscores, and hyphens' };
  }
  return { valid: true };
}

function validatePassword(password: string): { valid: boolean; error?: string } {
  if (!password || password.trim().length === 0) {
    return { valid: false, error: 'Password is required' };
  }
  if (password.length < 6) {
    return { valid: false, error: 'Password must be at least 6 characters long' };
  }
  if (password.length > 100) {
    return { valid: false, error: 'Password must not exceed 100 characters' };
  }
  return { valid: true };
}

function validateRole(role: string): { valid: boolean; error?: string } {
  if (!role || !['admin', 'moderator'].includes(role)) {
    return { valid: false, error: 'Role must be either "admin" or "moderator"' };
  }
  return { valid: true };
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

    // Validate required fields
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

    // Validate username
    const usernameValidation = validateUsername(username);
    if (!usernameValidation.valid) {
      return new Response(JSON.stringify({ error: usernameValidation.error }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate password
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return new Response(JSON.stringify({ error: passwordValidation.error }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate role
    const roleValidation = validateRole(role);
    if (!roleValidation.valid) {
      return new Response(JSON.stringify({ error: roleValidation.error }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const users = await readUsers();

    // Check if username already exists
    if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
      return new Response(JSON.stringify({ error: 'Username already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if user ID already exists
    if (users.some(u => u.id === id)) {
      return new Response(JSON.stringify({ error: 'User ID already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Ensure moderators don't have admin-only permissions
    const finalPermissions = { ...permissions };
    if (role === 'moderator') {
      finalPermissions.manageUsers = false;
      finalPermissions.viewStatistics = false;
    }

    // Create new user
    const newUser: User = {
      id,
      username,
      passwordHash,
      role: role as 'admin' | 'moderator',
      permissions: finalPermissions,
      status: 'active',
      createdAt: new Date().toISOString(),
      lastLogin: null
    };

    users.push(newUser);
    await writeUsers(users);

    // Log activity
    await logActivity({
      timestamp: new Date().toISOString(),
      action: 'created',
      performedBy: session.username,
      userId: id,
      username: username,
      details: `Created new ${role} user`
    });

    return new Response(JSON.stringify({ success: true, message: 'User created successfully' }), {
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

    // Validate required fields
    if (!id || !username || !role || !permissions) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate username
    const usernameValidation = validateUsername(username);
    if (!usernameValidation.valid) {
      return new Response(JSON.stringify({ error: usernameValidation.error }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate password if provided
    if (password) {
      const passwordValidation = validatePassword(password);
      if (!passwordValidation.valid) {
        return new Response(JSON.stringify({ error: passwordValidation.error }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Validate role
    const roleValidation = validateRole(role);
    if (!roleValidation.valid) {
      return new Response(JSON.stringify({ error: roleValidation.error }), {
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

    // Prevent changing the main admin user
    if (users[userIndex].id === 'admin' && role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Cannot change the main admin role' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if username is taken by another user (case-insensitive)
    if (users.some(u => u.username.toLowerCase() === username.toLowerCase() && u.id !== id)) {
      return new Response(JSON.stringify({ error: 'Username already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const oldUsername = users[userIndex].username;
    const oldRole = users[userIndex].role;

    // Ensure moderators don't have admin-only permissions
    const finalPermissions = { ...permissions };
    if (role === 'moderator') {
      finalPermissions.manageUsers = false;
      finalPermissions.viewStatistics = false;
    }

    // Update user
    users[userIndex] = {
      ...users[userIndex],
      username,
      role: role as 'admin' | 'moderator',
      permissions: finalPermissions
    };

    // Update password if provided
    if (password) {
      users[userIndex].passwordHash = await hashPassword(password);
    }

    await writeUsers(users);

    // Log activity
    const changes = [];
    if (oldUsername !== username) changes.push(`username changed from "${oldUsername}" to "${username}"`);
    if (oldRole !== role) changes.push(`role changed from ${oldRole} to ${role}`);
    if (password) changes.push('password updated');
    changes.push('permissions updated');

    await logActivity({
      timestamp: new Date().toISOString(),
      action: 'updated',
      performedBy: session.username,
      userId: id,
      username: username,
      details: changes.join(', ')
    });

    return new Response(JSON.stringify({ success: true, message: 'User updated successfully' }), {
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

    // Prevent suspending the main admin
    if (users[userIndex].id === 'admin') {
      return new Response(JSON.stringify({ error: 'Cannot suspend the main admin account' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Prevent user from suspending themselves
    if (users[userIndex].id === session.id) {
      return new Response(JSON.stringify({ error: 'You cannot suspend your own account' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const oldStatus = users[userIndex].status;
    // Toggle status
    users[userIndex].status = users[userIndex].status === 'active' ? 'suspended' : 'active';
    const newStatus = users[userIndex].status;
    await writeUsers(users);

    // Log activity
    await logActivity({
      timestamp: new Date().toISOString(),
      action: newStatus === 'active' ? 'activated' : 'suspended',
      performedBy: session.username,
      userId: id,
      username: users[userIndex].username,
      details: `Status changed from ${oldStatus} to ${newStatus}`
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: `User ${newStatus === 'active' ? 'activated' : 'suspended'} successfully`,
      status: newStatus
    }), {
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
