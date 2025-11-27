import { teamData } from '../data/content';

export function MemberProfile() {
  // Get member ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const memberId = urlParams.get('id');

  // Find member data
  const member = teamData.find(m => m.id === memberId);

  // Update page title
  if (member) {
    document.title = `${member.name} - 丞起聯合會計師事務所`;
  }

  // Handle case where member is not found
  if (!member) {
    return `
      <section class="py-20 bg-[#F5F5F5] min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h2 class="text-2xl text-gray-800 mb-4">找不到該成員資料</h2>
          <a href="./index.html" class="text-[#B77449] hover:text-[#A3825E] transition">返回首頁</a>
        </div>
      </section>
    `;
  }

  // Helper to render list items
  const renderList = (items) => {
    if (!items || items.length === 0) return '';
    return items.map(item => `
      <li class="flex items-start mb-2">
        <span class="mr-2 text-gray-400">•</span>
        <span class=" text-sm leading-relaxed">${item}</span>
      </li>
    `).join('');
  };

  return `
    <section class="py-20 bg-[#F5F5F5]">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-12 items-start">
          <!-- Left Column: Image -->
          <div class="w-full md:w-1/3">
            <div class="sticky top-24">
              <img src="${member.image}" alt="${member.name}" class="w-full h-auto object-cover shadow-lg">
            </div>
          </div>
          
          <!-- Right Column: Content -->
          <div class="w-full md:w-2/3">
            <div class="mb-12">
              <span class="text-[#B77449] font-bold text-sm mb-2 block">${member.role}</span>
              <h1 class="text-4xl text-gray-800 mb-8">${member.name}</h1>
              
              <!-- Education -->
              <div class="mb-8">
                <h3 class="text-lg text-gray-800 mb-4 border-b border-[#C5A47E] pb-2 inline-block w-full">學歷</h3>
                <ul class="list-none pl-0">
                  ${renderList(member.education)}
                </ul>
              </div>

              <!-- Qualifications -->
              <div class="mb-8">
                <h3 class="text-lg text-gray-800 mb-4 border-b border-[#C5A47E] pb-2 inline-block w-full">專業資格</h3>
                <ul class="list-none pl-0">
                  ${renderList(member.qualifications)}
                </ul>
              </div>

              <!-- Experience -->
              <div class="mb-8">
                <h3 class="text-lg text-gray-800 mb-4 border-b border-[#C5A47E] pb-2 inline-block w-full">經歷</h3>
                <ul class="list-none pl-0">
                  ${renderList(member.experience)}
                </ul>
              </div>

              <!-- Specialization -->
              <div class="mb-8">
                <h3 class="text-lg text-gray-800 mb-4 border-b border-[#C5A47E] pb-2 inline-block w-full">專業領域</h3>
                <ul class="list-none pl-0">
                  ${renderList(member.specialization)}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
