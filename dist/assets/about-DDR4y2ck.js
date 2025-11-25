import{d as i,H as e,F as c}from"./Footer-BLH_UULS.js";function o({title:t,content:s,className:l=""}){return`
    <section class="py-20 ${l}">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/4">
          <h2 class="text-3xl text-gray-800 ">${t}</h2>
        </div>
        <div class="md:w-3/4  leading-loose text-sm space-y-6">
          ${s}
        </div>
      </div>
    </section>
  `}function n(){const t=i.intro.content.map(s=>`<p>${s}</p>`).join("");return o({title:i.intro.title,content:t,className:"bg-[#F4F3F1]"})}function d(){const t=`
    <p class="font-bold text-gray-800 mb-4">${i.philosophy.subtitle}</p>
    ${i.philosophy.content.map(s=>`<p>${s}</p>`).join("")}
  `;return o({title:i.philosophy.title,content:t,className:"bg-white"})}const p="https://placehold.co/600x400/e2e8f0/475569?text=Map+Placeholder";function r(){const{info:t,transport:s}=i.contact,l=`
    <div class="mb-12">
      <img src="${p}" alt="Location Map" class="w-full rounded-lg shadow-sm mb-8">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 class="text-xl text-gray-800 mb-6">聯絡方式</h3>
        <div class="space-y-2 ">
          <p>電話 : ${t.tel}</p>
          <p>傳真 : ${t.fax}</p>
          <p>地址 : ${t.address}</p>
        </div>
      </div>

      <div>
        <h3 class="text-xl text-gray-800 mb-6">交通資訊</h3>
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
              ${s.parking.map(a=>`<li>${a}</li>`).join("")}
            </ul>
          </div>
          <div>
            <p class="font-bold mb-1">公車 :</p>
            <ul class="list-disc list-inside pl-2">
              ${s.bus.map(a=>`<li>${a}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;return o({title:i.contact.title,content:l,className:"bg-white"})}const m=document.getElementById("app");m.innerHTML=`
  <div class="">
    ${e()}
    
    <!-- Spacer for fixed header -->
    <div class="h-24 bg-[#4A4A4A]"></div>

    ${n()}
    ${d()}
    ${r()}
    
    ${c()}
  </div>
`;
