
var updateAgeBool = true;
var update = setInterval(function() {
	if(updateAgeBool){
		updateAge()
	}
}, 10)

// Update age ticker

var bday = new Date("Nov 19, 1996 05:55:25").getTime();
var dday = new Date("Nov 19, 2078 12:00:00").getTime();
var dayBool = true;

function changeDate(){
    if(dayBool){
        dayBool = false;
    }else{
        dayBool = true;
    }
}

function changeBack(){
    if(!dayBool){
        dayBool = true;
    }else{
        dayBool = false;
    }
}

function updateAge(){
	let now = new Date().getTime(); 
	let diffTime1 = Math.abs(now - bday);
	let diffTime2 = Math.abs(dday - now);
    
	if(dayBool){
		document.getElementById("date").innerHTML =(diffTime1/31557600000);
	}else{
		document.getElementById("date").innerHTML ="- " + (diffTime2/31557600000);
	}
}

