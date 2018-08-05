'use strict';

document.addEventListener('DOMContentLoaded', function() {

	// Start qustions events
	var qustionsBtn = document.getElementsByClassName('questions__btn');
	var qustionsItem = document.getElementsByClassName('questions__item');

	Array.prototype.forEach.call(qustionsItem, function(e) {

		e.addEventListener('click', function(evt) {
			let qustionsSubtitle = this.getElementsByClassName('questions__subtitle');
			let qustionsBtn = this.getElementsByClassName('questions__btn');
			let qustionsText = this.getElementsByClassName('questions__text');

			console.log(qustionsText[0].classList.contains);

			if(qustionsBtn[0].classList.contains('questions__btn--opened')) {
					qustionsBtn[0].classList.remove('questions__btn--opened');
					qustionsText[0].classList.remove('questions__text--visually');
					qustionsText[0].classList.add('questions__text--hidden');
					qustionsSubtitle[0].classList.remove('questions__subtitle--active');
				} else {
					qustionsBtn[0].classList.add('questions__btn--opened');
					qustionsText[0].classList.add('questions__text--visually');
					qustionsText[0].classList.remove('questions__text--hidden');
					qustionsSubtitle[0].classList.add('questions__subtitle--active');
				}
		})
	});
	// End qustions events

})
