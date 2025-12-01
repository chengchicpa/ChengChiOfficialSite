import { heroData } from '../data/content';

export function IndexHero() {
  return `
    <section id="top" class="relative h-[650px] flex items-center justify-center bg-cover bg-center">
      <div class="h-16"></div>
      <div class="absolute top-0 left-0 right-0 bottom-0 inset-0 bg-[#6D5F56]/70"></div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-shadow-xl text-[9vw] md:text-6xl md:text-6xl font-bold mb-[3vw] md:mb-10 tracking-wider">${heroData.title}</h1>
        <b class="text-shadow-xl text-lg md:text-xl text-white/90 font-bold">${heroData.subtitle}</b>
      </div>
    </section>
  `;
}
