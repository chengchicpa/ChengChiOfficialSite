import { companyInfo, sloganData } from '../data/content';

export function IndexValues() {
  const itemsHtml = sloganData.items.map((item) => `
    <div>
      <h3 class="text-2xl font-bold mb-8 title-underline">${item.title}</h3>
      <p class="text-lg leading-relaxed text-left">${item.desc}</p>
    </div>
  `).join('');

  return `
    <section class="pt-12 pb-28 px-6 text-center bg-[#F4F3F1]">
      
      <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#F4F3F1] rounded-full flex flex-col items-center justify-center z-20">
        <img class="absolute top-6 left-0 right-0 m-auto h-9 w-auto" src="${companyInfo.logoOnly}" alt="${companyInfo.name} Logo">
      </div>
      <span class="relative z-20 font-sans text-sm font-bold uppercase">VALUES</span>
      <h2 class="leading-relaxed tracking-wide text-3xl text-[#B77449] font-bold mt-2 mb-18">${sloganData.title}</h2>
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14 sm:gap-8 text-center" data-aos="fade-up" data-aos-duration="1200">
        ${itemsHtml}
      </div>
    </section>
  `;
}
