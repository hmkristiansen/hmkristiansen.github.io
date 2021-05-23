/* ---- PRELOADING ---- */

function preloadAnimation(){
	let container = document.getElementById("preloader");
	lottie.loadAnimation({
		container: container, 
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'script/preloader.json' 
	});
}

var shake,ctrl,futura,nn,aw,play;

var projects = [
	["play",play],
	["aw",aw],
	["shake",shake],
	//["futura",futura],
	["nn",nn]
	//["ctrl",ctrl]
];

var images=[];
getProjects();

function getProjects(){
	for(var i = 0; i<projects.length; i++){
		var json = (function () {
			var json = null;
			$.ajax({
				'async': false,
				'global': false,
				'url': "assets/"+projects[i][0]+"/"+projects[i][0]+".json",
				'dataType': "json",
				'success': function (data) {
					json = data;
				}
			});
			return json;
		})(); 
		projects[i][1] = json;
	}
	preloadImages();
	renderPhotogrid();
}

function preloadImages(){
	for(var i=0; i<projects.length; i++){
		preloadImage(projects[i][1].header_img);
	}
}

function preloadImage(url){
    var img = new Image();
	img.src = url;
	images.push(img);
}

function renderPhotogrid(){
	let workContainer = document.getElementById("work");
	for(var i=0; i<projects.length; i++){
		let workItemContainer = document.createElement('div');
        workItemContainer.classList += "workItemContainer";
        
		let workItem = document.createElement('div');
		workItem.classList += "workItem";
		workItem.id = "item"+i;

		let img = images[i];
		img.id = projects[i][0];
		workItem.appendChild(img);

		let h1 = document.createElement('h1');
		h1.innerHTML = projects[i][1].h1;
		workItem.appendChild(h1);

		workItemContainer.appendChild(workItem);
		workContainer.appendChild(workItemContainer);
	}
}


/* ---- STARTUP ---- */

var bodyElement = document.getElementById("body");

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 

function onLoadPage(){
    preloadAnimation();
    checkIfTouch();
    checkWindowRatio();
}

function checkIfTouch(){
	let touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
	if (!touchsupport){
		bodyElement.classList.add("non-touch");
	}
}


/* ---- SETTINGS ---- */

setStartStyle();
function setStartStyle(){
  bodyElement.classList.add("sans");
  document.getElementById("radioSans").checked = true;
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    bodyElement.classList.add("dark");
    document.getElementById("radioDark").checked = true;
  }else{
    bodyElement.classList.add("light");
    document.getElementById("radioLight").checked = true;
  }
}

document.getElementById('settings_font').onclick = function() {
  let radios = document.getElementsByName("font");
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      bodyElement.classList.add(radios[i].value);
    }else{
      bodyElement.classList.remove(radios[i].value);
    }
  }
}

document.getElementById('settings_style').onclick = function() {
  let radios = document.getElementsByName("color");
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      bodyElement.classList.add(radios[i].value);
    }else{
      bodyElement.classList.remove(radios[i].value);
    }
  }
}

var settingsVisible = false;
function toggleSettings(){
  if(settingsVisible){
    document.getElementById("settings_container").classList.add('settingsCollapsed');
    document.getElementById("settings_toggle").classList.remove("openSettings");
    settingsVisible = false;
  }else{
    document.getElementById("settings_container").classList.remove('settingsCollapsed');
    document.getElementById("settings_toggle").classList.add("openSettings");
    settingsVisible = true;
  }
}


/* ---- RESPONSIVE ---- */

var mobileRatio = false;

window.addEventListener('resize', function(){
    checkWindowRatio();
    scrollToDefault();
});

/*
$(window).resize(function() { 
    checkWindowRatio();
    scrollToDefault();
});*/

