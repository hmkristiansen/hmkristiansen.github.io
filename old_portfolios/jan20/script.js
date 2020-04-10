
AOS.init({
    duration: 500
})
$(function() {
    $('body').removeClass('fade-out');
});

$(document).ready(function(){
	$('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('header').toggleClass('open_nav');
        $('.mobile_nav').toggleClass('open_mobile_nav');
        $('.mobile_nav').toggleClass('scrollhide');
    });
});


$(document).scroll(function(){
    $('header').toggleClass('scrolled', $(this).scrollTop() > 20);
});

jQuery(document).ready(function() {
  
    var btn = $('.up');

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
      $(".arrow-icon").toggleClass("open");
    });
});

$( ".arrow-down" ).click(function() {
    $(this).toggleClass("open");
});

$(document).ready(function(){
    var btn = $(".arrow-down")

    btn.on('click',function(e){
        var windowHeight = $(window).height();
        e.preventDefault();
        if(btn.hasClass("open")){
            $('html, body').animate({scrollTop: $(".cards").offset().top - 0.3*windowHeight}, '300');
        }else{
            $('html, body').animate({scrollTop:0}, '300');
        }
    })
})

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var disable = false;

    if(document.getElementById("mobile_nav").classList.contains("open_mobile_nav")){
        disable = true;
    }

    if (((prevScrollpos > currentScrollPos) && disable == false) || (currentScrollPos == 0) || (currentScrollPos < 80)) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("nav-icon").style.top = "0";
        
    } else if(disable == false) {
        document.getElementById("navbar").style.top = "-80px";
        document.getElementById("nav-icon").style.transition = "0.3s";
        document.getElementById("nav-icon").style.top = "-80px";
    }else{
        disable = false;
    }

    prevScrollpos = currentScrollPos;
}

/*
$(".open_mobile_nav li").each(function(i) {
    $(this).delay(100 * i).fadeIn(500);
});*/

/*
var words = (function(){
    var words = [
        'a ginger',
        'nice',
        'a web designer',
        'a bad illustator'
        ],
      el = document.querySelector('.prof'),
      currentIndex,
      currentWord,
      prevWord,
      duration = 4000;
  
    var _getIndex = function(max, min){
      currentIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  
      //Generates a random number between beginning and end of words array
      return currentIndex;
    };
  
    var _getWord = function(index){
      currentWord = words[index];
  
      return currentWord;
    };
  
    var _clear = function() {
  
      setTimeout(function(){
        el.className = 'prof';
      }, duration/4);
    };
  
    var _toggleWord = function(duration){
      setInterval(function(){
        //Stores value of previous word
        prevWord = currentWord;
  
        //Generate new current word
        currentWord = words[_getIndex(words.length-1, 0)];
  
        //Generate new word if prev matches current
        if(prevWord === currentWord){
  
          currentWord = words[_getIndex(words.length-1, 0)];
        }
  
        //Swap new value
        el.innerHTML = currentWord;
  
        //Clear class styles
        _clear();
  
        //Fade in word
        el.classList.add(
          'js-block',
          'js-fade-in-verb'
          );
  
      }, duration);
    };
  
    var _init = function(){
      _toggleWord(duration);
    };
  
    //Public API
    return {
      init : function(){
        _init();
      }
    };
  })();
  
  words.init();
  */