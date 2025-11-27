import { aboutPageData } from '../data/content';
import { SectionLayout } from './SectionLayout';
import { companyInfo } from '../data/content';

// Placeholder map image since generation failed/skipped
const mapPlaceholder = "https://placehold.co/600x400/e2e8f0/475569?text=Map+Placeholder";

export function ContactSection() {
    const { transport } = aboutPageData.contact;

    const contentHtml = `
    <div class="mb-12">
      <img src="${mapPlaceholder}" alt="Location Map" class="w-full rounded-lg shadow-sm mb-8">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 class="text-xl mb-6">聯絡方式</h3>
        <div class="space-y-2 ">
          <p>電話：${companyInfo.tel}</p>
          <p>傳真：${companyInfo.fax}</p>
          <p>地址：${companyInfo.address}</p>
        </div>
      </div>

      <div>
        <h3 class="text-xl mb-6">交通資訊</h3>
        <div class="space-y-6 ">
          <div>
            <p class="font-bold mb-1">捷運 :</p>
            <ul class="list-disc list-inside pl-2">
              <li>${transport.mrt}</li>
            </ul>
          </div>
          <div>
            <p class="font-bold mb-1">停車場 :</p>
            <ul class="list-disc list-inside pl-2">
              ${transport.parking.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
          <div>
            <p class="font-bold mb-1">公車 :</p>
            <ul class="list-disc list-inside pl-2">
              ${transport.bus.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

    return SectionLayout({
        title: aboutPageData.contact.title,
        content: contentHtml,
        className: "bg-white"
    });
}
