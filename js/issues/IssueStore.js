(function(window) {
	'use strict';
	var App = window.App || {};
	
	function IssueStore(storage){
		this.storage = storage
	}
	
	
	IssueStore.prototype.add = function (key, val) {
		this.storage.setItem(key, val);
	};
	
	IssueStore.prototype.remove = function(key) {
		this.storage.removeItem(key);
	};
	
	IssueStore.prototype.get = function (key){
		return this.storage.getItem(key);
	};
	
	IssueStore.prototype.getAll = function() {
		for (var key in this.storage) {
			if (this.storage.hasOwnProperty(key)) {
				console.log(key, this.storage[key]);
			}
		}
	};
	
	App.IssueStore = IssueStore;
	window.App = App;
})(window)