$(function() {
  "use strict";
  var wind  = $(window).height(),  
      upper = $('.upper-bar').innerHeight(),
      nav   = $('nav').innerHeight();
  $('.slider,.carousel-item').height( wind - (upper + nav));
});
