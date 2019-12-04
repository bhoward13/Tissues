(function (window) {
	'use strict';
	var App = window.App;
	var User = App.User;
	var UserStore = App.UserStore;
	
	window.onsubmit = function() {
		var email = document.getElementById('userName').value;
		var password = document.getElementById('password').value;
		var storage = new UserStore(sessionStorage.getItem('UserStorage'));
		sessionStorage.setItem('UserStorage', JSON.stringify(storage.get(email)));
		if (storage.get(email) == password){
			console.log('yes');
			return true;
		} else {
			alert('Incorrect password or email');
			return false;
		}
	}
})(window)