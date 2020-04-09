
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



$(document).ready(function() {

	var mainSections = document.querySelectorAll("section");

	$('a[href*="#"]').bind('click', function(e) {
			e.preventDefault(); // prevent hard jump, the default behavior

			var target = $(this).attr("href"); // Set the target as variable
			var scrollTop;

			for(var i=0; i<mainSections.length; i++){
				if(('#' + mainSections[i].id) == target){
					scrollTop = mainSections[i].offsetTop;
				}
			}

			console.log(scrollTop);

			$('html, body').animate({
					scrollTop
			}, 300, 'swing', function() {
					//location.hash = target; //attach the hash (#jumptarget) to the pageurl
			});

			return false;
	});

	/*
	var width = $(window).width();
	if (width < 800){
		$('#menu a').html("-");
	}*/
});


$('html, body').scroll(function() {
	var mainSections = document.querySelectorAll("section");

	var scrollPos = $('body').scrollTop();
	var reach = window.innerHeight/4;
	//console.log(reach);
	//console.log(scrollPos);
	//console.log("------");
	var currentRange;

	for(var i=0; i<mainSections.length; i++){
		currentRange = scrollPos -  mainSections[i].offsetTop;
		//console.log(currentRange);
		var activeLinkHref = "#"+ mainSections[i].id;
		if( (scrollPos -  mainSections[i].offsetTop) <= reach && (scrollPos -  mainSections[i].offsetTop) > -reach ){
			//console.log(mainSections[i].id + " in range");
			$("a[href='"+activeLinkHref+"']").addClass("active");
		}else{
			$("a[href='"+activeLinkHref+"']").removeClass("active");
		}
	}

}).scroll();

/*
$(window).resize(function() {
	var width = $(window).width();
	if (width < 800){
		$('#menu a').html("-");
	}
  });
*/