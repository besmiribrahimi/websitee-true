// filteri
const filterBtns = document.querySelectorAll('.filter-btn');
const newsItems = document.querySelectorAll('.lajme-item');

filterBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		// kslasa artikull
		filterBtns.forEach(b => b.classList.remove('aktiv'));













































































		//  active
		btn.classList.add('aktiv');

		const filterValue = btn.getAttribute('data-filter');

		// Filter 
		newsItems.forEach(item => {
			const category = item.getAttribute('data-category');
			if (filterValue === 'te-gjitha' || category === filterValue) {
				item.style.display = 'block';
				item.style.animation = 'fadeIn 0.3s ease-in';
			} else {
				item.style.display = 'none';
			}
		});
	});
});

// Load More 
const loadMoreBtn = document.querySelector('.btn-load-more');
if (loadMoreBtn) {
	loadMoreBtn.addEventListener('click', () => {
		alert('Më shumë lajme do të ngarkohen!');
	});
}


const style = document.createElement('style');
style.textContent = `
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}
`;
document.head.appendChild(style);
