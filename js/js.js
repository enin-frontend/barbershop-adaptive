var slides = document.querySelectorAll('.advantages__item'),
    dotsWrapper = document.querySelector('.slider__toggles'),
    dots = document.querySelectorAll('.slider__toggle'),
    dotsReview = document.querySelectorAll('.reviews-slider__toggle'),
    reviewsSlide = document.querySelectorAll('.reviews__item'),
    dotsReviewWrapper = document.querySelector('.reviews__toggles'),
    prev = document.querySelector('.reviews__prev'),
    next = document.querySelector('.reviews__next'),
    slideIndex = 1,
    secondSlideIndex = 1;

showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSilde(n){
  showSlides(slideIndex += n);
}

function showSlides(n) {
  if (n > slides.length){
    slideIndex = 1;
  }    
  if (n < 1){
    slideIndex = slides.length;
  }

  for(var i = 0 ; i < slides.length; i++){
    slides[i].style.display = 'none'
  }
  for(var i = 0 ; i < dots.length; i++){
    dots[i].classList.remove('slider__toggle--active');
  }

  slides[slideIndex-1].style.display = 'block';  
  dots[slideIndex-1].classList.add('slider__toggle--active');
};

dotsWrapper.addEventListener('click', function(event){
  for(var i = 0; i < dots.length + 1; i++){
    if(event.target.classList.contains('slider__toggle') && event.target == dots[i-1]){
      currentSlide(i);
    }
  }
});


 
showSlideReview(secondSlideIndex);

function currentSlideReview(n) {
  showSlideReview(secondSlideIndex = n);
}

function plusSildeReview(n) {
  showSlideReview(secondSlideIndex += n);
}

function showSlideReview(n) {
  if (n > reviewsSlide.length) {
    secondSlideIndex = 1;
  }    
  if (n < 1) {
    secondSlideIndex = reviewsSlide.length;
  }

  for(var i = 0 ; i < reviewsSlide.length; i++){
    reviewsSlide[i].style.display = 'none'
  }
  for(var i = 0 ; i < dotsReview.length; i++){
    dotsReview[i].classList.remove('reviews-slider__toggle--active');
  }
 
  reviewsSlide[secondSlideIndex-1].style.display = "block";  
  dotsReview[secondSlideIndex-1].className += " reviews-slider__toggle--active";

  if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
    var imageReview = document.querySelectorAll('.reviews__author-image');
    var logo = document.querySelector('.page-header__logo-image');
    if(document.body.offsetWidth > 768){       
      for (i = 0; i < slides.length; i++) {
        imageReview[i].src = "../img/reviews-desktop-img.jpg";  
      }
      logo.src = '../img/logotype-tablet.svg';
    }

    if(document.body.offsetWidth > 1200){ 
      logo.src = '../img/logotype-desktop.svg';
    }
  }
};

prev.addEventListener('click',function(){
  plusSildeReview(-1);
});

next.addEventListener('click',function(){
  plusSildeReview(1);
});
 
dotsReviewWrapper.addEventListener('click', function(event){
  for(var i = 0; i < dotsReview.length + 1; i++){
    if(event.target.classList.contains('reviews-slider__toggle') && event.target == dotsReview[i-1]){
      currentSlideReview(i);
    }
  }
});
 

 

 
    