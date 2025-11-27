import{d as i,c as o,H as c,F as e}from"./Footer-C53rg2lT.js";function a({title:t,content:s,className:l=""}){return`
    <section class="py-20 ${l}">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/4">
          <h2 class="text-3xl">${t}</h2>
        </div>
        <div class="md:w-3/4 leading-loose space-y-6">
          ${s}
        </div>
      </div>
    </section>
  `}function n(){const t=i.intro.content.map(s=>`<p>${s}</p>`).join("");return a({title:i.intro.title,content:t,className:"bg-[#F4F3F1]"})}function d(){const t=`
    <p class="font-bold mb-4">${i.philosophy.subtitle}</p>
    ${i.philosophy.content.map(s=>`<p>${s}</p>`).join("")}
  `;return a({title:i.philosophy.title,content:t,className:"bg-white"})}const p="https://placehold.co/600x400/e2e8f0/475569?text=Map+Placeholder";function m(){const{transport:t}=i.contact,s=`
    <div class="mb-12">
      <img src="${p}" alt="Location Map" class="w-full rounded-lg shadow-sm mb-8">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 class="text-xl mb-6">聯絡方式</h3>
        <div class="space-y-2 ">
          <p>電話：${o.tel}</p>
          <p>傳真：${o.fax}</p>
          <p>地址：${o.address}</p>
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
  `;return a({title:i.contact.title,content:s,className:"bg-white"})}const r=document.getElementById("app");r.innerHTML=`
  <div class="">
    ${c()}
    
    <!-- Spacer for fixed header -->
    <div class="h-16"></div>

    ${n()}
    ${d()}
    ${m()}
    
    ${e()}
  </div>
`;
