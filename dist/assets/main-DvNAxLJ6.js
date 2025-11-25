import{h as a,c as l,s as i,a as s,t as o,b as c,H as n,F as d}from"./Footer-16fB2aIF.js";function x(){return`
    <section class="relative h-[600px] flex items-center justify-center bg-cover bg-center" style="background-image: url('${a.bgImage}');">
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-6xl md:text-6xl font-bold mb-10 tracking-wider">${a.title}</h1>
        <b class="text-lg md:text-xl text-white/90 font-bold">${a.subtitle}</b>
      </div>
      
      <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#F4F3F1] rounded-full flex flex-col items-center justify-center z-20">
         <span class="text-[#B77449] font-bold text-3xl">${l.logoText}</span>
         <span class="text-[10px] text-gray-500 uppercase mt-1">${l.est}</span>
      </div>
    </section>
  `}function r(){const e=i.items.map(t=>`
    <div>
      <h3 class="text-2xl font-bold mb-8 title-underline">${t.title}</h3>
      <p class="text-lg leading-relaxed">${t.desc}</p>
    </div>
  `).join("");return`
    <section class="pt-18 pb-24 text-center bg-[#F4F3F1]">
      <span class="font-sans text-sm font-bold uppercase">VALUES</span>
      <h2 class="text-3xl text-[#B77449] font-bold mb-16">${i.title}</h2>
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        ${e}
      </div>
    </section>
  `}function m(){return`
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/3">
          <span class="font-sans text-sm font-bold uppercase">ABOUT</span>
          <h2 class="text-4xl text-[#B77449] font-bold mt-1 mb-6">${s.title}</h2>
          <p class="text-xl font-light text-gray-700 mb-8">${s.subtitle}</p>
        </div>
        <div class="md:w-2/4 text-lg  leading-loose">
          <p class="mb-6">${s.desc1}</p>
          <p class="mb-6">${s.desc2}</p>
          <a href="about.html" class="inline-block bg-[#5E5E5E] text-white px-5 py-1 tracking-wider hover:bg-gray-700 transition">了解更多</a>
        </div>
      </div>
    </section>
  `}function p(){return`
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/5">
          <span class="font-sans text-sm font-bold uppercase ">PROFESSIONALS</span>
          <h2 class="text-4xl text-[#B77449] font-bold mt-1 mb-6">專業諮詢</h2>
        </div>
        <div class="md:w-4/5 text-lg  leading-loose grid grid-cols-1 md:grid-cols-3 gap-8">
          ${o.map(t=>`
    <div class="group">
      <div class="overflow-hidden mb-4">
        <img src="${t.image}" alt="${t.name}" class="w-full h-[400px] object-cover object-top transition duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0">
      </div>
      <div>
        <span class="text-[#B77449] font-bold uppercase block">${t.role}</span>
        <h3 class="text-2xl text-gray-800 mb-6">${t.name}</h3>
        <a href="./member.html?id=${t.id}" class="inline-block bg-[#5E5E5E] text-white px-6 tracking-wider hover:bg-gray-700 transition">了解更多</a>
      </div>
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}function g(){return`
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 text-center mb-16">
        <span class="font-sans text-sm font-bold uppercase ">SERVICES</span>
        <h2 class="text-4xl text-[#B77449] font-bold mt-1 mb-6">服務項目</h2>
      </div>

      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        ${c.map(t=>`
    <div class="bg-white shadow-sm hover:shadow-md transition p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
      <img src="${t.image}" class="w-full md:w-1/2 h-48 object-cover" alt="${t.title}">
      <div class="text-left">
        <h3 class="text-xl font-bold text-gray-800 mb-3">${t.title}</h3>
        <p class="text-gray-500 leading-relaxed mb-4">${t.desc}</p>
      </div>
    </div>
  `).join("")}
      </div>
    </section>
  `}const b=document.getElementById("app");b.innerHTML=`
  <div class=" text-[#6D5F56]">
    ${n()}
    ${x()}
    ${r()}
    ${m()}
    ${p()}
    ${g()}
    ${d()}
  </div>
`;
