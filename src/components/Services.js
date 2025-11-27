import { servicesData } from '../data/content';

export function Services() {
  const servicesHtml = servicesData.map(service => `
    <div class="bg-[#F4F3F1] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col md:items-start">
      <img src="${service.image}" class="w-full h-64 object-cover" alt="${service.title}">
      <div class="text-left px-6 pt-4 pb-8">
        <h3 class="text-2xl font-bold mb-3">${service.title}</h3>
        <p class="leading-relaxed mb-4">${service.desc}</p>
      </div>
    </div>
  `).join('');

  return `
    <section id="services" class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 text-center mb-16">
        <span class="font-sans text-sm font-bold uppercase">SERVICES</span>
        <h2 class="text-4xl text-[#B77449] font-bold mb-6">服務項目</h2>
      </div>

      <div class="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        ${servicesHtml}
      </div>
    </section>
  `;
}
