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
	if (!touchsupport){
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

    if(scroll < 40){
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

$('.greeting_pil').click(function(){
    if(this.id!="pil4"){  
        let vw  = $(window).width();
        var leftPos = $('#greeting').scrollLeft();
        $('#greeting').animate({
            scrollLeft: leftPos + vw
        }, 'slow');
    }else{
        $('html, body').animate({scrollTop: '+=150px'}, 200);
    }
});