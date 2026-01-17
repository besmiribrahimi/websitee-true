// funksionet e kartave
document.addEventListener('DOMContentLoaded', function() {
	const expandButtons = document.querySelectorAll('.dept-expand-btn');
	
	expandButtons.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			const card = this.closest('.dept-card');
			const programsDiv = card.querySelector('.dept-programs');
			const isExpanded = programsDiv.classList.contains('show');
			
			// Close all other expanded popups
			expandButtons.forEach(btn => {
				if (btn !== this) {
					const otherCard = btn.closest('.dept-card');
					const otherPrograms = otherCard.querySelector('.dept-programs');
					
					if (otherPrograms.classList.contains('show')) {
						btn.classList.remove('expanded');
						btn.textContent = 'Shfaq Programet';
						otherPrograms.classList.remove('show');
					}
				}
			});
			
			if (isExpanded) {
				// Close this popup
				this.classList.remove('expanded');
				this.textContent = 'Shfaq Programet';
				programsDiv.classList.remove('show');
			} else {
				// Open this popup
				this.classList.add('expanded');
				this.textContent = 'Fshih Programet';
				programsDiv.classList.add('show');
			}
		});
		
		// enter for quick access
		button.addEventListener('keypress', function(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				this.click();
			}
		});
	});
	
	// Close popup when clicking outside
	document.addEventListener('click', function(e) {
		const expandedPopups = document.querySelectorAll('.dept-programs.show');
		expandedPopups.forEach(popup => {
			if (!popup.parentElement.contains(e.target) && !e.target.closest('.dept-expand-btn')) {
				const btn = popup.closest('.dept-card').querySelector('.dept-expand-btn');
				btn.classList.remove('expanded');
				btn.textContent = 'Shfaq Programet';
				popup.classList.remove('show');
			}
		});
	});
	
	// Close popup with close button
	document.addEventListener('click', function(e) {
		if (e.target.closest('.dept-programs-close')) {
			const popup = e.target.closest('.dept-programs');
			const btn = popup.closest('.dept-card').querySelector('.dept-expand-btn');
			btn.classList.remove('expanded');
			btn.textContent = 'Shfaq Programet';
			popup.classList.remove('show');
		}
	});
	
	// Close popup with Escape key
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') {
			const expandedPopups = document.querySelectorAll('.dept-programs.show');
			expandedPopups.forEach(popup => {
				const btn = popup.closest('.dept-card').querySelector('.dept-expand-btn');
				btn.classList.remove('expanded');
				btn.textContent = 'Shfaq Programet';
				popup.classList.remove('show');
			});
		}
	});
});
