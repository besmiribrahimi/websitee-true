// nga`data/loginbs.json
const usersList = [];

function dataFilePath() {
	// kur n kta `html/`, eshte n kgta`../data/`.
	return '../data/loginbs.json';
}

async function loadUsersFromData() {
	try {
		const res = await fetch(dataFilePath());
		const json = await res.json();
		const arr = Array.isArray(json.users) ? json.users : [];
		usersList.length = 0;
		usersList.push(...arr);
	} catch (err) {
		console.error('Nuk mund të ngarkohen përdoruesit:', err);
		console.error('provoni perseri', err);
	}
}

function applyLocalPasswordOverrides() {
	try {
		const raw = localStorage.getItem('userUpdates');
		if (!raw) return;
		const updates = JSON.parse(raw);
		for (let i = 0; i < usersList.length; i++) {
			const u = usersList[i];
			if (updates[u.username] && updates[u.username].password) {
				usersList[i] = { ...u, password: updates[u.username].password };
			}
		}
	} catch (e) {
		console.error('Gabim gjatë aplikimit:', e);
	}
}

function showMessage(el, text, isError = true) {
	if (!el) return;
	el.textContent = text;
	el.classList.toggle('show', Boolean(text));
}

async function handleLoginSubmit(e) {
	e.preventDefault();
	const usernameInput = document.getElementById('username');
	const passwordInput = document.getElementById('password');
	const rememberEl = document.getElementById('rememberMe');
	const errorMessage = document.getElementById('errorMessage');
	const successMessage = document.getElementById('successMessage');

	showMessage(errorMessage, '');
	showMessage(successMessage, '');

	const username = usernameInput?.value.trim();
	const password = passwordInput?.value || '';
	const remember = Boolean(rememberEl && rememberEl.checked);

	if (!username || !password) {
		showMessage(errorMessage, 'Ju lutem plotësoni emrin e përdoruesit dhe fjalëkalimin.');
		return;
	}

	applyLocalPasswordOverrides();
	const user = usersList.find(u => u.username === username && u.password === password);
	if (!user) {
		showMessage(errorMessage, 'Emri i përdoruesit ose fjalëkalimi është i pasaktë.');
		passwordInput.value = '';
		passwordInput.focus();
		return;
	}

	// Login successful
	const payload = { username: user.username, email: user.email, name: user.name, role: user.role || 'student' };
	if (remember) localStorage.setItem('currentUser', JSON.stringify(payload)); else sessionStorage.setItem('currentUser', JSON.stringify(payload));

	showMessage(successMessage, 'Kyçje e suksesshme ');

	const redirect = (user.role === 'professor' || user.role === 'prof') ? 'paneliiadminit.html' : 'paslogi.html';
	setTimeout(() => { window.location.href = redirect; }, 1200);
}

document.addEventListener('DOMContentLoaded', async () => {
	await loadUsersFromData();

	const form = document.getElementById('loginForm');
	if (form) form.addEventListener('submit', handleLoginSubmit);

	// auto fill ma esay me bo
	document.querySelectorAll('.demo-cred').forEach(btn => {
		btn.addEventListener('click', (ev) => {
			const u = btn.getAttribute('data-username');
			const p = btn.getAttribute('data-password');
			const usernameInput = document.getElementById('username');
			const passwordInput = document.getElementById('password');
			if (usernameInput) usernameInput.value = u || '';
			if (passwordInput) passwordInput.value = p || '';
			usernameInput?.focus();
		});
	});
});
