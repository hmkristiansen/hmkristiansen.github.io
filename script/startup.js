var currentBrowser;
var vh = document.documentElement.scrollHeight*2;
var overlayFix = false;
var touchsupport;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 

function fadeInPage(){
    //checkIfDarkmode();
    preloadAnimation();
    checkIfTouch();
    checkBrowser();
    scrollToDefault();
}


function checkIfTouch(){
	touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
	if (!touchsupport){
		$('#body').addClass('non-touch');
	}
}

function checkBrowser(){
    var browser = (function() {
        var test = function(regexp) {
            return regexp.test(window.navigator.userAgent);
        }
        overlayFix = true; 
    })();
    currentBrowser = browser;
}
