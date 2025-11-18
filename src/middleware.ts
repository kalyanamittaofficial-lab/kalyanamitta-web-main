import { defineMiddleware } from 'astro:middleware';
import { verifySession, extractToken } from './lib/auth';

// Rate limiting store (in-memory, consider Redis for production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Define protected routes
const ADMIN_ROUTES = ['/admin', '/api/admin'];
const PUBLIC_ROUTES = ['/', '/connect', '/events', '/finder', '/news', '/writings'];
const EXCLUDED_ADMIN_ROUTES = ['/admin/login'];

function isAdminRoute(pathname: string): boolean {
  // Exclude login page from authentication
  if (EXCLUDED_ADMIN_ROUTES.some(route => pathname === route || pathname.startsWith(route + '?'))) {
    return false;
  }
  return ADMIN_ROUTES.some(route => pathname.startsWith(route));
}

function getClientIP(request: Request): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

function checkRateLimit(ip: string, limit: number = 100, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, url, cookies, redirect } = context;
  const pathname = url.pathname;

  // Add security headers
  const response = await (async () => {
    // Rate limiting
    const clientIP = getClientIP(request);
    const isApiRoute = pathname.startsWith('/api/');
    
    if (isApiRoute) {
      const allowed = checkRateLimit(clientIP, 50, 60000); // 50 requests per minute for API
      if (!allowed) {
        return new Response(JSON.stringify({ error: 'Too many requests' }), {
          status: 429,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Authentication check for admin routes
    if (isAdminRoute(pathname)) {
      const token = extractToken(request);

      if (!token) {
        if (pathname.startsWith('/api/')) {
          return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
          });
        }
        return redirect('/admin/login');
      }

      const session = await verifySession(token);

      if (!session) {
        if (pathname.startsWith('/api/')) {
          return new Response(JSON.stringify({ error: 'Invalid or expired token' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
          });
        }
        cookies.delete('auth_token', { path: '/' });
        return redirect('/admin/login');
      }

      // CSRF protection for state-changing operations
      if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method)) {
        const csrfToken = request.headers.get('X-CSRF-Token');
        if (!csrfToken || csrfToken !== session.csrfToken) {
          return new Response(JSON.stringify({ error: 'Invalid CSRF token' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }

      // Attach user to context with permissions
      context.locals.user = {
        id: session.id,
        username: session.username,
        role: session.role,
        permissions: session.permissions
      };
      context.locals.csrfToken = session.csrfToken;
    }

    return next();
  })();

  // Add security headers to all responses
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.vercel-insights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' ws: wss: https://cdn.vercel-insights.com; frame-ancestors 'none';"
  );

  return response;
});
