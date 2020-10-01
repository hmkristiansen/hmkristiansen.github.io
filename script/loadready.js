let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        setTimeout(function(){
            $("#preloader_container").addClass("fadeOut");
            $('body,html').removeClass("noScroll");
        },1500);
        setTimeout(function(){
            $("#preloader_container").addClass("remove");
        },2000)
    }
}, 100);