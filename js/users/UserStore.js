(function(window) {
	'use strict';
	var App = window.App || {};
	
	function UserStore(storage){
		this.storage = storage
	}
	
	UserStore.prototype.get = function (key){
		return this.storage.getItem(key);
	};
	
	UserStore.prototype.save = function (key, val) {
		this.storage.setItem(key, val);
	};
	
	App.UserStore = UserStore;
	window.App = App;
})(window)