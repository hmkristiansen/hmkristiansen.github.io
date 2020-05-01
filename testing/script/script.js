var showWork = false;

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    //console.log(scroll);
    if((scroll > this.outerHeight/10) && !showWork){
        showPort();
        //console.log("showing");
    }else if((scroll < this.outerHeight/10) && showWork){
        hidePort();
        //console.log("hiding");
    }

    /*
    if(scroll > this.outerHeight/3){
        showWork = true;
    }else{
        showWork = false;
    }*/
});

function showPort(){
    $('#photogrid').removeClass('inactive');
    $('#photogrid').addClass('active');
    showWork = true;
}

function hidePort(){
    $('#photogrid').removeClass('active');
    $('#photogrid').addClass('inactive');
    showWork = false;
}
