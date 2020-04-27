// Global variables
var browser; // 1 = Chromium, 2 = Webkit
var isMobile = false;
var isTouch = false;
var inPortOverlay = false;

var projects = [
	["shake",shake],
	["ctrl",ctrl],
	["nn",nn],
	["pb",pb]
];

var mainSections = [];
var images=[];
var scrollPos;

/* Loading content */ 
getProjects();
preload();
this.mainSections = document.querySelectorAll("section");

/* Page startup and variable events */

$(document).ready(function() {
	startup();
	updateContainer();
});

$(window).resize(function() {
	updateContainer();
});

$('.section_wrapper').scroll(function(e) {
	scrollPos = $('.section_wrapper').scrollTop();
	if(!inPortOverlay){
		if(isMobile){
			scrollBar();
		}else{
			updateAnchors(e);
		}
	}else{

	}
});

/* Supporting Functions */

function startup(){
	checkIfTouch();
	checkIfDarkmode();
	//setSectionHeights();

	/*Setting setting some states*/ 
	$('.section_wrapper').addClass('snapper');
	$('section').each(function () {
		$(this).addClass('snapping');
	});
	$('body').addClass(' loadBody');
}

/* - - - */

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
}

/* - - - */ 

$('#menu a').click(function(event) {
	event.preventDefault(); 
	var target = $(this).attr("href"); 
	var scrollTop;
	for(var i=0; i<mainSections.length; i++){
		if(('#' + mainSections[i].id) == target){
			scrollTop = mainSections[i].offsetTop;
		}
	}
	$('.section_wrapper').animate({
		scrollTop
	}, 200);	
});

/* - - - */ 
var $currentSection;
var currentId;
var reach = window.innerHeight/2;

function updateAnchors(e){
	for(var i=0; i<mainSections.length; i++){
		var id = mainSections[i].id;
		$currentSection = $("#"+id);
		var activeLinkHref = "#"+ mainSections[i].id;
		if( (scrollPos -  mainSections[i].offsetTop) <= reach && (scrollPos -  mainSections[i].offsetTop) > -reach ){
			$("a[href='"+activeLinkHref+"']").addClass("active");
			currentId = $currentSection.attr("id");
		}else{
			$("a[href='"+activeLinkHref+"']").removeClass("active");
		}
	}
}


/* - - - */ 

function updateContainer() {
	var $width = $(window).width();
    if ($width <= 850) {
		isMobile = true;
    }else {
        isMobile = false;
	}
}

/* - - - - - */

function checkIfDarkmode(){
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.getElementById('page').setAttribute("class", "goGray");
		document.getElementById('goGray').classList.add("currentTheme");
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
	document.getElementById('goGray').classList.remove("currentTheme");
	document.getElementById('goDark').classList.remove("currentTheme");
	document.getElementById('goContrast').classList.remove("currentTheme");
	document.getElementById(id).setAttribute("class", "currentTheme");
}	

/* - - - - */

