import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';

const JWT_SECRET = new TextEncoder().encode(
  import.meta.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
);

const SESSION_DURATION = 8 * 60 * 60; // 8 hours in seconds

export interface AdminUser {
  id: string;
  username: string;
  role: 'admin';
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
 * Verify admin credentials against environment variables
 */
export async function verifyAdminCredentials(username: string, password: string): Promise<AdminUser | null> {
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
    role: 'admin'
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
