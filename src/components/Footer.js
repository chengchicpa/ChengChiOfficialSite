import { companyInfo, navLinks, teamData } from '../data/content';

export function Footer() {
  const linksHtml = navLinks.map(link =>
    `<a href="${link.href}" class="block hover:text-white">${link.name}</a>`
  ).join('');
  const linksMember = teamData.map(member =>
    `<a href="member.html?id=${member.id}" class="block hover:text-white">${member.name}${member.role}</a>`
  ).join('');

  return `
    <footer class="bg-[#4A4A4A] text-white py-16">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
           <div class="flex items-center gap-2 mb-6">
             <img src="${companyInfo.logoSquareWhite}" alt="${companyInfo.name}" class="h-30 w-auto">
           </div>
           <div class="text-sm text-gray-300 space-y-2">
             <div>${companyInfo.address}</div>
             <div>電話：${companyInfo.tel}</div>
             <div>傳真：${companyInfo.fax}</div>
           </div>
        </div>
        
        <div class="flex gap-16 text-sm text-gray-300">
          <div class="space-y-3">
            ${linksHtml}
          </div>
          <div class="space-y-3">
            ${linksMember}
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-gray-600 text-center text-[10px] text-gray-500">
        ${companyInfo.copyright}
      </div>
    </footer>
  `;
}
