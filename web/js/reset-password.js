
const params = new URLSearchParams(window.location.search);
const preUser = params.get('u');
if (preUser) {
	document.addEventListener('DOMContentLoaded', () => {
		document.getElementById('r_user').value = preUser
	});
}

document.getElementById('resetForm').addEventListener('submit', (e) => {
	e.preventDefault();
	const msg = document.getElementById('resetMsg');
	const ok = document.getElementById('resetSuccess');
	msg.style.display = 'none';
	ok.style.display = 'none';

	const username = document.getElementById('r_user').value.trim();
	const code = document.getElementById('r_code').value.trim();
	const newPass = document.getElementById('r_password').value;

	if (!username || !code || !newPass) {
		msg.textContent = 'Plotësoni të gjitha fushat.';
		msg.classList.add('show');
		msg.style.display = 'block';
		return;
	}

	const stored = localStorage.getItem('pwReset');
	if (!stored) {
		msg.textContent = 'Nuk ka kërkesë rikthimi.';
		msg.classList.add('show');
		msg.style.display = 'block';
		return;
	}

	let obj;
	try {
		obj = JSON.parse(stored);
	} catch (e) {
		obj = null
	}

	if (!obj || obj.username !== username) {
		msg.textContent = 'Emri i përdoruesit nuk përputhet me kërkesën e rikthimit.';
		msg.classList.add('show');
		msg.style.display = 'block';
		return;
	}

	if (Date.now() > obj.expires) {
		msg.textContent = 'Kodi ka skaduar.';
		msg.classList.add('show');
		msg.style.display = 'block';
		return;
	}

	if (obj.code !== code) {
		msg.textContent = 'Kodi i pasaktë.';
		msg.classList.add('show');
		msg.style.display = 'block';
		return;
	}

	const updatesRaw = localStorage.getItem('userUpdates');
	let updates = updatesRaw ? JSON.parse(updatesRaw) : {};
	updates[username] = {
		password: newPass,
		updatedAt: Date.now()
	};
	localStorage.setItem('userUpdates', JSON.stringify(updates));

	ok.textContent = 'Fjalëkalimi u rivendos me sukses. Ju lutemi kyçuni me fjalëkalimin e ri.';
	ok.classList.add('show');
	ok.style.display = 'block';

	localStorage.removeItem('pwReset');

	setTimeout(() => {
		window.location.href = 'loginpage.html';
	}, 1500);
});
