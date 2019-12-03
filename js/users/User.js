(function(window) {
	'use strict';
	var App = window.App || {};
	
	function User(userName, password){
		this.userName = userName;
		this.password = password;
	}
	
	App.User = User;
	window.App = App;
})(window)