(function (window) {
	'use strict';
	var App = window.App;
	var Issue = App.Issue;
	var IssueStore = App.IssueStore;
	
	var storage = new IssueStore(sessionStorage);
	var issueMod = new Issue(0, storage);
	
	document.getElementById('removeForm').onsubmit = function() {
		var issue_id = document.getElementById('id').value;
		issueMod.close(issue_id);
	};
	
	document.getElementById('printForm').onclick = function() {
		issueMod.printIssues();
	};
	
})(window)