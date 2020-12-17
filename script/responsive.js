checkWindowRatio();

$(window).resize(function() { 
    checkWindowRatio();
});

function checkWindowRatio(){
    let w = window.innerWidth;
    let h = window.innerHeight;
    let ratio = w/h;
    //console.log(ratio);
    if(ratio >= 1){
        console.log("desktop");
        document.getElementById('body').classList.remove("mobile");
        document.getElementById('body').classList.add("desktop");
    }else{
        document.getElementById('body').classList.remove("desktop");
        document.getElementById('body').classList.add("mobile");
    }
}