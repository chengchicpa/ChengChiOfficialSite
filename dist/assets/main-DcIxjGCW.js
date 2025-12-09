import{h as o,s as l,c as d,a as s,t as i,b as n,H as c,F as r,d as x,e as m,A as p}from"./loading-8TOEuIsP.js";function b(){return`
    <section id="top" class="relative h-[75vh] flex items-center justify-center bg-cover bg-center">
      <div class="h-16"></div>
      <div class="hero-bg-mask"></div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-shadow-xl text-[14vw] md:text-6xl md:text-6xl font-bold mb-[6vw] md:mb-6 tracking-wider">${o.title}</h1>
        <b class="text-shadow-xl text-lg md:text-xl text-white/90 font-bold">${o.subtitle}</b>
      </div>
    </section>
  `}function v(){const e=l.items.map(t=>`
    <div>
      <h3 class="text-2xl font-bold mb-8 title-underline">${t.title}</h3>
      <p class="text-lg leading-relaxed text-left">${t.desc}</p>
    </div>
  `).join("");return`
    <section class="pt-12 pb-28 px-6 text-center bg-[#F4F3F1]">
      
      <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#F4F3F1] rounded-full flex flex-col items-center justify-center z-20">
        <img class="absolute top-6 left-0 right-0 m-auto h-9 w-auto" src="${d.logoOnly}" alt="${d.name} Logo">
      </div>
      <span class="relative z-20 font-sans text-sm font-bold uppercase">VALUES</span>
      <h2 class="leading-relaxed tracking-wide text-3xl text-[#B77449] font-bold mt-2 mb-18">${l.title}</h2>
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14 sm:gap-8 text-center" data-aos="fade-up" data-aos-duration="1200">
        ${e}
      </div>
    </section>
  `}function g(){return`
    <section id="about" class="bg-white py-28 border-b-2 border-[#E0DED8] sm:border-0">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="250">
        <div class="col-about-title md:w-1/2">
          <span class="font-sans text-sm font-bold uppercase">ABOUT</span>
          <h2 class="tracking-wide text-4xl text-[#B77449] font-bold mt-2 mb-8">${s.title}</h2>
          <p class="tracking-wide text-2xl">${s.subtitle}</p>
        </div>
        <div class="md:w-1/2 text-lg leading-loose ms-auto">
          <p class="mb-6">${s.desc1}</p>
          <p class="mb-10">${s.desc2}</p>
          <a href="about.html" class="inline-block bg-[#6D5F56] text-white px-12 pt-1 rounded-xs tracking-wider hover:bg-[#B77449] transition">了解更多</a>
        </div>
      </div>
    </section>
  `}function u(){return`
    <section id="professionals" class="bg-2tone py-28" >
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12" data-aos="fade-up" data-aos-duration="1200">
        <div class="md:w-1/5">
          <span class="font-sans text-sm font-bold uppercase">PROFESSIONALS</span>
          <h2 class="tracking-wide text-4xl text-[#B77449] font-bold mt-2 mb-8">專業諮詢</h2>
        </div>
        <div class="md:w-4/5 text-lg leading-loose grid grid-cols-1 md:grid-cols-3 gap-18 sm:gap-8 ">
          ${i.map((t,a)=>`
    <div class="group">
      <div class="overflow-hidden mb-5">
        <img src="${t.image}" alt="${t.name}" class="w-full h-[400px] object-cover object-top transition duration-500 group-hover:scale-105 rounded-sm">
      </div>
      <div>
        <span class="text-sm text-[#B77449] font-bold uppercase block">${t.role}</span>
        <h3 class="text-2xl font-bold mb-5">${t.name}</h3>
        <div class="mt-auto">
          <a href="${t.id}.html" class="inline-block text-[#B77449] font-bold border-1 border-[#B77449] pt-1 px-12 rounded-xs hover:text-white hover:bg-[#6D5F56] hover:border-[#6D5F56]">了解更多</a>
        </div>
      </div>
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}function f(){return`
    <section id="services" class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 text-center mb-16">
        <span class="font-sans text-sm font-bold uppercase">SERVICES</span>
        <h2 class="tracking-wide text-4xl text-[#B77449] font-bold mt-2 mb-8">服務項目</h2>
      </div>

      <div class="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        ${n.map((t,a)=>`
    <div class="group bg-[#F4F3F1] rounded-sm overflow-hidden shadow-sm hover:shadow-md transition flex flex-col md:items-start" data-aos="fade-up" data-aos-duration="800" data-aos-delay="${a*200}">
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
  `}const h=document.getElementById("app");h.innerHTML=`
  <div class="">
    ${c()}
    ${b()}
    ${v()}
    ${g()}
    ${u()}
    ${f()}
    ${r()}
    <div id="loading">
      <span class="loader"></span>
    </div>
  </div>
`;x();m();p.init();
