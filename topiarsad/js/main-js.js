'use strict'

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

document.addEventListener('mouseup', function(event) {
  flag = false;
}, false);

photoContainer.addEventListener('mousemove', function(event) {
  var res = event.pageX - this.offsetLeft;

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

//portfolio
var controls = document.querySelectorAll('.toggle-controls li');
var photo = document.querySelector('.photo');

for (var i = 0; i < controls.length; i++) {
  controls[i].innerHTML = controls[i].dataset.filter;
  clickControl(controls[i]);
}

function toggleFilter(control) {
  for (var i = 0; i < controls.length; i++) {
    controls[i].classList.remove('active');
    photo.classList.remove(controls[i].dataset.filter);
  }
  control.classList.add('active');
  if (photo) {
    photo.classList.add(control.dataset.filter);
  }
}

function clickControl(control) {
  control.addEventListener('click', function() {
    toggleFilter(control);
  });
}

var defaultFilter = document.querySelector('li.oldie');
toggleFilter(defaultFilter);
