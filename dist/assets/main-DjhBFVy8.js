import{h as a,c as l,s as o,a as s,t as i,b as d,H as n,F as c,d as r,e as x}from"./loading-n0AUZHO7.js";function m(){return`
    <div id="top"></div>
    <section class="relative h-[650px] flex items-center justify-center bg-cover bg-center" style="background-image: url('${a.bgImage}');">
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-6xl md:text-6xl font-bold mb-10 tracking-wider">${a.title}</h1>
        <b class="text-lg md:text-xl text-white/90 font-bold">${a.subtitle}</b>
      </div>
      
      <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#F4F3F1] rounded-full flex flex-col items-center justify-center z-20">
        <img class="absolute top-6 left-0 right-0 m-auto w-17" src="${l.logoOnly}" alt="${l.name} Logo" class="h-10 w-auto">
      </div>
    </section>
  `}function p(){const e=o.items.map(t=>`
    <div>
      <h3 class="text-2xl font-bold mb-8 title-underline">${t.title}</h3>
      <p class="text-lg leading-relaxed">${t.desc}</p>
    </div>
  `).join("");return`
    <section class="pt-6 pb-28 text-center bg-[#F4F3F1]">
      <span class="relative z-20 font-sans text-sm font-bold uppercase">VALUES</span>
      <h2 class="text-3xl text-[#B77449] font-bold mb-16">${o.title}</h2>
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        ${e}
      </div>
    </section>
  `}function b(){return`
    <section id="about" class="py-20">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/3">
          <span class="font-sans text-sm font-bold uppercase">ABOUT</span>
          <h2 class="text-4xl text-[#B77449] font-bold mb-6">${s.title}</h2>
          <p class="text-2xl">${s.subtitle}</p>
        </div>
        <div class="md:w-2/4 text-lg leading-loose ms-auto">
          <p class="mb-6">${s.desc1}</p>
          <p class="mb-10">${s.desc2}</p>
          <a href="about.html" class="inline-block bg-[#5E5E5E] text-white px-5 py-1 tracking-wider hover:bg-gray-700 transition">了解更多</a>
        </div>
      </div>
    </section>
  `}function v(){return`
    <section id="professionals" class="py-20">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/5">
          <span class="font-sans text-sm font-bold uppercase">PROFESSIONALS</span>
          <h2 class="text-4xl text-[#B77449] font-bold mb-6">專業諮詢</h2>
        </div>
        <div class="md:w-4/5 text-lg  leading-loose grid grid-cols-1 md:grid-cols-3 gap-8">
          ${i.map(t=>`
    <div class="group">
      <div class="overflow-hidden mb-4">
        <img src="${t.image}" alt="${t.name}" class="w-full h-[400px] object-cover object-top transition duration-500 group-hover:scale-105 rounded-sm">
      </div>
      <div>
        <span class="text-sm text-[#B77449] font-bold uppercase block">${t.role}</span>
        <h3 class="text-2xl font-bold mb-6">${t.name}</h3>
      <div class="mt-auto">
        <a href="${t.id}.html" class="inline-block text-[#B77449] font-bold border-b-2 border-[#B77449] pb-1 hover:text-[#A3825E] hover:border-[#A3825E] transition">了解更多</a>
      </div>
      </div>
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}function g(){return`
    <section id="services" class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 text-center mb-16">
        <span class="font-sans text-sm font-bold uppercase">SERVICES</span>
        <h2 class="text-4xl text-[#B77449] font-bold mb-6">服務項目</h2>
      </div>

      <div class="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        ${d.map(t=>`
    <div class="group bg-[#F4F3F1] rounded-sm overflow-hidden shadow-sm hover:shadow-md transition flex flex-col md:items-start">
      <div class="overflow-hidden mb-4">
        <img src="${t.image}" class="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-105" alt="${t.title}">
      </div>
      <div class="text-left px-6 pt-4 pb-8">
        <h3 class="text-2xl font-bold mb-3">${t.title}</h3>
        <p class="leading-relaxed mb-4">${t.desc}</p>
      </div>
    </div>
  `).join("")}
      </div>
    </section>
  `}const u=document.getElementById("app");u.innerHTML=`
  <div class="">
    ${n()}
    ${m()}
    ${p()}
    ${b()}
    ${v()}
    ${g()}
    ${c()}
    <div id="loading">
      <span class="loader"></span>
    </div>
  </div>
`;r();x();
