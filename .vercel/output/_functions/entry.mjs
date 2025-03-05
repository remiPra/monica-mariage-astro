import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_D13IwlXA.mjs';
import { manifest } from './manifest_C-wxMVuw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/robes-de-mariee/_category_/_robe_.astro.mjs');
const _page2 = () => import('./pages/robes-de-mariee.astro.mjs');
const _page3 = () => import('./pages/toutes-nos-robes.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/robes-de-mariee/[category]/[robe].astro", _page1],
    ["src/pages/robes-de-mariee/index.astro", _page2],
    ["src/pages/toutes-nos-robes.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ce9a3263-d482-426c-9523-2ab4df9f9096",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
