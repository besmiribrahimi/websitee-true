// Filter functionality for projects
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.projekt-card');

filterBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		// Remove active class from all buttons
		filterBtns.forEach(b => b.classList.remove('aktiv'));
		// Add active class to clicked button
		btn.classList.add('aktiv');

		const filterValue = btn.getAttribute('data-filter');

		// Filter project cards
		projectCards.forEach(card => {
			const category = card.getAttribute('data-category');
			if (filterValue === 'te-gjitha' || category === filterValue) {
				card.style.display = 'block';
				card.style.animation = 'fadeIn 0.3s ease-in';
			} else {
				card.style.display = 'none';
			}
		});
	});
});

// Add animation for project cards
const style = document.createElement('style');
style.textContent = `
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}
`;
document.head.appendChild(style);
