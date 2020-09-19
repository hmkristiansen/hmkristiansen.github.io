var currentBrowser;
var vh = document.documentElement.scrollHeight;
var overlayFix = false;

function fadeInPage(){
    //checkIfDarkmode();
    preloadAnimation();
    checkIfTouch();
    checkBrowser();
    setTimeout(function(){
        $('#greeting').removeClass('onLoadGreeting');
    },500);
    setTimeout(function(){
        $('#work').removeClass('onLoadPort');
    },1500);
    setTimeout(function(){
        $('footer').removeClass('onLoadPort');
    },3000);
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


var showWork = false;

let s = document.createElement("style");
document.head.appendChild(s);

window.addEventListener("scroll", function (event) {

    let scroll = this.scrollY;
    //console.log(scroll);
    //console.log(vh);

    if(scroll-300<vh){
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            s.textContent = "#overlay {top:" + scroll + "px !important; transition: all none;}"  +
            "#preloader_container {top:" + scroll + "px !important; transition: all none;}";
            console.log("update");
        }, 150));
    }

    
    if(scroll < 40){
        $('#work').removeClass('active');
        $('#work').addClass('inactive');

        $('footer').removeClass('active');
        $('footer').addClass('inactive');

        $('#greeting').addClass('activeText');
        $('#greeting').removeClass('inactiveText');
        $('#greeting').removeClass('blurGrid');
        $('#greeting').removeClass('stickElement');

        $('#work').addClass('blurGrid');

        if(scrollPercentage > 55 && scrollPercentage < 75){
            updateAgeBool = true;
        }

    }else{

        $('#work').removeClass('inactive');
        $('#work').addClass('active');
        $('#work').removeClass('blurGrid');

        $('footer').removeClass('inactive');
        $('footer').addClass('active');
        $('footer').removeClass('blurGrid');

        $('#greeting').removeClass('activeText');
        $('#greeting').addClass('inactiveText');

        setTimeout(function(){
            $('#greeting').addClass('stickElement');
        },200);


        $('#greeting').addClass('blurGrid');

        updateAgeBool = false;
    }
});

$('#greeting').scroll(function(){
    scrollPercentage = 100*this.scrollLeft/this.scrollWidth/(1-this.clientWidth/this.scrollWidth);
    if(scrollPercentage > 55 && scrollPercentage < 75){
        updateAgeBool = true;
    }else{
        updateAgeBool = false;
    }
});

$('.greeting_pil').click(function(){
    if(this.id!="pil4"){  
        let vw  = $(window).width();
        var leftPos = $('#greeting').scrollLeft();
        $('#greeting').animate({
            scrollLeft: leftPos + vw
        }, 'ease-in');
    }else{
        $('html, body').animate({scrollTop: '+=100px'}, 200);
    }
});

