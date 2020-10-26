var showWork = false;
let s = document.createElement("style");
document.head.appendChild(s);

let diff = 0;
let ticking = false;
let yScroll = 0;
const wheelEvent = 'onwheel' in document.createElement("div") ? 'wheel' : 'mousewheel';
let greetingContainer = document.getElementById("greeting");
//greetingContainer.scrollLeft = 0;

let horiGreeting = true;
let fromWork = false;


window.addEventListener('wheel', function(e) {
    yScroll = window.scrollY;
    diff = e.deltaY;

    let variable = greetingContainer.scrollLeft + greetingContainer.clientWidth;
    let set = greetingContainer.scrollWidth;

    var someDiv = document.getElementById('greeting');
    var distanceToTop = someDiv.getBoundingClientRect().top;

    if((diff!=0) && (distanceToTop == 0)){
        greetingContainer.scrollLeft += diff/1.5;
        horiGreeting = true;
    }else{
        horiGreeting = false;
    }

    if(variable == set){
        $('body').removeClass('disableYScrolling');
    }

    if((variable == set) && (diff>1)){
        horiGreeting = false;
    }else if((distanceToTop < 0)){
        horiGreeting = false;
    }

    if(horiGreeting){
        $('body').addClass('disableYScrolling');
        updates();
        
    }else{
        $('body').removeClass('disableYScrolling');
        scrollEvents(yScroll);
    }

    ticking = true;

}, { passive: true });


function scrollHori(diff){
    greetingContainer.scrollLeft += diff;
}

function scrollEvents(yScroll){
    if(yScroll-100<vh){
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            s.textContent = "#overlay {top:" + yScroll + "px !important; transition: all none !important;}"  +
            "#preloader_container {top:" + yScroll + "px !important; transition: all none !important;}";
        }, 150));
    }

    if(yScroll < 50){
        horiGreeting = true;
        scrollToGreeting();
    }else{
        scrollToWork();
        horiGreeting = false;
    }
}


function updates(){

    let offsetAge = $("#bio").offset();
    let offsetCarusel = $("#greets").offset();
    let positionInfo = document.getElementById('greets').getBoundingClientRect();
    let sw = positionInfo.width;

    if(offsetCarusel.left < -sw*0.5){
        updateStatus = false;
    }else{
        updateStatus = true;
    }

    if((offsetAge.left > -sw*1) && (offsetAge.left < sw*1)){
        updateAgeBool = true;
    }else{
        updateAgeBool = false;
    }

};


function scrollRight(){
    let vw  = $(window).width();
    var leftPos = $('#greeting').scrollLeft();
    $('#greeting').animate({
        scrollLeft: leftPos + vw
    }, 'ease-in');
}

function scrollDown(){
    horiGreeting = false;
    scrollEvents(yScroll);
    $('body').removeClass('disableYScrolling');
    $('html, body').animate({scrollTop: '+=100px'}, 200);

    scrollToWork();
}


/* SUPPORTING FUNCTIONS */

function scrollToGreeting(){
    $('#work').removeClass('active');
    $('#work').addClass('inactive');

    $('footer').removeClass('active');
    $('footer').addClass('inactive');

    $('#greeting').addClass('activeText');
    $('#greeting').removeClass('inactiveText');
    $('#greeting').removeClass('blurGrid');
    $('#greeting').removeClass('stickElement');

    $('#work').addClass('blurGrid');

    updates();  
}

function scrollToWork(){
    $('#work').removeClass('inactive');
    $('#work').addClass('active');
    $('#work').removeClass('blurGrid');

    $('footer').removeClass('inactive');
    $('footer').addClass('active');
    $('footer').removeClass('blurGrid');

    $('#greeting').removeClass('activeText');
    $('#greeting').addClass('inactiveText');
    $('#greeting').addClass('blurGrid');

    //greetingContainer.scrollLeft -= 5;
    updateAgeBool = false;
    updateStatus = false;
}