function checkWindowRatio(){
    let w = window.innerWidth;
    let h = window.innerHeight;
    let ratio = w/h;
    if(ratio >= 1){
        document.getElementById('body').classList.remove("mobile");
        document.getElementById('body').classList.add("desktop");
        mobileRatio = false;
    }else{
        document.getElementById('body').classList.remove("desktop");
        document.getElementById('body').classList.add("mobile");
        mobileRatio = true;
    }
}

function scrollToDefault(){
    document.getElementById('content').scrollTo(0, 0);
}


/* ---- AGE ---- */

var updateAgeBool = false;
var update = setInterval(function() {
	if(updateAgeBool){
		updateAge();
	}
}, 10);

var bday = new Date("Nov 19, 1996 05:55:25").getTime();
var dday = new Date("Nov 19, 2077 12:00:00").getTime();
var dayBool = true;

$("#life_wrapper").hover(function() { // FIX THIS
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


/* ---- CARUSELL ---- */

var updateStatus = false;
var sentences = 
["Heisann, I'm Henrik <span id='hand-wave'>👋</span>",
"I'm a digital design student, currently interning at <a href='https://eggsdesign.com/' target='_blank'>EGGS Design</a> in København 🇩🇰</a>",
"Nowadays I'm reading <a href='https://www.goodreads.com/book/show/35068803-rebel-talent' target='_blank'>Rebel Talent</a> and playing <a href='https://www.animal-crossing.com/new-horizons/' target='_blank'>Animal Crossing</a>",
"I'm also teaching myself how to do a handstand 🤸‍♂️",
"Scroll to learn more about me ✌️<br><span id='replayGreeting' onClick='replayGreeting();'>replay ↺</span>"
];

var teller = 1;
var timer = 0;
var runCarusell = true;
$('#status0').html(sentences[teller-1]);
$('#status1').html(sentences[teller]);

var update = setInterval(function() {
	if(updateStatus && runCarusell){
		carusellGreeting();
    }
}, 1400);

function carusellGreeting(){
    $('#greeting_message h3').addClass('carusellOut');
    if(timer%2 == 0){
        $("#status"+0).toggleClass('carusellOut getter');
        $("#status"+1).toggleClass('carusellIn getter');
    }else{
        if(teller > sentences.length-2){
            runCarusell = false;
            teller = 0;
        }else{
            teller++;
        }
        let changeEl = $('.getter');
        changeEl.html(sentences[teller]);
    }
    timer++; 
}

function replayGreeting(){
    runCarusell = true;
}

/* ---- SCROLLING ---- */

let diff = 0;
let ticking = false;
let yScroll = 0;
const wheelEvent = 'onwheel' in document.createElement("div") ? 'wheel' : 'mousewheel';
let content = document.getElementById("content");

//let greeting = document.getElementById("greeting");
let work = document.getElementById("work");
let about = document.getElementById("about");
let contact = document.getElementById("contact");
let hugImg = document.getElementById("hugImg");

let subContent = [work, about, contact];

window.addEventListener('wheel', function(e) {

    yScroll = window.scrollY;
    diff = e.deltaY;

    if(document.getElementById("overlay").classList.contains("visible") != true){
		if(mobileRatio){
			// work.style.transform = "skewY(" + diff*0.01 + "deg)";
			// hugImg.style.transform = "skewY(" + diff*0.01 + "deg)";
		}else{
			// work.style.transform = "skewX(" + diff*0.005 + "deg)";
			// hugImg.style.transform = "skewX(" + diff*0.005 + "deg)";
		}
        if(document.getElementById("body").classList.contains("mobile")){
            content.scrollTop += diff/3;
        }else{
            content.scrollLeft += diff/2;
        }
        ticking = true;
    }else{
		// work.style.transform = "skewY(" + 0 + "deg)";
		// hugImg.style.transform = "skewY(" + 0 + "deg)";
	}
}, { passive: true });

function checkAndUpdateHeader(){

    if(!document.getElementById("about_nav").classList.contains("hidden_nav")){
        updateAgeBool = true;
        runCarusell = false;
    }else{
        updateAgeBool = false;
        runCarusell = true;
    }
    for(var i = 0; i<subContent.length; i++){
        let currElement = subContent[i];
        if(mobileRatio){
			let offset = currElement.getBoundingClientRect().top;
			let vh = window.innerHeight;
            let navElement = document.getElementById(currElement.id + "_nav");
            if (offset > (-vh*0.1) && offset < (vh*0.5)) {
                if(navElement.classList.contains("hidden_nav")){
                    navElement.classList.remove("hidden_nav");
                }
            } else if(offset > (vh*0.5)){
                if(!navElement.classList.contains("hidden_nav")){
                    navElement.classList.add("hidden_nav");
                }
            }
        }else{
			let offset = currElement.getBoundingClientRect().left;
			let vw = window.innerWidth;
            let navElement = document.getElementById(currElement.id + "_nav");
            if (offset > (-vw*0.1) && offset < (vw*0.5)) {
                if(navElement.classList.contains("hidden_nav")){
                    navElement.classList.remove("hidden_nav");
                }
            } else if(offset > (vw*0.5)){
                if(!navElement.classList.contains("hidden_nav")){
                    navElement.classList.add("hidden_nav");
                }
            }
        }
    }
}

function goBackToStart(){
    if(mobileRatio){
        $(content).animate({scrollTop:0});
    }else{
        $(content).animate({scrollLeft: 0});
    }
    subContent.forEach(sub => {
        let navElement = document.getElementById(sub.id + "_nav");
        navElement.classList.add("hidden_nav");
    });
}

function goToSection(clicked_id){
    let idArr = clicked_id.split("_");
    let selSec = document.getElementById(idArr[0]);
    selSec.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}


/* ---- OVERLAY ---- */

$("#work img").click(function() {
    $('#overlay').removeClass('hidden');
    $('#overlay').addClass('visible');
	$('body').addClass('noScroll');
	if(settingsVisible){toggleSettings()};
	setTimeout(function() {
		$('#content').addClass('blur');
		$('#settings_toggle').addClass('blur');
	}, 50);
	renderProject(this);
});

$("#close_btn").click(function() {
	closeOverlay();
});

$('#overlay').on('click', function(e) {
	if (e.target !== this){
		return;
	}else{
		closeOverlay();
	}
});

function closeOverlay(){
	$('#overlay').addClass('hidden');
    $('#overlay').removeClass('visible');
    $('body').removeClass('noScroll');
	$('#content').removeClass('blur');
	$('#settings_toggle').removeClass('blur');
    setTimeout(function() {
		$("#port_img").remove();
		$('.contentQuote').remove();
		$('.contentText').remove();
		$('.contentHr').remove();
		$('.contentCaption').remove();
		$('.contentHeader').remove();
		$('.contentImage').remove();
		$('.contentVideo').remove();
		$('#more_link').remove();
		$('.projectPDF').remove();
	}, 300);
}

$( "#exp_btn" ).click(function() {
	if( $('#port_content').hasClass('exp_overlay')){
		$('#port_content').removeClass('exp_overlay');
		$("#exp_btn img").attr("src","assets/svg/max.svg");
	}else{
		$('#port_content').addClass('exp_overlay');
		$("#exp_btn img").attr("src","assets/svg/min.svg");
	}
});

function renderProject(event){
	let targetId = event.id;
	let targetObj;
	let currentIndex;	
	for(var i = 0; i<projects.length; i++){
		if(targetId == projects[i][0]){
			currentIndex = i;
			targetObj = projects[i][1];
		} 
	}

	var img = event.cloneNode(true);
	img.id="port_img";
	let ref = document.getElementById("imageSelector");
	let parentDiv = ref.parentNode;
	parentDiv.insertBefore(img, ref);

	//$("#port_content h1").html(targetObj.h1);
	$("#port_content #client").html(targetObj.item_info.client);
	$("#port_content #role").html(targetObj.item_info.role);
	$("#port_content #period").html(targetObj.item_info.period);

	$currentContent = targetObj.content;
	let parent = document.getElementById("parentNode");

	for(var item in $currentContent){
		if ($currentContent.hasOwnProperty(item)) {
			if(item[0] == "t"){
				let p = document.createElement('p');
				p.className="contentText";
				p.innerHTML = $currentContent[item];
				parent.appendChild(p);
			}else if(item[0] == "i"){
				let img = document.createElement('img');
				img.className = "contentImage";
				img.src =$currentContent[item];
				parent.appendChild(img);
			}else if(item[0] =="v"){
				let vid = document.createElement('video');
				vid.className = "projectVideo";
				vid.poster = $currentContent[item].poster;
				vid.src = $currentContent[item].video;
				vid.type = "video/mp4";
				vid.className="contentVideo";
				vid.controls = true;
				parent.appendChild(vid);
			}else if(item[0]+item[1] == "h2"){
				let h2 = document.createElement('h2');
				h2.className="contentHeader";
				h2.innerHTML = $currentContent[item];
				parent.appendChild(h2);
			}else if(item[0] == "q"){
				let h3 = document.createElement('h3');
				h3.className="contentQuote";
				h3.innerHTML = $currentContent[item];
				parent.appendChild(h3);
			}else if(item[0] == "c"){
				let p = document.createElement('p');
				p.className="contentCaption";
				p.innerHTML = $currentContent[item];
				parent.appendChild(p);
			}else if(item[0] == "p"){
				let iframe = document.createElement('iframe');
				iframe.className = "projectPDF";
				iframe.src = $currentContent.pdf;
				iframe.style.height = "90vh";
				iframe.style.width = "90%";
				iframe.style.margin = "0 0 0 5%";
				iframe.innerHTML="If you are reading this you probably can't read the PDF :( <br><a href='https://drive.google.com/file/d/1zukV9AQP2CRKlKjQuhlE5fFpQYjimZxf/view?usp=sharing' target='_blank'>Download it here instead :)</a>";
				parent.appendChild(iframe);
			}
		}
	}

	let bottomBtn = document.createElement('div');
	bottomBtn.id = "more_link";
	let bottomLink = document.createElement('a');
	bottomLink.id="notion_link";
	bottomLink.innerHTML = "Back";
	bottomBtn.appendChild(bottomLink);
	parent.appendChild(bottomBtn);

	$('#notion_link').removeAttr('onclick');
	$('#notion_link').attr('onClick', 'closeOverlay();');
}


/* ---- LOADREADY ---- */

let stateBool = true;
if(stateBool){
    let stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
            clearInterval(stateCheck);
            setTimeout(function(){
                $("#preloader_container").addClass("fadeOut");
            },1500);
            setTimeout(function(){
                $("#preloader_container").addClass("remove");
                document.getElementById("content").classList.remove("hideOnLoad");
                document.getElementById("settings_toggle").classList.remove("hideOnLoad");
            },2000)
            setTimeout(function(){
                updateStatus = true;
            },3000)
            stateBool = false;
        }
    }, 10);
}



/*
<script src="script/preload.js"></script>
<script src="script/startup.js"></script>
<script src="script/settings.js"></script>
<script src="script/responsive.js"></script>
<script src="script/age.js"></script>
<script src="script/carusell.js"></script>
<script src="script/scrolling.js"></script>
<script src="script/overlay.js"></script>
<script src="script/loadready.js"></script>

jQuery(document).ready(function(){
    $.getScript('lottie.js');
    $.getScript('preload.js');
    $.getScript('startup.js');
    $.getScript('settings.js');
    $.getScript('responsive.js');
    $.getScript('age.js');
    $.getScript('carusell.js');
    $.getScript('scrolling.js');
    $.getScript('overlay.js');
    $.getScript('loadready.js');
});
*/