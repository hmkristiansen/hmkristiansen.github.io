
//0-frontPage, 1-aboutPage, 2-portfolioPage, 3-funPage

var pageStates = ["greetingShow","aboutShow","portfolioShow","funShow"];
var currentPage = 0;
var previousPage = 0;
var pageDirection = "";
var headerColor;
var headerColorPalette;

var portfolioItems = [
    ["img/portfolio/shake/shake_thumb.jpg","Safer 2nd hand purchase of cars","SHAKE"],
    ["img/portfolio/nn/d6_thumb.jpg","Helping kids with school refusal","Neurotiske Nevroner"],
    ["img/portfolio/dcd/mockup_thumb.jpg","Democratize urban development","Trondheim Kommune"],
    ["img/portfolio/ss/sustain_thump.pmg","Making shopping more sustainable","Research project"]
];

var portfolioContentIntro = [
    ["img/portfolio/shake/shake_thumb.jpg", "Santander Consumer Bank", "UX-designer", "Summer 2019"],
    ["img/portfolio/nn/d6_thumb.jpg", "TACKL", "UX & Game designer", "Spring 2019"],
    ["img/portfolio/dcd/mockup_thumb.jpg", "Trondheim Kommune", "UX-designer", "Autumn 2018"],
    ["img/portfolio/ss/sustain_thumb.png", "Research project", "Student", "Spring 2019"]
];

var portfolioContent = [
    ["Throughout the time of the internship, me and my team were tasked with further developing SHAKE, a service by Santander Consumer Bank, IF Insurance and FINN.no.", "The service had been undergoing a period with pilot tests of an MVP (picture above). Our task was to further develop the concept in more detail including ordering SHAKE, report injury and understand what SHAKE gives you.","The internship proved to be an amazing opportunity to put my education in practice. Working in a multidisciplinary with another UX designer, several developers, a test manager, a market advisor and a dedicated project leader was a really good experience, and one I will look for in later projects."],
    ["School refusal can be described as emotional discomfort (or anxiety) caused by the thought of going to school. There are often several reasons to why a child feel this discomfort, and all cases are unique. In general can a lack of security associated with the school environment be viewed as a central cause of the developed anxiety.","Neurotiske Nevroner is based on a well recognised technique within personal psychology; Cognitive Behavioural Therapy, CBT. This technique uses the connection between emotions, thoughts and behaviour to gain insight towards slowing the problem. An important goal is to break down the behaviours that maintain the bad habits and self-harming thoughts.","Being in a dark room is not that scary if you know what is in it. Knowledge fuels safety and drives away insecurity. This is a concept I wished to base my solution on. The idea is based on presenting the theories around what neurones are and how thoughts occurs. The goal is that with this knowledge, then treatment by CBT will seem less frightening.<br>A thought occurs when two nearby neurones are triggered and then connects via a neurone brigde. So if one of the thoughts are triggered, so is the other. Similarly, these bridges can be “destroyed“ if one thought is triggered, and the other is not, weakening the connection."],
    ["User Interface Design is a course where one designer is put into a group with three computer developers and are tasked with making an application concept. This year we were making a concept for Trondheim Kommune where users could send in suggestions to help improve the public areas in the city.  The course centres around putting design theory into practice, but also learning how to work in a multidisciplinary team and teaching other group members the importance user centred design. That meant going to locations and do research and interviews.","Through the insight gained by observing and interviewing we could make a user specification document. This document proved to be valuable for us to check if our concept meets the requirements of the user.","To test these assumptions we made low fidelity paper prototype. This was a way for us to quickly check if users understood the concept and major functions of the application.","After testing the paper prototypes, my team and I could make a high fidelity prototype using computer software. This gave us the oppertunity to test the application in more real life scenarios and more accurate users. We could also make use an eye-tracker to further improve the prototype's interface.","This project has taught me how to use and teach design- theory and principles in a more real-life setting. Being in a multidisciplinary team creates the opportunity for everyone to learn from each-other and aids solving the right problem for the right user. The project has also given me new insights to how to create and test interfaces for real users to understand and use."],
    ["User Interface Design is a course where one designer is put into a group with three computer developers and are tasked with making an application concept. This year we were making a concept for Trondheim Kommune where users could send in suggestions to help improve the public areas in the city.  The course centres around putting design theory into practice, but also learning how to work in a multidisciplinary team and teaching other group members the importance user centred design. That meant going to locations and do research and interviews.","Through the insight gained by observing and interviewing we could make a user specification document. This document proved to be valuable for us to check if our concept meets the requirements of the user.","To test these assumptions we made low fidelity paper prototype. This was a way for us to quickly check if users understood the concept and major functions of the application.","After testing the paper prototypes, my team and I could make a high fidelity prototype using computer software. This gave us the oppertunity to test the application in more real life scenarios and more accurate users. We could also make use an eye-tracker to further improve the prototype's interface.","This project has taught me how to use and teach design- theory and principles in a more real-life setting. Being in a multidisciplinary team creates the opportunity for everyone to learn from each-other and aids solving the right problem for the right user. The project has also given me new insights to how to create and test interfaces for real users to understand and use."]
];

