'use strict'

$('.no-js').removeClass('no-js');

$('.main-slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 adaptiveHeight: true,
 arrows: false,
 autoplay: true,
 autoplaySpeed: 5000,
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
