import { servicesData } from '../data/content';

export function IndexServices() {
  const servicesHtml = servicesData.map((service, index) => `
    <div class="group bg-[#F4F3F1] rounded-sm overflow-hidden shadow-sm hover:shadow-md transition flex flex-col md:items-start" data-aos="fade-up" data-aos-duration="800" data-aos-delay="${index * 200}">
      <div class="overflow-hidden mb-4">
        <img src="${service.image}" class="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-105" alt="${service.title}">
      </div>
      <div class="text-left px-6 pt-4 pb-8">
        <h3 class="text-2xl font-bold mb-3">${service.title}</h3>
        <p class="leading-relaxed mb-4">${service.desc}</p>
      </div>
    </div>
  `).join('');

  return `
    <section id="services" class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 text-center mb-16">
        <span class="font-sans text-sm font-bold uppercase">SERVICES</span>
        <h2 class="tracking-wide text-4xl text-[#B77449] font-bold mt-2 mb-8">服務項目</h2>
      </div>

      <div class="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        ${servicesHtml}
      </div>
    </section>
  `;
}