var portfolioImages = [
    ["img/portfolio/shake/desktop.png","img/portfolio/shake/journey.png","img/portfolio/shake/drawing.jpg"],
    ["img/portfolio/nn/logo.jpg","img/portfolio/nn/teori1.png","img/portfolio/nn/teori2.png","img/portfolio/nn/spill1.png","img/portfolio/nn/app.png","img/portfolio/nn/spill2.png"],
    ["img/portfolio/shake/desktop.png","img/portfolio/shake/journey.png","img/portfolio/shake/drawing.jpg"],
    ["img/portfolio/shake/desktop.png","img/portfolio/shake/journey.png","img/portfolio/shake/drawing.jpg"]
];


function initiate(){
    //document.getElementById("header-img").src = "";
    hideBack();
    //goFunc();
    switchPage();
}

$(document).ready(function () {
    setTimeout(function(){
        $('.navigation').removeClass('init_show');
    }, 1500);
});

history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
        //goHome();
};

function goFunc(){
    //history.go(-1);
}

function goHome(){
    for(var i = 0; i<pageStates.length;  i++){
        $("."+i).removeClass(pageStates[i]);
    }
    hideBack();
    $("."+0).toggleClass(pageStates[currentPage]);
    $("."+0).removeClass("hideLeft");
    $("."+0).removeClass("hideRight");
    $("."+0).removeClass("hideTop");
    $(".navigation").toggleClass("hide");
    document.getElementById("nav-img-src").src="img/keyboard/0.png";
}

function callPage(id){
    switch(id){
        case "0":
            previousPage = currentPage;
            currentPage = 0;
            break;
        case "1":
            previousPage = currentPage;
            currentPage = 1;
            break;
        case "2":
            previousPage = currentPage;
            currentPage = 2;
            break;
        case "3":
            previousPage = currentPage;
            currentPage = 3;
            break;
    }
    switchPage();
}

function switchPage(){

    $("."+currentPage).toggleClass(pageStates[currentPage]);

    if(currentPage == 0 ){
        $("."+0).addClass(pageStates[0]);
    }else{
        $("."+0).removeClass(pageStates[0]);
    }

    switch(currentPage){
        case 1:
            $(".greeting").toggleClass("hideLeft");
            $("#back-arrow").html("&#x2190");
            break;
        case 2:
            $(".greeting").toggleClass("hideTop");
            $("#back-arrow").html("&#x2191");
            break;
        case 3:
            $(".greeting").toggleClass("hideRight");
            $("#back-arrow").html("&#x2192");
            break;
    }

    if(currentPage != previousPage){
        hideBack();
    }
    if(currentPage != 0){
        $(".navigation").toggleClass("hide");
    }

    document.getElementById("nav-img-src").src="img/keyboard/"+currentPage+".png";

}

function hideBack(){
    $(".back-btn").toggleClass("showBtn");
}

$(".back-btn").click(function(){
    currentPage = 0;
    goHome();
});

$(".close").click(function(){
    window.scrollTo(0,0);
    $(".portfolio-page").removeClass("portfolio-pageShow");
    $(".close").removeClass("close-btn-show");
    $(".portfolio").toggleClass("portfolioShow");
    hideBack();
});

$(function(){
    $('a.portfolio-item').click(function(){
        var id = $(this).attr('id');
        window.scrollTo(0,0);
        renderWork(id);
    });
 });

