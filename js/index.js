$(function(){
//placeholder
  var x ="";
$('[placeholder]').focus(function(){
     x = $(this).attr('placeholder');
    $(this).attr('placeholder', "");
}).blur(function(){
    $(this).attr('placeholder',x)
});
// validate required
    $('[required]').blur(function(){
        if($(this).val() == "" ){
            $(this).next('span').fadeIn(200).delay(1500).fadeOut(2000);
          $(this).parent().find('i').fadeOut();
            
        } else{
            $(this).parent().find('i').fadeIn(1000).delay(1500).fadeOut(1000);
          $(this).next('span').fadeOut();
        }
    });
// * on required
    $("<span class='dot'>*</span").insertBefore(':input[required]');
  
  
    
    
  $('.dot').each(function() {
    $(this).text("*")
    $(this).css({
      position: "absolute ",
        top: "45px",
      display:"block",
      fontSize:24,
      "z-index": "99999",
     right: $(this).parent("div").find('input').innerWidth() - 20
    }); 
  });
    
  // styling file attr
$('input[type=file]').wrap("<div class='thediv'></div>")
    
   
    $('.thediv').prepend('<i class="fas fa-upload"></i>');

$('[type=file]').change(function(){
 $(this).prev('i').text($(this).val()).removeClass()
    var w = $(this).prev('i').innerWidth();
 $('.thediv').css({
    width: w,
     
                  });
});
  // change direction
   $('input').on('keyup',function() {
    if($(this).val().charCodeAt(0) < 200){
      $(this).css({
        textAlign:"left",  
      direction:'ltr'
      });
        
    } else{
        $(this).css({
        textAlign:"right",  
      direction:'rtl'
      });
        
    } 
      
    });
  // show/hide password
       $('#btn').on('click',function() {
      var x = $(this).val().trim();
   var x = $('#pass');
  if (x.attr('type') =="text") {
    x.attr('type','password');
  } else {
    x.attr('type','text');
 
  }   
});
  // add/remove tags
  
  $('.tag-g').on('keyup',function(e) {
    var x = $(this).val().trim();
   if(e.keyCode == 32 ){
     
     
     
       $('.tag').append('<div class="faa"><i class="fa fa-times"></i>#' +x+'</div>');
 $(this).val("");
       }
	  console.log($('.faa').html())
  });
  
  
  $('.tag').on('click','.fa-times',function() {
    $(this).parent('.faa').hide(1000)
  });
	
$('.tag').on('click','.faa',function(){
	var d =$(this).text();
	var x =d.substring(1) ;
	console.log(d);
	console.log(x);
	window.open('https://twitter.com/hashtag/' + x, '_blank');	
	});
  
  
  
  
});