
$('.logo').click(function() {
    $('.menu').toggleClass('hide');
    $('.menu').toggleClass('show');
    $(this).toggleClass('ani');
    $('#frontpage').toggleClass('gradient');
    $('.content_super').toggleClass('disp');
});

$('a[href*="#"]').on('click', function(e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )
})

