/**
 * render.js - JSON to DOM rendering logic
 */

const render = {
  _cache: {}, // Simple in-memory cache

  // Belgedeki ekosistem görseli, okunabilir metin karşılığıyla birlikte sunulur.
  renderEcosystem: async () => {
    const target = document.getElementById('ecosystem-content');
    if (!target) return;
    const data = await render.fetchData('data/ecosystem.json');
    if (!data) return;
    target.innerHTML = `
      <div>
        <p class="text-sm font-semibold uppercase tracking-widest text-[--c-accent] mb-4">${window.i18n.t(data.subtitle)}</p>
        <h2 id="ecosystem-title" class="text-4xl md:text-5xl text-[--c-navy] mb-6">${data.title}</h2>
        <p class="text-lg text-[--c-muted] leading-relaxed mb-8">${window.i18n.t(data.desc)}</p>
        <ul class="ecosystem-pillars">${data.pillars.map((pillar, i) => `<li><span aria-hidden="true">${i + 1}</span>${window.i18n.t(pillar)}</li>`).join('')}</ul>
        <a href="iletisim.html" class="btn-primary mt-8" data-i18n="hero_secondary_cta"></a>
      </div>
      <figure class="ecosystem-figure">
        <a href="${data.image}" target="_blank" rel="noopener" aria-label="${window.i18n.t(window.SITE.data.strings.view_image)}">
          <img src="${data.image}" alt="${window.i18n.t(data.alt)}" width="902" height="797" >
        </a>
        <figcaption class="text-sm text-[--c-muted] leading-relaxed mt-4" data-i18n="ecosystem_caption"></figcaption>
        <a href="${data.image}" target="_blank" rel="noopener" class="inline-block text-sm font-semibold text-[--c-accent] mt-3" data-i18n="view_image"></a>
      </figure>`;
  },

  // Fotoğraf Galerileri: Açıklamaları ve yüksek çözünürlüklü görselleriyle dinamik kartlar
  renderGalleries: async () => {
    const targets = document.querySelectorAll('[data-gallery]');
    if (!targets.length) return;
    const data = await render.fetchData('data/gallery.json');
    if (!data) return;
    targets.forEach(target => {
      const items = data.filter(item => item.category === target.dataset.gallery);
      target.innerHTML = items.map(item => `
        <figure class="gallery-card">
          <a href="${item.image}" target="_blank" rel="noopener" aria-label="${window.i18n.t(item.title)} — ${window.i18n.t(window.SITE.data.strings.view_image)}">
            <img src="${item.image}" alt="${window.i18n.t(item.title)}">
          </a>
          <figcaption>
            <h3 class="text-xl font-bold text-[--c-navy] mb-3">${window.i18n.t(item.title)}</h3>
            <p class="text-sm text-[--c-muted] leading-relaxed">${window.i18n.t(item.caption)}</p>
          </figcaption>
        </figure>`).join('');
    });
  },

  // Helper to fetch data safely with caching
  fetchData: async (path) => {
    if (render._cache[path]) return render._cache[path];
    try {
      const response = await fetch(path);
      const data = await response.json();
      render._cache[path] = data;
      return data;
    } catch (err) {
      console.error(`Error fetching ${path}:`, err);
      return null;
    }
  },

  /**
   * Contact Page: Render Info and Form handling
   */
  renderContact: async () => {
    const infoTarget = document.getElementById('contact-info-list');
    if (!infoTarget) return;

    const data = await render.fetchData('data/site.json');
    if (!data) return;

    const contact = data.contact;
    infoTarget.innerHTML = `
      <div class="flex items-start gap-6">
        <div class="w-12 h-12 rounded-xl bg-[--c-surface] flex items-center justify-center text-[--c-accent] shrink-0">
          <i data-lucide="map-pin"></i>
        </div>
        <div>
          <h4 class="font-bold text-[--c-navy] mb-1" data-i18n="contact_address_label">Adres</h4>
          <p class="text-[--c-muted] leading-relaxed">${window.i18n.t(contact.address)}</p>
        </div>
      </div>
      <div class="flex items-start gap-6">
        <div class="w-12 h-12 rounded-xl bg-[--c-surface] flex items-center justify-center text-[--c-accent] shrink-0">
          <i data-lucide="mail"></i>
        </div>
        <div class="min-w-0">
          <h4 class="font-bold text-[--c-navy] mb-1" data-i18n="contact_email_label">E-posta</h4>
          ${contact.people.map(person => `
            <div class="mt-4">
              <p class="font-medium text-[--c-navy] mb-1">${person.name}</p>
              <a href="mailto:${person.email}" class="break-words text-[--c-muted] hover:text-[--c-accent] transition-colors">${person.email}</a>
            </div>
          `).join('')}
        </div>
      </div>
      ${contact.phone ? `<div class="flex items-start gap-6">
        <div class="w-12 h-12 rounded-xl bg-[--c-surface] flex items-center justify-center text-[--c-accent] shrink-0">
          <i data-lucide="phone"></i>
        </div>
        <div>
          <h4 class="font-bold text-[--c-navy] mb-1" data-i18n="contact_phone_label">Telefon</h4>
          <a href="tel:${contact.phone.replace(/\s/g, '')}" class="text-[--c-muted] hover:text-[--c-accent] transition-colors">${contact.phone}</a>
        </div>
      </div>` : ''}
    `;

    // Map Embed
    const mapContainer = document.getElementById('map-container');
    if (mapContainer && contact.mapEmbed) {
      mapContainer.innerHTML = contact.mapEmbed;
      const iframe = mapContainer.querySelector('iframe');
      if (iframe) {
        iframe.className = "w-full h-full grayscale border-0";
        iframe.loading = "lazy";
      }
    }

    // Form logic
    const form = document.getElementById('contact-form');
    if (form && !render._formBound) {
      form.onsubmit = async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const statusEl = document.getElementById('form-status');
        
        submitBtn.disabled = true;
        statusEl.className = "mt-6 p-4 rounded-xl text-sm hidden";
        
        const formData = new FormData(form);
        const endpoint = contact.formspreeUrl || "#"; 

        try {
          if (endpoint === "#") throw new Error("no-endpoint");
          
          const response = await fetch(endpoint, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          });

          if (response.ok) {
            statusEl.textContent = window.i18n.t(window.SITE.data.strings.form_success);
            statusEl.classList.remove('hidden', 'bg-red-50', 'text-red-800');
            statusEl.classList.add('bg-green-50', 'text-green-800');
            form.reset();
          } else {
            throw new Error();
          }
        } catch (err) {
          statusEl.textContent = window.i18n.t(window.SITE.data.strings.form_error);
          statusEl.classList.remove('hidden', 'bg-green-50', 'text-green-800');
          statusEl.classList.add('bg-red-50', 'text-red-800');
        } finally {
          submitBtn.disabled = false;
        }
      };
      render._formBound = true;
    }

    lucide.createIcons();
  },

  /**
   * Homepage: Research Focus Areas
   */
  renderResearch: async () => {
    const target = document.getElementById('research-grid');
    if (!target) return;

    const data = await render.fetchData('data/research.json');
    target.innerHTML = data.map(item => `
      <div class="card flex flex-col items-start gap-4">
        <div class="w-12 h-12 rounded-xl bg-[--c-surface] flex items-center justify-center text-[--c-accent]">
          <i data-lucide="${item.icon}"></i>
        </div>
        <h3 class="text-xl font-bold">${window.i18n.t(item.title)}</h3>
        <p class="text-[--c-muted] leading-relaxed">${window.i18n.t(item.desc)}</p>
      </div>
    `).join('');
    
    lucide.createIcons();
  },

  /**
   * Homepage: Featured Projects
   */
  renderFeaturedProjects: async () => {
    const target = document.getElementById('featured-projects');
    if (!target) return;
    const section = target.closest('section');

    const [projects, research] = await Promise.all([
      render.fetchData('data/projects.json'),
      render.fetchData('data/research.json')
    ]);

    if (!projects || projects.length === 0) {
      if (section) section.style.display = 'none';
      return;
    } 
    
    if (section) section.style.display = '';

    target.innerHTML = projects.slice(0, 3).map(item => {
      const tagBadges = item.tags.map(tagId => {
        const researchItem = research.find(r => r.id === tagId);
        const label = researchItem ? window.i18n.t(researchItem.title) : tagId;
        return `<span class="px-3 py-1 bg-[--c-surface] text-[--c-navy] text-xs font-medium rounded-full">${label}</span>`;
      }).join('');

      return `
        <div class="card overflow-hidden !p-0 flex flex-col h-full group cursor-pointer hover:border-[--c-accent]" onclick="window.render.openProjectModal('${item.id}')">
          <div class="aspect-video overflow-hidden">
            <img src="${item.image}" alt="${window.i18n.t(item.title)}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <div class="flex flex-wrap gap-2 mb-4">${tagBadges}</div>
            <h3 class="text-xl font-bold mb-3 group-hover:text-[--c-accent] transition-colors">${window.i18n.t(item.title)}</h3>
            <p class="text-[--c-muted] text-sm leading-relaxed mb-6 flex-grow">${window.i18n.t(item.summary)}</p>
            <div class="flex items-center justify-between pt-6 border-t border-[--c-border]">
               <span class="text-xs font-semibold uppercase tracking-wider text-[--c-muted]">${item.partner}</span>
               <span class="text-xs font-medium text-[--c-accent]">${window.i18n.t(item.status)}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    lucide.createIcons();
  },

  /**
   * Homepage: Partners Strip
   */
  renderPartners: async () => {
    const target = document.getElementById('partners-track');
    if (!target) return;

    const data = await render.fetchData('data/partners.json');
    target.innerHTML = data.map(item => `
      <a href="${item.url}" target="_blank" rel="noopener" class="h-12 md:h-16 flex items-center justify-center p-2" title="${item.name}">
        <img src="${item.logo}" alt="${item.name}" class="h-full w-auto object-contain">
      </a>
    `).join('');
  },

  /**
   * Homepage: Latest News
   */
  renderLatestNews: async () => {
    const target = document.getElementById('latest-news');
    if (!target) return;

    const data = await render.fetchData('data/news.json');
    target.innerHTML = data.slice(0, 2).map(item => {
      const date = new Date(item.date).toLocaleDateString(window.i18n.getLang(), {
        year: 'numeric', month: 'long', day: 'numeric'
      });

      return `
        <a href="haberler.html?id=${item.id}" class="group block border-b border-[--c-border] pb-8 transition-colors hover:border-[--c-accent]">
          <span class="text-sm font-medium text-[--c-accent] mb-4 block uppercase tracking-widest">${date}</span>
          <h3 class="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[--c-navy] transition-colors leading-tight">
            ${window.i18n.t(item.title)}
          </h3>
          <p class="text-[--c-muted] line-clamp-2 leading-relaxed">${window.i18n.t(item.excerpt)}</p>
          <div class="mt-6 flex items-center text-sm font-semibold text-[--c-navy] group-hover:gap-2 transition-all">
            <span data-i18n="read_more">Devamını Oku</span>
            <i data-lucide="arrow-right" class="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"></i>
          </div>
        </a>
      `;
    }).join('');
    
    lucide.createIcons();
  },

  /**
   * About Page: Render All Sections
   */
  renderAbout: async () => {
    const data = await render.fetchData('data/about.json');
    if (!data) return;

    const introEl = document.getElementById('about-intro');
    if (introEl) introEl.textContent = window.i18n.t(data.intro);

    const missionEl = document.getElementById('about-mission');
    if (missionEl) missionEl.textContent = window.i18n.t(data.mission);
    const visionEl = document.getElementById('about-vision');
    if (visionEl) visionEl.textContent = window.i18n.t(data.vision);

    const unitsGrid = document.getElementById('units-grid');
    if (unitsGrid) {
      unitsGrid.innerHTML = data.units.map(unit => `
        <div class="card hover:border-[--c-accent] transition-colors">
          <h3 class="text-xl font-bold mb-4 text-[--c-navy]">${window.i18n.t(unit.title)}</h3>
          <p class="text-[--c-muted] text-sm leading-relaxed">${window.i18n.t(unit.desc)}</p>
        </div>
      `).join('');
    }

    const eventTitle = document.getElementById('event-title');
    if (eventTitle) eventTitle.textContent = window.i18n.t(data.event.title);
    const eventDesc = document.getElementById('event-desc');
    if (eventDesc) eventDesc.textContent = window.i18n.t(data.event.desc);

    const participantsList = document.getElementById('event-participants');
    if (participantsList) {
      participantsList.innerHTML = data.event.participants.map(p => `
        <li class="flex flex-col">
          <span class="font-bold text-[--c-text]">${p.name}</span>
          <span class="text-xs text-[--c-muted]">${window.i18n.t(p.title)}</span>
        </li>
      `).join('');
    }

    if (window.initAnimations) window.initAnimations();
    lucide.createIcons();
  },

  /**
   * Research Page: Render Focus Areas with rich cards
   */
  renderResearchPage: async () => {
    const target = document.getElementById('research-page-grid');
    if (!target) return;

    const data = await render.fetchData('data/research.json');
    target.innerHTML = data.map(item => `
      <div class="card p-8 md:p-12 flex flex-col items-start gap-6 border-none bg-white shadow-xl hover:shadow-2xl">
        <div class="w-16 h-16 rounded-2xl bg-[--c-surface] flex items-center justify-center text-[--c-accent]">
          <i data-lucide="${item.icon}" class="w-8 h-8"></i>
        </div>
        <div>
          <h3 class="text-2xl md:text-3xl font-bold mb-4">${window.i18n.t(item.title)}</h3>
          <p class="text-lg text-[--c-muted] leading-relaxed mb-6">${window.i18n.t(item.desc)}</p>
          <div class="flex flex-wrap gap-3">
             <span class="px-4 py-2 bg-[--c-surface] rounded-lg text-sm font-medium text-[--c-navy]" data-i18n="research_applied">Uygulamalı Çözümler</span>
             <span class="px-4 py-2 bg-[--c-surface] rounded-lg text-sm font-medium text-[--c-navy]" data-i18n="research_academic">Akademik Derinlik</span>
          </div>
        </div>
      </div>
    `).join('');
    
    lucide.createIcons();
  },

  /**
   * Projects Page: Render with Filtering and Modal logic
   */
  renderProjects: async (filter = 'all') => {
    const target = document.getElementById('projects-page-grid');
    const filterSection = document.querySelector('section.py-12.bg-\\[--c-surface\\]');
    if (!target) return;

    const [projects, research] = await Promise.all([
      render.fetchData('data/projects.json'),
      render.fetchData('data/research.json')
    ]);

    if (!projects || projects.length === 0) {
      if (filterSection) filterSection.style.display = 'none';
      target.innerHTML = `
        <div class="col-span-full py-20 text-center">
          <div class="w-20 h-20 bg-[--c-surface] rounded-full flex items-center justify-center text-[--c-muted] mx-auto mb-6">
            <i data-lucide="folder-search" class="w-10 h-10"></i>
          </div>
          <p class="text-xl text-[--c-muted] max-w-xl mx-auto" data-i18n="projects_empty">
            Şu anda yayınlanmış bir proje bulunmuyor. Fraunhofer IOSB iş birliği kapsamındaki çalışmalarımız sürüyor; yakında burada paylaşacağız.
          </p>
        </div>
      `;
      lucide.createIcons();
      return;
    }

    if (filterSection) filterSection.style.display = '';

    const filteredProjects = projects.filter(p => {
      if (filter === 'all') return true;
      if (p.partner === filter) return true;
      if (p.tags.includes(filter)) return true;
      return false;
    });

    target.innerHTML = filteredProjects.map(item => {
      const tagBadges = item.tags.map(tagId => {
        const researchItem = research.find(r => r.id === tagId);
        const label = researchItem ? window.i18n.t(researchItem.title) : tagId;
        return `<span class="px-3 py-1 bg-[--c-surface] text-[--c-navy] text-xs font-medium rounded-full">${label}</span>`;
      }).join('');

      return `
        <div class="card overflow-hidden !p-0 flex flex-col h-full group cursor-pointer hover:border-[--c-accent]" onclick="window.render.openProjectModal('${item.id}')">
          <div class="aspect-video overflow-hidden">
            <img src="${item.image}" alt="${window.i18n.t(item.title)}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <div class="flex flex-wrap gap-2 mb-4">${tagBadges}</div>
            <h3 class="text-xl font-bold mb-3 group-hover:text-[--c-accent] transition-colors">${window.i18n.t(item.title)}</h3>
            <p class="text-[--c-muted] text-sm leading-relaxed mb-6 flex-grow">${window.i18n.t(item.summary)}</p>
            <div class="flex items-center justify-between pt-6 border-t border-[--c-border]">
               <span class="text-xs font-semibold uppercase tracking-wider text-[--c-muted]">${item.partner}</span>
               <span class="text-xs font-medium text-[--c-accent]">${window.i18n.t(item.status)}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    document.querySelectorAll('.filter-btn').forEach(btn => {
      if (btn.getAttribute('data-filter') === filter) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    if (!render._filtersBound) {
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.onclick = () => render.renderProjects(btn.getAttribute('data-filter'));
      });
      render._filtersBound = true;
    }

    lucide.createIcons();
  },

  /**
   * Project Detail Modal logic
   */
  openProjectModal: async (id) => {
    const lastTrigger = document.activeElement;
    const projects = await render.fetchData('data/projects.json');
    const research = await render.fetchData('data/research.json');
    const p = projects.find(item => item.id === id);
    if (!p) return;

    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-content');
    
    const tagBadges = p.tags.map(tagId => {
      const researchItem = research.find(r => r.id === tagId);
      const label = researchItem ? window.i18n.t(researchItem.title) : tagId;
      return `<span class="px-3 py-1 bg-[--c-surface] text-[--c-navy] text-xs font-medium rounded-full">${label}</span>`;
    }).join('');

    content.innerHTML = `
      <div class="flex flex-col md:flex-row gap-10 items-start">
        <div class="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-lg">
          <img src="${p.image}" alt="${window.i18n.t(p.title)}" class="w-full h-full object-cover">
        </div>
        <div class="w-full md:w-1/2">
          <div class="flex flex-wrap gap-2 mb-6">${tagBadges}</div>
          <h2 id="modal-title" class="text-3xl font-bold mb-4 text-[--c-navy]">${window.i18n.t(p.title)}</h2>
          <div class="flex items-center gap-4 mb-8">
            <span class="px-4 py-1.5 bg-[--c-navy] text-white text-xs font-bold rounded-lg uppercase tracking-widest">${p.partner}</span>
            <span class="text-sm font-medium text-[--c-accent]">${window.i18n.t(p.status)}</span>
          </div>
          <p class="text-lg text-[--c-muted] leading-relaxed mb-8">${window.i18n.t(p.summary)}</p>
          <div class="p-6 bg-[--c-surface] rounded-2xl">
            <h4 class="font-bold text-sm uppercase tracking-widest mb-4" data-i18n="project_details">Proje Detayları</h4>
            <p class="text-sm text-[--c-muted]" data-i18n="project_desc_placeholder">Bu proje, endüstriyel verimliliği artırmak ve sürdürülebilir teknoloji çözümleri sunmak amacıyla stratejik ortaklarımızla yürütülmektedir. Detaylı teknik dökümantasyon ve sonuç raporları onay sürecindedir.</p>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    const closeBtn = document.getElementById('modal-close');
    closeBtn.focus();

    const onKey = (e) => { if (e.key === 'Escape') close(); };
    const close = () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      if (lastTrigger) lastTrigger.focus();
    };
    
    closeBtn.onclick = close;
    modal.onclick = (e) => { if (e.target === modal) close(); };
    document.addEventListener('keydown', onKey);
    
    window.i18n.applyI18n();
    lucide.createIcons();
  },

  /**
   * Ekip sayfası: üyeleri veri dosyasındaki sırayla tek listede gösterir.
   */
  renderTeam: async () => {
    const target = document.getElementById('team-grid');
    if (!target) return;

    const data = await render.fetchData('data/team.json');
    if (!data) return;
    
    const renderCard = (member) => `
      <div class="card p-8 flex flex-col items-center text-center group h-full shadow-lg hover:shadow-2xl transition-all">
        <div class="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-[--c-surface] group-hover:border-[--c-accent] transition-all shadow-md">
          ${member.photo ? `<img src="${member.photo}" alt="${member.name}" class="w-full h-full object-cover" >` : `<div class="w-full h-full bg-[--c-surface] text-[--c-navy] text-4xl font-bold flex items-center justify-center" aria-hidden="true">${member.name.split(' ').map(part => part[0]).join('')}</div>`}
        </div>
        <h3 class="text-2xl font-bold mb-2 text-[--c-navy]">${member.name}</h3>
        <p class="text-[--c-accent] font-bold text-sm uppercase tracking-wider mb-3">${window.i18n.t(member.role)}</p>
        <p class="text-[--c-muted] text-xs leading-relaxed mb-6 flex-grow">${window.i18n.t(member.affiliation)}</p>
        ${member.email ? `<a href="mailto:${member.email}" class="inline-flex items-center gap-2 text-sm font-medium text-[--c-navy] hover:text-[--c-accent] transition-colors">
          <i data-lucide="mail" class="w-4 h-4"></i>
          <span>${member.email}</span>
        </a>` : ''}
      </div>
    `;

    target.innerHTML = data.map(renderCard).join('');
    
    lucide.createIcons();
  },

  /**
   * News Page: List View
   */
  renderNewsList: async () => {
    const target = document.getElementById('news-page-grid');
    if (!target) return;

    const data = await render.fetchData('data/news.json');
    const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));

    target.innerHTML = sortedData.map(item => {
      const date = new Date(item.date).toLocaleDateString(window.i18n.getLang(), {
        year: 'numeric', month: 'long', day: 'numeric'
      });

      return `
        <div class="card !p-0 overflow-hidden flex flex-col group">
          <div class="aspect-video overflow-hidden">
            <img src="${item.image}" alt="${window.i18n.t(item.title)}" class="w-full h-full object-cover transition-transform group-hover:scale-105">
          </div>
          <div class="p-8 flex flex-col flex-grow">
            <span class="text-[--c-accent] text-sm font-semibold mb-3 uppercase tracking-widest">${date}</span>
            <h3 class="text-2xl font-bold mb-4 group-hover:text-[--c-accent] transition-colors">${window.i18n.t(item.title)}</h3>
            <p class="text-[--c-muted] leading-relaxed mb-8 line-clamp-3">${window.i18n.t(item.excerpt)}</p>
            <a href="haberler.html?id=${item.id}" class="mt-auto inline-flex items-center gap-2 font-bold text-[--c-navy] hover:text-[--c-accent] transition-colors">
              <span data-i18n="read_more">Devamını Oku</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      `;
    }).join('');
    
    lucide.createIcons();
  },

  /**
   * News Page: Detail View
   */
  renderNewsDetail: async (id) => {
    const data = await render.fetchData('data/news.json');
    const item = data.find(n => n.id === id);
    
    const listView = document.getElementById('news-list-view');
    const detailView = document.getElementById('news-detail-view');
    const detailContent = document.getElementById('news-detail-content');

    if (!item) {
      if (listView) listView.classList.remove('hidden');
      if (detailView) detailView.classList.add('hidden');
      return;
    }

    if (listView) listView.classList.add('hidden');
    if (detailView) detailView.classList.remove('hidden');

    const date = new Date(item.date).toLocaleDateString(window.i18n.getLang(), {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    detailContent.innerHTML = `
      <article>
        <span class="text-[--c-accent] font-bold uppercase tracking-[0.2em] mb-4 block">${date}</span>
        <h1 class="text-4xl md:text-6xl font-bold mb-10 text-[--c-navy] leading-tight">${window.i18n.t(item.title)}</h1>
        <div class="rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
          <img src="${item.image}" alt="${window.i18n.t(item.title)}" class="w-full h-auto">
        </div>
        <div class="prose prose-lg max-w-none text-[--c-text] leading-relaxed space-y-6">
          <p class="text-xl font-medium text-[--c-muted] mb-12 italic border-l-4 border-[--c-accent] pl-6">
            ${window.i18n.t(item.excerpt)}
          </p>
          <div class="whitespace-pre-line text-lg">
            ${window.i18n.t(item.body)}
          </div>
        </div>
      </article>
      ${item.galleryCategory ? `<section class="mt-16 mb-16"><h2 class="text-3xl mb-8" data-i18n="gallery_${item.galleryCategory}"></h2><div data-gallery="${item.galleryCategory}" class="gallery-grid"></div></section>` : ''}
    `;
    await render.renderGalleries();
    
    lucide.createIcons();
  },

  /**
   * Initialize all homepage renders
   */
  initHome: async () => {
    await Promise.all([
      render.renderResearch(),
      render.renderFeaturedProjects(),
      render.renderPartners(),
      render.renderLatestNews(),
      render.renderEcosystem()
    ]);
    
    if (window.initAnimations) window.initAnimations();
    lucide.createIcons();
  }
};

window.render = render;
