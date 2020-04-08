
const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
var browser; // 1 = Chrome, 2 = Safari

$('body').addClass('snapper');
$('section').each(function () {
	$(this).addClass('snapping');
})

var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
	if (ua.indexOf('chrome') > -1) {
		browser = 1;
	} else {
		browser = 2;
	}
	console.log(browser);
}



$(document).ready(function () {

	$(document).on("scroll", onScroll);
	
	if(browser == 1 || browser == 2){

		//smoothscroll
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
			
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
		  
			var target = this.hash,
				menu = target;
			$target = $(target);
			$('html, body').animate({
				'scrollTop': $target.offset().top
			}, 300, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});

	}else{
		$("a").on('click', function(event) {

			
			$('section').each(function () {
				$(this).addClass('fade');
			});

			setTimeout(function(){
				$('section').each(function () {
					$(this).removeClass('fade');
				});
			}, 500);

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
			  // Prevent default anchor click behavior
			  event.preventDefault();
		
			  // Store hash
			  var hash = this.hash;
		
			  // Using jQuery's animate() method to add smooth page scroll
			  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			  
			  $('html, body').animate({
				scrollTop: $(hash).offset().top
			  }, 500, function(){
		
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			  });
			} // End if
		});
	}
    
    
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}









 
/*

OLD SHIT

// Cache selectors
var lastId,
    topMenu = $("#menu"),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop();
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
	 if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});

$('body').addClass('scroll-snap');
$('section').addClass('snap-section');

*/



/*
$(document).ready(function() { 
   $('#menu').on('click','.scrollLink', function ( e ) {
	   e.preventDefault();
	   var d = event.target.id;

   });
});*/

/*

var anchors = $('.section');
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
$(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
		event.preventDefault();
		var id = $(this).attr("id");
        $("html, body").animate({ scrollTop: $(id).offset().top }, 800);
    });
});

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
		 
		   
		   var objectHeight=$(this).outerHeight(), objectTop=($(this).offset().top), objectBottom=$(this).offset().top+(objectHeight);
		   
		   
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

   } fade(true);
   $(window).scroll(function(){
	   fade(false);
   }); 
});



/*
$(document).ready(function(){
   $( "a.scrollLink" ).click(function( event ) {
	   event.preventDefault();
	   var id = $(this).attr("id");
	   $("html, body").animate({ scrollTop: $(id).offset().top }, 800);
   });
});*/

/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
	   e.preventDefault();
	   //console.log(e);
	   document.querySelector(this.getAttribute('href')).scrollIntoView({
		   behavior: 'smooth'
	   });
   });
});
*/

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