$("#settingsIcon").click(function(){
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
		$('body').addClass('non-touch');
	}else{
		isTouch = true;
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

$(".port_quick_view").click(function(event) {
	inPortOverlay = true;
	renderProject(event);
	$(".section_wrapper").toggleClass("noscroll");
	$(".faderTop").toggleClass("removeElement");
	$(".faderBottom").toggleClass("removeElement");
	$(".port_overlay").toggleClass("show_overlay");

	setTimeout(function() {
		$('#work').toggleClass('blur');
		$('nav').toggleClass('blur');
		$('.settings').toggleClass('blur');
	}, 200);
});

$("#close_port_btn").click(function(event) {
	inPortOverlay = false;
	$(".port_overlay").toggleClass("show_overlay");
	$('#work').toggleClass('blur');
	$('nav').toggleClass('blur');
	$('.settings').toggleClass('blur');
	$(".section_wrapper").toggleClass("noscroll");
	setTimeout(function() {
		document.getElementById("port_img").remove();
		$(".faderTop").toggleClass("removeElement");
		$(".faderBottom").toggleClass("removeElement");
	}, 200);
});


function renderProject(event){
	let targetId = event.target.id;
	let targetObj;
	let currentIndex;
	
	for(var i = 0; i<projects.length; i++){
		if(targetId == projects[i][0]){
			currentIndex = i;
			targetObj = projects[i][1];
		}
	}
	let img = images[currentIndex];
	let ref = document.getElementById("imageSelector");
	let parentDiv = ref.parentNode;
	parentDiv.insertBefore(img, ref)

	$(".port_cont h1").html(targetObj.cont_ing);
	$(".port_cont #client").html(targetObj.item_info.client);
	$(".port_cont #role").html(targetObj.item_info.role);
	$(".port_cont #period").html(targetObj.item_info.period);
	$(".port_cont #cont_ing").html(targetObj.text.text0);
}

/*PRELOADING IMAGES*/


function preload(){
	for(var i=0; i<projects.length; i++){
		preloadImage(projects[i][1].header_img);
	}
}
function preloadImage(url){
    var img = new Image();
    img.src = url;
    img.id = "port_img";
    images.push(img);
}

/* UPDATE AGE */

var update = setInterval(function() {
	let sectionHeight = $('#about').height();
	let upperBound = mainSections[2].offsetTop + sectionHeight/2;
	let lowerBound = mainSections[3].offsetTop + sectionHeight/2;
	if(scrollPos > upperBound && scrollPos < lowerBound){
		updateAge();
	}
}, 10);

var bday = new Date("Nov 19, 1996 05:55:25").getTime();
var dday = new Date("Nov 19, 2077 12:00:00").getTime();

function updateAge(){
	let now = new Date().getTime(); 
	let diffTime1 = Math.abs(now - bday);
	let diffTime2 = Math.abs(dday - now);
	document.getElementById("age").innerHTML =(diffTime1/31557600000);
	//document.getElementById("dead").innerHTML ="💀 : " + (diffTime2/31557600000);
}

/*SCROLL BAR WHEN SCROLLING ON MOBILE*/

function scrollBar() {
	let height = $('.section_wrapper').height()*(mainSections.length-1);
	let scrolled = (scrollPos / height) * 100;
	document.getElementById("bar").style.width = scrolled + "%";
}




/* OLD STUFF */ 

/*

var shake1 = ["assets/shake/shake.jpg", "SHAKE from Santander Consumer Bank","UX design for the service SHAKE. The project is still in developemnt and kinda secret.","https://www.notion.so/SHAKE-by-Santander-Consumer-Bank-f45ce3ed5e444c4d86f5abaeac3da1e0"];
var ctrl1 = ["assets//ctrl/ctrl.jpg", "CTRL frame","Concept of a IOT-device made in the course Trend Driven Design.","https://www.notion.so/0ae5510a0e224f4c8a6936045fe51e06?v=f3f088ddad664c0fab1b2af3fab3c2bf"];
var nn1 = ["assets/nn/nn.jpg","Nevrotiske Neuroner","Concept board game for kids made for the start-up TACKL.","https://www.notion.so/Nevrotiske-Nevroner-d51ad60ec63b4968b0d7c24f8fe6eee2"];
var pb1 = ["assets/pb/pb.jpg", "Sustainability Index","Research project in the course Sustainable Design","https://www.notion.so/0ae5510a0e224f4c8a6936045fe51e06?v=f3f088ddad664c0fab1b2af3fab3c2bf"];

var mobileNavElements = [];
var distancesNav = [];

function mobileNavUpdate(){
	$('#menu a').each(function(i, li) {
		var $navEl = $(li);  
		mobileNavElements[i] = $navEl;
		var distance = mobileNavElements[i].offset().left;
		distancesNav[i] = distance;
	});	
}
function scrollMobileNav(i){
	var $width = $(window).width()
	$('nav').scrollLeft(distancesNav[i] - ($width*0.05));
}
*/

/*
function setSectionHeights(){
	$('section').each(function(i, s) {
		sectionOffsets[i] =  $(s).offset().top;
	});
}*/
