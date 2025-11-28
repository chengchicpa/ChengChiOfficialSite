import { teamData } from '../data/content';

export function Team() {
  const membersHtml = teamData.map(member => `
    <div class="group">
      <div class="overflow-hidden mb-4">
        <img src="${member.image}" alt="${member.name}" class="w-full h-[400px] object-cover object-top transition duration-500 group-hover:scale-105 rounded-sm">
      </div>
      <div>
        <span class="text-sm text-[#B77449] font-bold uppercase block">${member.role}</span>
        <h3 class="text-2xl font-bold mb-6">${member.name}</h3>
      <div class="mt-auto">
        <a href="${member.id}.html" class="inline-block text-[#B77449] font-bold border-b-2 border-[#B77449] pb-1 hover:text-[#A3825E] hover:border-[#A3825E] transition">了解更多</a>
      </div>
      </div>
    </div>
  `).join('');

  return `
    <section id="professionals" class="py-20">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/5">
          <span class="font-sans text-sm font-bold uppercase">PROFESSIONALS</span>
          <h2 class="text-4xl text-[#B77449] font-bold mb-6">專業諮詢</h2>
        </div>
        <div class="md:w-4/5 text-lg  leading-loose grid grid-cols-1 md:grid-cols-3 gap-8">
          ${membersHtml}
        </div>
      </div>
    </section>
  `;
}
