import type { APIRoute } from 'astro';
import { extractToken, verifySession } from '../../../lib/auth';

export const GET: APIRoute = async ({ request, locals }) => {
  const token = extractToken(request);

  if (!token) {
    return new Response(
      JSON.stringify({ authenticated: false }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const session = await verifySession(token);

  if (!session) {
    return new Response(
      JSON.stringify({ authenticated: false }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({
      authenticated: true,
      user: locals.user,
      csrfToken: locals.csrfToken
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
