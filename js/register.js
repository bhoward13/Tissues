(function (window) {
	'use strict';
	var App = window.App;
	var User = App.User;
	var UserStore = App.UserStore;
	
	window.onsubmit = function() {
		var email = document.getElementById('userName').value;
		var password = document.getElementById('password').value;
		//var newUser = new User(email, password);
		var storage = new UserStore(sessionStorage.getItem('UserStorage'));
		storage.add(email, password);
		sessionStorage.setItem('UserStorage', JSON.stringify(storage.getAll()));
	}
})(window)