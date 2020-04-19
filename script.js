// Global variables
var browser; // 1 = Chromium, 2 = Webkit
var isMobile = false;
var isTouch = false;

var shake = ["assets/img/shake.jpg", "SHAKE from Santander Consumer Bank","UX design for the service SHAKE. The project is still in developemnt and kinda secret.","https://www.notion.so/SHAKE-by-Santander-Consumer-Bank-f45ce3ed5e444c4d86f5abaeac3da1e0"];
var ctrl = ["assets/img/ctrl.jpg", "CTRL frame","Concept of a IOT-device made in the course Trend Driven Design.","https://www.notion.so/0ae5510a0e224f4c8a6936045fe51e06?v=f3f088ddad664c0fab1b2af3fab3c2bf"];
var nn = ["assets/img/nn.jpg","Nevrotiske Neuroner","Concept board game for kids made for the start-up TACKL.","https://www.notion.so/Nevrotiske-Nevroner-d51ad60ec63b4968b0d7c24f8fe6eee2"];
var sustain = ["assets/img/sustain.png", "Sustainability Index","Research project in the course Sustainable Design","https://www.notion.so/0ae5510a0e224f4c8a6936045fe51e06?v=f3f088ddad664c0fab1b2af3fab3c2bf"];

var projects = [
	["shake", shake],
	["ctrl", ctrl],
	["nn", nn],
	["sustain",sustain]
];

var mainSections = [];
var images=[];

/* Page startup and variable events */

$(document).ready(function() {
	$('body').addClass(' loadBody');
	checkIfDarkmode();

	startup();
	createAnchorLinks();
	updateContainer();

	if(isMobile){
		mobileNavUpdate();
		removeNav();
	}
});

$(window).resize(function() {
	updateContainer();
});

$('html, body').scroll(function(e) {
	updateAnchors(e);
	if(isMobile){
		useScrollSpeed(e);
	}
}).scroll();

/* Supporting Functions */

function startup(){
	checkIfTouch();
	checkBrowser();
	preload();

	this.mainSections = document.querySelectorAll("section");

	/*Setting setting some states*/ 
	$('body').addClass('snapper');
	$('section').each(function () {
		$(this).addClass('snapping');
	})
}

/* - - - */ 

function createAnchorLinks(){
	$('a[href*="#"]').bind('click', function(e) {
		e.preventDefault(); 
		var target = $(this).attr("href"); 
		var scrollTop;
		for(var i=0; i<mainSections.length; i++){
			if(('#' + mainSections[i].id) == target){
				scrollTop = mainSections[i].offsetTop;
			}
		}
		$('html, body').animate({
				scrollTop
		}, 300, 'swing', function() {
			//location.hash = target; //attach the hash (#jumptarget) to the pageurl
		});
		return false;
	});
}

/* - - - */ 

function updateAnchors(e){
	var scrollPos = $('body').scrollTop();
	var reach = window.innerHeight/2;
	for(var i=0; i<mainSections.length; i++){
		var activeLinkHref = "#"+ mainSections[i].id;
		if( (scrollPos -  mainSections[i].offsetTop) <= reach && (scrollPos -  mainSections[i].offsetTop) > -reach ){
			$("a[href='"+activeLinkHref+"']").addClass("active");
			//location.hash = activeLinkHref; //attach the hash (#jumptarget) to the pageurl
			if(isMobile){
				scrollMobileNav(i);
				debounce(scrollMobileNav);
			}
		}else{
			$("a[href='"+activeLinkHref+"']").removeClass("active");
		}
	}
}

var mobileNavElements = [];
var distances = [];
function mobileNavUpdate(){
	$('#menu a').each(function(i, li) {
		var $navEl = $(li);  
		mobileNavElements[i] = $navEl;
		var distance = mobileNavElements[i].offset().left;
		distances[i] = distance;
	});	
}
function scrollMobileNav(i){
	var $width = $(window).width()
	$('nav').scrollLeft(distances[i] - ($width*0.05));
}

/* - - - */ 

function updateContainer() {
	var $width = $(window).width();
    if ($width <= 800) {
		isMobile = true;
    }else {
        isMobile = false;
	}
}

/* - - - */ 

var lastOffset = $('body').scrollTop();
var lastDate = new Date().getTime();
var ticker = 0;

function useScrollSpeed(e){
	var delayInMs = e.timeStamp - lastDate;
	var offset = e.target.scrollTop - lastOffset;
	var speedInpxPerMs = offset / delayInMs;

	lastDate = e.timeStamp;
	lastOffset = e.target.scrollTop;
	
	checkPosition(speedInpxPerMs);
	debounce(checkPosition);
}

function checkPosition(speedInpxPerMs){
	const nav = document.querySelector('nav');
	if (speedInpxPerMs < -1) {
		nav.classList.add('is-visible');
		nav.classList.remove('is-hidden');
		ticker++;
	}else if(ticker > 10){
		removeNav();
		ticker = 0;
	}
}

