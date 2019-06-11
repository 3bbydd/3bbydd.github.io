$(function(){

	 'use strict';	
  $('header .arrow i').on('click',function() {
    $('html , body').animate({
      scrollTop: $('.features').offset().top
    },700);
      
      
  });
	$('.show-more').on('click',function() {
      $(this).fadeOut(200,function() {
        $('.our-work .hidden').fadeIn(1000);
      });
    
    
  })
});

