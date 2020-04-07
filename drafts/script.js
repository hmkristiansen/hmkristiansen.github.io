
 const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
 const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
 
 /*
 $(document).ready(function() { 
    $('#menu').on('click','.scrollLink', function ( e ) {
		e.preventDefault();
		var d = event.target.id;

	});
});*/

/*
var anchors = $('section');

$(document).on("scroll", onScroll);
	function onScroll() {
		var currentSection = null;
		var scrollPos = $(document).scrollTop();

		$.each(anchors, function() {
			var scrollTop = $(this).position().top;
			if (scrollPos >= scrollTop) {
				currentSection = $(this).attr('id');
			}
		});
};
*/

/*

$(document).on("scroll", function () {

	var pageTop = $(document).scrollTop();
	var pageBottom = pageTop + $(window).height();

	var allTags = $("section");

	for (var i = 0; i < allTags.length; i++) {

		var tag = allTags[i];

		if (($(tag).position().top) < (pageBottom - $(window).height()/1.3)){
			$(tag).addClass("visible");
		}else{
			$(tag).removeClass("visible");
		}

		if( (pageBottom*0.8) > (($(allTags[0]).position().top) + $(window).height())  ){
			//console.log("hello");
			$(tag).removeClass("visible");
		}else{
			$(tag).addClass("visible");
		}
	}
	console.log("---");
	console.log(($(allTags[0]).position().top) + $(window).height());
	console.log(pageBottom*0.8);
	console.log("---");

	
	console.log("");
	console.log("Start");
	console.log(pageTop);
	console.log(pageBottom);
	console.log("Diff: "+ (pageBottom-pageTop));
	console.log("--");
	console.log($(tags[1]).attr("id")+": "+$(tags[1]).position().top);
	

	//bottom of section (tag.top + window.height) <--
	//if bottom of section is == window.hegith*0.5, remove visibility
});
*/

/*http://jsfiddle.net/eLwex993/5/*/

$(window).on("load",function() {

	function fade(pageLoad) {
		var windowTop=$(window).scrollTop(), windowBottom=windowTop+$(window).innerHeight();
	  	var min=0, max=1, threshold=0.01;
	  
	  	$("section").each(function() {
		  
			/* Check the location of each desired element */
			var objectHeight=$(this).outerHeight(), objectTop=($(this).offset().top), objectBottom=$(this).offset().top+(objectHeight);
			
			/* Fade element in/out based on its visible percentage */
			if (objectTop < windowTop) {
				if (objectBottom > windowTop) {
					$(this).fadeTo(0,min+((max-min)*((objectBottom-windowTop)/(objectHeight))));
				}else if ($(this).css("opacity")>=min+threshold || pageLoad) {
					$(this).fadeTo(0,min);
				}
			} else if (objectBottom > windowBottom) {
				if (objectTop < windowBottom) {
					$(this).fadeTo(0,min+((max-min)*((windowBottom-objectTop)/objectHeight)));
				}else if ($(this).css("opacity")>=min+threshold || pageLoad) {
					$(this).fadeTo(0,min);
				}
			} else if ($(this).css("opacity")<=max-threshold || pageLoad) {
				$(this).fadeTo(0,max);
			}

		});

	} fade(true); //fade elements on page-load
	$(window).scroll(function(){

		fade(false);
		getCurrentSection();
	
	}); //fade elements on scroll
	
});


/*
$(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
		event.preventDefault();
		var id = $(this).attr("id");
        $("html, body").animate({ scrollTop: $(id).offset().top }, 800);
    });
});*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
		e.preventDefault();
		//console.log(e);
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/*
(function($) {
  
	$.fn.visible = function(partial) {
		
		var $t            = $(this),
			$w            = $(window),
			viewTop       = $w.scrollTop(),
			viewBottom    = viewTop + $w.height(),
			_top          = $t.offset().top,
			_bottom       = _top + $t.height(),
			compareTop    = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
		
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	};
	  
	})(jQuery);
	
	$(window).scroll(function(event) {
		
		$("section").each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("visible"); 
			var id = el.attr("id");
			console.log(id);
		} else {
			el.removeClass("visible");
		}
	});
	
});
  */
