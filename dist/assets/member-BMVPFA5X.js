import{t as o,H as n,F as c,L as r,d as m,e as b}from"./loading-D6A-qg7w.js";function u(d){const e=d||new URLSearchParams(window.location.search).get("id"),s=o.find(l=>l.id===e);if(!s)return console.error(`Member not found for ID: ${e}`),'<div class="text-center py-20">Member not found</div>';const i=l=>!l||l.length===0?"":l.map(t=>`
      <li class="flex items-start mb-2">
        <span class="leading-relaxed">${t}</span>
      </li>
    `).join("");return`
    <section class="py-20 bg-[#F5F5F5]">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-16 items-start justify-center">
          <!-- Left Column: Image -->
          <div class="w-full md:w-1/3">
            <div class="sticky top-24">
              <img src="${s.image}" alt="${s.name}${s.role}" class="w-full h-auto object-cover shadow-lg rounded-sm">
            </div>
          </div>

          <!-- Right Column: Content -->
          <div class="w-full md:w-1/2">
            <div class="mb-12">
              <span class="text-[#B77449] font-bold block">${s.role}</span>
              <h1 class="text-3xl font-bold mb-6">${s.name}</h1>
              <p class="mb-12">${s.description}</p>

              <!-- Education -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">學歷</h3>
                <ul class="list-disc list-inside ml-4">
                  ${i(s.education)}
                </ul>
              </div>

              <div class="border-b border-[#C5A47E] mb-8"></div>

              <!-- Qualifications -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">專業資格</h3>
                <ul class="list-disc list-inside ml-4">
                  ${i(s.qualifications)}
                </ul>
              </div>

              <div class="border-b border-[#C5A47E] mb-8"></div>

              <!-- Experience -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">經歷</h3>
                <ul class="list-disc list-inside ml-4">
                  ${i(s.experience)}
                </ul>
              </div>

              <div class="border-b border-[#C5A47E] mb-8"></div>

              <!-- Specialization -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">專業領域</h3>
                <ul class="list-disc list-inside ml-4">
                  ${i(s.specialization)}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `}const a=document.querySelector("#app"),f=a.dataset.memberId;a.innerHTML=`
  ${n()}
  
  <!-- Spacer for fixed header -->
  <div class="hidden md:block h-16"></div>

  <main>
    ${u(f)}
  </main>
  ${c()}
  ${r}
`;m();b();
