// PARTICLE BACKGROUND
(function(){
// Ky skedar përfaqëson skripte vizuale për faqen kryesore:
// - Particles (kanavacë) dhe lidhjet midis tyre
// - Parallax dhe 'blob' animacione në hero
// - Statistika me IntersectionObserver dhe numërim animuar
// - Efektet CTA (ripple) dhe aksesueshmëri tastiere
	const canvas = document.getElementById('particles');
	const ctx = canvas.getContext('2d');
	let w=0,h=0, particles=[];
	function resize(){ w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
	window.addEventListener('resize', resize); resize();

	function rand(min,max){ return Math.random()*(max-min)+min }
	function init(n){ particles = []; for(let i=0;i<n;i++){ particles.push({x:rand(0,w),y:rand(0,h),vx:rand(-0.3,0.3),vy:rand(-0.3,0.3),r:rand(0.8,2.4)}); } }
	init(Math.round((w*h)/80000));

	function step(){ ctx.clearRect(0,0,w,h);
		// draw particles and connect
		for(let p of particles){ p.x += p.vx; p.y += p.vy; if(p.x<0||p.x>w) p.vx *= -1; if(p.y<0||p.y>h) p.vy *= -1;
			ctx.beginPath(); ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.globalAlpha = 0.22; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
		}
		// connect close
		for(let i=0;i<particles.length;i++){
			for(let j=i+1;j<particles.length;j++){
				const a=particles[i], b=particles[j]; const dx=a.x-b.x, dy=a.y-b.y; const dist=Math.hypot(dx,dy);
				if(dist<120){ ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.strokeStyle = 'rgba(255,255,255,'+ (0.08 + (1-dist/120)*0.12) +')'; ctx.lineWidth=1; ctx.stroke(); }
			}
		}
		requestAnimationFrame(step);
	}
	step();
})();

// BLOBS parallax and subtle animations
(function(){
	const b1 = document.getElementById('blob1'); const b2 = document.getElementById('blob2');
	function setSizes(){ b1.style.width='360px'; b1.style.height='360px'; b1.style.left='8%'; b1.style.top='6%';
		b2.style.width='260px'; b2.style.height='260px'; b2.style.right='6%'; b2.style.bottom='10%'; }
	setSizes();
	const hero = document.getElementById('hero');
	hero.addEventListener('mousemove', e=>{
		const rect = hero.getBoundingClientRect(); const x=(e.clientX-rect.left)/rect.width - 0.5; const y=(e.clientY-rect.top)/rect.height - 0.5;
		b1.style.transform = `translate(${x*18}px,${y*12}px) rotate(${x*6}deg)`;
		b2.style.transform = `translate(${x*-12}px,${y*-8}px) rotate(${x*-8}deg)`;
	});
})();

// STATS: IntersectionObserver + counting + tilt
(function(){
	const statEls = document.querySelectorAll('.stat');
	const options = { root:null, threshold: 0.4 };
	const io = new IntersectionObserver((entries,obs)=>{
		entries.forEach(ent=>{
			if(ent.isIntersecting){ const nums = ent.target.querySelectorAll('.num'); nums.forEach(animateCount); }
		});
	}, options);
	statEls.forEach(s=>{ io.observe(s); // tilt interactions
		s.addEventListener('mousemove', e=>{
			const r = s.getBoundingClientRect(); const px = (e.clientX - r.left)/r.width - 0.5; const py = (e.clientY - r.top)/r.height - 0.5;
			s.style.transform = `perspective(600px) rotateX(${ -py*6 }deg) rotateY(${ px*8 }deg) translateZ(6px)`;
		});
		s.addEventListener('mouseleave', ()=>{ s.style.transform = 'none'; });
	});

	function animateCount(el){ const num = el.querySelector('.num'); if(!num || num.dataset.animated) return; num.dataset.animated = '1';
		const target = +num.dataset.target || 0; const duration = 1700; const startTime = performance.now();
		function tick(now){ const t = Math.min(1,(now-startTime)/duration); const eased = 1 - Math.pow(1-t,3); num.textContent = Math.floor(eased*target).toLocaleString(); if(t<1) requestAnimationFrame(tick); else num.textContent = target.toLocaleString(); }
		requestAnimationFrame(tick);
	}

	// Trigger entry animation and ensure counters animate on load (keeps IO for later)
	document.addEventListener('DOMContentLoaded', ()=>{
		const inner = document.querySelector('.welcome-inner'); if(inner) inner.classList.add('enter');
		statEls.forEach(s=> animateCount(s));
	});
})();

// riplle
(function(){
	const btn = document.getElementById('viewSite');
	btn.addEventListener('click', e=>{
		const rect = btn.getBoundingClientRect(); const x = e.clientX - rect.left; const y = e.clientY - rect.top;
		const ripple = document.createElement('span'); ripple.className = 'ripple'; ripple.style.left = x+'px'; ripple.style.top = y+'px'; btn.appendChild(ripple);
		setTimeout(()=> ripple.remove(), 700);
	});
	btn.addEventListener('keydown', e=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); } });
	// quick key (F) to open site
	window.addEventListener('keydown', e=>{ if(e.key.toLowerCase() === 'f' && !e.metaKey && !e.ctrlKey){ window.location.href = btn.href; } });
})();
