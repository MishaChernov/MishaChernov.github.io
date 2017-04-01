var popup = document.querySelector('.popup');
var link = document.querySelector('.btn-contacts');
var close = popup.querySelector('.btn-close');
var ENTER_KEY_CODE = 27;

link.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('popup-show');
});

close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('popup-show');
});

window.addEventListener('keydown', function(event) {
  if(event.keyCode === ENTER_KEY_CODE) {
    if(popup.classList.contains('popup-show')){
      popup.classList.remove('popup-show');
    }
  }
});
