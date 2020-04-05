// scrolling til event og endre nav

$(document).ready(function(){
	var contentSection = $('body');
    var navigation = $('.nav');
    	
	navigation.on('click', '.scrollLink', function(event){
		event.preventDefault();
        smoothScroll($(this.hash));
        console.log($(this.hash));
    });

	$(window).on('scroll', function(){
        updateNavigation();
    })
    
	updateNavigation();
	
	function updateNavigation(){
		contentSection.each(function(){
            var sectionName = $(this).attr('id');
            var navigationMatch = $('a[href="#' + sectionName + '"]');
			if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) &&
				  ($(this).offset().top + $(this).height() - $(window).height()/9 > $(window).scrollTop()))
				{
					navigationMatch.addClass('current');
				}
			else {
				navigationMatch.removeClass('current');
			}
		});
    }
});

//funksjon for smooth scroll
function smoothScroll(target){
    $('html,body').animate({
        scrollTop: target.offset().top
    }, 1000);
}

