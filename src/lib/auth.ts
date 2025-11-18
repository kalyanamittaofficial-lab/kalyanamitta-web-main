import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';

const JWT_SECRET = new TextEncoder().encode(
  import.meta.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
);

const SESSION_DURATION = 8 * 60 * 60; // 8 hours in seconds

export interface Permissions {
  manageUsers?: boolean;
  approveChanges?: boolean;
  viewStatistics?: boolean;
  news?: {
    create?: boolean;
    edit?: boolean;
    delete?: boolean;
    publish?: boolean;
  };
  events?: {
    create?: boolean;
    edit?: boolean;
    delete?: boolean;
    publish?: boolean;
  };
  posts?: {
    create?: boolean;
    edit?: boolean;
    delete?: boolean;
    publish?: boolean;
  };
  library?: {
    create?: boolean;
    edit?: boolean;
    delete?: boolean;
    publish?: boolean;
  };
}

export interface User {
  id: string;
  username: string;
  passwordHash: string;
  role: 'admin' | 'moderator';
  permissions: Permissions;
  status: 'active' | 'suspended';
  createdAt: string;
  lastLogin: string | null;
}

export interface AdminUser {
  id: string;
  username: string;
  role: 'admin' | 'moderator';
  permissions: Permissions;
}

export interface SessionPayload extends AdminUser {
  exp: number;
  iat: number;
  csrfToken: string;
}

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Create a JWT token for authenticated session
 */
export async function createSession(user: AdminUser, csrfToken: string): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + SESSION_DURATION;

  return new SignJWT({ ...user, csrfToken })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(JWT_SECRET);
}

/**
 * Verify and decode a JWT token
 */
export async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const verified = await jwtVerify(token, JWT_SECRET);
    const payload = verified.payload;
    
    // Validate payload has required fields
    if (
      typeof payload.id === 'string' &&
      typeof payload.username === 'string' &&
      typeof payload.role === 'string' &&
      typeof payload.csrfToken === 'string'
    ) {
      return payload as unknown as SessionPayload;
    }
    
    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Generate a CSRF token
 */
export function generateCSRFToken(): string {
  return crypto.randomUUID();
}

/**
 * Get user from users.json by username
 */
export async function getUserByUsername(username: string): Promise<User | null> {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    const usersPath = path.join(process.cwd(), 'src', 'data', 'users.json');
    const usersData = await fs.readFile(usersPath, 'utf-8');
    const users: User[] = JSON.parse(usersData);
    
    return users.find(u => u.username === username && u.status === 'active') || null;
  } catch (error) {
    console.error('Error reading users:', error);
    return null;
  }
}

/**
 * Get user by ID
 */
export async function getUserById(id: string): Promise<User | null> {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    const usersPath = path.join(process.cwd(), 'src', 'data', 'users.json');
    const usersData = await fs.readFile(usersPath, 'utf-8');
    const users: User[] = JSON.parse(usersData);
    
    return users.find(u => u.id === id && u.status === 'active') || null;
  } catch (error) {
    console.error('Error reading users:', error);
    return null;
  }
}

/**
 * Verify admin credentials against environment variables
 */
export async function verifyAdminCredentials(username: string, password: string): Promise<AdminUser | null> {
  // Check users.json for multi-user support
  const user = await getUserByUsername(username);
  
  if (user) {
    const isValid = await verifyPassword(password, user.passwordHash);
    if (isValid) {
      return {
        id: user.id,
        username: user.username,
        role: user.role,
        permissions: user.permissions
      };
    }
    return null;
  }

  // Fallback to environment variables for backward compatibility
  const adminUsername = import.meta.env.ADMIN_USERNAME;
  const adminPasswordHash = import.meta.env.ADMIN_PASSWORD_HASH;

  if (!adminUsername || !adminPasswordHash) {
    console.error('Admin credentials not configured');
    return null;
  }

  if (username !== adminUsername) {
    return null;
  }

  const isValid = await verifyPassword(password, adminPasswordHash);
  
  if (!isValid) {
    return null;
  }

  return {
    id: 'admin',
    username: adminUsername,
    role: 'admin',
    permissions: {
      manageUsers: true,
      approveChanges: true,
      news: { create: true, edit: true, delete: true, publish: true },
      events: { create: true, edit: true, delete: true, publish: true },
      posts: { create: true, edit: true, delete: true, publish: true },
      library: { create: true, edit: true, delete: true, publish: true }
    }
  };
}

/**
 * Extract token from Authorization header or cookie
 */
export function extractToken(request: Request): string | null {
  // Check Authorization header
  const authHeader = request.headers.get('Authorization');
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }

  // Check cookie
  const cookieHeader = request.headers.get('Cookie');
  if (cookieHeader) {
    const cookies = cookieHeader.split(';').map(c => c.trim());
    const authCookie = cookies.find(c => c.startsWith('auth_token='));
    if (authCookie) {
      return authCookie.substring('auth_token='.length);
    }
  }

  return null;
}
