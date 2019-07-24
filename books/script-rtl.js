let sliderItems = Array.from(document.querySelectorAll('.slider a')),
    slidesCount = sliderItems.length,
    
    currentSlide = 1,
    
    sliderNumber = document.getElementById('slider-number'),
    
    prevBtn = document.getElementById('prev'),
    

nextBtn = document.getElementById('next');

nextBtn.onclick = nextSlide;

prevBtn.onclick = prevSlide;

var theUl = document.createElement('ul');


theUl.setAttribute('id' , 'theUl');

for(var i = 1; i <= slidesCount; i++) {
  var theLi = document.createElement('li');
  theLi.setAttribute('data-index' , i);
  theLi.appendChild(document.createTextNode(i));
theUl.appendChild(theLi);
  
  
}



 indicators = document.getElementById('indicators').appendChild(theUl)


var theNewUl = document.getElementById('theUl');

var bullets = Array.from(document.querySelectorAll('#theUl li'));


for(var i = 0; i < bullets.length ; i++) {
  bullets[i].onclick = function() {
    currentSlide = parseInt(this.getAttribute('data-index'))
    theCheker();
  };
  
}





theCheker();


function nextSlide() {
  if(nextBtn.classList.contains('disabled')) {
    return false;
  } else {
    currentSlide++;
  theCheker();
    
  }
}

function prevSlide() {
  if(prevBtn.classList.contains('disabled')) {
    return false;
  } else {
    currentSlide--;
  theCheker();
    
  }
}
function theCheker() {
  var arr = ["١","٢","٣","٤","٥","٦"];
sliderNumber.textContent = 'شريحة ' + (arr[currentSlide -1]) + ' من ٥';

remActive();
sliderItems[currentSlide - 1].classList.add('active');

theNewUl.children[currentSlide -1].classList.add('active');

  
  if (currentSlide == 1){
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }
 
  
  if (currentSlide == slidesCount ){
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
 
  
  
  
  
}

function remActive() {
  sliderItems.forEach(function(img){
    img.classList.remove('active');
  });

  bullets.forEach(function(bullet){
    bullet.classList.remove('active');
  
});
  
}
                  
                  

// rtl 

var arr = ["١","٢","٣","٤","٥"];
for(var j = 0; j < bullets.length; j++) {
  bullets[j].textContent = arr[j];
}


var aaa =document.querySelector('div a');


aaa.onclick = function() {
  console.log('hi')
}