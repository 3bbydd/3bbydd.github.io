
// put your code here...
$('.allow-left').on('swipeleft',function() {
  var me =$(this).attr('src'),
      bro =$(this).prev().attr('src');
  $(this).attr('src', bro);
  $(this).prev().attr('src',me);
})
$('.allow-right').on('swiperight',function() {
  var me =$(this).attr('src'),
      bro =$(this).next().attr('src');
  $(this).attr('src', bro);
  $(this).next().attr('src',me);
})

$('header').on('click',function() {
    var x = "https://3bbydd.github.io";
  window.location = x;
});
