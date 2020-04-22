// Global variables
var browser; // 1 = Chromium, 2 = Webkit
var isMobile = false;
var isTouch = false;
var inPortOverlay = false;

var shake1 = ["assets/shake/shake.jpg", "SHAKE from Santander Consumer Bank","UX design for the service SHAKE. The project is still in developemnt and kinda secret.","https://www.notion.so/SHAKE-by-Santander-Consumer-Bank-f45ce3ed5e444c4d86f5abaeac3da1e0"];
var ctrl1 = ["assets//ctrl/ctrl.jpg", "CTRL frame","Concept of a IOT-device made in the course Trend Driven Design.","https://www.notion.so/0ae5510a0e224f4c8a6936045fe51e06?v=f3f088ddad664c0fab1b2af3fab3c2bf"];
var nn1 = ["assets/nn/nn.jpg","Nevrotiske Neuroner","Concept board game for kids made for the start-up TACKL.","https://www.notion.so/Nevrotiske-Nevroner-d51ad60ec63b4968b0d7c24f8fe6eee2"];
var pb1 = ["assets/pb/pb.jpg", "Sustainability Index","Research project in the course Sustainable Design","https://www.notion.so/0ae5510a0e224f4c8a6936045fe51e06?v=f3f088ddad664c0fab1b2af3fab3c2bf"];

var projects = [
	["shake",shake],
	["ctrl",ctrl],
	["nn",nn],
	["pb",pb]
];


var mainSections = [];
var sectionOffsets = [];
var images=[];

/* Page startup and variable events */

$(document).ready(function() {
	startup();
	createAnchorLinks();
	updateContainer();
	getProjects();

	if(isMobile){
		mobileNavUpdate();
		//removeNav();
	}
});

$(window).resize(function() {
	updateContainer();
});

$('html, body').scroll(function(e) {
	if(!inPortOverlay){
		updateAnchors(e);
	}
	if(isMobile){
		//useScrollSpeed(e);
	}
});

/* Supporting Functions */

function startup(){
	//checkIfTouch();
	//checkBrowser();

	$('body').addClass(' loadBody');
	checkIfDarkmode();
	//preload();
	setSectionHeights();

	/*Setting setting some states*/ 
	$('body').addClass('snapper');
	$('section').each(function () {
		$(this).addClass('snapping');
	});

	this.mainSections = document.querySelectorAll("section");
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
	var $currentSection;
	for(var i=0; i<mainSections.length; i++){
		var id = mainSections[i].id;
		$currentSection = $("#"+id);
		var activeLinkHref = "#"+ mainSections[i].id;
		if( (scrollPos -  mainSections[i].offsetTop) <= reach && (scrollPos -  mainSections[i].offsetTop) > -reach ){
			$("a[href='"+activeLinkHref+"']").addClass("active");
			//location.hash = activeLinkHref; //attach the hash (#jumptarget) to the pageurl
			if(isMobile){
				scrollMobileNav(i);
				//debounce(scrollMobileNav);
			}
			setSectionHeights();
		}else{
			$("a[href='"+activeLinkHref+"']").removeClass("active");
		}
		//fadeOnScroll(i);
	}
	//console.log(sectionOffsets);
}

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

/* - - - */ 

function updateContainer() {
	var $width = $(window).width();
    if ($width <= 850) {
		isMobile = true;
    }else {
        isMobile = false;
	}
}

function setSectionHeights(){
	$('section').each(function(i, s) {
		sectionOffsets[i] =  $(s).offset().top;
	});
}

/* - - - */ 

function fadeOnScroll(currentIndex){

	/*
	if(sectionOffsets[currentIndex] < mainSections[currentIndex].innerHeight){
	}
	var id = mainSections[currentIndex].id;
	//console.log(id);

	var $section = $("#"+id);
*/

	/*
	var top = $('body').scrollTop();
	var sectionOffset = sectionOffsets[currentIndex];
	console.log((sectionOffset*1.5 / (top +sectionOffset)));*/
	/*
	//console.log(currentIndex);
	var id = mainSections[currentIndex].id;
	console.log(id);

	var $section = $("#"+id);
	if($('body').scrollTop() == sectionOffsets[currentIndex]){
		//console.log("true");
	}

	if(sectionOffsets[currentIndex] < $('body').scrollTop()){
		console.log(id+" is on top you");
	}else if(sectionOffsets[currentIndex] > $('body').scrollTop()){
		console.log(id+" is under you");
	}*/
	

	/*
	if(sectionOffsets[index] > window.innerHeight){
		console.log("element is view")
	}

	if((sectionOffsets[index] < -400) || sectionOffsets[index] > 400 ){
		console.log(mainSections[index] + " is out of bonds");
	}else{
		console.log(mainSections[index] + " is in view");
	}
	*/

	//$("#"+id).css("opacity", 1 - $('body').scrollTop() / ($('#'+id).height()/2));
}

/* - - -  - -*/

/*
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
*/
/* - - - */ 

/*
function removeNav(){
	const nav = document.querySelector('nav');
	setTimeout(function() { 
		nav.classList.add('is-hidden');
		nav.classList.remove('is-visible');
	}, 1500);
}*/

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

	$(".faderTop").toggleClass("removeElement");
	$(".faderBottom").toggleClass("removeElement");
	$(".port_overlay").toggleClass("show_overlay");

	$('#work').toggleClass('blur');
	$('nav').toggleClass('blur');
	$('.settings').toggleClass('blur');
});

$("#close_port_btn").click(function(event) {
	inPortOverlay = false;
	$(".faderTop").toggleClass("removeElement");
	$(".faderBottom").toggleClass("removeElement");
	$(".port_overlay").toggleClass("show_overlay");

	$('#work').toggleClass('blur');
	$('nav').toggleClass('blur');
	$('.settings').toggleClass('blur');
});


function renderProject(event){
	var targetId = event.target.id;
	var targetObj;
	
	for(var i = 0; i<projects.length; i++){
		if(targetId == projects[i][0]){
			targetObj = projects[i][1];
		}
	}

	$(".port_cont img").attr("src",targetObj.header_img);
	$(".port_cont h1").html(targetObj.cont_ing);
	$(".port_cont #client").html(targetObj.item_info.client);
	$(".port_cont #role").html(targetObj.item_info.role);
	$(".port_cont #period").html(targetObj.item_info.period);
	$(".port_cont #cont_ing").html(targetObj.text.text0);

}



/*

var portElement = $(".port_view");
var prevtarget;

var currentProject; 
var img = $('.port_cont img');
var header = $('.port_cont h1');
var text = $('.port_cont p');
var notionLink = $('.port_cont a');
var parentNode = document.getElementById("close_port_btn");

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
			}, 200);
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
		//$(portElement).addClass("hide_port");
	}else{
		//$(portElement).removeClass("hide_port");
		$(portElement).addClass("show_port");
	}
}
*/

/*PRELOADING IMAGES*/

/*
function preload(){
	for(var i=0; i<projects.length; i++){
		preloadImage(projects[i][1][0]);
	}
}


function preloadImage(url){
    var img = new Image();
    img.src = url;
    imd.id = "port_img";
    images.push(img);
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}*/