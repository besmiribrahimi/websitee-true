
function animateCounters(){
	const els = document.querySelectorAll('.stat-box strong');
	els.forEach(el=>{
		const target = parseInt(el.getAttribute('data-target')||el.textContent.replace(/\D/g,'')||0,10);
		let start = 0; const duration = 1200; const stepTime = 16;
		const step = Math.ceil(target / (duration/stepTime));
		const iv = setInterval(()=>{
			start += step; if(start >= target){el.textContent = target.toLocaleString(); clearInterval(iv);} else el.textContent = start.toLocaleString();
		}, stepTime);
	});
}

//lightbox
(function(){
	const gallery = document.getElementById('gallery');
	const lightbox = document.getElementById('lightbox');
	const lbImg = document.getElementById('lightbox-img');
	const closeBtn = lightbox.querySelector('.close');
	gallery.addEventListener('click', e=>{
		const img = e.target.closest('img'); if(!img) return;
		lbImg.src = img.src; lightbox.style.display='flex'; lightbox.setAttribute('aria-hidden','false');
	});
	closeBtn.addEventListener('click', ()=>{ lightbox.style.display='none'; lightbox.setAttribute('aria-hidden','true'); lbImg.src=''; });
	lightbox.addEventListener('click', e=>{ if(e.target===lightbox) { closeBtn.click(); } });
})();


function setupScrollAnimations(){
	const observer = new IntersectionObserver((entries)=>{
		entries.forEach(entry=>{
			if(entry.isIntersecting){
				entry.target.classList.add('visible');
			}
		});
	}, {threshold: 0.1});
	
	document.querySelectorAll('.fade-in-up, .program-card, .benefit-hover, .achievement-card, .kartela-hover').forEach(el=>{
		observer.observe(el);
	});
}

function animateAchievements(){
	const cards = document.querySelectorAll('.achievement-card');
	cards.forEach((card, idx)=>{
		card.style.animationDelay = `${idx * 0.15}s`;
	});
}

(function(){
	const benefitCards = document.querySelectorAll('.benefit-hover');
	benefitCards.forEach(card=>{
		card.addEventListener('mouseenter', ()=>{
			benefitCards.forEach(c=> c.style.opacity = '0.6');
			card.style.opacity = '1';
		});
		card.addEventListener('mouseleave', ()=>{
			benefitCards.forEach(c=> c.style.opacity = '1');
		});
	});
})();

(function(){
	const programCards = document.querySelectorAll('.program-card');
	programCards.forEach(card=>{
		card.addEventListener('click', function(){
			programCards.forEach(c=> c.classList.remove('active'));
			this.classList.add('active');
		});
	});
})();

document.addEventListener('DOMContentLoaded', ()=>{ 
	animateCounters();
	setupScrollAnimations();
	animateAchievements();
});
