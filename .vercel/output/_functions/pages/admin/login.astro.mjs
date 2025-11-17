import { e as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../_assets/astro/server.CkAL1Q0G.js';
import { $ as $$Layout } from '../../_assets/Layout.sRuhOru5.js';
export { renderers } from '../../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin Login - Kalyanamitta" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 px-4"> <div class="max-w-md w-full"> <div class="bg-white shadow-2xl rounded-2xl p-8 border border-amber-100"> <div class="text-center mb-8"> <h1 class="text-3xl font-bold text-amber-900 mb-2">Admin Login</h1> <p class="text-gray-600">Kalyanamitta Website Management</p> </div> <form id="loginForm" class="space-y-6"> <div> <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
Username
</label> <input type="text" id="username" name="username" required autocomplete="username" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition" placeholder="Enter your username"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
Password
</label> <input type="password" id="password" name="password" required autocomplete="current-password" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition" placeholder="Enter your password"> </div> <div id="errorMessage" class="hidden"> <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"> <span id="errorText"></span> </div> </div> <button type="submit" id="loginButton" class="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
Sign In
</button> </form> <div class="mt-6 text-center"> <a href="/" class="text-sm text-amber-600 hover:text-amber-700 font-medium">
← Back to Website
</a> </div> </div> <div class="mt-6 text-center text-sm text-gray-600"> <p>🔒 Secured with JWT authentication</p> </div> </div> </div> ` })} ${renderScript($$result, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/admin/login.astro?astro&type=script&index=0&lang.ts")} `;
}, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/admin/login.astro", void 0);

const $$file = "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
