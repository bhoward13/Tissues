(function (window) {
	'use strict';
	var App = window.App;
	var Issue = App.Issue;
	var IssueStore = App.IssueStore;
	
	var storage = new IssueStore(sessionStorage);
	
	window.onsubmit = function() {
		var id = document.getElementById('id').value;
		var title = document.getElementById('title').value;
		var status = document.getElementById('status').value;
		var assignee = document.getElementById('assignee').value;
		var created = document.getElementById('created').value;
		var updated = document.getElementById('updated').value;
		var details = document.getElementById('details').value;
		
		var newIssue = new Issue(id, storage);
		newIssue.open(title, status, assignee, created, updated, details);
	}
})(window)