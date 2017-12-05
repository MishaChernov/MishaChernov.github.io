'use strict'

var array = [1, 2, 3, 4, 5, 6];

let methods = {
  slice: function(index) {
      let res = array;

  		for(let i = 0; i < index; i++) {
  			res.shift();
      }
  		return res;
    },
  filter: function(number) {

  }
}
