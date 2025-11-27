import{f as i,c as e,H as o,F as n,L as c,d,e as p}from"./loading-BjE_pHry.js";function a({title:t,content:s,className:l=""}){return`
    <section class="py-20 ${l}">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-center gap-12">
        <div class="md:w-1/4">
          <h2 class="text-3xl text-[#5A5856]">${t}</h2>
        </div>
        <div class="md:w-2/3 leading-loose space-y-6">
          ${s}
        </div>
      </div>
    </section>
  `}function r(){const t=i.intro.content.map(s=>`<p>${s}</p>`).join("");return a({title:i.intro.title,content:t,className:"bg-[#F4F3F1]"})}function m(){const t=`
    <p class="font-bold mb-4">${i.philosophy.subtitle}</p>
    ${i.philosophy.content.map(s=>`<p>${s}</p>`).join("")}
  `;return a({title:i.philosophy.title,content:t,className:"bg-white"})}function f(){const{transport:t}=i.contact,s=`
    <div class="mb-12">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5465708468123!2d121.53025354053948!3d25.04945747059941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a961627ae309%3A0x8dc90bdaecb4c39f!2zMTA0OTHoh7rljJfluILkuK3lsbHljYDmnb7msZ_ot683MeiZnw!5e0!3m2!1szh-TW!2stw!4v1764224304339!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 class="text-xl mb-6">聯絡方式</h3>
        <div class="space-y-2 ">
          <p>電話：${e.tel}</p>
          <p>傳真：${e.fax}</p>
          <p>地址：${e.address}</p>
        </div>
      </div>

      <div>
        <h3 class="text-xl mb-6">交通資訊</h3>
        <div class="space-y-6 ">
          <div>
            <p class="font-bold mb-1">捷運 :</p>
            <ul class="list-disc list-inside pl-2">
              <li>${t.mrt}</li>
            </ul>
          </div>
          <div>
            <p class="font-bold mb-1">停車場 :</p>
            <ul class="list-disc list-inside pl-2">
              ${t.parking.map(l=>`<li>${l}</li>`).join("")}
            </ul>
          </div>
          <div>
            <p class="font-bold mb-1">公車 :</p>
            <ul class="list-disc list-inside pl-2">
              ${t.bus.map(l=>`<li>${l}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;return a({title:i.contact.title,content:s,className:"bg-[#F4F3F1]"})}const v=document.getElementById("app");v.innerHTML=`
  <div class="">
    ${o()}
    
    <!-- Spacer for fixed header -->
    <div class="h-16"></div>

    ${r()}
    ${m()}
    ${f()}
    
    ${n()}
    ${c}
  </div>
`;d();p();
