'use strict'

console.log('ДЗ-3');

var firstNumber = prompt('Введите число: ', '');
var res = +firstNumber;

let calculator = {
  sum: function() {
    for(let i = 0; i < arguments.length; i++) {
      res += arguments[i];
    }
    return res;
  },

  dif: function() {
    for(let i = 0; i < arguments.length; i++) {
      res -= arguments[i];
    }
    return res;
  },

  div: function() {
    for(let i = 0; i < arguments.length; i++) {
      res /= arguments[i];
    }
    return res;
  },

  mul: function() {
    for(let i = 0; i < arguments.length; i++) {
      res *= arguments[i];
    }
    return res;
  }
}

console.log(calculator.mul(2, 2));
