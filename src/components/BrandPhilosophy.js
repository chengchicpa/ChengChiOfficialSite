import { aboutPageData } from '../data/content';
import { SectionLayout } from './SectionLayout';

export function BrandPhilosophy() {
    const contentHtml = `
    <p class="font-bold mb-4">${aboutPageData.philosophy.subtitle}</p>
    ${aboutPageData.philosophy.content.map(p => `<p>${p}</p>`).join('')}
  `;

    return SectionLayout({
        title: aboutPageData.philosophy.title,
        content: contentHtml,
        className: "bg-white"
    });
}
