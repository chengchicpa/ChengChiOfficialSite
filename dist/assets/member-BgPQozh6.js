import{A as o,t as n,c,H as r,F as m,L as b,d as u,e as f}from"./loading-D9eCibeA.js";o.init();function p(d){const a=d||new URLSearchParams(window.location.search).get("id"),s=n.find(i=>i.id===a);if(!s)return console.error(`Member not found for ID: ${a}`),'<div class="text-center py-20">Member not found</div>';const l=i=>!i||i.length===0?"":i.map(t=>`
      <li class="flex items-start mb-2">
        <span class="leading-relaxed">${t}</span>
      </li>
    `).join("");return`
    <section class="py-20 bg-[#F5F5F5]">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-16 items-start justify-center">
          <!-- Left Column: Image -->
          <div class="w-full md:w-1/3" data-aos="fade-up" data-aos-duration="600">
            <div class="sticky top-24">
              <img src="${s.image}" alt="${c.name} ${s.name}${s.role}" class="w-full h-auto object-cover shadow-lg rounded-sm">
            </div>
          </div>

          <!-- Right Column: Content -->
          <div class="w-full md:w-1/2" data-aos="fade-up" data-aos-duration="1200">
            <div class="mb-12">
              <span class="text-[#B77449] font-bold block">${s.role}</span>
              <h1 class="text-3xl font-bold mb-6">${s.name}</h1>
              <p class="mb-12">${s.description}</p>

              <!-- Education -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">學歷</h3>
                <ul class="list-disc list-inside ml-4">
                  ${l(s.education)}
                </ul>
              </div>

              <div class="border-b border-[#C5A47E] mb-8"></div>

              <!-- Qualifications -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">專業資格</h3>
                <ul class="list-disc list-inside ml-4">
                  ${l(s.qualifications)}
                </ul>
              </div>

              <div class="border-b border-[#C5A47E] mb-8"></div>

              <!-- Experience -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">經歷</h3>
                <ul class="list-disc list-inside ml-4">
                  ${l(s.experience)}
                </ul>
              </div>

              <div class="border-b border-[#C5A47E] mb-8"></div>

              <!-- Specialization -->
              <div class="mb-8">
                <h3 class="text-xl mb-2 font-bold pb-2 inline-block w-full">專業領域</h3>
                <ul class="list-disc list-inside ml-4">
                  ${l(s.specialization)}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `}const e=document.querySelector("#app"),v=e.dataset.memberId;e.innerHTML=`
  ${r()}
  
  <!-- Spacer for fixed header -->
  <div class="hidden md:block h-16"></div>

  <main>
    ${p(v)}
  </main>
  ${m()}
  ${b}
`;u();f();AOS.init();
