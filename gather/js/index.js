'use strict';

document.addEventListener('DOMContentLoaded', function() {

	var body = document.getElementsByTagName('body');
	var burger = document.getElementById('burger');

	burger.addEventListener('change', function() {
		if(this.checked) {
			console.log('check');
			body[0].classList.add('overlay');
    } else {
      body[0].classList.remove('overlay');
    }
	})
})
