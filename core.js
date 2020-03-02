"use strict";


//Sequential For Loop
//Processing of Array
function loop(data) {
	var output = "";
	for(var i = 0; i < data.length; i++) {
		output += " <a href=\"" + data[i][0] + "\">" + data[i][1] + "</a>";
	}
	document.body.innerHTML = "<span>" + output + "</span>";   
}
/////////////////////
//PageChange Function
function turnpage(event) {
	if (event.target.tagName == "BODY") {
		(state < 4) ? state++ : state = 0;
		loop(contents[state]);
	}
}


var state = 0;
loop(contents[state]);
document.body.addEventListener("click", turnpage);
