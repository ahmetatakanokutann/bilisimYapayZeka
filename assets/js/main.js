/**
 * main.js - Application Entry Point
 */

document.addEventListener('DOMContentLoaded', async () => {
  console.log('Yeditepe AI Website - Initializing...');

  // 1. Load configuration and site data
  await window.i18n.loadSiteData();

  // 2. Initialize UI Components (Header/Footer)
  window.components.renderHeader();
  window.components.renderFooter();

  // 3. Initialize Page Specific Content
  await initPageContent();

  // 4. Apply static translations
  window.i18n.applyI18n();

  // 5. Initialize Animations
  initAnimations();

  console.log('Yeditepe AI Website - Ready.');
});

/**
 * Unified Page Content Initialization
 */
async function initPageContent() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  console.log('Rendering page:', path);

  if (path === 'index.html' || path === '') {
    await window.render.initHome();
  } else if (path === 'hakkimizda.html') {
    await window.render.renderAbout();
  } else if (path === 'arastirma.html') {
    await window.render.renderResearchPage();
  } else if (path === 'projeler.html') {
    await window.render.renderProjects();
  } else if (path === 'ekip.html') {
    await window.render.renderTeam();
  } else if (path === 'haberler.html') {
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('id');
    if (newsId) await window.render.renderNewsDetail(newsId);
    else await window.render.renderNewsList();
  } else if (path === 'iletisim.html') {
    await window.render.renderContact();
  }
  await window.render.renderGalleries();
  
  // Ensure icons are created for newly rendered content
  if (window.lucide) {
    lucide.createIcons();
  }
}

/**
 * Handle Language Changes
 */
window.addEventListener('langChanged', async () => {
  // Re-render components
  window.components.renderHeader();
  window.components.renderFooter();
  
  // Re-render page specific content
  await initPageContent();
  
  // Re-apply static translations
  window.i18n.applyI18n();

  // Re-initialize animations
  initAnimations();
});

/**
 * Global Animations using IntersectionObserver
 */
function initAnimations() {
  const elements = document.querySelectorAll('.card, .section h2:not(.card *), .section p:not(.card *), .dark-section > div');
  
  if (typeof IntersectionObserver === 'undefined') {
    elements.forEach(el => el.classList.add('fade-up-active'));
    return;
  }

  const observerOptions = {
    threshold: 0.05,
    rootMargin: '100px 0px 100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up-active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => {
    if (el.classList.contains('fade-up-active')) return;
    el.classList.add('fade-up');
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200 && rect.bottom > -200) {
      el.classList.add('fade-up-active');
    } else {
      observer.observe(el);
    }
  });
}
