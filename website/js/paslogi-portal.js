// Check if user is logged in on page load
document.addEventListener('DOMContentLoaded', () => {
	const blockedMessage = document.getElementById('blockedMessage');
	const portalContent = document.getElementById('portalContent');

	// Get user from localStorage or sessionStorage
	let userInfo = localStorage.getItem('currentUser');
	if (!userInfo) {
		userInfo = sessionStorage.getItem('currentUser');
	}

	if (userInfo) {
		try {
			const user = JSON.parse(userInfo);

				// Show portal content
				portalContent.style.display = 'block';
				blockedMessage.classList.remove('show');

				// Populate user info
				document.getElementById('userGreeting').textContent = `Mirë se vini përsëri, ${user.name}!`;
				document.getElementById('fullName').textContent = user.name;
				document.getElementById('userName').textContent = user.username;
				document.getElementById('userEmail').textContent = user.email;
				document.getElementById('loginTime').textContent = new Date().toLocaleString('sq-AL');

				// Apply role-based UI
				const role = user.role || 'student';
				document.body.classList.add(`role-${role}`);
				if (role === 'professor' || role === 'professor') {
					const profPanel = document.getElementById('professorPanel');
					if (profPanel) profPanel.style.display = 'block';
					// Tweak greeting for professors
					document.getElementById('userGreeting').textContent += ' — Panel i Profesorit';
				}
		} catch (error) {
			console.error('Error parsing user info:', error);
			blockedMessage.classList.add('show');
			portalContent.style.display = 'none';
		}
	} else {
		// Show blocked message
		blockedMessage.classList.add('show');
		portalContent.style.display = 'none';
	}
});

// Logout function
function logout() {
	if (confirm('Jeni i sigurt se doni të dilni nga sistemi?')) {
		localStorage.removeItem('currentUser');
		sessionStorage.removeItem('currentUser');
		window.location.href = 'loginpage.html';
	}
}
