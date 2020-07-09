var currentBrowser;

function fadeInPage(){
    checkIfDarkmode();
    checkIfTouch();
    checkBrowser();
    setTimeout(function() {
        $('header').removeClass('onLoadHeader');
    }, 500);
    setTimeout(function(){
        $('#greeting').removeClass('onLoadGreeting');
    },1000);
    setTimeout(function(){
        $('#work').removeClass('onLoadPort');
    },1500);
}

$( "#logo p" ).click(function() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    return false;
});


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

    let scroll = this.scrollY,
        windowHeight = this.innerHeight;
        workHeight = document.getElementById("work").clientHeight;
        workDistanceTop = document.getElementById("work").offsetTop;
        delta = workDistanceTop - scroll;
        leway = 40;

    if(delta > 0){
        if( (delta < (windowHeight/6)) && !showWork){
            showPort(delta);
        }else if( ( delta > (windowHeight/6)) && showWork){
            hidePort(delta);
        }
    }else if(delta < 0){
        let workDistanceBottom = workDistanceTop + workHeight;
        let newDelta = workDistanceBottom - scroll;

        if( (newDelta > (windowHeight/2.5)) && !showWork){
            showPort(delta);
        }else if( ( newDelta < (windowHeight/2.5)) && showWork){
            hidePort(delta);
        }
    }

    
    if ((windowHeight + scroll + leway) >= document.body.offsetHeight) {
        setTimeout(function() {
            $('footer ul').removeClass('hideFooter');
        }, 400);
    }else{
        $('footer ul').addClass('hideFooter');
    }

});

function showPort(delta){
    if(delta>0){
        $('#work').removeClass('inactive');
        $('#work').addClass('active');

        $('#greeting').removeClass('active');
        $('#greeting').addClass('inactive2');
    }else{
        $('#work').removeClass('inactive2');
        $('#work').addClass('active');

        //$('#about').removeClass('active');
        //$('#about').addClass('inactive');
    }
    showWork = true;
}

function hidePort(delta){
    if(delta>0){
        $('#work').removeClass('active');
        $('#work').addClass('inactive');

        $('#greeting').addClass('active');
        $('#greeting').removeClass('inactive2');
    }else{
        $('#work').removeClass('active');
        $('#work').addClass('inactive2');

        //$('#about').removeClass('inactive');
        //$('#about').addClass('active');
    }
    showWork = false;
}

/*
let path = document.querySelector(".path");
let length = path.getTotalLength();
// console.log(length);

path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
*/