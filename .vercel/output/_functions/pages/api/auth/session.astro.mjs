import { e as extractToken, v as verifySession } from '../../../_assets/auth.HfC1xtiP.js';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ request, locals }) => {
  const token = extractToken(request);
  if (!token) {
    return new Response(
      JSON.stringify({ authenticated: false }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
  const session = await verifySession(token);
  if (!session) {
    return new Response(
      JSON.stringify({ authenticated: false }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
  return new Response(
    JSON.stringify({
      authenticated: true,
      user: locals.user,
      csrfToken: locals.csrfToken
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
