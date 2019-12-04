(function(window) {
	'use strict';
	var App = window.App || {};
	
	function IssueStore(data){
		if (data == null) {
			this.data ={};
		}
		else {
			this.data = JSON.parse(data);
		}
	};
	
	IssueStore.prototype.add = function(key, val) {
		delete val.db;
		this.data[key] = val;
	};
	
	IssueStore.prototype.get = function(key) {
		return this.data[key];
	};
	
	IssueStore.prototype.getAll = function() {
		return this.data;
	};
	
	IssueStore.prototype.remove = function(key) {
		delete this.data[key];
	};
	
	App.IssueStore = IssueStore;
	window.App = App;
})(window)