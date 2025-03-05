/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_QKp-1HJY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_4psRjqUa.mjs';
import { s as sirene, p as princesse, m as minimaliste, b as boheme } from '../chunks/style-boheme-chic_CETITg7n.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allRobes = [...sirene, ...princesse, ...minimaliste, ...boheme];
  const { category, robe } = Astro2.params;
  const robeData = allRobes.find(
    (r) => r.category === category && r.dressName.replace(/\s+/g, "-").toLowerCase() === robe
  );
  if (!robeData) {
    throw new Error("Robe non trouv\xE9e !");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${robeData.dressName} - Monica Mariage`, "description": `D\xE9couvrez la robe ${robeData.dressName}, disponible chez Monica Mariage Toulouse.` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 bg-gradient-to-b from-white to-[#FDE9E6]"> <div class="max-w-3xl mx-auto text-center"> <h1 class="font-cursive text-5xl font-semibold text-[#af7749] mb-4"> ${robeData.dressName} </h1> <img${addAttribute(robeData.imageUrl, "src")}${addAttribute(robeData.dressName, "alt")} class="w-full max-h-[500px] object-cover rounded-lg shadow-lg"> <p class="mt-4 text-lg text-black"> ${robeData.description || "D\xE9couvrez cette robe de mari\xE9e \xE9l\xE9gante et unique."} </p> <a href="/prendre-rendez-vous"> <button class="mt-6 bg-[#af7749] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#925c36] transition duration-300">
Prendre rendez-vous
</button> </a> </div> </section> ` })}`;
}, "C:/devmode/mon-projet-astro/src/pages/robes-de-mariee/index.astro", void 0);

const $$file = "C:/devmode/mon-projet-astro/src/pages/robes-de-mariee/index.astro";
const $$url = "/robes-de-mariee";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
