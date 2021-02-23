const loginButton = document.querySelector('a[href*=login]');
const loginWithKIT = document.querySelector('input[value*="Mit KIT-Account anmelden"]');

if (loginWithKIT) {
	loginWithKIT.click();
}

if (loginButton && !loginWithKIT) {
	loginButton.click();
}
