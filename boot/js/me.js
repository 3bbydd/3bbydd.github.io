$(function() {
  "use strict";
  var wind     = $(window),  
      upper    = $('.upper-bar'),
      nav      = $('nav'),
      carousel = $('.slider,.carousel-item');
  
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
  
  
  
  
  
  
  
  });
