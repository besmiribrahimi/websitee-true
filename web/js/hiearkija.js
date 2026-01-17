
document.addEventListener('DOMContentLoaded', function() {
	const expandButtons = document.querySelectorAll('.expand-responsibilities');
	
	expandButtons.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			const card = this.closest('.hierarchy-card');
			const responsibilitiesDiv = card.querySelector('.responsibilities');
			const isExpanded = responsibilitiesDiv.classList.contains('show');
			
			// Close all other expanded popups
			expandButtons.forEach(btn => {
				if (btn !== this) {
					const otherCard = btn.closest('.hierarchy-card');
					const otherResponsibilities = otherCard.querySelector('.responsibilities');
					
					if (otherResponsibilities.classList.contains('show')) {
						btn.classList.remove('expanded');
						btn.textContent = 'Përgjegjësitë';
						otherResponsibilities.classList.remove('show');
					}
				}
			});
			
			if (isExpanded) {
				// Close this popup
				this.classList.remove('expanded');
				this.textContent = 'Përgjegjësitë';
				responsibilitiesDiv.classList.remove('show');
			} else {
				// Open this popup
				this.classList.add('expanded');
				this.textContent = 'Fshih Përgjegjësitë';
				responsibilitiesDiv.classList.add('show');
			}
		});
		
		// keyboard support
		button.addEventListener('keypress', function(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				this.click();
			}
		});
	});
	
	// Close popup when clicking outside
	document.addEventListener('click', function(e) {
		const expandedPopups = document.querySelectorAll('.responsibilities.show');
		expandedPopups.forEach(popup => {
			if (!popup.parentElement.contains(e.target) && !e.target.closest('.expand-responsibilities')) {
				const btn = popup.closest('.hierarchy-card').querySelector('.expand-responsibilities');
				btn.classList.remove('expanded');
				btn.textContent = 'Përgjegjësitë';
				popup.classList.remove('show');
			}
		});
	});
	
	// Close popup with close button
	document.addEventListener('click', function(e) {
		if (e.target.closest('.responsibilities-close')) {
			const popup = e.target.closest('.responsibilities');
			const btn = popup.closest('.hierarchy-card').querySelector('.expand-responsibilities');
			btn.classList.remove('expanded');
			btn.textContent = 'Përgjegjësitë';
			popup.classList.remove('show');
		}
	});
	
	// Close popup with Escape key
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') {
			const expandedPopups = document.querySelectorAll('.responsibilities.show');
			expandedPopups.forEach(popup => {
				const btn = popup.closest('.hierarchy-card').querySelector('.expand-responsibilities');
				btn.classList.remove('expanded');
				btn.textContent = 'Përgjegjësitë';
				popup.classList.remove('show');
			});
		}
	});
});
