
(function() {
	const form = document.getElementById('kontaktForm');
	const msg = document.getElementById('successMsg');

	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			if (!form.reportValidity()) return;

			
			msg.style.display = 'block';
			form.reset();
			setTimeout(() => msg.style.display = 'none', 6000);
		});
	}
})();
