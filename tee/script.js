$(function(){
	 'use strict';	
	
  var leftArrow = $('.testi .fa-chevron-left'),
  rightArrow = $('.testi .fa-chevron-right');
	
  $('header .arrow i').on('click',function() {
    $('html , body').animate({
      scrollTop: $('.features').offset().top
    },700);    
  });
	$('.show-more').on('click',function() {
    $('.our-work .hidden').fadeIn(1000);
    $(this).fadeOut();
  }); 

  function cheakClients() {  
    $('.client:first').hasClass('active') ? rightArrow.fadeOut() :rightArrow.fadeIn(); 
    $('.client:last').hasClass('active')  ? leftArrow.fadeOut()  :leftArrow.fadeIn();
  }
  cheakClients();

  $('.testi i').on('click' , function(){
 if ($(this).hasClass('fa-chevron-left')){
   $('.testi .active').fadeOut(100,function(){
     $(this).removeClass('active').next('.client').addClass('active').fadeIn();
     cheakClients();
   });
 } else {
   $('.testi .active').fadeOut(100,function(){
      $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
      cheakClients();
    });
 }
  });
});

