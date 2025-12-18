import{A as n,f as a,c as o,H as d,F as c,L as p,d as r,e as m}from"./loading-D9eCibeA.js";n.init();function i({title:s,subtitle:t,content:l,className:e=""}){return`
    <section class="py-20 ${e}">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-center gap-12">
        <div class="md:w-1/4" data-aos="fade-up" data-aos-duration="1200">
          <span class="font-sans text-sm text-[#B77449] font-bold uppercase">${t}</span>
          <h2 class="text-3xl font-bold mt-2 mb-8">${s}</h2>
        </div>
        <div class="md:w-2/3 leading-loose space-y-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="250">
          ${l}
        </div>
      </div>
    </section>
  `}function b(){const s=a.intro.content.map(t=>`<p>${t}</p>`).join("");return i({title:a.intro.title,subtitle:"About",content:s,className:"bg-[#F4F3F1]"})}function u(){const s=`
    <p class="text-xl font-bold mb-4 pl-5 border-l-3 border-[#B77449]">${a.philosophy.subtitle}</p>
    ${a.philosophy.content.map(t=>`<p>${t}</p>`).join("")}
  `;return i({title:a.philosophy.title,subtitle:"Brand",content:s,className:"bg-white"})}function f(){const{transport:s}=a.contact,t=`
    <div class="mb-12">
      <iframe class="shadow-sm rounded-sm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5465708468123!2d121.53025354053948!3d25.04945747059941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a961627ae309%3A0x8dc90bdaecb4c39f!2zMTA0OTHoh7rljJfluILkuK3lsbHljYDmnb7msZ_ot683MeiZnw!5e0!3m2!1szh-TW!2stw!4v1764224304339!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h3 class="text-xl font-bold mb-4">聯絡方式</h3>
        <div class="space-y-2 ">
          <p><span class="font-bold">電話：</span>${o.tel}</p>
          <p><span class="font-bold">傳真：</span>${o.fax}</p>
          <p><span class="font-bold">地址：</span>${o.address}</p>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-4">交通資訊</h3>
        <div class="space-y-6 ">
          <div>
            <p class="font-bold mb-1">捷運 :</p>
            <ul class="list-disc list-inside pl-2">
              <li>${s.mrt}</li>
            </ul>
          </div>
          <div>
            <p class="font-bold mb-1">停車場 :</p>
            <ul class="list-disc list-inside pl-2">
              ${s.parking.map(l=>`<li>${l}</li>`).join("")}
            </ul>
          </div>
          <div>
            <p class="font-bold mb-1">公車 :</p>
            <ul class="list-disc list-inside pl-2">
              ${s.bus.map(l=>`<li>${l}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;return i({title:a.contact.title,subtitle:"Contact",content:t,className:"bg-[#F4F3F1]"})}const v=document.getElementById("app");v.innerHTML=`
  <div class="">
    ${d()}
    
    <!-- Spacer for fixed header -->
    <div class="h-16"></div>

    ${b()}
    ${u()}
    ${f()}
    
    ${c()}
    ${p}
  </div>
`;r();m();
