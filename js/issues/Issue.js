(function(window) {
	'use strict';
	var App = window.App || {};
	
	function Issue(id, db){
		this.Id = id;
		this.db = db;
	}
	
	Issue.prototype.open = function(title, status, assignee, created, updated, details){
		this.title = title;
		this.status = status;
		this.assignee = assignee;
		this.created = created;
		this.updated = updated;
		this.details = details;
		this.db.add(this.Id, this);
	};
	
	Issue.prototype.close = function(id, db) {
		this.db.remove(id);
	};
	
	Issue.prototype.printIssues = function(db) {
		this.db.getAll();
	};
	
	App.Issue = Issue;
	window.App = App;
})(window)