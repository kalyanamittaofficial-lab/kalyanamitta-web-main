import { e as createComponent, m as maybeRenderHead, h as addAttribute, n as renderScript, r as renderTemplate, f as createAstro, k as renderComponent } from '../_assets/astro/server.CkAL1Q0G.js';
import { $ as $$Layout } from '../_assets/Layout.D7moAORm.js';
import 'clsx';
/* empty css                                 */
import { p as postsData } from '../_assets/posts.DHMr_XRR.js';
import { n as newsData } from '../_assets/news.CzENSPHZ.js';
export { renderers } from '../renderers.mjs';

const dhammapadaQuotes = [
	{
		id: 1,
		sinhala: "ජීවිතයේ හැම දේකටම සිතයි මුල්වෙන්නේ. සිතම තමයි ශ්‍රේෂ්ඨ වෙන්නේ. සිතින්මයි හටගන්නේ. යම් හෙයකින් සිත නරක් කරගෙන යමක් කිව්වොත් හරි, යමක් කෙරුවොත් හරි, ඒකෙන් ලැබෙන දුක් විපාක ඔහුගේ පස්සෙන් ලුහුබඳිනවා. කරත්තේ බැඳලා ඉන්න ගොනාගෙ පස්සෙන් එන රෝදයක් වගෙයි",
		english: "Mind is the forerunner of all states. Mind is their chief; they are mind-made. If one speaks or acts with an impure mind, suffering follows him, as the wheel follows the foot of the ox that draws the cart."
	},
	{
		id: 2,
		sinhala: "ජීවිතයේ හැම දේකටම සිතයි මුල්වෙන්නේ. සිතම තමයි ශ්‍රේෂ්ඨ වෙන්නේ. සිතින්මයි හටගන්නේ. යම් හෙයකින් යහපත් සිතින් යමක් කිව්වොත් හරි, යමක් කෙරුවොත් හරි, ඒකෙන් ලැබෙන සැප විපාක ඔහුගේ පස්සෙන්ම එනවා. තමාව අත්නොහරින හෙවනැල්ලක් වගෙයි",
		english: "Mind is the forerunner of all states. Mind is their chief; they are mind-made. If one speaks or acts with a pure mind, happiness follows him, like a shadow that never leaves."
	},
	{
		id: 3,
		sinhala: "අසවල් කෙනා මට බැන්නා, මට පහර දුන්නා. මාව පරාජය කළා, මගේ දේ පැහැරගත්තා” කිය කියා හිතන්ට ගිහින්, යම් කෙනෙක් ක්‍රෝධයෙන් බැඳිල ගියොත්, ඒ උදවියගේ වෛරය නම් සංසිඳෙන්නේ නෑ.",
		english: "He abused me, he struck me, he defeated me, he robbed me’ ,in those who harbor such thoughts, hatred is not appeased."
	},
	{
		id: 4,
		sinhala: "අසවල් කෙනා මට බැන්නා, මට පහර දුන්නා. මාව පරාජය කළා, මගේ දේ පැහැරගත්තා” කිය කියා නොසිතා, යම් කෙනෙක් ක්‍රෝධයක් ඇතිකරගන්නෙ නැත්නම්, ඒ උදවියගේ වෛරය සංසිඳිලා යනවා.",
		english: "He abused me, he struck me, he defeated me, he robbed me’ ,in those who do not harbor such thoughts, hatred is appeased."
	},
	{
		id: 5,
		sinhala: "මේ ලෝකයේ කවරදාවත් වෛර කිරීමෙන් නම් වෛරය සංසිඳෙන්නේ නෑ. වෛර නොකිරීමෙන් ම යි වෛරය සංසිඳෙන්නේ. මේක මේ ලෝකයේ තිබෙන සනාතන ධර්මයක්.",
		english: "Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased. This is an eternal law."
	},
	{
		id: 6,
		sinhala: "මේ විදිහට කෝලාහල කරගන්ට ගියොත්, අපි ම යි විනාශ වෙන්නේ” කියල මේ කෝලාහල කරන උදවිය දන්නෙ නෑ. නමුත් මේ කෝලාහල වලින් වැනසෙන්නෙ අපි ම යි කියල යම් කෙනෙක් දන්නවා නම්, ඒ තුළින් ම යි කෝලාහල සංසිඳෙන්නේ.",
		english: "Others do not understand that we must perish here; but those who understand this, their quarrels cease at once"
	}
];

