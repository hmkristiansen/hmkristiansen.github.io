
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


window.addEventListener("scroll", function() {
	var section = document.getElementById("content");
	var sectionOffset = section.offsetTop;
	var scrollPosition = window.pageYOffset;

	var element = document.getElementById("header");
	var elementHeight = element.offsetHeight;
  
	if (scrollPosition > (sectionOffset-elementHeight+4)) {
	  section.classList.add("scroll-in");
	} else {
	  section.classList.remove("scroll-in");
	}
});

const element = document.getElementById('content');

element.addEventListener('click', function() {

	let scrollPosition = window.pageYOffset;

	if(scrollPosition<8){
		window.scroll({
			top: window.pageYOffset + 24,
			behavior: 'smooth'
		});
	}
});

function openCity(evt, tab) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tab).style.display = "block";
	evt.currentTarget.className += " active";
}
  

window.addEventListener('load', function() {
	var overlay = document.getElementById('overlay');
	
	setTimeout(function() {
		overlay.style.opacity = '0';
	  }, 100); 

	setTimeout(function() {
	  overlay.style.display = 'none';
	}, 1000); 
});