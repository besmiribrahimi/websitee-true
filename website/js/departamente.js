// funksionet e kartave
document.addEventListener('DOMContentLoaded', function() {
	const expandButtons = document.querySelectorAll('.dept-expand-btn');
	
	expandButtons.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			const card = this.closest('.dept-card');
			const programsDiv = card.querySelector('.dept-programs');
			const isExpanded = programsDiv.classList.contains('show');
			
			// mi mshel kartat
			expandButtons.forEach(btn => {
				if (btn !== this) {
					const otherCard = btn.closest('.dept-card');
					const otherPrograms = otherCard.querySelector('.dept-programs');
					
					if (otherPrograms.classList.contains('show')) {
						btn.classList.remove('expanded');
						btn.textContent = 'Shfaq Programet';
						otherPrograms.style.maxHeight = '0px';
						otherPrograms.classList.remove('show');
					}
				}
			});
			

			if (isExpanded) {
				// shktrrim
				this.classList.remove('expanded');
				this.textContent = 'Shfaq Programet';
				programsDiv.style.maxHeight = '0px';
				programsDiv.classList.remove('show');
			} else {
				// rritja
				this.classList.add('expanded');
				this.textContent = 'Fshih Programet';
				programsDiv.classList.add('show');
				
				// kalkulimi
				setTimeout(() => {
					const scrollHeight = programsDiv.scrollHeight;
					programsDiv.style.maxHeight = (scrollHeight + 30) + 'px';
				}, 0);
			}
		});
		
		// enter per quick akses
		button.addEventListener('keypress', function(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				this.click();
			}
		});
	});
	
	// max-height
	window.addEventListener('resize', function() {
		const expandedButtons = document.querySelectorAll('.dept-expand-btn.expanded');
		expandedButtons.forEach(btn => {
			const programsDiv = btn.closest('.dept-card').querySelector('.dept-programs');
			const scrollHeight = programsDiv.scrollHeight;
			programsDiv.style.maxHeight = (scrollHeight + 30) + 'px';
		});
	});
});