const $$DhammapadaQuote = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="dhammapada-bar" class="relative w-full z-10 px-3 sm:px-4 mb-8 opacity-0 scale-95 transition-all duration-700 ease-out"${addAttribute(JSON.stringify(dhammapadaQuotes), "data-quotes")} data-astro-cid-opehws7r> <div class="max-w-6xl mx-auto" data-astro-cid-opehws7r> <!-- Collapsed State: Modern Tab with Gradient --> <div id="quote-tab" class="group mx-auto w-fit relative overflow-hidden bg-gradient-to-r from-monk-900 via-monk-800 to-monk-900 hover:from-monk-800 hover:via-monk-700 hover:to-monk-800 rounded-2xl px-6 sm:px-8 py-3 sm:py-3.5 shadow-lg hover:shadow-xl cursor-pointer transition-all duration-500 border border-monk-700/50 hover:border-monk-600" data-astro-cid-opehws7r> <!-- Shine effect --> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" data-astro-cid-opehws7r></div> <div class="relative flex items-center gap-3" data-astro-cid-opehws7r> <!-- Animated Lotus Icon --> <svg class="w-5 h-5 sm:w-6 sm:h-6 text-monk-50 group-hover:text-white transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-opehws7r> <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" data-astro-cid-opehws7r></path> </svg> <span class="text-sm sm:text-base font-bold text-white whitespace-nowrap tracking-wide group-hover:tracking-wider transition-all duration-300" data-astro-cid-opehws7r>
ධම්මපදය
</span> <svg id="arrow-icon" class="w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-500 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-opehws7r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" data-astro-cid-opehws7r></path> </svg> </div> </div> <!-- Expanded State: Modern Card with Animation --> <div id="quote-content" class="mt-4 bg-gradient-to-br from-white via-gray-50/80 to-white backdrop-blur-xl shadow-2xl rounded-3xl border-2 border-gray-100 opacity-0 max-h-0 overflow-hidden transition-all duration-700 ease-out scale-95" data-astro-cid-opehws7r> <div class="relative px-5 sm:px-8 py-6 sm:py-8" data-astro-cid-opehws7r> <!-- Decorative corner accent --> <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-monk-900/5 to-transparent rounded-bl-full" data-astro-cid-opehws7r></div> <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-monk-900/5 to-transparent rounded-tr-full" data-astro-cid-opehws7r></div> <div class="relative flex items-start gap-4 sm:gap-6" data-astro-cid-opehws7r> <!-- Animated Quote Mark --> <div class="flex-shrink-0 mt-1 animate-float" data-astro-cid-opehws7r> <div class="relative" data-astro-cid-opehws7r> <div class="absolute inset-0 bg-monk-900/10 blur-xl rounded-full" data-astro-cid-opehws7r></div> <svg class="relative w-8 h-8 sm:w-10 sm:h-10 text-monk-900 opacity-40" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-opehws7r> <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" data-astro-cid-opehws7r></path> </svg> </div> </div> <!-- Quote Text with Fade In --> <div class="flex-1 min-w-0" data-astro-cid-opehws7r> <p id="quote-text" class="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-4 font-medium animate-slide-up" data-astro-cid-opehws7r> <!-- Quote will be inserted by JavaScript --> </p> <div class="flex items-center gap-2 text-xs sm:text-sm text-monk-900 font-bold animate-slide-up" style="animation-delay: 0.1s" data-astro-cid-opehws7r> <div class="flex items-center gap-2 px-3 py-1.5 bg-monk-900/5 rounded-full" data-astro-cid-opehws7r> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-opehws7r> <path d="M12 2L2 7l10 5 10-5-10-5z" data-astro-cid-opehws7r></path> </svg> <span data-astro-cid-opehws7r>ධම්මපදය</span> </div> </div> </div> <!-- Modern Close Button --> <button id="close-quote" class="flex-shrink-0 p-2 sm:p-2.5 hover:bg-monk-900/10 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-90 group" aria-label="Close quote" data-astro-cid-opehws7r> <svg class="w-5 h-5 text-gray-400 group-hover:text-monk-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-opehws7r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" data-astro-cid-opehws7r></path> </svg> </button> </div> </div> </div> </div> </div> ${renderScript($$result, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/components/DhammapadaQuote.astro?astro&type=script&index=0&lang.ts")} `;
}, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/components/DhammapadaQuote.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = [...postsData].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );
  const latestNews = [...newsData].filter((news) => !news.hidden).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 8);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DhammapadaQuote", $$DhammapadaQuote, {})}  ${maybeRenderHead()}<div class="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden"> <video id="bg-video" autoplay loop muted playsinline preload="auto" poster="/logo.png" class="min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-60" aria-hidden="true"> <source src="/video/background.mp4" type="video/mp4"> </video> <div class="absolute inset-0 bg-gradient-to-b from-gray-50/40 via-gray-50/50 to-gray-50/70 md:from-gray-50/30 md:via-gray-50/40 md:to-gray-50/60"></div> </div>  <div class="mb-12 md:mb-20 pt-8 md:pt-12 pb-12 md:pb-16 text-center relative"> <div class="space-y-4 md:space-y-6"> <div class="mb-2 md:mb-4 h-10 md:h-14"></div> <h1 class="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-4 md:mb-6 leading-tight px-4"> <span class="block text-gray-900 mb-2">Kalyanamitta</span> </h1> <p class="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
A collection of teachings, reflections, and insights on the path to enlightenment
</p> <div class="flex flex-wrap justify-center gap-3 md:gap-4 pt-4 md:pt-6 px-4"> <a href="/writings" class="group px-6 sm:px-8 py-3 md:py-4 bg-monk-900 hover:bg-monk-800 text-white rounded-xl md:rounded-2xl font-medium shadow-lg transition-all text-sm sm:text-base"> <span class="flex items-center gap-2">
Explore Writings
<svg class="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </span> </a> <a href="/connect" class="px-6 sm:px-8 py-3 md:py-4 bg-white border border-gray-300 hover:border-monk-900 text-gray-700 rounded-xl md:rounded-2xl font-medium hover:shadow-lg transition-all text-sm sm:text-base">
Connect With Us
</a> </div> </div> </div>  <div class="mb-8 md:mb-12"> <div class="flex items-center justify-between mb-6 md:mb-8 px-4"> <div class="flex items-center gap-2 md:gap-4 flex-1"> <h2 class="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 whitespace-nowrap">
Writings
</h2> <div class="flex-1 h-px bg-gradient-to-r from-monk-300/40 to-transparent"></div> </div> <a href="/writings" class="text-monk-900 font-medium hover:text-monk-700 flex items-center gap-1.5 md:gap-2 text-sm md:text-base whitespace-nowrap ml-2">
View All
<svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> <!-- Continuous Train Carousel (Portal Plan: External Links) --> <div class="relative overflow-hidden"> <div class="flex gap-4 md:gap-6 px-4" id="carousel"> ${(allPosts.length > 1 ? allPosts.concat(allPosts) : allPosts).map((post, index) => renderTemplate`<div class="w-[calc(100vw-3rem)] min-w-[calc(100vw-3rem)] sm:min-w-[300px] md:min-w-[420px] flex-shrink-0 flex"> <a${addAttribute(post.url, "href")} target="_blank" rel="noopener noreferrer" class="group flex flex-col w-full bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-200 hover:border-monk-900 transition-all hover:shadow-xl relative"> <div class="space-y-4 flex-1 flex flex-col"> <div class="flex items-start justify-between gap-2"> <div class="flex flex-wrap items-center gap-2"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-monk-900"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path> </svg> ${new Date(post.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </div> ${post.languages && post.languages.map((lang) => renderTemplate`<span${addAttribute(["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm", [
    lang === "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD" ? "bg-gradient-to-r from-amber-100 to-amber-50 text-amber-900" : "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900"
  ]], "class:list")}> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path> </svg> ${lang} </span>`)} </div> <svg class="w-4 h-4 text-monk-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </div> <h3 class="text-lg sm:text-xl md:text-2xl font-display font-semibold text-gray-900 group-hover:text-monk-900 transition-colors line-clamp-2"> ${post.title} </h3> <p class="text-sm sm:text-base text-gray-600 line-clamp-2 flex-1"> ${post.description} </p> <div class="flex items-center gap-2 text-monk-900 font-medium pt-2 mt-auto"> <span class="text-sm">Read more</span> <svg class="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </a> </div>`)} </div> </div> <!-- Pause on Hover Indicator --> <div class="flex justify-center gap-2 mt-4 md:mt-6 px-4"> <p class="text-xs sm:text-sm text-gray-500">Hover to pause</p> </div> </div>  <div class="mb-8 md:mb-12"> <div class="flex items-center justify-between mb-6 md:mb-8 px-4"> <div class="flex items-center gap-2 md:gap-4 flex-1"> <h2 class="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 whitespace-nowrap">
