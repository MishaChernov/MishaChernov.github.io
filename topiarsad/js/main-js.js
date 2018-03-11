'use strict'

// slick portfolio

$('.portfolio__wrapper').slick({
 slidesToShow: 5,
 slidesToScroll: 3,
 adaptiveHeight: true,
 arrows: false,
 dots: true,
 autoplay: false,
 autoplaySpeed: 5000,
 centerMode: false,
 focusOnSelect: false,
 infinite: true,
 pauseOnFocus: false,
 pauseOnHover: false,

 responsive: [{
     breakpoint: 1190,
     settings: {
       slidesToShow: 5,
       slidesToScroll: 4,
     }
   },
   {
     breakpoint: 850,
     settings: {
       slidesToShow: 5,
       slidesToScroll: 2,
     }
   },
   {
     breakpoint: 650,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 2,
     }
   },
   {
     breakpoint: 400,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2,
     }
   }
 ]
});

//burger
$('.no-js').removeClass('no-js');

$('.burger').click(function() {
  $(this).toggleClass('burger--close burger--open');
  $('.main-menu').slideToggle();
});

//separator
var separator = document.querySelector('.separator');
var originalPhoto = document.querySelector('.photo-original');
var filteredPhoto = document.querySelector('.photo');
var photoContainer = document.querySelector('.photos');
var flag = false;

separator.addEventListener('mousedown', function(event) {
  event.preventDefault();
  flag = true;
}, false);

separator.addEventListener('touchstart', function(event) {
  event.preventDefault();
  flag = true;
}, false);

document.addEventListener('mouseup', function(event) {
  flag = false;
}, false);

document.addEventListener('touchend', function(event) {
  flag = false;
}, false);

photoContainer.addEventListener('mousemove', function(event) {
  var res = event.pageX - this.offsetLeft;

  if (flag && (res > 0) && (res < filteredPhoto.offsetWidth)) {
    separator.style.left = res + 'px';
    originalPhoto.style.width = res + 'px';
  }

}, false);

photoContainer.addEventListener('touchmove', function(event) {
  var touch = event.touches[0];
  var res = touch.pageX - this.offsetLeft;
  console.log(touch);

  if (flag && (res > 0) && (res < filteredPhoto.offsetWidth)) {
    separator.style.left = res + 'px';
    originalPhoto.style.width = res + 'px';
  }

}, false);

//portfolio-photos
var photos = document.querySelectorAll('.photo');
var photoOriginal = document.querySelectorAll('.photo-original');

var portfolioItem = document.querySelectorAll('.portfolio__item');
var toggleControls1 = document.querySelectorAll('.walden');
var toggleControls2 = document.querySelectorAll('.willow');

for (var i = 0; i < portfolioItem.length; i++) {
  portfolioItem[i].addEventListener('click', function() {

    for (var j = 0; j < portfolioItem.length; j++) {
      portfolioItem[j].classList.remove('portfolio__item--active');
    }

    this.classList.add('portfolio__item--active');
    photos[0].style.backgroundImage = 'url(' + this.getAttribute('data-image1') +')';
    photoOriginal[0].style.backgroundImage = 'url(' + this.getAttribute('data-image2') +')';
    toggleControls1[0].style.backgroundImage = 'url(' + this.getAttribute('data-image1') +')';
    toggleControls2[0].style.backgroundImage = 'url(' + this.getAttribute('data-image1') +')';

  });
}
