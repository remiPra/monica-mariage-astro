/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate, a as createAstro } from '../chunks/astro/server_QKp-1HJY.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$Layout } from '../chunks/Layout_4psRjqUa.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$VideoSlider = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    {
      desktopVideo: "/videos/video1.mp4",
      poster: "https://res.cloudinary.com/dkbsvrpdc/image/upload/v1741095968/images_optimisees/eg6uel7edyjaa2dz4u4n.jpg",
      title: "Nouvelle Collection",
      link: "/robes-de-mariee"
    },
    {
      desktopVideo: "/videos/video2.mp4",
      poster: "https://res.cloudinary.com/dkbsvrpdc/image/upload/v1741095968/images_optimisees/eg6uel7edyjaa2dz4u4n.jpg",
      title: "D\xE9stockage",
      link: "/promo"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative h-screen mt-20 overflow-hidden" data-astro-cid-dsnbvahf> <div class="absolute inset-0 w-full h-full" data-astro-cid-dsnbvahf> <video class="absolute inset-0 w-full h-full object-cover" autoplay muted loop playsinline preload="metadata"${addAttribute(slides[0].poster, "poster")} data-astro-cid-dsnbvahf> <source${addAttribute(slides[0].desktopVideo, "src")} type="video/mp4" data-astro-cid-dsnbvahf> </video> </div> <div class="absolute inset-0 bg-black/40" data-astro-cid-dsnbvahf></div> <div class="absolute inset-0 flex flex-col items-center justify-center space-y-6 md:space-y-12 text-center" data-astro-cid-dsnbvahf> <p class="text-4xl md:text-6xl text-white font-bold animate-fade-in" data-astro-cid-dsnbvahf> ${slides[0].title} </p> <a href="#categorie" class="flex flex-col items-center animate-bounce cursor-pointer" data-astro-cid-dsnbvahf> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:chevron-down", "size": "40", "class": "text-white", "data-astro-cid-dsnbvahf": true })} <span class="text-2xl md:text-3xl font-medium mt-1 bg-gradient-to-r from-white to-[#af7749] bg-clip-text text-transparent" data-astro-cid-dsnbvahf>
Voir la galerie
</span> </a> <a${addAttribute(slides[0].link, "href")} data-astro-cid-dsnbvahf> <button class="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#8B6F5C] to-[#9a7d6a] text-white font-medium rounded-3xl hover:from-[#7c6351] hover:to-[#8B6F5C] transition-all duration-200 shadow-md min-w-[160px] md:min-w-[200px]" data-astro-cid-dsnbvahf>
Découvrez nos robes
</button> </a> </div> </div> `;
}, "C:/devmode/mon-projet-astro/src/components/VideoSlider.astro", void 0);

const $$Astro$1 = createAstro();
const $$MonicamariagePart1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MonicamariagePart1;
  return renderTemplate`${maybeRenderHead()}<section class="text-center mt-[100px] py-12 bg-gradient-to-b from-white to-[#FDE9E6]"> <!-- Titre principal --> <h1 class="font-cursive text-5xl text-[#af7749] mb-4">
Monica Mariage Toulouse
</h1> <!-- Icône robe de mariée optimisée --> <div class="w-36 mx-auto mb-4"> <img src="/image/iconerobe.png" alt="Robes de mariée icon" width="144" height="144" class="rounded-full" loading="lazy"> </div> <!-- Texte d’introduction --> <p class="max-w-3xl mx-auto text-lg text-black leading-relaxed mb-8">
La boutique de mariage est conçue comme un showroom privé à Seysses près
      de Toulouse. Nous sommes heureux de vous accompagner pour la confection
      des robes de mariée sur-mesure et personnalisable jusqu'à la taille 44.
      Le tarif d'une robe de mariée sur-mesure se situe entre 750€ et 1850€.
</p> <!-- Bouton vers les robes de mariée --> <a href="/robes-de-mariee" class="bg-[#af7749] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#925c36] transition duration-300">
Voir nos robes de mariées
</a> </section>`;
}, "C:/devmode/mon-projet-astro/src/components/MonicamariagePart1.astro", void 0);

const $$MonicamariagePart2 = createComponent(($$result, $$props, $$slots) => {
  const bestSellers = [
    {
      src: "/images/robes/gallery/mobile/monica-mariage-robe-de-mariee-princesse-emile-5-gallery-mobile.webp",
      alt: "Robe de mari\xE9e Emil - Monica Mariage Toulouse",
      label: "Emil",
      link: "/robes-de-mariee/forme-princesse/dress/5"
    },
    {
      src: "/images/robes/gallery/mobile/monica-mariage-robe-de-mariee-style-boheme-chic-tina-14-gallery-mobile.webp",
      alt: "Robe de mari\xE9e Tina - Monica Mariage Toulouse",
      label: "Tina",
      link: "/robes-de-mariee/style-boheme-chic/dress/14"
    },
    {
      src: "/images/robes/gallery/desktop/monica-mariage-robe-de-mariee-princesse-kapella-9-gallery-desktop.webp",
      alt: "Robe de mari\xE9e Kapella - Monica Mariage Toulouse",
      label: "Kapella",
      link: "/robes-de-mariee/forme-princesse/dress/9"
    },
    {
      src: "/images/robes/gallery/desktop/monica-mariage-robe-de-mariee-sirene-vegas-9-gallery-desktop.webp",
      alt: "Robe de mari\xE9e Vegas - Monica Mariage Toulouse",
      label: "Vegas",
      link: "/robes-de-mariee/style-sirene/dress/9"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-12 bg-gradient-to-b from-white to-[#FDE9E6]"> <h2 class="font-cursive text-center text-5xl font-semibold text-[#af7749] mb-8">
Meilleures ventes chez Monica Mariage&nbsp;: Des robes de mariée incontournables à Toulouse
</h2> <div class="flex justify-center px-4"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full"> ${bestSellers.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} class="text-center cursor-pointer"> <div class="relative"> <div class="absolute inset-0 bg-[#af7749] opacity-20 z-10"></div> <img${addAttribute(item.src, "src")}${addAttribute(item.alt, "alt")} width="300" height="400" class="w-full object-cover rounded max-h-96" loading="lazy"> </div> <p class="mt-2 pb-2 text-[#af7749] font-cursive text-3xl"> ${item.label} </p> <button class="bg-[#af7749] text-white py-1 px-3 sm:py-2 sm:px-4 rounded-lg shadow-lg hover:bg-[#925c36] transition duration-300 text-sm sm:text-base">
Voir plus
</button> </a>`)} </div> </div> <div class="flex flex-col items-center mt-8 px-4"> <p class="max-w-2xl mx-auto text-lg text-black leading-relaxed mb-6 text-center">
Découvrez notre sélection de best-sellers, conçus pour sublimer chaque future mariée à la recherche d’une robe de mariée à Toulouse.
      Nous proposons des coupes variées (princesse, sirène, bohème, etc.) afin de répondre à tous les styles et toutes les silhouettes.
      Profitez de nos conseils d’experts pour trouver la robe parfaite qui vous fera rayonner le jour de votre mariage.
</p> <a href="/robes-de-mariee" class="bg-[#af7749] text-white py-2 px-6 rounded-lg shadow hover:bg-[#925c36] transition duration-300">
Voir plus de robes
</a> </div> </section>`;
}, "C:/devmode/mon-projet-astro/src/components/MonicamariagePart2.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "VideoSlider", $$VideoSlider, {})} ${renderComponent($$result2, "MonicamariagePart1", $$MonicamariagePart1, {})} ${renderComponent($$result2, "MonicamariagePart2", $$MonicamariagePart2, {})} ` })}`;
}, "C:/devmode/mon-projet-astro/src/pages/index.astro", void 0);

const $$file = "C:/devmode/mon-projet-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
