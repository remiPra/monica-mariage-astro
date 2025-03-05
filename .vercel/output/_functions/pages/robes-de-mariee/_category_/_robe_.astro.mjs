/* empty css                                       */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_QKp-1HJY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_4psRjqUa.mjs';
import { s as sirene, p as princesse, m as minimaliste, b as boheme } from '../../../chunks/style-boheme-chic_CETITg7n.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const paths = allRobes.map((robe) => ({
    params: {
      category: robe.category,
      // Utilisation de la catégorie comme paramètre
      robe: slugify(robe.dressName)
      // Création du slug de la robe
    }
  }));
  return { paths };
}
const $$robe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$robe;
  const slugify2 = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
  };
  const allRobes2 = [...sirene, ...princesse, ...minimaliste, ...boheme];
  const { category, robe } = Astro2.params;
  const robeData = allRobes2.find(
    (r) => r.category === category && slugify2(r.dressName) === robe
  );
  if (!robeData) {
    throw new Error(`Robe non trouv\xE9e ! Cat\xE9gorie: ${category}, Slug: ${robe}`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${robeData.dressName} - Monica Mariage`, "description": `D\xE9couvrez la robe ${robeData.dressName}, disponible chez Monica Mariage Toulouse.` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 bg-gradient-to-b from-white to-[#FDE9E6]"> <div class="max-w-3xl mx-auto text-center"> <h1 class="font-cursive text-5xl font-semibold text-[#af7749] mb-4"> ${robeData.dressName} </h1> <img${addAttribute(robeData.imageUrl, "src")}${addAttribute(robeData.dressName, "alt")} class="w-full max-h-[500px] object-cover rounded-lg shadow-lg"> <p class="mt-4 text-lg text-black"> ${robeData.description || "D\xE9couvrez cette robe de mari\xE9e \xE9l\xE9gante et unique."} </p> <a href="/prendre-rendez-vous"> <button class="mt-6 bg-[#af7749] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#925c36] transition duration-300">
Prendre rendez-vous
</button> </a> </div> </section> ` })}`;
}, "C:/devmode/mon-projet-astro/src/pages/robes-de-mariee/[category]/[robe].astro", void 0);

const $$file = "C:/devmode/mon-projet-astro/src/pages/robes-de-mariee/[category]/[robe].astro";
const $$url = "/robes-de-mariee/[category]/[robe]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$robe,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
