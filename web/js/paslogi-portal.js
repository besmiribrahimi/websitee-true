
document.addEventListener('DOMContentLoaded', () => {
	const blockedMessage = document.getElementById('blockedMessage');
	const portalContent = document.getElementById('portalContent');


	let userInfo = localStorage.getItem('currentUser');
	if (!userInfo) {
		userInfo = sessionStorage.getItem('currentUser');
	}

	if (userInfo) {
		try {
			const user = JSON.parse(userInfo);

				//show
				portalContent.style.display = 'block';
				blockedMessage.classList.remove('show');

				
				document.getElementById('userGreeting').textContent = `Mirë se vini përsëri, ${user.name}!`;
				document.getElementById('fullName').textContent = user.name;
				document.getElementById('userName').textContent = user.username;
				document.getElementById('userEmail').textContent = user.email;
				document.getElementById('loginTime').textContent = new Date().toLocaleString('sq-AL');

				//role
				const role = user.role || 'student';
				document.body.classList.add(`role-${role}`);
				if (role === 'professor' || role === 'professor') {
					const profPanel = document.getElementById('professorPanel');
					if (profPanel) profPanel.style.display = 'block';
					// Tweak 
					document.getElementById('userGreeting').textContent += ' — Panel i Profesorit';
				}
		} catch (error) {
			console.error('Error parsing user info:', error);
			blockedMessage.classList.add('show');
			portalContent.style.display = 'none';
		}
	} else {
		// Show
		blockedMessage.classList.add('show');
		portalContent.style.display = 'none';
	}
});

// Logout 
function logout() {
	if (confirm('Jeni i sigurt se doni të dilni nga sistemi?')) {
		localStorage.removeItem('currentUser');
		sessionStorage.removeItem('currentUser');
		window.location.href = 'loginpage.html';
	}
}
