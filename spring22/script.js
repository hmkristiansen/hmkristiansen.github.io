
let intro_content = document.querySelector('#intro_content').children

for(let i=0; i<intro_content.length; i++){
    intro_content[i].classList.add("fadeStart")
}

function loadPage(){
    setInterval(displayContent, 350)
}

j=0;

function displayContent() {
    //console.log(intro_content[j])
    if(j<intro_content.length){
        intro_content[j].classList.add("fadeStop")
        intro_content[j].classList.remove("fadeStart")
    }
    j++
}

/*
const [red, green, blue] = [250, 250, 250]
const body = document.querySelector('body')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 100
  //console.log(y)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})


function scrollToProjects() {
    document.querySelector('#project_section').scrollIntoView({behavior: 'smooth'});
}
*/

var updateAgeBool = true;
var update = setInterval(function() {
	if(updateAgeBool){
		updateAge()
	}
}, 10)

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

function displayMe(){
    // console.log("hover in");
    document.getElementById("me_img").classList.add("showMe");
}

function hideMe(){
    // console.log("hover out");
    document.getElementById("me_img").classList.remove("showMe");
}