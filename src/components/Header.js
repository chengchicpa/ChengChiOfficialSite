import { companyInfo, navLinks } from '../data/content';

export function Header() {
  const navItems = navLinks.map(link =>
    `<a href="${link.href}" class="font-bold transition">${link.name}</a>`
  ).join('');

  return `
    <header class="fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <a href="index.html#top">
            <img src="${companyInfo.logoHorizon}" alt="${companyInfo.name}" class="h-10 w-auto">
          </a>
        </div>
        <nav class="hidden md:flex space-x-8 tracking-wide">
          ${navItems}
        </nav>
      </div>
    </header>
  `;
}
