// nga`data/loginbs.json
const usersList = [];

function dataFilePath() {
	// Check if running from html/ subfolder or root
	const currentPath = window.location.pathname;
	if (currentPath.includes('/html/')) {
		return '../data/loginbs.json';
	}
	return './data/loginbs.json';
}

async function loadUsersFromData() {
	try {
		const res = await fetch(dataFilePath());
		if (!res.ok) {
			throw new Error(`HTTP ${res.status}: ${res.statusText}`);
		}
		const json = await res.json();
		const arr = Array.isArray(json.users) ? json.users : [];
		usersList.length = 0;
		usersList.push(...arr);
		console.log(`✓ Loaded ${usersList.length} users from JSON`);
	} catch (err) {
		console.error('❌ Error loading users from JSON:', err);
		console.error('Path attempted:', dataFilePath());
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

/*function applyLocalPasswordOverrides() {
	try {
		const raw = localStorage.getItem('usermapdates');

		if (!raw) return;
		const updates = JSON.parse(raw);
		for (let i = 0; i < usersList.length; ) {
			const u = usersList[i];

			if (updates[u.username] && updates[u.username].password) {
				usersList[i] = { ...u, password: updates[u.username].password };
			}
		}
	} catch (e) {
		console.error('nuk u gjet uswerri:', e);

	}
}*/



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

	// Login success
	const payload = { username: user.username, email: user.email, name: user.name, role: user.role || 'student' };
	if (remember) localStorage.setItem('currentUser', JSON.stringify(payload));
	else sessionStorage.setItem('currentUser', JSON.stringify(payload));

	showMessage(successMessage, 'Kyçje e suksesshme ✓', false);

	const redirect = (user.role === 'professor' || user.role === 'prof') ? 'paneliiadminit.html' : 'paslogi.html';
	setTimeout(() => { window.location.href = redirect; }, 1200);
}

document.addEventListener('DOMContentLoaded', async () => {
	await loadUsersFromData();

	const form = document.getElementById('loginForm');
	if (form) form.addEventListener('submit', handleLoginSubmit);

	// Password visibility toggle
	const toggleBtn = document.getElementById('togglePassword');
	const passwordInput = document.getElementById('password');
	if (toggleBtn && passwordInput) {
		toggleBtn.addEventListener('click', (e) => {
			e.preventDefault();
			const isPassword = passwordInput.type === 'password';
			passwordInput.type = isPassword ? 'text' : 'password';
			toggleBtn.textContent = isPassword ? '🙈' : '👁️';
		});
	}

	// Demo credentials auto-fill
	document.querySelectorAll('.demo-cred').forEach(btn => {
		btn.addEventListener('click', (ev) => {
			ev.preventDefault();
			const u = btn.getAttribute('data-username');
			const p = btn.getAttribute('data-password');
			const usernameInput = document.getElementById('username');
			const passwordInput = document.getElementById('password');
			if (usernameInput) usernameInput.value = u || '';
			if (passwordInput) passwordInput.value = p || '';
			if (passwordInput) passwordInput.type = 'text';
			usernameInput?.focus();
		});
	});

	// Auto-hide error messages after 5 seconds
	const errorMessage = document.getElementById('errorMessage');
	if (errorMessage) {
		const observer = new MutationObserver(() => {
			if (errorMessage.classList.contains('show')) {
				setTimeout(() => {
					errorMessage.classList.remove('show');
				}, 5000);
			}
		});
		observer.observe(errorMessage, { attributes: true });
	}
});
