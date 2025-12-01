import { aboutData } from '../data/content';

export function IndexAbout() {
  return `
    <section id="about" class="bg-white py-28">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/2">
          <span class="font-sans text-sm font-bold uppercase">ABOUT</span>
          <h2 class="tracking-wide text-4xl text-[#B77449] font-bold mt-2 mb-8">${aboutData.title}</h2>
          <p class="tracking-wide text-2xl">${aboutData.subtitle}</p>
        </div>
        <div class="md:w-1/2 text-lg leading-loose ms-auto">
          <p class="mb-6">${aboutData.desc1}</p>
          <p class="mb-10">${aboutData.desc2}</p>
          <a href="about.html" class="inline-block bg-[#6D5F56] text-white px-12 pt-1 rounded-xs tracking-wider hover:bg-[#B77449] transition">了解更多</a>
        </div>
      </div>
    </section>
  `;
}
