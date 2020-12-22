
let diff = 0;
let ticking = false;
let yScroll = 0;
const wheelEvent = 'onwheel' in document.createElement("div") ? 'wheel' : 'mousewheel';
let content = document.getElementById("content");

//let greeting = document.getElementById("greeting");
let work = document.getElementById("work");
let about = document.getElementById("about");
let contact = document.getElementById("contact");

let subContent = [work, about, contact];

window.addEventListener('wheel', function(e) {

    yScroll = window.scrollY;
    diff = e.deltaY;

    if(document.getElementById("overlay").classList.contains("visible") != true){
        if(document.getElementById("body").classList.contains("mobile")){
            content.scrollTop += diff/3;
        }else{
            content.scrollLeft += diff/2;
        }
        //checkAndUpdateHeader();
        ticking = true;
    }


}, { passive: true });

function checkAndUpdateHeader(){

    if(!document.getElementById("about_nav").classList.contains("hidden_nav")){
        updateAgeBool = true;
    }else{
        updateAgeBool = false;
    }


    for(var i = 0; i<subContent.length; i++){
        let currElement = subContent[i];
        if(mobileRatio){
            let offset = currElement.getBoundingClientRect().top;
            let navElement = document.getElementById(currElement.id + "_nav");
            if (offset > -200 && offset < 200) {
                if(navElement.classList.contains("hidden_nav")){
                    navElement.classList.remove("hidden_nav");
                }
            } else if(offset > 400){
                if(!navElement.classList.contains("hidden_nav")){
                    navElement.classList.add("hidden_nav");
                }
            }
        }else{
            //console.log("desktop nav");
            let offset = currElement.getBoundingClientRect().left;
            let navElement = document.getElementById(currElement.id + "_nav");
            if (offset > -400 && offset < 800) {
                if(navElement.classList.contains("hidden_nav")){
                    navElement.classList.remove("hidden_nav");
                }
            } else if(offset > 400){
                if(!navElement.classList.contains("hidden_nav")){
                    navElement.classList.add("hidden_nav");
                }
            }
        }
    }
}

function goBackToStart(){
    if(mobileRatio){
        $(content).animate({scrollTop:0});
    }else{
        $(content).animate({scrollLeft: 0});
    }
    subContent.forEach(sub => {
        let navElement = document.getElementById(sub.id + "_nav");
        navElement.classList.add("hidden_nav");
    });
}

function goToSection(clicked_id){
    let idArr = clicked_id.split("_");
    let selSec = document.getElementById(idArr[0]);
    selSec.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});

}
