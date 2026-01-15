// Forgot password functionality
async function findUser(identifier) {
	try {
		const r = await fetch('../data/loginbs.json');
		const data = await r.json();
		const users = data.users || [];
		return users.find(u => u.username === identifier || u.email === identifier);
	} catch (e) {
		console.error(e);
		return null;
	}
}

function generateCode() {
	return (Math.floor(100000 + Math.random() * 900000)).toString();
}

document.getElementById('forgotForm').addEventListener('submit', async (e) => {
	e.preventDefault();
	const id = document.getElementById('identifier').value.trim();
	const msg = document.getElementById('forgotMsg');
	const ok = document.getElementById('forgotSuccess');
	msg.style.display = 'none';
	ok.style.display = 'none';

	if (!id) {
		msg.textContent = 'Shkruani emrin e përdoruesit ose emailin.';
		msg.classList.add('show');
		msg.style.display = 'block';
		return;
	}

	const user = await findUser(id);
	if (!user) {
		msg.textContent = 'Përdoruesi nuk u gjend.';
		msg.classList.add('show');
		msg.style.display = 'block';
		return;
	}

	const code = generateCode();
	// store reset object in localStorage for demo flow
	const expires = Date.now() + 1000 * 60 * 15; // 15min
	localStorage.setItem('pwReset', JSON.stringify({
		username: user.username,
		code,
		expires
	}));

	ok.textContent = `Kodi i rikthimit është krijuar (për testim): ${code}. Përdorni lidhjen e mëposhtë për ta rivendosur.`;
	ok.classList.add('show');
	ok.style.display = 'block';

	// Provide link to reset page
	const link = document.createElement('a');
	link.href = `reset.html?u=${encodeURIComponent(user.username)}`;
	link.textContent = 'Hap faqen e rivendosjes';
	link.style.display = 'inline-block';
	link.style.marginTop = '12px';
	ok.appendChild(document.createElement('br'));
	ok.appendChild(link);
});
