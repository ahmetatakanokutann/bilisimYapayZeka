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
});

/**
 * Global Animations using IntersectionObserver
 */
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up-active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Selector for elements to animate
  document.querySelectorAll('.card, .section h2, .section p, .dark-section div').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
}