function renderWork(id){

    $(".close").addClass("close-btn-show");

    window.scrollTo(0,0); 

    //remove old p-elements in portfolio
    const tempnode = document.getElementById("port-cont");
    while (tempnode.firstChild) {
      tempnode.removeChild(tempnode.firstChild);
    }
    
    //define header image and find dominant color of that image
    //document.getElementById("header-img").src = portfolioContentIntro[id-1][0];
    //document.getElementById("header").style.backgroundImage = portfolioContentIntro[id-1][0];
    //document.getElementById("header").style.backgroundImage = "url('../img/portfolio/shake/shake_thumb.jpg')";
    document.getElementById("header").style.backgroundImage = "url('../"+portfolioContentIntro[id-1][0]+"')";
    //runColorSampling();

    //set background and header color/gradient
    //var headerBg = 'rgb(' + [headerColor[0]-20,headerColor[1]-20,headerColor[2]-20].join(',') + ')';
    //var bgGradientDarker = 'rgb(' + [headerColor[0]-150,headerColor[1]-150,headerColor[2]-150].join(',') + ')';
    //var bgGradient = 'linear-gradient(' + headerBg + ',' + bgGradientDarker +')';
    //document.getElementById("port-page").style.backgroundImage = bgGradient;
    
    //set content of info-table
    document.getElementById("client-input").innerText = "   "+portfolioContentIntro[id-1][1];
    document.getElementById("role-input").innerText = "   "+portfolioContentIntro[id-1][2];
    document.getElementById("period-input").innerText = "   "+portfolioContentIntro[id-1][3];
    
    //render p&img-elements in section
    for(var i=0; i<portfolioContent[id-1].length; i++){
        var para = document.createElement("p");
        para.classList.add("port-p");
        para.id = "port-p-"+i;
        var node = document.createTextNode(portfolioContent[id-1][i]);
        para.appendChild(node);
        
        var img = document.createElement("img");
        img.classList.add("port-img");
        img.id = "port-img-"+i;
        img.src = portfolioImages[id-1][i];
        
        var element = document.getElementById("port-cont");
        element.appendChild(para);
        element.appendChild(img);
    }

    //deciding what to show and what to not
    $(".portfolio").toggleClass("portfolioShow");
    $(".portfolio-page").toggleClass("portfolio-pageShow");
    hideBack();
}

//fade in when in view

var elements = Array.prototype.slice.call(
    document.getElementsByClassName('port-p')
);

elements.forEach(function(element) {
    new WhenInViewport(element, function(elementInViewport) {
        elementInViewport.classList.add('inViewport');
    });
});

// function for deciding what colors to use for header
function runColorSampling(){
    console.log("Sampling");

    const colorThief = new ColorThief();
    const img = document.querySelector('#header-img');

    // Make sure image is finished loading
    if (img.complete) {
        console.log("inside img.complete");
        this.headerColor = colorThief.getColor(img);
        console.log(this.headerColor);
        //this.headerColorPalette = colorThief.getPalette(img,[5, 5]);
        //console.log(headerColorPalette);
    } else {
        img.addEventListener('load', function() {
        colorThief.getColor(img);
    });
    }
}

function getKeyAndMove(e){				
    var key_code=e.which||e.keyCode;

    if(key_code == 8 && currentPage != 0){
        currentPage = 0;
        goHome();
    }

    if(currentPage == 0){
        switch(key_code){
            case 37: //left arrow key
                callPage("3");
                break;
            case 38: //Up arrow key
                break;
            case 39: //right arrow key
                callPage("1");
                break;
            case 40: //down arrow key
                callPage("2");
                break;						
        }
    }else if(currentPage == 1){
        switch(key_code){
            case 37: //left arrow key
                currentPage = 0;
                goHome();
                break;
            case 38: //Up arrow key
                break;
            case 39: //right arrow key
                break;
            case 40: //down arrow key
                break;						
        }
    }else if(currentPage == 2){
        switch(key_code){
            case 37: //left arrow key
                break;
            case 38: //Up arrow key
                currentPage = 0;
                goHome();
                break;
            case 39: //right arrow key
                break;
            case 40: //down arrow key
                break;						
        }
    }else if(currentPage == 3){
        switch(key_code){
            case 37: //left arrow key
                break;
            case 38: //Up arrow key
                break;
            case 39: //right arrow key
                currentPage = 0;
                goHome();
                break;
            case 40: //down arrow key
                break;						
        }
    }
}

