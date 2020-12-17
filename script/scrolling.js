
let diff = 0;
let ticking = false;
let yScroll = 0;
const wheelEvent = 'onwheel' in document.createElement("div") ? 'wheel' : 'mousewheel';
let content = document.getElementById("content");

window.addEventListener('wheel', function(e) {

    yScroll = window.scrollY;
    diff = e.deltaY;

    if(document.getElementById("body").classList.contains("mobile")){
        content.scrollTop += diff/3;
    }else{
        content.scrollLeft += diff/2;
        ticking = true;
    }

}, { passive: true });

