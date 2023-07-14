
// On load
window.addEventListener('load', function() {
	var overlay = document.getElementById('overlay');
	
	setTimeout(function() {
		overlay.style.opacity = '0';
	  }, 10); 

	setTimeout(function() {
	  overlay.style.display = 'none';
	}, 1000); 
});


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

// Scroll events

var oldScrollY = 0;
window.addEventListener("scroll", function() {
	var section = document.getElementById("content");
	var header = this.document.getElementById("header");
	var sectionOffset = section.offsetTop;
	var scrollPosition = window.pageYOffset;

	var element = document.getElementById("header");
	var elementHeight = element.offsetHeight;
  
	if(oldScrollY < scrollPosition){
		if (scrollPosition > (sectionOffset-elementHeight+32)) {
			section.classList.add("scroll-in");
			header.classList.add("blurHeader");
		} else {
			section.classList.remove("scroll-in");
			header.classList.remove("blurHeader");
		}
		// console.log("down");
	}else{
		if (scrollPosition > (sectionOffset-elementHeight)) {
			section.classList.add("scroll-in");
			header.classList.add("blurHeader");
		} else {
			section.classList.remove("scroll-in");
			header.classList.remove("blurHeader");
		}
		// console.log("up");
	}
	oldScrollY = scrollPosition;
});

const content = document.getElementById('content');
content.addEventListener('click', function() {
	let scrollPosition = window.pageYOffset;
	if(scrollPosition<40){
		window.scroll({
			top: window.pageYOffset + 80,
			behavior: 'smooth'
		});
	}
});

const header = document.getElementById('header');
header.addEventListener('click', function() {
	let scrollPosition = window.pageYOffset;
	if(scrollPosition>40){
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});
	}
});


//tab selector

function openContent(evt, tab) {
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
