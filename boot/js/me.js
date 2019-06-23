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
  });
