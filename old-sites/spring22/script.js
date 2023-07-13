
// Fade in page animation

let intro_content = document.querySelector('#intro_content').children

for(let i=0; i<intro_content.length; i++){
    intro_content[i].classList.add("fadeStart")
}

function loadPage(){
    setInterval(displayContent, 350)
}

j=0;
function displayContent() {
    if(j<intro_content.length){
        intro_content[j].classList.add("fadeStop")
        intro_content[j].classList.remove("fadeStart")
    }
    j++
}

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


// Show / hide image
function displayMe(){
    document.getElementById("me_img").classList.add("showMe");
}

function hideMe(){
    document.getElementById("me_img").classList.remove("showMe");
}


/// confetti https://www.npmjs.com/package/canvas-confetti

var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, { resize: true });

myConfetti();

setTimeout(() => {
  myConfetti.reset();
}, 100);

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function makeConfetti(){
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 }
    });
}