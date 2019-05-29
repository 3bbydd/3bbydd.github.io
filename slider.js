 



$(function() {
	window.onload = function() {
	$('.master-img i').animate({
		opacity: "0"
	},3000);
 }
    var master = $('.master-img img');
		   	
      $('.thumbnails img').on("click",function() {
        var thiss = $(this);
				if($(this).hasClass('selected')){
					
				} else{
				$(this).addClass('visibled selected').siblings().removeClass('selected');
				
        master.fadeOut(200,function() {
          master.attr('src', thiss.attr('src'));
            master.fadeIn(200);
        });
				}
				});
	$('.reg').on('click',function() {
		$(this).addClass("visible").siblings().removeClass('visibled'); 
				$(this).next().addClass('visibled');
				$(this).next().next().addClass('visibled');
				$(this).prev().addClass('visibled');
				$(this).prev().prev().addClass('visibled');
	})
    $('.first').on("click",function() {
			$(this).addClass("visible").siblings().removeClass('visibled'); 
				$(this).next().addClass('visibled');
				$(this).next().next().addClass('visibled');
				$(this).next().next().next().addClass('visibled');
				$(this).next().next().next().next().addClass('visibled');
		});
	$('.second').on("click",function() {
						$(this).addClass("visible").siblings().removeClass('visibled'); 
				$(this).next().addClass('visibled');
				$(this).next().next().addClass('visibled');
				$(this).next().next().next().addClass('visibled');
				$(this).prev().addClass('visibled');
		}); 
	$('.third').on("click",function() {
				$(this).addClass("visible").siblings().removeClass('visibled'); 
				$(this).prev().addClass('visibled');
				$(this).prev().prev().addClass('visibled');
				$(this).prev().prev().prev().addClass('visibled');
				$(this).next().addClass('visibled');
		});
	$('.forth').on("click",function() {
$(this).addClass("visible").siblings().removeClass('visibled'); 
				$(this).prev().addClass('visibled');
				$(this).prev().prev().addClass('visibled');
				$(this).prev().prev().prev().addClass('visibled');
				$(this).prev().prev().prev().prev().addClass('visibled');
		});  

        $('.fa-chevron-left').on("click",function() {
          if( $('.selected').is(':last-child')){
             $('.thumbnails img').eq(0).click();
             } else {
            $('.selected').next().click();
             }         
        });          
      $('.fa-chevron-right').on("click",function() {
               if($('.selected').is(':first-child')){
                   $('.thumbnails img:last').click()
                     } else{
                 $('.selected').prev().click();
                  }       
        });  
	
	$('.master-img').on('swipeleft',function(){
		$('.fa-chevron-right').click();
	});      
	$('.master-img').on('swiperight',function(){
		$('.fa-chevron-left').click();
	});      
	$('h2').on('click',function() {
    var x = "https://3bbydd.github.io"
  window.location = x;
});

      });
