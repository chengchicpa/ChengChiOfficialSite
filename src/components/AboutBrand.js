import { aboutPageData } from '../data/content';
import { AboutLayout } from './AboutLayout';

export function AboutBrand() {
  const contentHtml = `
    <p class="text-xl font-bold mb-4 pl-5 pb-3 border-l-3 border-[#B77449]">${aboutPageData.philosophy.subtitle}</p>
    ${aboutPageData.philosophy.content.map(p => `<p>${p}</p>`).join('')}
  `;

  return AboutLayout({
    title: aboutPageData.philosophy.title,
    subtitle: "Brand Philosophy",
    content: contentHtml,
    className: "bg-white"
  });
}
