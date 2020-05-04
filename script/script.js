
function fadeInPage(){
    $('body').removeClass('loadHide');
    checkIfTouch();
}


function checkIfTouch(){
	var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
	if (!touchsupport){ // browser doesn't support touch
		$('body').addClass('non-touch');
	}
}


var showWork = false;

window.addEventListener("scroll", function (event) {

    let scroll = this.scrollY,
        windowHeight = this.innerHeight;
        workHeight = document.getElementById("work").clientHeight;
        workDistanceTop = document.getElementById("work").offsetTop;
        delta = workDistanceTop - scroll;

    if(delta > 0){
        if( (delta < (windowHeight/2.5)) && !showWork){
            showPort(delta);
        }else if( ( delta > (windowHeight/2.5)) && showWork){
            hidePort(delta);
        }
    }else if(delta < 0){
        let workDistanceBottom = workDistanceTop + workHeight;
        let newDelta = workDistanceBottom - scroll;

        if( (newDelta > (windowHeight/2.5)) && !showWork){
            showPort(delta);
        }else if( ( newDelta < (windowHeight/2.5)) && showWork){
            hidePort(delta);
        }
    }

});

function showPort(delta){
    if(delta>0){
        $('#work').removeClass('inactive');
        $('#work').addClass('active');

        $('#greeting').removeClass('active');
        $('#greeting').addClass('inactive2');
    }else{
        $('#work').removeClass('inactive2');
        $('#work').addClass('active');

        $('#about').removeClass('active');
        $('#about').addClass('inactive');

    }
    showWork = true;
}

function hidePort(delta){
    if(delta>0){
        $('#work').removeClass('active');
        $('#work').addClass('inactive');

        $('#greeting').addClass('active');
        $('#greeting').removeClass('inactive2');
    }else{
        $('#work').removeClass('active');
        $('#work').addClass('inactive2');

        $('#about').removeClass('inactive');
        $('#about').addClass('active');
    }
    showWork = false;
}

