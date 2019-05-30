$(function(){

	function ff(x) {
		$('.message').text(x);
	$('.message').css('display','block');
		$(".message").delay(1500).fadeOut(1000)
		
		
	}	
		

	
$('span').on('click',function() {
	
  $(this).toggleClass('show-num');
  if($(this).hasClass('show-num')){
    $(this).find('p').slideDown(1000);
  $(this).find('div').animate({
    fontSize :"30px",
    lineHeight:"1.5",
    textIndent:"70%"
  },1000)
    
  } else{
     
  $(this).find('p').slideUp(1000);
  $(this).find('div').animate({
    fontSize :"300px",
    lineHeight:$(this).innerHeight(),
textIndent:"0%"
  },1000)}
  
});
 
$('.ggg').on('click',function() {
  $(this).addClass('selected').siblings().removeClass('selected')
})
$('.fa-list').on('click',function() {
	var x = "عرض كقائمة";
	ff(x);
  $('span').animate({
    width: '94%'
    
  },1000);
  $('span').find('div').animate({
    lineHeight:'300px',
    fontSize: '300px',
    textAlign:'center',
    textIndent:"0%"
  },1000)
    $('span').removeClass('show-num')
  
})
$('.fa-th-large').on('click',function() {
	var x = "عرض شبكي";
	ff(x);
  $('span').animate({
    
    width: '46%'
                },1000);
  $('span').find('div').animate({
    lineHeight:'600px',
    fontSize: '300px',
    textAlign:'center',
    textIndent:"0%"
    
  },1000)
  $('span').removeClass('show-num');
  
});
  
$('.fa-lightbulb').on('click',function() {
	$(this).toggleClass('night');
	if($(this).hasClass('night')){
		var x = "الوضع الليلي";
	ff(x);
		$('body').css({
		  backgroundColor: "#4b86b4",
	color: "#e7eff6"
	   });
		
		$(this).css({
			color:"#fff",
		   background:"#000",
			textShadow:"none"
		})
	   $('span').css({
	  background:"#2a4d69"
	   })
	   }else{
		   var x = "الوضع النهاري";
	ff(x);
		$('span').css({
	  background:"#63ace5"
	   })	
	   $('body').css({
		  background: "#e7eff6",
	color: "#4b86b4"
	   });
		   $(this).css({
			color:"#eedd82",
	textShadow:	"1px 1px 3px #eedd8290,-1px -1px 3px #eedd8290"   
		   });
					 
}
});
	
	
  $('header').find('i').on('click',function() {
        var x = "https://3bbydd.github.io";
  window.location = x;
});

/*er();*/
	
	/*dd();*/

  var xxx =0;
$('.ggg').on('click',function() {
$('span p').slideUp(1000);
  /*   $('span').each(function() {
       if ($(this).height() > xxx){
          xxx = $(this).height();
        }
      });
    $('span').height(xxx);
    
    */
});
});
    