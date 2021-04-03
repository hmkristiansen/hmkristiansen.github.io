var updateAgeBool = false;
var update = setInterval(function() {
	if(updateAgeBool){
		updateAge();
	}
}, 10);

var bday = new Date("Nov 19, 1996 05:55:25").getTime();
var dday = new Date("Nov 19, 2077 12:00:00").getTime();
var dayBool = true;

$("#life_wrapper").hover(function() {
	if(dayBool){
		dayBool = false;
	}else{
		dayBool = true;
	}
});

function updateAge(){
	let now = new Date().getTime(); 
	let diffTime1 = Math.abs(now - bday);
	let diffTime2 = Math.abs(dday - now);
	if(dayBool){
		document.getElementById("age").innerHTML =(diffTime1/31557600000);
	}else{
		document.getElementById("age").innerHTML ="- " + (diffTime2/31557600000);
	}
}


