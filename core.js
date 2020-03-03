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
	if (event.target.tagName == "BODY" || event.target.tagName == "DIV") {
		(event.clientY < event.target.offsetHeight/2) ? state-- : state++;
		state = Math.min(4, Math.max(0, state));
		loop(contents[state]);
	}
}


var state = 0;
loop(contents[state]);
document.body.addEventListener("click", turnpage);
var div = document.createElement("div");
document.body.appendChild(div);
div.innerHTML = "&#8595;";
