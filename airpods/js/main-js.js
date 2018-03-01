'use strict'

$('.slick-track').slick({
 slidesToShow: 3,
 adaptiveHeight: true,
 arrows: false,
 autoplay: true,
 centerMode: false,
 focusOnSelect: false,
 responsive: [{
     breakpoint: 960,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
       arrows: false,
     }
   },
   {
     breakpoint: 640,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: true,
     }
   }
 ]
});
