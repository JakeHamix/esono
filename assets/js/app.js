// Dark mode: apply saved preference immediately (before DOMContentLoaded to prevent flash)
(function () {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
})();

document.addEventListener('DOMContentLoaded', async () => {
  // ── Dark mode toggle ──
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    const updateIcons = () => {
      const isDark = document.documentElement.classList.contains('dark');
      themeBtn.querySelector('.icon-sun').classList.toggle('hidden', !isDark);
      themeBtn.querySelector('.icon-moon').classList.toggle('hidden', isDark);
    };
    updateIcons();

    themeBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateIcons();
    });
  }

  // ── i18n ──
  const lang = window.location.pathname.includes('/en/') ? 'en' : 'cs';

  if (lang === 'en') {
    try {
      const basePath = window.location.pathname.replace(/\/en\/.*/, '');
      const res = await fetch(`${basePath}/assets/i18n/en.json`);
      const translations = await res.json();

      // Swap text content
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = translations[key];
          } else {
            el.textContent = translations[key];
          }
        }
      });

      // Update HTML lang
      document.documentElement.lang = 'en';

      // Update meta tags
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && translations['meta.description']) {
        metaDesc.content = translations['meta.description'];
      }
      document.title = translations['meta.title'] || document.title;

      // Update OG tags
      document.querySelectorAll('meta[property^="og:"]').forEach(tag => {
        const prop = tag.getAttribute('property');
        if (prop === 'og:locale') tag.content = 'en_US';
        if (prop === 'og:title' && translations['meta.title']) tag.content = translations['meta.title'];
        if (prop === 'og:description' && translations['meta.description']) tag.content = translations['meta.description'];
      });

      // Update Twitter tags
      document.querySelectorAll('meta[name^="twitter:"]').forEach(tag => {
        const name = tag.getAttribute('name');
        if (name === 'twitter:title' && translations['meta.title']) tag.content = translations['meta.title'];
        if (name === 'twitter:description' && translations['meta.description']) tag.content = translations['meta.description'];
      });

      // Update canonical
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.href = canonical.href.replace('/cs/', '/en/');
      }
    } catch (e) {
      console.warn('i18n: failed to load translations', e);
    }
  }

  // Update language switcher active state
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.toggle('font-bold', el.getAttribute('data-lang') === lang);
    el.classList.toggle('text-primary', el.getAttribute('data-lang') === lang);
  });

  // ── Mobile hamburger menu ──
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuBtn.querySelector('.icon-menu').classList.toggle('hidden', !isOpen);
      menuBtn.querySelector('.icon-x').classList.toggle('hidden', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.querySelector('.icon-menu').classList.remove('hidden');
        menuBtn.querySelector('.icon-x').classList.add('hidden');
      });
    });
  }

  // ── Init Lucide icons ──
  if (window.lucide) {
    lucide.createIcons();
  }

  // ── Scroll reveal animations ──
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
  });
});
