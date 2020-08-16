
readyPage();

function readyPage(){
    setTimeout(function(){
        $("#preloader_container").addClass("fadeOut");
        $('body,html').removeClass("noScroll");
    },3000);
}