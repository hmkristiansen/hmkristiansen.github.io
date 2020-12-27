let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        setTimeout(function(){
            $("#preloader_container").addClass("fadeOut");
        },1500);
        setTimeout(function(){
            $("#preloader_container").addClass("remove");
            document.getElementById("content").classList.remove("hideOnLoad");
            document.getElementById("settings_toggle").classList.remove("hideOnLoad");
        },2000)
        setTimeout(function(){
            updateStatus = true;
        },3000)
    }
}, 100);