
var updateStatus = false;

var sentences = 
["Heisann, I'm Henrik <span id='hand-wave'>👋</span>",
"I'm a design student, preparing for my next adventure in København, Danmark</a>",
"Currently I'm reading <a href='https://www.goodreads.com/book/show/23692271-sapiens' target='_blank'>Sapiens: A Brief History of Humankind</a> and playing <a href='https://dead-cells.com/' target='_blank'>Dead Cells</a> on my iPad",
"I'm also teaching myself how to do a handstand 🤸‍♂️",
"Scroll to learn more about me ✌️<br><span id='replayGreeting' onClick='replayGreeting();'>replay ↺</span>"
];

//$('#status').innerHTML(sentences[0]);

var teller = 1;
var timer = 0;
var runCarusell = true;
$('#status0').html(sentences[teller-1]);
$('#status1').html(sentences[teller]);

var update = setInterval(function() {
	if(updateStatus && runCarusell){
		carusellGreeting();
    }
}, 1500);

function carusellGreeting(){

    $('#greeting_message h3').addClass('carusellOut');

    if(timer%2 == 0){
        $("#status"+0).toggleClass('carusellOut getter');
        $("#status"+1).toggleClass('carusellIn getter');
    }else{
        if(teller > sentences.length-2){
            runCarusell = false;
            teller = 0;
        }else{
            teller++;
        }
        let changeEl = $('.getter');
        changeEl.html(sentences[teller]);
    }
    timer++; 
}

function replayGreeting(){
    runCarusell = true;
}


