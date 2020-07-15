var currentBrowser;

function fadeInPage(){
    checkIfDarkmode();
    checkIfTouch();
    checkBrowser();
    setTimeout(function(){
        $('#greeting').removeClass('onLoadGreeting');
    },500);
    setTimeout(function(){
        $('#work').removeClass('onLoadPort');
    },1500);
}


function checkIfTouch(){
	var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
	if (!touchsupport){ // browser doesn't support touch
		$('body').addClass('non-touch');
	}
}

function checkBrowser(){
    var browser = (function() {
        var test = function(regexp) {
            return regexp.test(window.navigator.userAgent);
        }
        switch (true) {
            case test(/edg/i): return "edge";
            case test(/opr/i) && (!!window.opr || !!window.opera): return "opera";
            case test(/chrome/i) && !!window.chrome: return "chrome";
            case test(/trident/i): return "ie";
            case test(/firefox/i): return "firefox";
            case test(/safari/i): return "safari";
            default: return "other";
        }
    })();
    currentBrowser = browser;
}


var showWork = false;

window.addEventListener("scroll", function (event) {

    let scroll = this.scrollY;

    if(scroll < 1){
        $('#work').removeClass('active');
        $('#work').addClass('inactive');

        $('#greeting').addClass('active');
        $('#greeting').removeClass('inactive2');
    }else{
        $('#work').removeClass('inactive');
        $('#work').addClass('active');

        $('#greeting').removeClass('active');
        $('#greeting').addClass('inactive2');
    }

});

$("#greeting").scroll(function () {
    let scrollLeft = $(this).scrollLeft();
    let scrollWidth = $('#greeting')[0].scrollWidth;
    let vw = $( window ).width();
    let diff = scrollLeft + vw;
    
    if(scrollLeft > 0){
        let scrolled = (diff/scrollWidth) * 100;
        document.getElementById("bar").style.width = scrolled + "%";
    }else{
        document.getElementById("bar").style.width = 0 + "%";
    }
})
