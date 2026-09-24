/**
 * components.js - Shared UI components (Header, Footer, Mobile Menu)
 */

const components = {
  renderHeader: () => {
    const headerEl = document.getElementById('site-header');
    if (!headerEl) return;
    // Dil değişiminde açık mobil menünün kaydırma kilidini temizle.
    document.body.style.overflow = '';

    const data = window.SITE.data;
    const currentLang = window.i18n.getLang();
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    const navItems = data.nav.map(item => `
      <a href="${item.href}" 
         class="text-sm font-medium transition-colors hover:text-[--c-accent] ${currentPath === item.href ? 'text-[--c-accent]' : 'text-[--c-text]'}"
         ${currentPath === item.href ? 'aria-current="page"' : ''}>
        ${window.i18n.t(item.label)}
      </a>
    `).join('');

    headerEl.innerHTML = `
      <header class="sticky top-0 z-50 w-full border-b border-[--c-border] bg-white/80 backdrop-blur-md">
        <div class="max-w-screen-2xl mx-auto px-5 md:px-8 relative flex items-center justify-between h-20 md:h-24">
          <!-- Logo/Brand (Left) -->
          <a href="index.html" class="site-brand shrink-0 flex items-center group relative z-50">
            <img src="${window.i18n.t(data.brand.logo)}"
                 alt="${window.i18n.t(data.brand.full)}"
                 class="site-logo">
          </a>

          <!-- Desktop Nav (Centered, Absolute) -->
          <nav class="hidden xl:flex items-center gap-5 ml-auto mr-6">
            ${navItems}
          </nav>

          <!-- Right Actions (TR|EN + Hamburger) -->
          <div class="shrink-0 flex items-center gap-2 ml-auto xl:ml-0 relative z-50">
            <!-- Lang Switcher -->
            <div class="flex items-center border border-[--c-border] rounded-full px-1 py-1">
              <button onclick="window.i18n.setLang('tr')" 
                      class="px-3 py-1 text-xs rounded-full transition-all ${currentLang === 'tr' ? 'bg-[--c-navy] text-white' : 'text-[--c-muted] hover:text-[--c-text]'}">TR</button>
              <button onclick="window.i18n.setLang('en')" 
                      class="px-3 py-1 text-xs rounded-full transition-all ${currentLang === 'en' ? 'bg-[--c-navy] text-white' : 'text-[--c-muted] hover:text-[--c-text]'}">EN</button>
            </div>

            <!-- Mobile Menu Toggle (Visible below XL) -->
            <button id="mobile-menu-toggle" class="xl:hidden p-2 text-[--c-text]" aria-label="Menu" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>

      </header>
        <!-- Panel, backdrop-filter içeren başlığın dışında kalır. -->
        <div id="mobile-menu" class="hidden fixed inset-x-0 top-20 md:top-24 bottom-0 z-40 bg-white xl:hidden overflow-y-auto py-8 px-8">
           <nav class="flex flex-col gap-6 text-xl">
             ${navItems.replace(/text-sm/g, 'text-2xl')}
           </nav>
        </div>
    `;

    // Re-bind mobile menu events
    components.initMobileMenu();
  },

  renderFooter: () => {
    const footerEl = document.getElementById('site-footer');
    if (!footerEl) return;

    const data = window.SITE.data;
    const currentLang = window.i18n.getLang();

    footerEl.innerHTML = `
      <footer class="dark-section py-16 mt-auto">
        <div class="container grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Brand & Info -->
          <div class="md:col-span-2">
            <h3 class="text-2xl mb-4 text-white">${data.brand.short}</h3>
            <p class="text-[--c-on-dark] max-w-md mb-6 leading-relaxed">
              ${window.i18n.t(data.brand.full)}
            </p>
            <p class="text-[--c-on-dark] opacity-70">
              ${window.i18n.t(data.contact.address)}
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-white font-semibold mb-6 uppercase tracking-wider text-sm" data-i18n="nav_title">Menü</h4>
            <ul class="flex flex-col gap-3">
              ${data.nav.slice(1).map(item => `
                <li><a href="${item.href}" class="text-[--c-on-dark] hover:text-white transition-colors">${window.i18n.t(item.label)}</a></li>
              `).join('')}
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-white font-semibold mb-6 uppercase tracking-wider text-sm" data-i18n="contact_title">İletişim</h4>
            <ul class="flex flex-col gap-3 text-[--c-on-dark]">
              ${data.contact.people.map(person => `
                <li><span class="block text-sm mb-1">${person.name}</span><a href="mailto:${person.email}" class="break-words hover:text-white transition-colors">${person.email}</a></li>
              `).join('')}
              ${data.contact.phone ? `<li><a href="tel:${data.contact.phone.replace(/\s/g, '')}" class="hover:text-white transition-colors">${data.contact.phone}</a></li>` : ''}
            </ul>
          </div>
        </div>

        <div class="container border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[--c-on-dark] opacity-60">
          <p>© ${new Date().getFullYear()} Yeditepe Üniversitesi - Bilişim ve Yapay Zeka Uygulama ve Araştırma Merkezi</p>
          <div class="flex gap-6">
            <a href="#" class="hover:text-white transition-colors">KVKK</a>
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    `;
    
    // Final apply for static keys in footer
    window.i18n.applyI18n();
  },

  initMobileMenu: () => {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      menu.classList.toggle('hidden');
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
      
      // Change icon
      toggle.innerHTML = !isExpanded 
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
    });

    // Close menu on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        toggle.click();
      }
    });
  }
};

window.components = components;
