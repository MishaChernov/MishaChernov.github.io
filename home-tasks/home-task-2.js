'use strict'

console.log('ДЗ-2');
var allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'];

function filterFn(arr) {
  let res;

  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] != 'number') {
      res = 'false';
    } else {
      res = 'true';
      break;
    }
  }

  if(res == 'true') return true;
  else return false;
}

console.log(filterFn(allNumbers));
