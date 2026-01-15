// Ky skedar menaxhon kartelat e hierarkisë:
// - Hap dhe mbyll seksionet e përgjegjësive/ programeve/ departamenteve
// - Siguron që vetëm një kartelë të jetë e zgjeruar dhe aksesueshmëri tastiere
// Hierarchy Card Expand/Collapse Functio
document.addEventListener('DOMContentLoaded', function() {
	const expandButtons = document.querySelectorAll('.expand-responsibilities');
	
	expandButtons.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			const card = this.closest('.hierarchy-card');
			const responsibilitiesDiv = card.querySelector('.responsibilities');
			const isExpanded = responsibilitiesDiv.classList.contains('show');
			
			// mshel all
			expandButtons.forEach(btn => {
				if (btn !== this) {
					const otherCard = btn.closest('.hierarchy-card');
					const otherResponsibilities = otherCard.querySelector('.responsibilities');
					
					if (otherResponsibilities.classList.contains('show')) {
						btn.classList.remove('expanded');
						btn.textContent = btn.textContent.includes('Përgjegjësitë') ? 'Përgjegjësitë' : (btn.textContent.includes('Programet') ? 'Programet' : 'Departamentet');
						otherResponsibilities.style.maxHeight = '0px';
						otherResponsibilities.classList.remove('show');
					}
				}
			});
			
			// merr karten aktuale
			if (isExpanded) {
				// albin babababbbbaa
				this.classList.remove('expanded');
				const originalText = this.textContent.includes('Përgjegjësitë') ? 'Përgjegjësitë' : (this.textContent.includes('Programet') ? 'Programet' : 'Departamentet');
				this.textContent = originalText;
				responsibilitiesDiv.style.maxHeight = '0px';
				responsibilitiesDiv.classList.remove('show');
			} else {
				// e zhgjat
				this.classList.add('expanded');
				const newText = this.textContent.includes('Përgjegjësitë') ? 'Fshih Përgjegjësitë' : (this.textContent.includes('Programet') ? 'Fshih Programet' : 'Fshih Departamentet');
				this.textContent = newText;
				responsibilitiesDiv.classList.add('show');
				
				// kalkulim
				setTimeout(() => {
					const scrollHeight = responsibilitiesDiv.scrollHeight;
					responsibilitiesDiv.style.maxHeight = (scrollHeight + 30) + 'px';
				}, 0);
			}
		});
		
		// per tastatur
		button.addEventListener('keypress', function(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				this.click();
			}
		});
	});
	
	// idk
	window.addEventListener('resize', function() {
		const expandedButtons = document.querySelectorAll('.expand-responsibilities.expanded');
		expandedButtons.forEach(btn => {
			const responsibilitiesDiv = btn.closest('.hierarchy-card').querySelector('.responsibilities');
			const scrollHeight = responsibilitiesDiv.scrollHeight;
			responsibilitiesDiv.style.maxHeight = (scrollHeight + 30) + 'px';
		});
	});
});
