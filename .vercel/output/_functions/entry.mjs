import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './_assets/_@astrojs-ssr-adapter.BLCzDK6K.js';
import { manifest } from './manifest_uM4jMGGT.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/dashboard.astro.mjs');
const _page2 = () => import('./pages/admin/events.astro.mjs');
const _page3 = () => import('./pages/admin/library.astro.mjs');
const _page4 = () => import('./pages/admin/login.astro.mjs');
const _page5 = () => import('./pages/admin/news.astro.mjs');
const _page6 = () => import('./pages/admin/posts.astro.mjs');
const _page7 = () => import('./pages/api/admin/events.astro.mjs');
const _page8 = () => import('./pages/api/admin/library.astro.mjs');
const _page9 = () => import('./pages/api/admin/news.astro.mjs');
const _page10 = () => import('./pages/api/admin/posts.astro.mjs');
const _page11 = () => import('./pages/api/auth/login.astro.mjs');
const _page12 = () => import('./pages/api/auth/logout.astro.mjs');
const _page13 = () => import('./pages/api/auth/session.astro.mjs');
const _page14 = () => import('./pages/connect.astro.mjs');
const _page15 = () => import('./pages/events.astro.mjs');
const _page16 = () => import('./pages/finder.astro.mjs');
const _page17 = () => import('./pages/news.astro.mjs');
const _page18 = () => import('./pages/writings.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/dashboard.astro", _page1],
    ["src/pages/admin/events.astro", _page2],
    ["src/pages/admin/library.astro", _page3],
    ["src/pages/admin/login.astro", _page4],
    ["src/pages/admin/news.astro", _page5],
    ["src/pages/admin/posts.astro", _page6],
    ["src/pages/api/admin/events.ts", _page7],
    ["src/pages/api/admin/library.ts", _page8],
    ["src/pages/api/admin/news.ts", _page9],
    ["src/pages/api/admin/posts.ts", _page10],
    ["src/pages/api/auth/login.ts", _page11],
    ["src/pages/api/auth/logout.ts", _page12],
    ["src/pages/api/auth/session.ts", _page13],
    ["src/pages/connect.astro", _page14],
    ["src/pages/events.astro", _page15],
    ["src/pages/finder.astro", _page16],
    ["src/pages/news.astro", _page17],
    ["src/pages/writings.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "b5866f46-242f-4e01-896a-323f1d892505",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
