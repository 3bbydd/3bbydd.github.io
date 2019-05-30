
// put your code here...
var poInd =0;
$('.photos .photo').on('click',function() {
  
  $(this).animate({
    top: '+=320px',
    left: "+=40px"
  },600,function() {
    poInd--;
    $(this).css('z-index', poInd)
  }).animate({
    top:$(this).css('top'),
    left:$(this).css('left')
  },600)
});


$('i').on('click',function() {
    var x = "https://3bbydd.github.io";
  window.location = x;
});