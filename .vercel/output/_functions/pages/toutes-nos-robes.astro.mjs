/* empty css                                 */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_QKp-1HJY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_4psRjqUa.mjs';
import { s as sirene, p as princesse, m as minimaliste, b as boheme } from '../chunks/style-boheme-chic_CETITg7n.mjs';
export { renderers } from '../renderers.mjs';

const $$ToutesNosRobes = createComponent(($$result, $$props, $$slots) => {
  const allRobes = [...sirene, ...princesse, ...minimaliste, ...boheme];
  const robes = allRobes.reduce((acc, robe) => {
    if (!acc.some((r) => r.dressName === robe.dressName)) {
      acc.push(robe);
    }
    return acc;
  }, []);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Toutes nos robes de mari\xE9e | Monica Mariage", "description": "D\xE9couvrez notre collection de robes de mari\xE9e, disponibles dans diff\xE9rents styles et tailles. Trouvez la robe parfaite pour votre mariage \xE0 Toulouse." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section style="margin-top: 120px;" class="py-1 bg-gradient-to-b from-white to-[#FDE9E6]"> <!-- <h1 class="font-cursive text-center text-5xl font-semibold text-[#af7749] mb-8">
      Toutes nos robes de mariée
    </h1>
    
    <p class="max-w-3xl mx-auto text-lg text-black leading-relaxed text-center mb-8">
      Découvrez notre collection complète de robes de mariée, conçues pour toutes les silhouettes et styles.
      Que vous cherchiez une robe bohème, sirène ou princesse, vous trouverez ici la tenue parfaite pour votre grand jour.
    </p> --> <div class="flex justify-center px-4"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"> ${robes.map((robe) => renderTemplate`<a${addAttribute(`/robes-de-mariee/${robe.category}/${robe.dressName.replace(/\s+/g, "-").toLowerCase()}`, "href")} class="text-center cursor-pointer"> <div class="relative"> <div class="absolute inset-0 bg-[#af7749] opacity-20 z-10"></div> <img${addAttribute(robe.imageUrl, "src")}${addAttribute(robe.dressName, "alt")} width="300" height="400" class="w-full object-cover rounded max-h-96 transition-transform duration-500 ease-in-out hover:scale-105" loading="lazy"> </div> <p class="mt-2 pb-2 text-[#af7749] font-cursive text-3xl"> ${robe.dressName} </p> <button class="bg-[#af7749] text-white py-1 px-3 sm:py-2 sm:px-4 rounded-lg shadow-lg hover:bg-[#925c36] transition duration-300 text-sm sm:text-base">
Découvrir cette robe
</button> </a>`)} </div> </div> </section> ` })}`;
}, "C:/devmode/mon-projet-astro/src/pages/toutes-nos-robes.astro", void 0);

const $$file = "C:/devmode/mon-projet-astro/src/pages/toutes-nos-robes.astro";
const $$url = "/toutes-nos-robes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ToutesNosRobes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
