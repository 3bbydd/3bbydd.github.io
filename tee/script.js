$(function(){
	 'use strict';
//	$('html').niceScroll();
	
  $('header .arrow i').on('click',function() {
    $('html , body').animate({
      scrollTop: $('.features').offset().top
    },1000)
      
      
  });
	
});
$('')

