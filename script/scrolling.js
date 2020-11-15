
let diff = 0;
let ticking = false;
let yScroll = 0;
const wheelEvent = 'onwheel' in document.createElement("div") ? 'wheel' : 'mousewheel';
let content = document.getElementById("content");

window.addEventListener('wheel', function(e) {

    yScroll = window.scrollY;
    diff = e.deltaY;

    console.log(diff);

    content.scrollLeft += diff;

    ticking = true;

}, { passive: true });

