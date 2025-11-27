import { aboutPageData } from '../data/content';
import { SectionLayout } from './SectionLayout';
import { companyInfo } from '../data/content';

// Placeholder map image since generation failed/skipped
const mapPlaceholder = "https://placehold.co/600x400/e2e8f0/475569?text=Map+Placeholder";

export function ContactSection() {
  const { transport } = aboutPageData.contact;

  const contentHtml = `
    <div class="mb-12">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5465708468123!2d121.53025354053948!3d25.04945747059941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a961627ae309%3A0x8dc90bdaecb4c39f!2zMTA0OTHoh7rljJfluILkuK3lsbHljYDmnb7msZ_ot683MeiZnw!5e0!3m2!1szh-TW!2stw!4v1764224304339!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
