
document.addEventListener('DOMContentLoaded', () => {
  try {
    // portal showhide es 
    const checkLoginStatus = () => {
      const currentUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
      const portalLink = document.getElementById('portalLink');
      const portalBtn = document.getElementById('portalBtn');
      
      if (currentUser) {
        const user = JSON.parse(currentUser);
        if (portalLink) portalLink.style.display = 'block';
        if (portalBtn) {
          // Redirect based on user role
          portalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const redirectUrl = (user.role === 'professor' || user.role === 'prof' || user.role === 'admin') ? 'paneliiadminit.html' : 'paslogi.html';
            window.location.href = redirectUrl;
          });
        }
      } else {
        if (portalLink) portalLink.style.display = 'none';
      }
    };
    
    checkLoginStatus();
    // Re-check every 1 second in case user logs in/out
    setInterval(checkLoginStatus, 1000);
    
    const current = (decodeURIComponent(location.pathname.split('/').pop() || 'web1.html')||'').split(/[?#]/)[0].toLowerCase();
    const links = document.querySelectorAll('.meny a');
    const header = document.querySelector('.krye');
    const menu = document.querySelector('.meny');

    // linku aktiv n faqen e shfaqme type shiii
    links.forEach(a => {
      // Skip portal link from active state logic
      if (a.id === 'portalBtn') return;
      
      const href = a.getAttribute('href') || '';
      const target = (href.split('/').pop()||'').split(/[?#]/)[0].toLowerCase();
      if (target === current || (current === '' && (target === 'web1.html' || target === 'index.html'))) {
        a.classList.add('aktual');
      } else {
        a.classList.remove('aktual');
      }

      a.addEventListener('click', (e) => {
        // Check
        const href = a.getAttribute('href') || '';
        const shouldClose = !href.startsWith('#');
        
        links.forEach(l => l.classList.remove('aktual'));
        a.classList.add('aktual');
        const menu = document.querySelector('.meny');
        const toggle = document.querySelector('.menu-toggle');
        
        if (menu && menu.classList.contains('open') && shouldClose) {
          // ripple 
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

      
      a.addEventListener('touchstart', function() {
        this.style.background = 'rgba(255,255,255,0.15)';
      });
      a.addEventListener('touchend', function() {
        this.style.background = '';
      });
    });

    // mobile butoni
    if (header && menu) {
      let btn = document.querySelector('.menu-toggle');
      
      // Icreate it
      if (!btn) {
        btn = document.createElement('button');
        btn.className = 'menu-toggle';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Hap/Mbyll meny');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<span aria-hidden="true">☰</span>';
        header.appendChild(btn);
      }
      
      //
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const isOpen = menu.classList.toggle('open');
        document.body.classList.toggle('menu-open', isOpen);
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Close menu 
      document.addEventListener('click', (e) => {
        if (menu.classList.contains('open') && !header.contains(e.target) && !menu.contains(e.target)) {
          menu.classList.remove('open');
          document.body.classList.remove('menu-open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Close menu esd
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
          menu.classList.remove('open');
          document.body.classList.remove('menu-open');
          btn.setAttribute('aria-expanded', 'false');
          btn.focus();
        }
      });
    }

    // scroll
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
