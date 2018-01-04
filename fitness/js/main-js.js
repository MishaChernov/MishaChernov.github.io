'use strict'

$('.slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 adaptiveHeight: true,
 arrows: true,
 autoplay: false,
 centerMode: false,
 focusOnSelect: false,
 responsive: [{
     breakpoint: 400,
     settings: {
       arrows: true,
       autoplay: true
     }
   },
   {
     breakpoint: 768,
     settings: {
       arrows: true
     }
   },
 ]
});

$('.brands__wrapper').slick({
 slidesToShow: 10,
 slidesToScroll: 1,
 adaptiveHeight: true,
 arrows: false,
 autoplay: false,
 centerMode: false,
 focusOnSelect: false,
 responsive: [{
     breakpoint: 1190,
     settings: {
       slidesToShow: 10,
       slidesToScroll: 1,
     }
   },
   {
     breakpoint: 850,
     settings: {
       slidesToShow: 7,
       slidesToScroll: 2,
     }
   },
   {
     breakpoint: 650,
     settings: {
       slidesToShow: 4,
       slidesToScroll: 4,
     }
   },
   {
     breakpoint: 400,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2
     }
   }
 ]
});


$('.no-js').removeClass('no-js');

$('.form').submit(function() {
  // window.open("thanks.html");
  let phone = document.getElementByClassName('form__input--phone');
  let email = document.getElementByClassName('form__input--email');
  let name = document.getElementByClassName('form__input--name');

  alert(phone.value + ' ' + name.value + ' ' + email.value);
});


//video popup

$('.video-play').click(function(){
  $('.video').removeClass('video--block');
  $('.video').addClass('video--hidden');
  $('.video-popup').removeClass('video-popup--hidden');
  $('.video-popup').addClass('video-popup--block');
});

$('.video-popup__button').click(function(){
  $('.video').removeClass('video--hidden');
  $('.video').addClass('video--block');
  $('.video-popup').removeClass('video-popup--block');
  $('.video-popup').addClass('video-popup--hidden');
});

$('html').keydown(function(e){
  if(e.keyCode == 27) {
    $('.video').removeClass('video--hidden');
    $('.video').addClass('video--block');
    $('.video-popup').removeClass('video-popup--block');
    $('.video-popup').addClass('video-popup--hidden');
  }
})
