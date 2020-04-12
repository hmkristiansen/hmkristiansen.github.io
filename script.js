
// const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

// Global variables
var browser; // 1 = Chromium, 2 = Webkit
var isMobile = false;



/* Page startup and variable events */

$(document).ready(function() {

	createAnchorLinks();
	startup();
	updateContainer();

	$(window).resize(function() {
		updateContainer();
		reloadPageOnResize();
	});

	if(isMobile){
		mobileNavUpdate();
		removeNav();
	}

});


$('html, body').scroll(function(e) {
	updateAnchors(e);
	if(isMobile){
		useScrollSpeed(e);
	}
}).scroll();


/* Supporting Functions */

function startup(){

	$('body').addClass('snapper');
	$('section').each(function () {
		$(this).addClass('snapping');
	})

	var ua = navigator.userAgent.toLowerCase(); 
	if (ua.indexOf('safari') != -1) { 
		if (ua.indexOf('chrome') > -1) {
			browser = 1;
		} else {
			browser = 2;
		}
	}

	
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.getElementById('page').setAttribute("class", "goDark");
	}else{
		document.getElementById('page').setAttribute("class", "goLight");
	}
	
}

/* - - - */ 

function createAnchorLinks(){
	var mainSections = document.querySelectorAll("section");
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
		removeNav();
		return false;
	});
}

/* - - - */ 

function updateAnchors(e){

	var mainSections = document.querySelectorAll("section");
	var scrollPos = $('body').scrollTop();
	var reach = window.innerHeight/2;
	var currentRange;

	for(var i=0; i<mainSections.length; i++){
		currentRange = scrollPos -  mainSections[i].offsetTop;
		//console.log(currentRange);
		var activeLinkHref = "#"+ mainSections[i].id;
		if( (scrollPos -  mainSections[i].offsetTop) <= reach && (scrollPos -  mainSections[i].offsetTop) > -reach ){
			//console.log(mainSections[i].id + " in range");
			$("a[href='"+activeLinkHref+"']").addClass("active");
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

var resizeId;
function reloadPageOnResize(){
	clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 500);
}
function doneResizing(){
	location.reload();
}

/* - - - */ 

var lastOffset = $( 'body' ).scrollTop();
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

	//console.log(speedInpxPerMs);

	const nav = document.querySelector('nav');
	if (speedInpxPerMs < 0) {
		nav.classList.add('is-visible');
		nav.classList.remove('is-hidden');
		ticker++;
	} /*else if(ticker > 15){
		removeNav();
		ticker = 0;
	}*/else{
		removeNav();
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
	}, 2000);
}

/* - - - - - */

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