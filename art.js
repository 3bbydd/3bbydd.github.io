$(function(){
var p = $('p'),
	son = $('.son'),
fa = $('.fa') ;
	
p.each(function(){
	$(this).data('text',$(this).text());	

	$(this).text($(this).text().substr(0,70));
	$(this).append( " ...<br> للمزيد  <span class='more'>اضغط هنا</span>")
	
});

p.on("click",'.more',function(){
	son.text($(this).parent().data('text'));
	son.append("<br> للعودة  <span class='less'>اضغط هنا</span>");

p.fadeOut(function(){
	fa.fadeIn("fast");
});
	
 });
  
 fa.on("click",'.less',function(){
	  
	  fa.fadeOut(function(){
		   p.fadeIn("fast");
	  });
	
	
});
	
	
	
$('p').on('click',function(){
	$(this).animate({
		left:"+=10px"
	},200).animate({
			left:"-=20px"
	},200).animate({
		left:"+=10px"
	},200)
});
	

	
	
	
	

});