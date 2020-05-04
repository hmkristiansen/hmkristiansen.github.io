
var update = setInterval(function() {
	updateAge();
}, 500);

var bday = new Date("Nov 19, 1996 05:55:25").getTime();
var dday = new Date("Nov 19, 2077 12:00:00").getTime();

function updateAge(){
	let now = new Date().getTime(); 
	let diffTime1 = Math.abs(now - bday);
	let diffTime2 = Math.abs(dday - now);
	document.getElementById("age").innerHTML =(diffTime1/31557600000);
	//document.getElementById("dead").innerHTML ="💀 : " + (diffTime2/31557600000);
}
