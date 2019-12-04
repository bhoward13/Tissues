(function(window) {
	'use strict';
	var App = window.App || {};
	
	function UserStore(data){
		if (data == null) {
			this.data ={};
		}
		else {
			this.data = JSON.parse(data);
		}
	};
	
	UserStore.prototype.add = function(key, val) {
		this.data[key] = val;
	};
	
	UserStore.prototype.get = function(key) {
		return this.data[key];
	};
	
	UserStore.prototype.getAll = function() {
		return this.data;
	};
	
	UserStore.prototype.remove = function(key) {
		delete this.data[key];
	};
	
	App.UserStore = UserStore;
	window.App = App;
})(window)