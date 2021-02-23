const form = document.querySelector('form');
const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');

chrome.storage.sync.get('loginData', (data) => {
	usernameField.value = data.loginData.username ?? "";
	passwordField.value = data.loginData.password ?? "";
});

form.addEventListener("submit", e => {
	e.preventDefault();
	chrome.storage.sync.set({loginData: {username: usernameField.value, password: passwordField.value}});
	window.close();
});
