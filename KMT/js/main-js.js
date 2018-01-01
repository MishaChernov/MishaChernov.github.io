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
       arrows: false,
       autoplay: true
     }
   },
   {
     breakpoint: 768,
     settings: {
       arrows: false
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
       slidesToScroll: 2,
       arrows: false,
     }
   }
 ]
});


$('.no-js').removeClass('no-js');

$('.form').submit(function() {
  window.open("thanks.html");
});
