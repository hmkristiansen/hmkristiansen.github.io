let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        setTimeout(function(){
            $("#preloader_container").addClass("fadeOut");
            $('body,html').removeClass("noScroll");
        },1500);
    }
}, 100);