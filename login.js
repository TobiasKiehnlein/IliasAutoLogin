const nameField = document.querySelector('#name');
const passwordField = document.querySelector('#password');
const submitButton = document.querySelector('#sbmt');

chrome.storage.sync.get('loginData', (data) => {
	const username = data.loginData.username;
	const password = data.loginData.password;
	if (nameField && passwordField && submitButton && username && password) {
		nameField.value = username;
		passwordField.value = password;
		submitButton.click();
	}
});

