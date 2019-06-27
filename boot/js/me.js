$(function() {
  "use strict";
  var wind     = $(window),  
      upper    = $('.upper-bar'),
      nav      = $('nav'),
      carousel = $('.slider, .slider .carousel-item');
  
  carousel.height( wind.height() - (upper.innerHeight() + nav.innerHeight()));

$(window).on('resize orientationchange',function() {
    carousel.height( wind.height() - (upper.innerHeight() + nav.innerHeight()));  
});
  
  
  $('.featured-work ul li').on('click',function() {
    $(this).addClass('active').siblings().removeClass('active');
    
    if ($(this).data('class') === 'all'){
        
    $('.shuffle-imgs .col-md').show();
      
        } else {
      $('.shuffle-imgs .col-md').hide();
        $($(this).data('class')).show();
      
    }
    
  });
  
  
  $(window).on('scroll',function() {
  if ($("body").scrollTop() >= 1500){
    $('.fa-chevron-up').show();
  } else if($("body").scrollTop() < 1500){
   $('.fa-chevron-up').hide(); 
  }
  });
  
  $('.fa-chevron-up').on('click',function() {
    
      $("body").animate({ scrollTop: 0 },1500);
    });
         
  });
