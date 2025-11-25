import{t as i,H as n,F as r}from"./Footer-BLH_UULS.js";function c(){const t=new URLSearchParams(window.location.search).get("id"),e=i.find(l=>l.id===t);if(!e)return`
      <section class="py-20 bg-[#F5F5F5] min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h2 class="text-2xl text-gray-800 mb-4">找不到該成員資料</h2>
          <a href="./index.html" class="text-[#B77449] hover:text-[#A3825E] transition">返回首頁</a>
        </div>
      </section>
    `;const s=l=>!l||l.length===0?"":l.map(a=>`
      <li class="flex items-start mb-2">
        <span class="mr-2 text-gray-400">•</span>
        <span class=" text-sm leading-relaxed">${a}</span>
      </li>
    `).join("");return`
    <section class="py-20 bg-[#F5F5F5]">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-12 items-start">
          <!-- Left Column: Image -->
          <div class="w-full md:w-1/3">
            <div class="sticky top-24">
              <img src="${e.image}" alt="${e.name}" class="w-full h-auto object-cover shadow-lg">
            </div>
          </div>
          
          <!-- Right Column: Content -->
          <div class="w-full md:w-2/3">
            <div class="mb-12">
              <span class="text-[#B77449] font-bold text-sm mb-2 block">${e.role}</span>
              <h1 class="text-4xl text-gray-800 mb-8">${e.name}</h1>
              
              <!-- Education -->
              <div class="mb-8">
                <h3 class="text-lg text-gray-800 mb-4 border-b border-[#C5A47E] pb-2 inline-block w-full">學歷</h3>
                <ul class="list-none pl-0">
                  ${s(e.education)}
                </ul>
              </div>

              <!-- Qualifications -->
              <div class="mb-8">
                <h3 class="text-lg text-gray-800 mb-4 border-b border-[#C5A47E] pb-2 inline-block w-full">專業資格</h3>
                <ul class="list-none pl-0">
                  ${s(e.qualifications)}
                </ul>
              </div>

              <!-- Experience -->
              <div class="mb-8">
                <h3 class="text-lg text-gray-800 mb-4 border-b border-[#C5A47E] pb-2 inline-block w-full">經歷</h3>
                <ul class="list-none pl-0">
                  ${s(e.experience)}
                </ul>
              </div>

              <!-- Specialization -->
              <div class="mb-8">
                <h3 class="text-lg text-gray-800 mb-4 border-b border-[#C5A47E] pb-2 inline-block w-full">專業領域</h3>
                <ul class="list-none pl-0">
                  ${s(e.specialization)}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `}document.querySelector("#app").innerHTML=`
  ${n()}
  
  <!-- Spacer for fixed header -->
  <div class="h-24 bg-[#4A4A4A]"></div>

  <main>
    ${c()}
  </main>
  ${r()}
`;
