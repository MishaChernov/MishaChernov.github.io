'use strict'

var submitFormFirst = document.querySelector('.product__form--first');
var submitFormSecond = document.querySelector('.product__form--second');

function form() {
  submitFormFirst.addEventListener("submit", function(){
    window.open("../features.html");
  });
  submitFormSecond.addEventListener("submit", function(){
    window.open("../features.html");
  });
}
form();
