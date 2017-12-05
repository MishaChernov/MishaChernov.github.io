'use strict'

$('.recommended__list').slick({
 slidesToShow: 6,
 slidesToScroll: 1,
 adaptiveHeight: true,
 arrows: true,
 autoplay: true,
 centerMode: false,
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
       slidesToShow: 1,
       slidesToScroll: 1,
     }
   },
   {
     breakpoint: 400,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: true,
     }
   }
 ]
});


$('.main-footer__form-ttl').click(function() {
  $('.main-footer__form-hide').toggleClass('main-footer__form-visibility');
  $('.main-footer__form-ttl--hide').toggleClass('main-footer__form-ttl--visibility');
});
