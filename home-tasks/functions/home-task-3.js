'use strict'

console.log('ДЗ-3');

function calc (digit) {
let res = digit;
  return {
	sum() {
    for(let i = 0; i < arguments.length; i++) {
      res += arguments[i];
    }
    return res;
  },

    dif() {
      for(let i = 0; i < arguments.length; i++) {
        res -= arguments[i];
      }
      return res;
    },

    div() {
      for(let i = 0; i < arguments.length; i++) {
        res /= arguments[i];
      }
      return res;
    },

    mul() {
      for(let i = 0; i < arguments.length; i++) {
        res *= arguments[i];
      }
      return res;
    }
  }
}

console.log(calc(100).sum(1, 2, 3));
