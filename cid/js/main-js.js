'use strict'

$('.no-js').removeClass('no-js');

$('.main-slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 adaptiveHeight: true,
 arrows: false,
 autoplay: false,
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
