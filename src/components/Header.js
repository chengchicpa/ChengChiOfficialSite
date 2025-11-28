import { companyInfo, navLinks, teamData } from '../data/content';

export function Header() {
  const renderNavItem = (link) => {
    if (link.name === "專業諮詢") {
      const dropdownItems = teamData.map(member =>
        `<a href="${member.id}.html" class="block px-4 pt-2 pb-4 hover:bg-[#F4F3F1] hover:text-[#B77449]">${member.name}${member.role}</a>`
      ).join('');

      return `
        <div class="relative group">
          <button class="font-bold w-full md:w-auto block py-2 md:py-0 hover:text-[#B77449] flex items-center gap-1 focus:outline-none cursor-pointer" id="desktop-dropdown-btn">
            ${link.name}
            <svg class="w-4 h-4 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <!-- Desktop Dropdown -->
          <div class="hidden md:absolute left-0 mt-2 w-48 bg-white rounded-sm shadow-lg py-1 z-50 border border-gray-100" id="desktop-dropdown-menu">
            ${dropdownItems}
          </div>
          <!-- Mobile Dropdown (initially hidden) -->
          <div class="md:hidden hidden pl-4 space-y-2 mt-2" id="mobile-dropdown">
            ${dropdownItems}
          </div>
        </div>
      `;
    }
    return `<a href="${link.href}" class="font-bold block py-2 md:py-0 hover:text-[#B77449]">${link.name}</a>`;
  };

  const navItems = navLinks.map(renderNavItem).join('');

  return `
    <header class="fixed top-0 left-0 right-0 z-50 shadow-sm bg-white/90 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <a href="index.html#top">
            <img src="${companyInfo.logoHorizon}" alt="${companyInfo.name}" class="h-10 w-auto">
          </a>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-8 tracking-wide items-center mb-3">
          ${navItems}
        </nav>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="md:hidden p-2 text-[#B77449] hover:text-gray-900 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg h-screen z-100">
        <nav class="flex flex-col px-6 py-4 space-y-2">
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

    // Mobile Dropdown Toggle
    const dropdownBtns = menu.querySelectorAll('button');
    dropdownBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = btn.nextElementSibling;
        if (dropdown) {
          dropdown.classList.toggle('hidden');
        }
      });
    });

    // Close menu when clicking a link (but not the dropdown toggle)
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
    // Desktop Dropdown Toggle
    const desktopBtn = document.getElementById('desktop-dropdown-btn');
    const desktopMenu = document.getElementById('desktop-dropdown-menu');

    if (desktopBtn && desktopMenu) {
      desktopBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        desktopMenu.classList.toggle('hidden');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!desktopBtn.contains(e.target) && !desktopMenu.contains(e.target)) {
          desktopMenu.classList.add('hidden');
        }
      });
    }
  }
}
