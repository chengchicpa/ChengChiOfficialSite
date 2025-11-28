import { aboutData } from '../data/content';

export function IndexAbout() {
  return `
    <section id="about" class="py-20">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/3">
          <span class="font-sans text-sm font-bold uppercase">ABOUT</span>
          <h2 class="text-4xl text-[#B77449] font-bold mb-6">${aboutData.title}</h2>
          <p class="text-2xl">${aboutData.subtitle}</p>
        </div>
        <div class="md:w-2/4 text-lg leading-loose ms-auto">
          <p class="mb-6">${aboutData.desc1}</p>
          <p class="mb-10">${aboutData.desc2}</p>
          <a href="about.html" class="inline-block bg-[#5E5E5E] text-white px-5 py-1 tracking-wider hover:bg-gray-700 transition">了解更多</a>
        </div>
      </div>
    </section>
  `;
}
