import{f as l,c as s,H as e,F as n,L as d,d as c,e as p}from"./loading-BvVxzmO-.js";import{A as i}from"./AboutLayout-Bto-DCxD.js";function r(){const t=l.intro.content.map(a=>`<p>${a}</p>`).join("");return i({title:l.intro.title,subtitle:"About",content:t,className:"bg-[#F4F3F1]"})}function m(){const t=`
    <p class="text-xl font-bold mb-4 pl-5 border-l-3 border-[#B77449]">${l.philosophy.subtitle}</p>
    ${l.philosophy.content.map(a=>`<p>${a}</p>`).join("")}
  `;return i({title:l.philosophy.title,subtitle:"Brand",content:t,className:"bg-white"})}function b(){const{transport:t}=l.contact,a=`
    <div class="mb-12">
      <iframe class="shadow-sm rounded-sm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5465708468123!2d121.53025354053948!3d25.04945747059941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a961627ae309%3A0x8dc90bdaecb4c39f!2zMTA0OTHoh7rljJfluILkuK3lsbHljYDmnb7msZ_ot683MeiZnw!5e0!3m2!1szh-TW!2stw!4v1764224304339!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h3 class="text-xl font-bold mb-4">聯絡方式</h3>
        <div class="space-y-2 ">
          <p><span class="font-bold">電話：</span><a href="tel:${s.tel}">${s.tel}</a></p>
          <p><span class="font-bold">傳真：</span><span class="text-[#B77449]">${s.fax}</span></p>
          <p><span class="font-bold">Email：</span><a href="mailto:${s.email}">${s.email}</a></p>
          <p><span class="font-bold">地址：</span><a href="${s.googleMapLink}" target="_blank">${s.address}</a></p>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-4">交通資訊</h3>
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
              ${t.parking.map(o=>`<li>${o}</li>`).join("")}
            </ul>
          </div>
          <div>
            <p class="font-bold mb-1">公車 :</p>
            <ul class="list-disc list-inside pl-2">
              ${t.bus.map(o=>`<li>${o}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;return i({title:l.contact.title,subtitle:"Contact",content:a,className:"bg-[#F4F3F1]"})}const f=document.getElementById("app");f.innerHTML=`
  <div class="">
    ${e()}
    
    <!-- Spacer for fixed header -->
    <div class="h-16"></div>

    ${r()}
    ${m()}
    ${b()}
    
    ${n()}
    ${d}
  </div>
`;c();p();