Latest Notices
</h2> <div class="flex-1 h-px bg-gradient-to-r from-monk-300/40 to-transparent"></div> </div> <a href="/news" class="text-monk-900 font-medium hover:text-monk-700 flex items-center gap-1.5 md:gap-2 text-sm md:text-base whitespace-nowrap ml-2">
View All
<svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> <!-- Notices Carousel --> <div class="relative overflow-hidden"> <div class="flex gap-4 md:gap-6 px-4" id="news-carousel"> ${(latestNews.length > 1 ? latestNews.concat(latestNews) : latestNews).map((news) => renderTemplate`<div class="w-[calc(100vw-3rem)] min-w-[calc(100vw-3rem)] sm:min-w-[300px] md:min-w-[420px] flex-shrink-0 flex"> <div class="group flex flex-col w-full bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-200 hover:border-monk-900 transition-all hover:shadow-xl relative news-card-home"${addAttribute(news.id, "data-news-id")}> <div class="space-y-4 flex-1 flex flex-col"> <div class="flex items-start justify-between gap-2"> <div class="flex flex-wrap items-center gap-2"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-monk-900"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path> </svg> ${new Date(news.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </div> <span class="px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm bg-monk-100 text-monk-900"> ${news.category} </span> </div> </div> <h3 class="text-lg sm:text-xl md:text-2xl font-display font-semibold text-gray-900 group-hover:text-monk-900 transition-colors line-clamp-2"> ${news.language === "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD" ? news.titleSinhala : news.title} </h3> <p class="text-sm sm:text-base text-gray-600 line-clamp-2 flex-1"> ${news.language === "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD" ? news.excerptSinhala : news.excerpt} </p> <div class="flex items-center justify-between pt-2 mt-auto"> <span class="text-xs text-gray-500"> ${news.source} </span> <button class="flex items-center gap-2 text-monk-900 font-medium text-sm"> <span>Read more</span> <svg class="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> </div> </div>`)} </div> </div> <!-- Pause on Hover Indicator --> <div class="flex justify-center gap-2 mt-4 md:mt-6 px-4"> <p class="text-xs sm:text-sm text-gray-500">Hover to pause</p> </div> </div> ${renderScript($$result2, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/index.astro", void 0);

const $$file = "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
