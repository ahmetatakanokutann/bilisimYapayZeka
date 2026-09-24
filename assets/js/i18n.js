/**
 * i18n.js - Language management and translation utilities
 */

const i18n = {
  getLang: () => {
    const urlParams = typeof window !== 'undefined' && window.location ? new URLSearchParams(window.location.search).get('lang') : null;
    return urlParams || localStorage.getItem('lang') || window.SITE?.defaultLang || 'tr';
  },
  
  setLang: (lang) => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    i18n.updateUI();
  },

  t: (obj) => {
    if (!obj) return '';
    const lang = i18n.getLang();
    return obj[lang] || obj['tr'] || '';
  },

  loadSiteData: async () => {
    try {
      const response = await fetch('data/site.json');
      window.SITE.data = await response.json();
    } catch (error) {
      console.error('Error loading site data:', error);
    }
  },

  applyI18n: () => {
    const lang = i18n.getLang();
    document.documentElement.lang = lang;
    
    // Translate static strings with [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = window.SITE.data?.strings?.[key];
      if (translation) {
        el.textContent = i18n.t(translation);
      }
    });

    // Translate attributes like [data-i18n-placeholder]
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = window.SITE.data?.strings?.[key];
      if (translation) {
        el.setAttribute('placeholder', i18n.t(translation));
      }
    });
  },

  updateUI: () => {
    // Trigger language change event which coordinates single-pass re-render
    window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: i18n.getLang() } }));
  }
};

window.i18n = i18n;
