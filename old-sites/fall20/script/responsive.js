var mobileRatio = false;

$(window).resize(function() { 
    checkWindowRatio();
    scrollToDefault();
});

function checkWindowRatio(){
    let w = window.innerWidth;
    let h = window.innerHeight;
    let ratio = w/h;
    //console.log(ratio);
    if(ratio >= 1){
        document.getElementById('body').classList.remove("mobile");
        document.getElementById('body').classList.add("desktop");
        mobileRatio = false;
    }else{
        document.getElementById('body').classList.remove("desktop");
        document.getElementById('body').classList.add("mobile");
        mobileRatio = true;
    }
}

function scrollToDefault(){
    document.getElementById('content').scrollTo(0, 0);
}