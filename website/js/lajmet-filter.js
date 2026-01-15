// News filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const newsItems = document.querySelectorAll('.lajme-item');

filterBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		// Remove active class from all buttons
		filterBtns.forEach(b => b.classList.remove('aktiv'));
		// Add active class to clicked button
		btn.classList.add('aktiv');

		const filterValue = btn.getAttribute('data-filter');

		// Filter news items
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

// Load More functionality
const loadMoreBtn = document.querySelector('.btn-load-more');
if (loadMoreBtn) {
	loadMoreBtn.addEventListener('click', () => {
		alert('Më shumë lajme do të ngarkohen! (Demo mode)');
	});
}

// Add animation for news items
const style = document.createElement('style');
style.textContent = `
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}
`;
document.head.appendChild(style);
