var currentBrowser;
var vh = document.documentElement.scrollHeight*2;
var overlayFix = false;
var touchsupport;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 

function fadeInPage(){
    //checkIfDarkmode();
    //preloadAnimation();
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
        /*
        switch (true) {
            case test(/edg/i): overlayFix = true; return "edge";
            case test(/opr/i) && (!!window.opr || !!window.opera): return "opera";
            case test(/chrome/i) && !!window.chrome: overlayFix = true; return "chrome";
            case test(/trident/i): return "ie";
            case test(/firefox/i): overlayFix = true; return "firefox";
            case test(/safari/i): overlayFix = true;  return "safari";
            default: return "other";
        }*/
    })();
    currentBrowser = browser;
}
