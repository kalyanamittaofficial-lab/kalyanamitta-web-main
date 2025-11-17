import { e as createComponent, f as createAstro, h as addAttribute, n as renderScript, r as renderTemplate, m as maybeRenderHead, o as renderTransition, k as renderComponent, p as renderHead, q as renderSlot } from './astro/server.CkAL1Q0G.js';
/* empty css                            */
import 'clsx';

const $$Astro = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sticky top-0 z-50 w-full bg-transparent pb-2"> <div class="w-full px-3 pt-3"> <nav class="w-full max-w-6xl mx-auto bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg" data-astro-transition-persist="main-nav"${addAttribute(renderTransition($$result, "5lkratfz", "", "main-nav"), "data-astro-transition-scope")}> <div class="px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16 sm:h-20"> <!-- Logo --> <div class="flex-shrink-0 min-w-0"> <a href="/" class="flex items-center gap-2 sm:gap-3"> <img src="/logo.png" alt="Kalyanamitta Logo" class="w-24 h-24 sm:w-28 sm:h-28 object-contain flex-shrink-0"> <span class="text-2xl sm:text-3xl font-display font-bold text-monk-900 truncate">
Kalyanamitta
</span> </a> </div> <!-- Desktop Navigation --> <div class="hidden md:flex md:items-center md:gap-3"> <div class="flex items-center space-x-1"> <a href="/" class="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-monk-900 hover:bg-gray-100 rounded-xl transition-colors">
Home
</a> <a href="/finder" class="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-monk-900 hover:bg-gray-100 rounded-xl transition-colors">
Finder
</a> <a href="/writings" class="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-monk-900 hover:bg-gray-100 rounded-xl transition-colors">
Writings
</a> <a href="/news" class="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-monk-900 hover:bg-gray-100 rounded-xl transition-colors">
Notice
</a> <a href="/events" class="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-monk-900 hover:bg-gray-100 rounded-xl transition-colors">
Events
</a> <a href="/connect" class="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-monk-900 hover:bg-gray-100 rounded-xl transition-colors">
Connect
</a> </div> <!-- Language Switcher --> <div class="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-xl border border-gray-200"> <span id="lang-sin-desktop" class="text-xs font-semibold text-monk-900 cursor-pointer transition-all">සිං</span> <button id="lang-toggle-desktop" class="relative w-12 h-6 bg-monk-900 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-monk-700 focus:ring-offset-2" role="switch" aria-checked="false" aria-label="Toggle language"> <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out"></span> </button> <span id="lang-eng-desktop" class="text-xs font-semibold text-gray-500 cursor-pointer transition-all">Eng</span> </div> </div> <!-- Mobile menu button --> <div class="md:hidden flex-shrink-0"> <button id="mobile-menu-button" type="button" class="p-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-colors" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only">Open menu</span> <svg id="menu-icon" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="close-icon" class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> </div> </nav> </div> </div> <!-- Mobile menu (Sidebar) --> <div class="fixed inset-0 z-[60] md:hidden hidden" id="mobile-menu-overlay"> <div class="fixed inset-0 bg-black/50" id="mobile-menu-backdrop"></div> <div class="fixed top-0 right-0 bottom-0 w-72 max-w-[80vw] bg-white shadow-2xl transform translate-x-full transition-transform duration-300" id="mobile-menu"> <div class="flex flex-col h-full"> <div class="flex items-center justify-between p-6 border-b border-gray-200"> <div class="flex items-center gap-3"> <span class="text-2xl font-display font-bold text-monk-900">Kalyanamitta</span> </div> <button id="mobile-menu-close" class="p-2 rounded-lg hover:bg-gray-100 transition-colors"> <svg class="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <nav class="flex-1 p-6 space-y-2 overflow-y-auto"> <a href="/" class="block px-5 py-4 rounded-xl text-base font-medium text-gray-700 hover:text-monk-900 hover:bg-gray-100 transition-colors"> <div class="flex items-center gap-3"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path> </svg>
Home
</div> </a> <a href="/finder" class="block px-5 py-4 rounded-xl text-base font-medium text-gray-700 hover:text-monk-900 hover:bg-gray-100 transition-colors"> <div class="flex items-center gap-3"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <circle cx="11" cy="11" r="8"></circle> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-4.35-4.35"></path> </svg>
Finder
</div> </a> <a href="/writings" class="block px-5 py-4 rounded-xl text-base font-medium text-gray-700 hover:text-monk-900 hover:bg-gray-100 transition-colors"> <div class="flex items-center gap-3"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg>
Writings
</div> </a> <a href="/news" class="block px-5 py-4 rounded-xl text-base font-medium text-gray-700 hover:text-monk-900 hover:bg-gray-100 transition-colors"> <div class="flex items-center gap-3"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> </svg>
Notice
</div> </a> <a href="/events" class="block px-5 py-4 rounded-xl text-base font-medium text-gray-700 hover:text-monk-900 hover:bg-gray-100 transition-colors"> <div class="flex items-center gap-3"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path> </svg>
Events
</div> </a> <a href="/connect" class="block px-5 py-4 rounded-xl text-base font-medium text-gray-700 hover:text-monk-900 hover:bg-gray-100 transition-colors"> <div class="flex items-center gap-3"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path> </svg>
Connect
</div> </a> <!-- Language Switcher for Mobile --> <div class="pt-4 mt-4 border-t border-gray-200"> <div class="px-5 py-3"> <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Language</p> <div class="flex items-center justify-between gap-3 p-3 bg-gray-50 rounded-xl"> <span id="lang-sin-mobile" class="text-sm font-semibold text-monk-900 cursor-pointer transition-all">සිංහල</span> <button id="lang-toggle-mobile" class="relative w-14 h-7 bg-monk-900 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-monk-700 focus:ring-offset-2" role="switch" aria-checked="false" aria-label="Toggle language"> <span class="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out"></span> </button> <span id="lang-eng-mobile" class="text-sm font-semibold text-gray-500 cursor-pointer transition-all">English</span> </div> </div> </div> </nav> <div class="p-6 border-t border-gray-200"> <p class="text-xs text-center text-gray-500">
May all beings be happy and free
</p> </div> </div> </div> </div> ${renderScript($$result, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/components/Header.astro", "self");

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-white/90 border-t border-gray-200 mt-auto" data-astro-transition-persist="main-footer"${addAttribute(renderTransition($$result, "tvayyljk", "", "main-footer"), "data-astro-transition-scope")}> <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="text-center space-y-6"> <div class="flex items-center justify-center"> <img src="/logo.png" alt="Kalyanamitta Logo" class="w-32 h-32 sm:w-36 sm:h-36 object-contain"> </div> <p class="text-sm text-gray-600 max-w-md mx-auto">
May all beings be happy, peaceful, and free from suffering
</p> <div class="flex justify-center gap-6 text-xs text-gray-500"> <span>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Kalyanamitta</span> <span>•</span> <span>All Rights Reserved</span> </div> </div> </div> </footer>`;
}, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/components/Footer.astro", "self");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$WelcomeModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div id="welcome-modal" class="welcome-modal-overlay" data-astro-cid-tmdbozm2> <div class="welcome-modal-container" data-astro-cid-tmdbozm2> <div class="welcome-modal-content" data-astro-cid-tmdbozm2> <!-- Sticky Header with Close Button and Language Toggle --> <div class="welcome-modal-header" data-astro-cid-tmdbozm2> <!-- Close Button --> <button id="close-welcome-modal" class="welcome-modal-close" aria-label="Close welcome message" data-astro-cid-tmdbozm2> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-tmdbozm2> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-tmdbozm2></line> <line x1="6" y1="6" x2="18" y2="18" data-astro-cid-tmdbozm2></line> </svg> </button> <!-- Language Toggle --> <div class="language-toggle" data-astro-cid-tmdbozm2> <button id="lang-en" class="lang-btn" data-astro-cid-tmdbozm2>English</button> <button id="lang-si" class="lang-btn active" data-astro-cid-tmdbozm2>\u0DC3\u0DD2\u0D82\u0DC4\u0DBD</button> </div> </div> <!-- Scrollable Body --> <div class="welcome-modal-body" data-astro-cid-tmdbozm2> <!-- English Content --> <div id="content-en" class="welcome-content" data-astro-cid-tmdbozm2> <h2 class="welcome-header" data-astro-cid-tmdbozm2>Welcome to Our Launch!</h2> <p class="welcome-team" data-astro-cid-tmdbozm2>The Kalyanamitta Team -</p> <h3 class="welcome-subheader" data-astro-cid-tmdbozm2>The Start of Our Journey</h3> <p class="welcome-text" data-astro-cid-tmdbozm2>
It is with great joy that we welcome you to the Kalyanamitta. Our mission is to create a centralized, reliable, and easily accessible space for sharing Dharma.
</p> <p class="welcome-text" data-astro-cid-tmdbozm2>
This is our very first step. As you explore the site, you might encounter small bugs or issues. Please understand that this is an initial launch, and we are actively working to improve and enhance this space every day. Your patience and understanding are deeply appreciated.
</p> <p class="welcome-text" data-astro-cid-tmdbozm2>
Thank you for joining us on this journey. In the future, we hope to bring opportunities for you to join as "Kalyanamittas" (virtuous friends) and volunteer with us.
</p> <p class="welcome-closing" data-astro-cid-tmdbozm2>Be with us. May you be well and happy!</p> <p class="welcome-sadhu" data-astro-cid-tmdbozm2>S\u0101dhu! S\u0101dhu!! S\u0101dhu!!!</p> </div> <!-- Sinhala Content --> <div id="content-si" class="welcome-content active" data-astro-cid-tmdbozm2> <h2 class="welcome-header" data-astro-cid-tmdbozm2>\u0DC3\u0DCF\u0DAF\u0DBB\u0DBA\u0DD9\u0DB1\u0DCA \u0DB4\u0DD2\u0DC5\u0DD2\u0D9C\u0DB1\u0DD2\u0DB8\u0DD4!</h2> <p class="welcome-team" data-astro-cid-tmdbozm2>\u0D9A\u0DBD\u0DCA\u200D\u0DBA\u0DCF\u0DAB\u0DB8\u0DD2\u0DAD\u0DCA\u0DAD \u0D9A\u0DAB\u0DCA\u0DA9\u0DCF\u0DBA\u0DB8 -</p> <h3 class="welcome-subheader" data-astro-cid-tmdbozm2>\u0D85\u0DB4\u0D9C\u0DDA \u0D9C\u0DB8\u0DB1\u0DDA \u0D86\u0DBB\u0DB8\u0DCA\u0DB7\u0DBA\u0DBA\u0DD2</h3> <p class="welcome-text" data-astro-cid-tmdbozm2>
\u0D9A\u0DBD\u0DCA\u200D\u0DBA\u0DCF\u0DAB\u0DB8\u0DD2\u0DAD\u0DCA\u0DAD \u0DC0\u0DD9\u0DAD \u0D94\u0DB6\u0DC0 \u0DC3\u0DCF\u0DAF\u0DBB\u0DBA\u0DD9\u0DB1\u0DCA \u0DB4\u0DD2\u0DC5\u0DD2\u0D9C\u0DD0\u0DB1\u0DD3\u0DB8\u0DA7 \u0DBD\u0DD0\u0DB6\u0DD3\u0DB8 \u0DB8\u0DC4\u0DAD\u0DCA \u0DC3\u0DAD\u0DD4\u0DA7\u0D9A\u0DD2. \u0D85\u0DB4\u0D9C\u0DDA \u0D85\u0DBB\u0DB8\u0DD4\u0DAB \u0DC0\u0DB1\u0DCA\u0DB1\u0DDA \u0DB0\u0DBB\u0DCA\u0DB8 \u0DAF\u0DCF\u0DB1\u0DBA \u0DC3\u0DB3\u0DC4\u0DCF \u0DB8\u0DB0\u0DCA\u200D\u0DBA\u0D9C\u0DAD, \u0DC0\u0DD2\u0DC1\u0DCA\u0DC0\u0DCF\u0DC3\u0DB1\u0DD3\u0DBA \u0DC3\u0DC4 \u0DB4\u0DC4\u0DC3\u0DD4\u0DC0\u0DD9\u0DB1\u0DCA \u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1 \u0DC0\u0DD2\u0DBA \u0DC4\u0DD0\u0D9A\u0DD2 \u0DC3\u0DCA\u0DAE\u0DCF\u0DB1\u0DBA\u0D9A\u0DCA \u0DB1\u0DD2\u0DBB\u0DCA\u0DB8\u0DCF\u0DAB\u0DBA \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DBA\u0DD2.
</p> <p class="welcome-text" data-astro-cid-tmdbozm2>
\u0DB8\u0DD9\u0DBA \u0D85\u0DB4\u0D9C\u0DDA \u0DB4\u0DC5\u0DB8\u0DD4 \u0DB4\u0DD2\u0DBA\u0DC0\u0DBB\u0DBA\u0DD2. \u0D94\u0DB6 \u0DB8\u0DD9\u0DB8 \u0DC0\u0DD9\u0DB6\u0DCA \u0D85\u0DA9\u0DC0\u0DD2\u0DBA \u0DB7\u0DCF\u0DC0\u0DD2\u0DAD\u0DCF \u0D9A\u0DBB\u0DB1 \u0DC0\u0DD2\u0DA7 \u0D9A\u0DD4\u0DA9\u0DCF \u0DAF\u0DDD\u0DC2 \u0DC4\u0DDD \u0D9C\u0DD0\u0DA7\u0DC5\u0DD4 \u0D87\u0DAD\u0DD2 \u0DC0\u0DD2\u0DBA \u0DC4\u0DD0\u0D9A. \u0D85\u0DB4 \u0DAD\u0DC0\u0DB8\u0DAD\u0DCA \u0DB8\u0DD9\u0DB8 \u0D85\u0DA9\u0DC0\u0DD2\u0DBA \u0DC0\u0DD0\u0DA9\u0DD2\u0DAF\u0DD2\u0DBA\u0DD4\u0DAB\u0DD4 \u0D9A\u0DBB\u0DB8\u0DD2\u0DB1\u0DCA \u0DC3\u0DD2\u0DA7\u0DD2\u0DB1 \u0D85\u0DAD\u0DBB, \u0D94\u0DB6\u0D9C\u0DDA \u0D85\u0DC0\u0DB6\u0DDD\u0DB0\u0DBA \u0DC3\u0DC4 \u0D89\u0DC0\u0DC3\u0DD3\u0DB8 \u0D85\u0DB4\u0DD2 \u0DB6\u0DD9\u0DC4\u0DD9\u0DC0\u0DD2\u0DB1\u0DCA \u0D85\u0D9C\u0DBA \u0D9A\u0DBB\u0DB8\u0DD4.
</p> <p class="welcome-text" data-astro-cid-tmdbozm2>
\u0DB8\u0DD9\u0DB8 \u0D9C\u0DB8\u0DB1\u0DA7 \u0D85\u0DB4 \u0DC4\u0DCF \u0D91\u0D9A\u0DCA\u0DC0\u0DD3\u0DB8 \u0D9C\u0DD0\u0DB1 \u0D94\u0DB6\u0DA7 \u0DC3\u0DCA\u0DAD\u0DD6\u0DAD\u0DD2\u0DBA\u0DD2. "\u0D9A\u0DBD\u0DCA\u200D\u0DBA\u0DCF\u0DAB\u0DB8\u0DD2\u0DAD\u0DCA\u0DAD" \u0DBD\u0DD9\u0DC3 \u0DC3\u0DCA\u0DC0\u0DDA\u0DA0\u0DCA\u0DA1\u0DCF\u0DC0\u0DD9\u0DB1\u0DCA \u0D85\u0DB4 \u0DC4\u0DCF \u0DC3\u0DB8\u0DCA\u0DB6\u0DB1\u0DCA\u0DB0 \u0DC0\u0DD3\u0DB8\u0DA7 \u0D94\u0DB6\u0DA7\u0DAD\u0DCA \u0D85\u0DB1\u0DCF\u0D9C\u0DAD\u0DBA\u0DDA\u0DAF\u0DD3 \u0D85\u0DC0\u0DC3\u0DCA\u0DAE\u0DCF\u0DC0\u0DB1\u0DCA \u0D8B\u0DAF\u0DCF \u0D9A\u0DBB \u0DAF\u0DD3\u0DB8\u0DA7 \u0D85\u0DB4\u0DD2 \u0DB6\u0DBD\u0DCF\u0DB4\u0DDC\u0DBB\u0DDC\u0DAD\u0DCA\u0DAD\u0DD4 \u0DC0\u0DD9\u0DB8\u0DD4.
</p> <p class="welcome-closing" data-astro-cid-tmdbozm2>\u0D85\u0DB4 \u0DC3\u0DB8\u0D9F \u0DBB\u0DD0\u0DB3\u0DD3 \u0DC3\u0DD2\u0DA7\u0DD2\u0DB1\u0DCA\u0DB1. \u0D94\u0DB6 \u0DC3\u0DD0\u0DB8\u0DA7 \u0DAD\u0DD9\u0DBB\u0DD4\u0DC0\u0DB1\u0DCA \u0DC3\u0DBB\u0DAB\u0DBA\u0DD2!</p> <p class="welcome-sadhu" data-astro-cid-tmdbozm2>\u0DC3\u0DCF\u0DAF\u0DD4! \u0DC3\u0DCF\u0DAF\u0DD4!! \u0DC3\u0DCF\u0DAF\u0DD4!!!</p> </div> </div> </div> </div> </div>  <script>
  document.addEventListener('DOMContentLoaded', function() {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedKalyanamitta');
    const modal = document.getElementById('welcome-modal');
    const closeBtn = document.getElementById('close-welcome-modal');
    const langEnBtn = document.getElementById('lang-en');
    const langSiBtn = document.getElementById('lang-si');
    const contentEn = document.getElementById('content-en');
    const contentSi = document.getElementById('content-si');

    // Show modal if first visit
    if (!hasVisited && modal) {
      setTimeout(() => {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }, 500);
    }

    // Close modal function
    function closeModal() {
      if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        localStorage.setItem('hasVisitedKalyanamitta', 'true');
      }
    }

    // Close button event
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    // Close on overlay click
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal?.classList.contains('show')) {
        closeModal();
      }
    });

    // Language toggle functionality
    if (langEnBtn && langSiBtn && contentEn && contentSi) {
      langEnBtn.addEventListener('click', () => {
        langEnBtn.classList.add('active');
        langSiBtn.classList.remove('active');
        contentEn.classList.add('active');
        contentSi.classList.remove('active');
      });

      langSiBtn.addEventListener('click', () => {
        langSiBtn.classList.add('active');
        langEnBtn.classList.remove('active');
        contentSi.classList.add('active');
        contentEn.classList.remove('active');
      });
    }
  });
<\/script>`])), maybeRenderHead());
}, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/components/WelcomeModal.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" class="h-full scroll-smooth"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Buddhist wisdom and teachings for spiritual growth and enlightenment. Explore Dharma wisdom in Sinhala and English."><meta name="keywords" content="Buddhism, Dharma, meditation, spiritual teachings, Buddhist wisdom, Kalyanamitta, සිංහල"><meta name="author" content="Kalyanamitta"><meta name="robots" content="index, follow"><meta name="theme-color" content="#8E050F"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:title" content="Kalyanamitta - Buddhist Wisdom & Teachings"><meta property="og:description" content="Buddhist wisdom and teachings for spiritual growth and enlightenment"><meta property="og:image" content="/logo.png"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Kalyanamitta - Buddhist Wisdom & Teachings"><meta name="twitter:description" content="Buddhist wisdom and teachings for spiritual growth and enlightenment"><title>Kalyanamitta - Buddhist Wisdom & Teachings</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}<link rel="icon" type="image/png" href="/logo.png"><link rel="apple-touch-icon" href="/logo.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&family=Noto+Sans+Sinhala:wght@400;500;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">${renderHead()}</head> <body class="h-full flex flex-col bg-gray-50 text-gray-900 font-sans antialiased"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"${addAttribute(renderTransition($$result, "6xbvbalr", "", "page-content"), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "WelcomeModal", $$WelcomeModal, {})} ${renderScript($$result, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/layouts/Layout.astro", "self");

export { $$Layout as $ };
