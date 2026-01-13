import{A as n,f as l,c as a,H as d,F as c,L as p,d as r,e as m}from"./loading-BvVxzmO-.js";n.init();function e({title:s,subtitle:t,content:o,className:i=""}){return`
    <section class="py-20 ${i}">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-center gap-12">
        <div class="md:w-1/4" data-aos="fade-up" data-aos-duration="1200">
          <span class="font-sans text-sm text-[#B77449] font-bold uppercase">${t}</span>
          <h2 class="text-3xl font-bold mt-2 mb-8">${s}</h2>
        </div>
        <div class="md:w-2/3 leading-loose space-y-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="250">
          ${o}
        </div>
      </div>
    </section>
  `}function b(){const s=l.intro.content.map(t=>`<p>${t}</p>`).join("");return e({title:l.intro.title,subtitle:"About",content:s,className:"bg-[#F4F3F1]"})}function f(){const s=`
    <p class="text-xl font-bold mb-4 pl-5 border-l-3 border-[#B77449]">${l.philosophy.subtitle}</p>
    ${l.philosophy.content.map(t=>`<p>${t}</p>`).join("")}
  `;return e({title:l.philosophy.title,subtitle:"Brand",content:s,className:"bg-white"})}function u(){const{transport:s}=l.contact,t=`
    <div class="mb-12">
      <iframe class="shadow-sm rounded-sm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5465708468123!2d121.53025354053948!3d25.04945747059941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a961627ae309%3A0x8dc90bdaecb4c39f!2zMTA0OTHoh7rljJfluILkuK3lsbHljYDmnb7msZ_ot683MeiZnw!5e0!3m2!1szh-TW!2stw!4v1764224304339!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h3 class="text-xl font-bold mb-4">聯絡方式</h3>
        <div class="space-y-2 ">
          <p><span class="font-bold">電話：</span><a href="tel:${a.tel}">${a.tel}</a></p>
          <p><span class="font-bold">傳真：</span><span class="text-[#B77449]">${a.fax}</span></p>
          <p><span class="font-bold">Email：</span><a href="mailto:${a.email}">${a.email}</a></p>
          <p><span class="font-bold">地址：</span><a href="${a.googleMapLink}" target="_blank">${a.address}</a></p>
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
              ${s.parking.map(o=>`<li>${o}</li>`).join("")}
            </ul>
          </div>
          <div>
            <p class="font-bold mb-1">公車 :</p>
            <ul class="list-disc list-inside pl-2">
              ${s.bus.map(o=>`<li>${o}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;return e({title:l.contact.title,subtitle:"Contact",content:t,className:"bg-[#F4F3F1]"})}const v=document.getElementById("app");v.innerHTML=`
  <div class="">
    ${d()}
    
    <!-- Spacer for fixed header -->
    <div class="h-16"></div>

    ${b()}
    ${f()}
    ${u()}
    
    ${c()}
    ${p}
  </div>
`;r();m();
