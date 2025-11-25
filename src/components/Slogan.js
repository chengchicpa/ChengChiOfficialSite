import { sloganData } from '../data/content';

export function Slogan() {
  const itemsHtml = sloganData.items.map(item => `
    <div>
      <h3 class="text-2xl font-bold mb-8 title-underline">${item.title}</h3>
      <p class="text-lg leading-relaxed">${item.desc}</p>
    </div>
  `).join('');

  return `
    <section class="pt-18 pb-24 text-center bg-[#F4F3F1]">
      <span class="font-sans text-sm font-bold uppercase">VALUES</span>
      <h2 class="text-3xl text-[#B77449] font-bold mb-16">${sloganData.title}</h2>
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        ${itemsHtml}
      </div>
    </section>
  `;
}
