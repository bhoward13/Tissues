var userName = 'adrian@tissue.com';
var uPassword = 'welcome1';
var adminName = 'admin@tissue.com';
var adminPass = 'admin123';

function validateLoginForm() {
	'use strict';
	
	var email = document.getElementById('userName');
	var password = document.getElementById('password');
	
	
	if ((email.value == userName) && (password.value == uPassword)) {
		return true;
	} 
	else if ((email.value == adminName) && (password.value == adminPass)){
		window.location.assign('subscription-dashboard.html');
		return false;
	} else {
		alert('The Username or Password is incorrect.');
		return false;
	}
}

function init() {
	'use strict';
	
	if (document && document.getElementById) {
		var loginForm = document.getElementById('loginForm');
		loginForm.onsubmit = validateLoginForm;
	}
}

window.onload = init;