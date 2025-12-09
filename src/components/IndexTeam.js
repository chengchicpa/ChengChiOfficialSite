import { teamData } from '../data/content';

export function IndexTeam() {
  const membersHtml = teamData.map((member, index) => `
    <div class="group">
      <div class="overflow-hidden mb-5">
        <img src="${member.image}" alt="${member.name}" class="w-full h-[400px] object-cover object-top transition duration-500 group-hover:scale-105 rounded-sm">
      </div>
      <div>
        <span class="text-sm text-[#B77449] font-bold uppercase block">${member.role}</span>
        <h3 class="text-2xl font-bold mb-5">${member.name}</h3>
        <div class="mt-auto">
          <a href="${member.id}.html" class="inline-block text-[#B77449] font-bold border-1 border-[#B77449] pt-1 px-12 rounded-xs hover:text-white hover:bg-[#6D5F56] hover:border-[#6D5F56]">了解更多</a>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section id="professionals" class="bg-2tone py-28" >
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12" data-aos="fade-up" data-aos-duration="1200">
        <div class="md:w-1/5">
          <span class="font-sans text-sm font-bold uppercase">PROFESSIONALS</span>
          <h2 class="tracking-wide text-4xl text-[#B77449] font-bold mt-2 mb-8">專業諮詢</h2>
        </div>
        <div class="md:w-4/5 text-lg leading-loose grid grid-cols-1 md:grid-cols-3 gap-18 sm:gap-8 ">
          ${membersHtml}
        </div>
      </div>
    </section>
  `;
}
