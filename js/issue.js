(function (window) {
	'use strict';
	var App = window.App;
	var Issue = App.Issue;
	var IssueStore = App.IssueStore;
	
	var storage = new IssueStore(sessionStorage.getItem('IssueStorage'));
	sessionStorage.setItem('IssueStorage', JSON.stringify(storage.getAll()));
	var issueMod = new Issue(0, storage);
	
	document.getElementById('removeForm').onsubmit = function() {
		var issue_id = document.getElementById('id').value;
		issueMod.close(issue_id);
	};
	
	if (document.getElementById('issueList')) {
		var table = document.createElement('table');
		table.id = "issueTable";
		var tableBody = document.createElement('tbody');
		var data = storage.getAll();
		for (var key in data) {
			if (!data.hasOwnProperty(key)) continue;
			var row = document.createElement('tr');
			
			var obj = data[key];
			for (var prop in obj){
				if (!obj.hasOwnProperty(prop)) continue;
				var cell = document.createElement('td');
				cell.appendChild(document.createTextNode(obj[prop]));
				row.appendChild(cell);
			}
			row.name = key;
			add_checkbox(row);
			tableBody.appendChild(row);
		}
		
		table.appendChild(tableBody);
		document.getElementById('issueList').appendChild(table);
	};
	
	function add_checkbox(element){
		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.name = element.name;
		element.append(checkbox);
		check_click(checkbox);
	};
	
	function check_click(element) {
		element.onclick = function() {
			storage.remove(element.name);
			sessionStorage.setItem('IssueStorage', JSON.stringify(storage.getAll()));
			document.getElementById('issueTable').deleteRow(element);
		}
	};
	
})(window)