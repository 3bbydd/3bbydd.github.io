$("#chevron").on('click', function() {
    
    $('html, body').animate({ scrollTop: $('section').eq(0).offset().top }, 800);
  });


$(window).scroll(function() {
  if ($(this).scrollTop() < 1000) {
    $('.to-top').fadeOut();
  } else {
    $('.to-top').fadeIn();
  }
});

$('.to-top').on('click',function() {
  $('html, body').animate({ scrollTop: 0 }, 800);
  });