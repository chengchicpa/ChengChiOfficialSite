import { aboutPageData } from '../data/content';
import { AboutLayout } from './AboutLayout';

export function AboutFirm() {
    const contentHtml = aboutPageData.intro.content.map(p => `<p>${p}</p>`).join('');

    return AboutLayout({
        title: aboutPageData.intro.title,
        subtitle: "About",
        content: contentHtml,
        className: "bg-[#F4F3F1]"
    });
}
