// ali a je ti
document.addEventListener('DOMContentLoaded', () => {
	const blockedMessage = document.getElementById('blockedMessage');
	const portalContent = document.getElementById('portalContent');

	// let userInfo =localStorage sessionStorage
	let userInfo = localStorage.getItem('currentUser');
	if (!userInfo) {
		userInfo = sessionStorage.getItem('currentUser');
	}

	if (userInfo) {
		try {
			const user = JSON.parse(userInfo);
			const role = user.role || 'student';

			if (role === 'professor' || role === 'prof') {
								portalContent.style.display = 'block';
				blockedMessage.style.display = 'none';
				document.getElementById('userGreeting').textContent = `Mirë se vini, Prof. ${user.name}!`;
				document.getElementById('fullName').textContent = user.name;
				document.getElementById('userEmail').textContent = user.email;
				document.getElementById('loginTime').textContent = new Date().toLocaleString('sq-AL');
			} else {
				// sej n ar tane
				blockedMessage.classList.add('show');
				portalContent.style.display = 'none';
			}
		} catch (error) {
			console.error('Error parsing user info:', error);
			blockedMessage.classList.add('show');
			portalContent.style.display = 'none';
		}
	} else {
	
		blockedMessage.classList.add('show');
		portalContent.style.display = 'none';
	}


	document.querySelectorAll('.tab-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
			document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
			btn.classList.add('active');
			const tabId = btn.getAttribute('data-tab');
			document.getElementById(tabId).classList.add('active');
		});
	});
});


function selectKurs(kursId) {
	const kursNames = {
		1: 'Algoritmet dhe Strukturat e të Dhënave',
		2: 'Programimi në Java',
		3: 'Baza të të Dhënave',
		4: 'Rrjetet e Kompjuterave'
	};
	document.getElementById('selectedKursName').textContent = kursNames[kursId];
}

function updateGrade(studentId) {
	alert(`Nota e studentit ${studentId} u përditësua me sukses!`);
}

function saveAllGrades() {
	document.getElementById('successMsg').classList.add('show');
	setTimeout(() => {
		document.getElementById('successMsg').classList.remove('show');
	}, 3000);
}

function logout() {
	if (confirm('Jeni i sigurt se doni të dilni nga sistemi?')) {
		localStorage.removeItem('currentUser');
		sessionStorage.removeItem('currentUser');
		window.location.href = 'loginpage.html';
	}
}

