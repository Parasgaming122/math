/* ═══════════════════════════════════════════════════════════
   P1 MATH ACE — Shared Navigation & Utilities
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── NAV STRUCTURE ── */
  const NAV_ITEMS = [
    { href: 'index.html',       label: 'Home',        icon: 'home' },
    { href: 'formulas.html',    label: 'Formulas',    icon: 'book-open' },
    { href: 'graphs.html',      label: 'Graphs',      icon: 'line-chart' },
    { href: 'past-papers.html', label: 'Past Papers', icon: 'file-text' },
    { href: 'videos.html',      label: 'Videos',      icon: 'play-circle' },
    { href: 'practice.html',    label: 'Practice',    icon: 'pencil' },
    { href: 'exam-tips.html',   label: 'Exam Tips',   icon: 'lightbulb' },
  ];

  const ICONS = {
    home: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    'book-open': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    'line-chart': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    'file-text': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>',
    'play-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
    pencil: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
    lightbulb: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    'arrow-up': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    search: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    'external-link': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>',
    printer: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>',
    copy: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    'chevron-down': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  };

  /* ── GET ICON ── */
  window.getIcon = function (name) {
    return ICONS[name] || '';
  };

  /* ── DETECT CURRENT PAGE ── */
  function getCurrentPage() {
    const path = window.location.pathname;
    const file = path.split('/').pop() || 'index.html';
    return file;
  }

  /* ── BUILD NAVBAR ── */
  function buildNavbar() {
    const current = getCurrentPage();
    const nav = document.createElement('nav');
    nav.className = 'navbar';
    nav.id = 'navbar';
    nav.innerHTML = `
      <div class="navbar__inner">
        <a href="index.html" class="navbar__logo">
          <div class="navbar__logo-icon">P1</div>
          Math Ace
        </a>
        <ul class="navbar__links" id="navLinks">
          ${NAV_ITEMS.map(item => `
            <li>
              <a href="${item.href}" 
                 class="navbar__link ${current === item.href ? 'active' : ''}" 
                 id="nav-${item.icon}">
                ${item.label}
              </a>
            </li>
          `).join('')}
        </ul>
        <button class="navbar__toggle" id="navToggle" aria-label="Toggle navigation">
          ${ICONS.menu}
        </button>
      </div>
    `;
    document.body.prepend(nav);

    // Mobile toggle
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    let isOpen = false;

    toggle.addEventListener('click', () => {
      isOpen = !isOpen;
      links.classList.toggle('open', isOpen);
      toggle.innerHTML = isOpen ? ICONS.x : ICONS.menu;
    });

    // Close on link click (mobile)
    links.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        if (isOpen) {
          isOpen = false;
          links.classList.remove('open');
          toggle.innerHTML = ICONS.menu;
        }
      });
    });

    // Scroll effect
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* ── SCROLL-TO-TOP BUTTON ── */
  function buildScrollTop() {
    const btn = document.createElement('button');
    btn.className = 'scroll-top';
    btn.id = 'scrollTopBtn';
    btn.innerHTML = ICONS['arrow-up'];
    btn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── FOOTER ── */
  function buildFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <div class="footer__inner">
        <div class="footer__text">P1 Math Ace — Cambridge AS Level 9709 Pure Mathematics 1</div>
        <div class="footer__links">
          <a href="https://papacambridge.com" target="_blank" rel="noopener">PapaCambridge</a>
          <a href="https://www.physicsandmathstutor.com" target="_blank" rel="noopener">PMT</a>
          <a href="https://www.savemyexams.com" target="_blank" rel="noopener">SaveMyExams</a>
          <a href="https://gceguide.com" target="_blank" rel="noopener">GCE Guide</a>
        </div>
      </div>
    `;
    document.body.appendChild(footer);
  }

  /* ── SCROLL ANIMATIONS ── */
  function initScrollAnimations() {
    const els = document.querySelectorAll('.fade-in-up');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => observer.observe(el));
  }

  /* ── KATEX AUTO-RENDER ── */
  function renderMath() {
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
        ],
        throwOnError: false,
      });
    }
  }

  /* ── COPY TO CLIPBOARD ── */
  window.copyFormula = function (btn) {
    const formula = btn.closest('.formula');
    const eq = formula.querySelector('.formula__eq') || formula;
    const text = eq.textContent.trim();
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      btn.style.color = 'var(--accent-green)';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.color = '';
      }, 1500);
    });
  };

  /* ── TAB SYSTEM ── */
  window.showTab = function (tabGroup, index) {
    const tabs = document.querySelectorAll(`[data-tab-group="${tabGroup}"] .tab`);
    const panels = document.querySelectorAll(`[data-panel-group="${tabGroup}"] .panel`);

    tabs.forEach((t, j) => t.classList.toggle('active', index === j));
    panels.forEach((p, j) => p.classList.toggle('active', index === j));
  };

  /* ── QUESTION REVEAL ── */
  window.toggleReveal = function (btn, type) {
    const question = btn.closest('.question');
    const reveal = question.querySelector(`.question__${type}`);
    if (reveal) {
      reveal.classList.toggle('show');
      btn.textContent = reveal.classList.contains('show')
        ? `Hide ${type.charAt(0).toUpperCase() + type.slice(1)}`
        : `Show ${type.charAt(0).toUpperCase() + type.slice(1)}`;
    }
  };

  /* ── EXAM DATE COUNTDOWN ── */
  window.initCountdown = function () {
    const saved = localStorage.getItem('p1ace_exam_date');
    const input = document.getElementById('examDateInput');
    const display = document.getElementById('countdownDisplay');

    if (!input || !display) return;

    if (saved) {
      input.value = saved;
      updateCountdown(saved, display);
    }

    input.addEventListener('change', () => {
      localStorage.setItem('p1ace_exam_date', input.value);
      updateCountdown(input.value, display);
    });
  };

  function updateCountdown(dateStr, display) {
    if (!dateStr) { display.innerHTML = ''; return; }

    const exam = new Date(dateStr);
    const now = new Date();
    const diff = exam - now;

    if (diff < 0) {
      display.innerHTML = '<p style="color:var(--accent-amber)">Exam date has passed!</p>';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    display.innerHTML = `
      <div class="countdown">
        <div class="countdown__unit">
          <div class="countdown__number">${days}</div>
          <div class="countdown__label">Days</div>
        </div>
        <div class="countdown__unit">
          <div class="countdown__number">${hours}</div>
          <div class="countdown__label">Hours</div>
        </div>
      </div>
    `;
  }

  /* ── STUDY PROGRESS TRACKER ── */
  window.trackVisit = function (page) {
    const visits = JSON.parse(localStorage.getItem('p1ace_visits') || '{}');
    visits[page] = (visits[page] || 0) + 1;
    visits[page + '_last'] = new Date().toISOString();
    localStorage.setItem('p1ace_visits', JSON.stringify(visits));
  };

  window.getVisits = function () {
    return JSON.parse(localStorage.getItem('p1ace_visits') || '{}');
  };

  /* ── INIT ── */
  function initPage() {
    buildNavbar();
    buildScrollTop();
    buildFooter();
    initScrollAnimations();
    trackVisit(getCurrentPage());

    // Render KaTeX after DOM is ready
    setTimeout(renderMath, 100);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
  } else {
    initPage();
  }
})();
