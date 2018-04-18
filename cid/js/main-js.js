'use strict'

$('.no-js').removeClass('no-js');

$('.main-slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 adaptiveHeight: true,
 arrows: false,
 autoplay: true,
 autoplaySpeed: 6000,
 centerMode: false,
 focusOnSelect: false
});

$('.slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 adaptiveHeight: true,
 arrows: false,
 dots: true,
 autoplay: false,
 centerMode: false,
 focusOnSelect: false
});

$('.slider2').slick({
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
