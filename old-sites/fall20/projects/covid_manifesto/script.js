
var dataH = [4,5,2,3,4,3,9,9,6,7,8,5,3,2,5];
var dataC = [2,1,2,2,1,3,4,5,3,5,6,5,2,1,5];
var dates = ["12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","25th"];

var pers = [
    ,
    ,
    ,
    ,
    "Vanmayi and Tanya leave. Our parents recommend us to stay in Lisbon.",
    "Lena leave",
    "Caroline's father calls us early in the morning saying he got us tickets for a flight home for March 29th just in case we need them.",
    ,
    ,
    "The first non-eventful day in a long time.",
    "I am frantically asking if someone knows where we can park our car while we are gone.",
    "Beatriz and Carina say we can park our car outside their places if needed.",
    "Our re-booked flight is also cancelled.",
    "We do our first order at Uber Eats.",
    "End"
];
var ext = [
    "Campus at NTNU closes. Samfundet closes. We get the message that we will not lose our scholarship. Visits from friends and family are cancelled.",
    "All teaching at IADE is suspended from Monday.",
    "We get 3 emails from the headmaster saying that we should come home. Norway issues a new law about mandatoy quarantine when coming from a foreign country.",
    "We write to the faculty in Norway that we are planning to stay.",
    "All on-campus teaching is suspended.",
    "IADE is asking us if we are staying. We get an email from NTNU asking if we are leaving. They will help us get home if needed. Caroline sends an email to the faculty asking what is going on and what they actually recommend. We are getting mixed signals from everywhere. We write back to IADE saying that we are most likely staying.",
    "A new Norwegian law gives the government the authority to alter the previous laws. State of emergency is declared in Portugal.",
    "It is not allowed to go to cabins in Norway.",
    "Things are looking really bad in Italy. The death-number has surpassed China's.",
    ,
    "Our flight is cancelled.<br>08:30 - I talk to Caroline's father.<br>08:40 - I call the Airline to know more about what is going on.<br>09:00 - Caroline contacts her uncle (who is the ambassador of Stockholm) and asks for advice.<br>09:20 - Uncle answers and says he will talk to the embassy in Lisbon.<br>10:30  - We get some feedback from the Portugese embassy. They can help us if we need it.<br>11:00 - We rebook our flight to the 28th of March. We let IADE know that we are leaving. We let our landloard that we are leaving.",
    "I let my summer internship know that I do not know when I'll be able to meet up at work.",
    "Exhausted we decide that we don't want to keep looking for a way to get home and instead stay put. We let IADE know that we were not going anywhere.",
];

var dayDoms = [];
var triggerPoints = [];

var blobH = $('#blobH');
var blobC = $('#blobC');

var currentDay;

$(document).ready(function(){
    $(this).scrollTop(0);
    renderDays();
    normaliseData();
    //setTriggerPoints();

    console.log($(window).width());
});


window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY,
        wh = this.innerHeight;
    if(scroll > wh){
        checkCurrentElement();
        translateBlobs();
        console.log(dates[currentDay]);
        $('#dateTicker').text(dates[currentDay]+ " of March");
        $('#greeting').addClass("hideGreeting");
    }else if(scroll<wh){
        $('#blobH').css("transform","translateX(200px)");
        $('#blobC').css("transform","translateX(-300px)");
        $('#dateTicker').text("Current date");
        $('#greeting').removeClass("hideGreeting");
    }else if( scroll = dayDoms[dayDoms.length-1].scrollTop){
        console.log("hello");
    }
});

$( "#close_overlay_btn" ).click(function() {
    $('#overlay').addClass("hideOverlay");
    $('body').removeClass("stop_scroll");
    $('.blob').removeClass("blur");
    $('#greeting').removeClass("blur");
    $('#dateTicker').removeClass("blur");
});

function checkCurrentElement(){
    let bool = true;
    let counter = 0;
    while(bool){
        var inView = $(dayDoms[counter]).isInViewport();
        if(inView){
            bool = false;
            this.currentDay = counter;
        }else{
            counter++;
        }
    }
}

function renderDays(){

    let whitespace1 = document.createElement('div');
    whitespace1.className = "dayEvent";
    whitespace1.id = "whitespace";
    $('body').append(whitespace1);

    for(var i=0; i<dataH.length; i++){
        let dayEvent = document.createElement('div');
        dayEvent.className = "dayEvent";
        dayEvent.id = i;

        if(this.pers[i]!= undefined){
            let pers = document.createElement('div');
            pers.className = "pers";
            let persTxt = document.createElement('p');
            persTxt.innerHTML = this.pers[i];
            pers.appendChild(persTxt);
            dayEvent.appendChild(pers);
        }else{
        }

        if(this.ext[i]!=undefined){
            let ext = document.createElement('div');
            ext.className = "ext";
            let extTxt = document.createElement('p');
            extTxt.innerHTML = this.ext[i];
            ext.appendChild(extTxt);
            dayEvent.appendChild(ext);
        }

        $('body').append(dayEvent);
        this.dayDoms[i]=dayEvent;
    }

    /*
    let whitespace2 = document.createElement('div');
    whitespace2.className = "dayEvent";
    whitespace2.id = "whitespace2";
    $('body').append(whitespace2);*/
}

function translateBlobs(){
    let ww = $(window).width();
    let scale = ww*0.05;
    blobH.css('transform','translateX(' + dataH[currentDay]*scale + 'px)');
    blobC.css('transform','translateX(' + dataC[currentDay]*scale + 'px)');
}


function normaliseData(){
    for(var i=0; i<dataH.length; i++){
        dataH[i] = dataH[i]-5;
        dataC[i] = dataC[i]-5;
    }
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

/*
function setTriggerPoints(){
    for(var i=0; i<dayDoms.length; i++){
        var scrollTop = $(window).scrollTop(),
        elementOffset = $(dayDoms[i]).offset().top,
        distance = (elementOffset - scrollTop);
        this.triggerPoints[i] = distance;
    }
}*/

/*
// element to detect scroll direction of
var el = $(window),

    // initialize last scroll position
    lastY = el.scrollTop();
    
el.on('scroll', function() {
    // get current scroll position
    var currY = el.scrollTop(),
        
        // determine current scroll direction
        y = (currY > lastY) ? 'down' : ((currY === lastY) ? 'none' : 'up');

    // do something here…
    console.log(y);

    // update last scroll position to current position
    lastY = currY;
});
*/

