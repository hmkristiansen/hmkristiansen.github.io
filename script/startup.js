var currentBrowser;
var vh = document.documentElement.scrollHeight*2;
var overlayFix = false;
var touchsupport;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 
onLoadPage();
function onLoadPage(){
    //checkIfDarkmode();
    preloadAnimation();
    checkIfTouch();
    checkBrowser();
    checkWindowRatio();
    //fadeInPage();
    //scrollToDefault();
}

function fadeInPage(){
    document.getElementById("body").classList.remove("hideOnLoad");
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
