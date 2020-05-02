var showWork = false;

window.addEventListener("scroll", function (event) {

    let scroll = this.scrollY;

    let windowHeight = this.innerHeight;

    let workHeight = document.getElementById("work").clientHeight;

    let workDistanceTop = document.getElementById("work").offsetTop;

    let delta = workDistanceTop - scroll;


    if(delta > 0){
        if( (delta < (windowHeight/2)) && !showWork){
            showPort(delta);
        }else if( ( delta > (windowHeight/2)) && showWork){
            hidePort(delta);
        }
    }else if(delta < 0){
        let workDistanceBottom = workDistanceTop + workHeight;
        let newDelta = workDistanceBottom - scroll;

        if( (newDelta > (windowHeight/2)) && !showWork){
            showPort(delta);
        }else if( ( newDelta < (windowHeight/2)) && showWork){
            hidePort(delta);
        }
    }

});

function showPort(delta){
    if(delta>0){
        $('#work').removeClass('inactive');
        $('#work').addClass('active');
    }else{
        $('#work').removeClass('inactive2');
        $('#work').addClass('active');
    }
    
    showWork = true;
}

function hidePort(delta){
    if(delta>0){
        $('#work').removeClass('active');
        $('#work').addClass('inactive');
    }else{
        $('#work').removeClass('active');
        $('#work').addClass('inactive2');
    }
    showWork = false;
}
