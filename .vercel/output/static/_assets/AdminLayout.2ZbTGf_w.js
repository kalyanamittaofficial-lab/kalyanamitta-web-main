import { e as createComponent, f as createAstro, h as addAttribute, o as renderHead, p as renderSlot, r as renderTemplate } from './astro/server.CrvHwmaT.js';
import 'clsx';
/* empty css                            */

const $$Astro = createAstro();
const $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $ };
