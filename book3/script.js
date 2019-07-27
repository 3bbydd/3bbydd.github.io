
window.addEventListener("touchstart", tapHandler);

var tapedTwice = false;

function tapHandler(event) {
    if(!tapedTwice) {
        tapedTwice = true;
        setTimeout( function() { tapedTwice = false; }, 300 );
        return false;
    }
    event.preventDefault();
    //action on double tap goes below
    
  window.scrollBy(0, window.innerHeight / 2);
  
 }
  