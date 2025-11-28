import { teamData } from '../data/content';

export function MemberProfile(id) {
  // Get member ID from argument or URL
  const memberId = id || new URLSearchParams(window.location.search).get('id');

  // Find member data
  const member = teamData.find(m => m.id === memberId);

  // Helper to render list items
  const renderList = (items) => {
    if (!items || items.length === 0) return '';
    return items.map(item => `
      <li class="flex items-start mb-2">
        <span class="leading-relaxed">${item}</span>
      </li>
    `).join('');
  };

  return `
    <section class="py-20 bg-[#F5F5F5]">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-16 items-start justify-center">
          <!-- Left Column: Image -->
          <div class="w-full md:w-1/3">
            <div class="sticky top-24">
              <img src="${member.image}" alt="${member.name}${member.role}" class="w-full h-auto object-cover shadow-lg rounded-sm">
            </div>
          </div>

          <!-- Right Column: Content -->
          <div class="w-full md:w-1/2">
            <div class="mb-12">
              <span class="text-[#B77449] font-bold block">${member.role}</span>
              <h1 class="text-3xl font-bold mb-6">${member.name}</h1>
              <p class="mb-12">${member.description}</p>

              <!-- Education -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">學歷</h3>
                <ul class="list-disc list-inside ml-4">
                  ${renderList(member.education)}
                </ul>
              </div>

              <div class="border-b border-[#C5A47E] mb-8"></div>

              <!-- Qualifications -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">專業資格</h3>
                <ul class="list-disc list-inside ml-4">
                  ${renderList(member.qualifications)}
                </ul>
              </div>

              <div class="border-b border-[#C5A47E] mb-8"></div>

              <!-- Experience -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">經歷</h3>
                <ul class="list-disc list-inside ml-4">
                  ${renderList(member.experience)}
                </ul>
              </div>

              <div class="border-b border-[#C5A47E] mb-8"></div>

              <!-- Specialization -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">專業領域</h3>
                <ul class="list-disc list-inside ml-4">
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
