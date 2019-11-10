function createBarChart(data) {
	var chart = document.createElement("div");
	chart.id = 'jsChart';
	
	chart.style.position = 'relative';
	
	var height = 0;
	for (var i = 0; i < data.length; i+= 1) {
		height = Math.max(height, data[i].Subscribers);
	}
	
	chart.style.height = (height + 10) + "px";
	
	chart.style.borderBottomStyle = 'solid';
	chart.style.borderBottomWidth = '1px';
	
	var barPosition = 0;
	
	var barWidth = 50;
	for (i = 0; i < data.length; i+= 1) {
		var dataItem = data[i];
		var bar = document.createElement('div');
		bar.style.display = 'inline-block';
		bar.style.position = "absolute";
        bar.style.left = barPosition + "px";
        bar.style.width = barWidth + "px";
        bar.style.backgroundColor = dataItem.Color;
        bar.style.height = dataItem.Subscribers + "px";
        bar.style.borderStyle = "ridge";
        bar.style.borderColor = dataItem.Color;
		
		bar.style.MozBoxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.WebkitBoxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.boxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.MozBorderRadiusTopleft = "8px";
        bar.style.WebkitBorderTopLeftRadius = "8px";
        bar.style.borderTopLeftRadius = "8px";
        bar.style.MozBorderRadiusTopright = "8px";
        bar.style.WebkitBorderTopRightRadius = "8px";
        bar.style.borderTopRightRadius = "8px";
        bar.style.backgroundImage =
            "-moz-linear-gradient(" + dataItem.Color + ", black)";
        bar.style.backgroundImage =
            "-webkit-gradient(linear, 0% 0%, 0% 100%," +
            "color-stop(0, " + dataItem.Color + "), color-stop(1, black))";
        bar.style.backgroundImage =
            "linear-gradient(" + dataItem.Color + ", black)";
			
		bar.style.bottom = "0px";
        chart.appendChild(bar);
		
		var month = document.createElement('label');
		month.innerText = data[i].Month;
		month.style.display = 'inline-block';
		month.style.position = 'absolute';
		month.style.bottom = '-30px';
		bar.appendChild(month);
		
		barPosition += (barWidth * 2);
		
	}
	
	return chart;
};

var animateBars = function() {
	var chart = document.getElementById('jsChart');
	var children = chart.children;
	console.log(children);
	
	var interval = setInterval(function () {
		var count = 0;
		for (var x = 0; x < children.length; x+= 1) {
			var childHeight = parseInt(children[x].style.height);
			if (count == 12) {
				clearInterval(interval);
			}
			else if (childHeight > 0){
				children[x].style.height = (childHeight- 1)+"px";
			}
			else if (childHeight == 0) {
				delete children[x];
				count += 1;
			}
		}
	}, 5);
};

window.onload = function() {
	var data = [
	{'Month': 'January', 'Subscribers': 40, 'Color': "red"},
	{'Month': 'February', 'Subscribers': 10, 'Color': "blue"},
	{'Month': 'March', 'Subscribers': 100, 'Color': "green"},
	{'Month': 'April', 'Subscribers': 65, 'Color': "yellow"},
	{'Month': 'May', 'Subscribers': 75, 'Color': "orange"},
	{'Month': 'June', 'Subscribers': 120, 'Color': "brown"},
	{'Month': 'July', 'Subscribers': 121, 'Color': "magenta"},
	{'Month': 'August', 'Subscribers': 175, 'Color': "aqua"},
	{'Month': 'September', 'Subscribers': 220, 'Color': "salmon"},
	{'Month': 'October', 'Subscribers': 275, 'Color': "teal"},
	{'Month': 'November', 'Subscribers': 300, 'Color': "pink"},
	{'Month': 'December', 'Subscribers': 15, 'Color': "violet"}
	];
	
	var chart = createBarChart(data);
	document.body.appendChild(chart);
	
	document.getElementById('resetButton').onclick = animateBars;
};