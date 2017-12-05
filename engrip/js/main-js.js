'use strict'

$('.recommended__list').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 arrows: true,
 asNavFor: '.recommended__link',
 centerMode: true,
 focusOnSelect: false,
 responsive: [{
     breakpoint: 1190,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 1,
     }
   },
   {
     breakpoint: 850,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
     }
   },
   {
     breakpoint: 650,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
     }
   },
   {
     breakpoint: 400,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
     }
   }
 ]
});
