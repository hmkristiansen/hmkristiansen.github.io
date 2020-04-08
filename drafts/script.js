
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

var anchors = $('.section');

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
		e.preventDefault();
		console.log(e);
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
*/
