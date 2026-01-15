// Ky fillll menaxhon navigacionin e faqes:
// - Vendos linkun aktiv sipasfaqes
// -  mobile për hapje mbyll
// - Efekte touch/klik
// - Shton klasë për header
document.addEventListener('DOMContentLoaded', () => {
  try {
    const current = (decodeURIComponent(location.pathname.split('/').pop() || 'web1.html')||'').split(/[?#]/)[0].toLowerCase();
    const links = document.querySelectorAll('.meny a');
    const header = document.querySelector('.krye');
    const menu = document.querySelector('.meny');

    // linku aktiv n faqen e shfaqme type shiii
    links.forEach(a => {
      const href = a.getAttribute('href') || '';
      const target = (href.split('/').pop()||'').split(/[?#]/)[0].toLowerCase();
      if (target === current || (current === '' && (target === 'web1.html' || target === 'index.html'))) {
        a.classList.add('aktual');
      } else {
        a.classList.remove('aktual');
      }

      a.addEventListener('click', (e) => {
        // Check if this is an external navigation
        const href = a.getAttribute('href') || '';
        const shouldClose = !href.startsWith('#');
        
        links.forEach(l => l.classList.remove('aktual'));
        a.classList.add('aktual');
        const menu = document.querySelector('.meny');
        const toggle = document.querySelector('.menu-toggle');
        
        if (menu && menu.classList.contains('open') && shouldClose) {
          // ripple per efekt
          a.style.transform = 'scale(0.95)';
          setTimeout(() => {
            a.style.transform = '';
          }, 150);
          
          setTimeout(() => {
            menu.classList.remove('open');
            document.body.classList.remove('menu-open');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
          }, 100);
        }
      });

      // feedback per telefon
      a.addEventListener('touchstart', function() {
        this.style.background = 'rgba(255,255,255,0.15)';
      });
      a.addEventListener('touchend', function() {
        this.style.background = '';
      });
    });

    // mobile butoni
    if (header && menu) {
      if (!document.querySelector('.menu-toggle')) {
        const btn = document.createElement('button');
        btn.className = 'menu-toggle';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Hap/Mbyll meny');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-controls', 'mobile-menu');
        btn.innerHTML = '<span aria-hidden="true">☰</span>';
        header.appendChild(btn);
        
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = menu.classList.toggle('open');
          document.body.classList.toggle('menu-open', isOpen);
          btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
         
          //  visual feedback
          if (isOpen) {
            btn.style.background = 'rgba(255,255,255,0.15)';
            btn.style.borderColor = 'rgba(255,255,255,0.5)';
          } else {
            btn.style.background = 'transparent';
            btn.style.borderColor = 'rgba(255,255,255,0.2)';
          }
        });

       
        document.addEventListener('click', (e) => {
          if (!header.contains(e.target) && menu.classList.contains('open') && !e.target.closest('.meny')) {
            menu.classList.remove('open');
            document.body.classList.remove('menu-open');
            btn.setAttribute('aria-expanded', 'false');
            btn.style.background = '';
            btn.style.borderColor = '';
          }
        });

        // esc es escaped elelellellelelel
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && menu.classList.contains('open')) {
            menu.classList.remove('open');
            document.body.classList.remove('menu-open');
            btn.setAttribute('aria-expanded', 'false');
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.focus();
          }
        });
      }
    }

    // rhsv nls dnlfhn vcka 
    const onScroll = () => {
      const hdr = document.querySelector('.krye');
      if (!hdr) return;
      if (window.scrollY > 12) hdr.classList.add('scrolled'); else hdr.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

  } catch (e) {
    console.error('nav.js error', e);
  }

});
