import{t as c,H as n,F as o,L as r,d as m,e as b}from"./loading-B8cpRXXF.js";function u(a){const d=a||new URLSearchParams(window.location.search).get("id"),l=c.find(s=>s.id===d),i=s=>!s||s.length===0?"":s.map(t=>`
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
              <img src="${l.image}" alt="${l.name}${l.role}" class="w-full h-auto object-cover shadow-lg rounded-sm">
            </div>
          </div>

          <!-- Right Column: Content -->
          <div class="w-full md:w-1/2">
            <div class="mb-12">
              <span class="text-[#B77449] font-bold block">${l.role}</span>
              <h1 class="text-3xl font-bold mb-6">${l.name}</h1>
              <p class="mb-12">${l.description}</p>

              <!-- Education -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">學歷</h3>
                <ul class="list-disc list-inside ml-4">
                  ${i(l.education)}
                </ul>
              </div>

              <div class="border-b border-[#C5A47E] mb-8"></div>

              <!-- Qualifications -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">專業資格</h3>
                <ul class="list-disc list-inside ml-4">
                  ${i(l.qualifications)}
                </ul>
              </div>

              <div class="border-b border-[#C5A47E] mb-8"></div>

              <!-- Experience -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">經歷</h3>
                <ul class="list-disc list-inside ml-4">
                  ${i(l.experience)}
                </ul>
              </div>

              <div class="border-b border-[#C5A47E] mb-8"></div>

              <!-- Specialization -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">專業領域</h3>
                <ul class="list-disc list-inside ml-4">
                  ${i(l.specialization)}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `}const e=document.querySelector("#app"),v=e.dataset.memberId;e.innerHTML=`
  ${n()}
  
  <!-- Spacer for fixed header -->
  <div class="hidden md:block h-16"></div>

  <main>
    ${u(v)}
  </main>
  ${o()}
  ${r}
`;m();b();