function debounce(func, wait = 10, immediate = true) {
	let timeout;
	return function() {
	  let context = this, args = arguments;
	  let later = function() {
		timeout = null;
		if (!immediate) func.apply(context, args);
	  };
	  let callNow = immediate && !timeout;
	  clearTimeout(timeout);
	  timeout = setTimeout(later, wait);
	  if (callNow) func.apply(context, args);
	};
};

/* - - - */ 

function removeNav(){
	const nav = document.querySelector('nav');
	setTimeout(function() { 
		nav.classList.add('is-hidden');
		nav.classList.remove('is-visible');
	}, 1500);
}

/* - - - - - */

function checkIfDarkmode(){
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.getElementById('page').setAttribute("class", "goDark");
		document.getElementById('goDark').classList.add("currentTheme");
	}else{
		document.getElementById('page').setAttribute("class", "goLight");
		document.getElementById('goLight').classList.add("currentTheme");
	}
}

function changeTheme(){
	var target = event.target || event.srcElement;
	var id = target.id;
	document.getElementById('page').setAttribute("class", "");
	document.getElementById('page').setAttribute("class", id);

	document.getElementById('goLight').classList.remove("currentTheme");
	document.getElementById('goDark').classList.remove("currentTheme");
	document.getElementById('goContrast').classList.remove("currentTheme");

	document.getElementById(id).setAttribute("class", "currentTheme");
}	

/* - - - - */

$("#settingsIcon").click(function(){
	console.log("clickin'")
	$("#settingsList").toggleClass("showSettings");
	$("#settingsList").toggleClass("hideSettings");

	$("#settingsIcon").toggleClass("activeSettings");
	$("#settingsIcon").toggleClass("inactiveSettings");
});

/* - - - -  -*/

function checkIfTouch(){
	var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
	if (!touchsupport){ // browser doesn't support touch
		isTouch = false;
		//$('html').addClass(' non-touch');
		//console.log("Not a touch device");
	}else{
		isTouch = true;
		//console.log("touch device");
	}
}

function checkBrowser(){
	var ua = navigator.userAgent.toLowerCase(); 
	if (ua.indexOf('safari') != -1) { 
		if (ua.indexOf('chrome') > -1) {
			browser = 1;
		} else {
			browser = 2;
		}
	}
}

/* - - - - - - Port Qucik view */

var portElement = $(".port_view");
var prevtarget;

var currentProject; 
var img = $('.port_cont img');
var header = $('.port_cont h1');
var text = $('.port_cont p');
var notionLink = $('.port_cont a');

$(".port_quick_view").click(function(event) {
	var target = event.target;
	if($(portElement).hasClass("show_port")){
		if(prevtarget == target){
			togglePortCard();
			$("#"+target.id).removeClass("activePortItem");
		}else{
			togglePortCard();
			setTimeout(function() {
				changePortCard(target.id);
			}, 250);
		}
	}else{
		changePortCard(target.id);
	}
	prevtarget = target;
});

$("#close_port_btn").click(function(event) {
	togglePortCard();
	$("#"+prevtarget.id).removeClass("activePortItem");
});

<<<<<<< HEAD
=======
var currentProject;
var currentImgIndex; 
var img = $('.port_cont img');
var header = $('.port_cont h1');
var text = $('.port_cont p');
var notionLink = $('.port_cont a');

var parentNode = document.getElementById("close_port_btn");

>>>>>>> 1047694a934fc59dfbb47675aa4aef4b5aa63991
function changePortCard(id){
	
	$('.port_img').remove();

	for(var i = 0; i<projects.length; i++){
		if(projects[i][0] == id){
			currentProject = projects[i][1];
			currentImgIndex = i;
			$("#"+projects[i][0]).addClass("activePortItem");
		}else{
			$("#"+projects[i][0]).removeClass("activePortItem");
		}
	}
	
	//img.attr('src',currentProject[0]);
	//img = images[currentImgIndex];
	
	insertAfter(parentNode,images[currentImgIndex]);
	
	header.html(currentProject[1]);
	text.html(currentProject[2]);
	notionLink.attr('href',currentProject[3]);
	notionLink.attr('target',"_blank");	

	togglePortCard();
}

function togglePortCard(){
	if($(portElement).hasClass("show_port")){
		$(portElement).removeClass("show_port");
		$(portElement).addClass("hide_port");
	}else{
		$(portElement).removeClass("hide_port");
		$(portElement).addClass("show_port");
	}
}


/*PRELOADING IMAGES*/

function preload(){
	for(var i=0; i<projects.length; i++){
		preloadImage(projects[i][1][0]);
	}
}

function preloadImage(url){
    var img = new Image();
    img.src = url;
    img.className = "port_img";
    /*imd.id = "port_img";*/
    images.push(img);
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}