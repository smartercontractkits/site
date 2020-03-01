"use strict";


//Sequential For Loop
//Processing of Array
function loop(array, position) {
	var output = "";
	for(var i = 0; i < array.length; i++) {
    	output += " <a href=\"" + array[i][0] + "\">" + array[i][position] + "</a>";
    }
    document.body.innerHTML = output;   
}
////////////////////
//Scrolling Function
function updownio() {
	var former = 0;
	var locale = 0;
	//Downscroll ++, Upscroll --
	(window.scrollY > former) ? protem++ : protem--;
	former = window.scrollY;
	sessionStorage.setItem("status", protem);
	//Value Numerical Boundaries
	//Max Set to Eight Times [J]
	protem = (Math.min(40, Math.max(1, protem)));
	//Determining Array Position
	locale = (((Math.ceil(protem/8)*8)-8)/8);
	loop(contents[locale], 1);
}


//Set SessionStorage
sessionStorage.setItem("status", 0);
var protem = sessionStorage.getItem("status");
////////////////////
//HTML DOM Structure
window.addEventListener("scroll", updownio);
loop(contents[protem], 1);