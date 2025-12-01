import { companyInfo, navLinks, teamData } from '../data/content';

export function Header() {
  const renderNavItem = (link) => {
    if (link.name === "專業諮詢") {
      const dropdownItems = teamData.map(member =>
        `<a href="${member.id}.html" class="block px-4 pt-3 pb-2 bg-[#F4F3F1] md:bg-white hover:bg-[#F4F3F1] hover:text-[#B77449]">${member.name}${member.role}</a>`
      ).join('');

      return `
        <div class="relative group">
          <button class="font-bold w-full md:w-auto block py-2 mt-1 md:py-0 hover:text-[#B77449] flex justify-center md:justify-start items-center gap-1 focus:outline-none cursor-pointer dropdown-toggle">
            ${link.name}
            <svg class="w-4 h-4 pb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <!-- Unified Dropdown -->
          <div class="hidden mt-2 space-y-0 md:absolute md:left-0 md:top-full md:mt-2 md:w-48 md:bg-white md:rounded-sm md:shadow-lg md:py-1 md:z-50 md:border md:border-gray-100 md:pl-0 md:space-y-0 dropdown-menu">
            ${dropdownItems}
          </div>
        </div>
      `;
    }
    return `<a href="${link.href}" class="font-bold block py-2 mt-1 md:py-0 hover:text-[#B77449]">${link.name}</a>`;
  };

  const navItems = navLinks.map(renderNavItem).join('');

  return `
    <div id="progressbar"></div>
    <header class="fixed top-0 left-0 right-0 z-50 shadow-sm bg-white/90 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <a href="index.html#top">
            <img src="${companyInfo.logoHorizon}" alt="${companyInfo.name}" class="h-10 w-auto">
          </a>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-8 tracking-wide items-center">
          ${navItems}
        </nav>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="md:hidden p-2 text-[#6D5F56] hover:text-[#B77449] focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg h-screen z-100">
        <nav class="flex flex-col px-6 py-4 space-y-2 text-center text-lg md:text-base md:text-left">
          ${navItems}
        </nav>
      </div>
    </header>
  `;
}

export function setupHeader() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Unified Dropdown Toggle
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const menu = toggle.nextElementSibling;
        if (menu) {
          menu.classList.toggle('hidden');
        }
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      dropdownToggles.forEach(toggle => {
        const menu = toggle.nextElementSibling;
        if (menu && !menu.classList.contains('hidden')) {
          if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.add('hidden');
          }
        }
      });
    });
  }
}
