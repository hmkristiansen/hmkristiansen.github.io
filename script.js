
// const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

// Global variables
var browser; // 1 = Chrome, 2 = Safari
var isMobile = false;

/* Page startup and variable events */

$(document).ready(function() {

	createAnchorLinks();
	startup();
	updateContainer();

	$(window).resize(function() {
		updateContainer();
	});

	if(isMobile){
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
		return false;
	});
}

/* - - - */ 

function updateAnchors(e){

	var mainSections = document.querySelectorAll("section");

	var scrollPos = $('body').scrollTop();
	var reach = window.innerHeight/4;
	var currentRange;

	for(var i=0; i<mainSections.length; i++){
		currentRange = scrollPos -  mainSections[i].offsetTop;
		//console.log(currentRange);
		var activeLinkHref = "#"+ mainSections[i].id;
		if( (scrollPos -  mainSections[i].offsetTop) <= reach && (scrollPos -  mainSections[i].offsetTop) > -reach ){
			//console.log(mainSections[i].id + " in range");
			$("a[href='"+activeLinkHref+"']").addClass("active");
		}else{
			$("a[href='"+activeLinkHref+"']").removeClass("active");
		}
	}
}

/* - - - */ 

function updateContainer() {
	var $width = $(window).width();
	console.log()
    if ($width <= 800) {
        isMobile = true;
    }
    if ($width > 800) {
        isMobile = false;
	}
}

/* - - - */ 

var lastOffset = $( 'body' ).scrollTop();
var lastDate = new Date().getTime();
var ticker = 0;

function useScrollSpeed(e){

	var delayInMs = e.timeStamp - lastDate;
	var offset = e.target.scrollTop - lastOffset;
	var speedInpxPerMs = offset / delayInMs;
	//console.log(speedInpxPerMs);

	lastDate = e.timeStamp;
	lastOffset = e.target.scrollTop;
	
	checkPosition(speedInpxPerMs);
	debounce(checkPosition);

}

function checkPosition(speedInpxPerMs){
	const nav = document.querySelector('nav');
	if (speedInpxPerMs < - 1 || speedInpxPerMs > 1) {
		nav.classList.add('is-visible');
		nav.classList.remove('is-hidden');
		ticker++;
	} else if(ticker > 10){
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
	setTimeout(function() {   //calls click event after a certain time
		nav.classList.add('is-hidden');
		nav.classList.remove('is-visible');
	}, 1000);
}


/*
$('body').scroll(function(e) {
    var delayInMs = e.timeStamp - lastDate;
    var offset = e.target.scrollTop - lastOffset;
    var speedInpxPerMs = offset / delayInMs;
	//console.log(speedInpxPerMs);

    lastDate = e.timeStamp;
	lastOffset = e.target.scrollTop;
	
	checkPosition(speedInpxPerMs);
	debounce(checkPosition);
});*/