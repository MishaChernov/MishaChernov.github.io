'use strict';

document.addEventListener('DOMContentLoaded', function() {

	// Start burger events
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
	// End burger events



	// Start qustions events
	var qustionsBtn = document.getElementsByClassName('questions__btn');
	var qustionsItem = document.getElementsByClassName('questions__item');

	// Array.prototype.forEach.call(qustionsBtn, function(e) {
	// 	e.addEventListener('click', function(evt) {
	// 		if(this.classList.contains('questions__btn--opened')) {
	// 				this.classList.remove('questions__btn--opened');
	// 				this.nextSibling.nextSibling.classList.remove('questions__text--visually');
	// 				this.nextSibling.nextSibling.classList.add('questions__text--hidden');
	// 				this.previousSibling.previousSibling.classList.remove('questions__subtitle--active');
	// 			} else {
	// 				this.classList.add('questions__btn--opened');
	// 				this.nextSibling.nextSibling.classList.add('questions__text--visually');
	// 				this.nextSibling.nextSibling.classList.remove('questions__text--hidden');
	// 				this.previousSibling.previousSibling.classList.add('questions__subtitle--active');
	// 			}
	// 	})
	// });

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

//
//
// var x, i, j, selElmnt, a, b, c;
// /*look for any elements with the class "custom-select":*/
// x = document.getElementsByClassName("custom-select");
// for (i = 0; i < x.length; i++) {
// selElmnt = x[i].getElementsByTagName("select")[0];
// /*for each element, create a new DIV that will act as the selected item:*/
// a = document.getElementsByClassName("select-selected");
// a[0].innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
// x[i].appendChild(a[0]);
// /*for each element, create a new DIV that will contain the option list:*/
// b = document.createElement("DIV");
// b.setAttribute("class", "select-items select-hide");
// for (j = 0; j < selElmnt.length; j++) {
// 	/*for each option in the original select element,
// 	create a new DIV that will act as an option item:*/
// 	c = document.createElement("DIV");
// 	c.innerHTML = selElmnt.options[j].innerHTML;
//
// 	c.addEventListener("click", function(e) {
// 			/*when an item is clicked, update the original select box,
// 			and the selected item:*/
// 			var y, i, k, s, h;
// 			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
// 			h = this.parentNode.previousSibling;
// 			for (i = 0; i < s.length; i++) {
// 				if (s.options[i].innerHTML == this.innerHTML) {
// 					s.selectedIndex = i;
// 					h.innerHTML = this.innerHTML;
// 					y = this.parentNode.getElementsByClassName("same-as-selected");
// 					for (k = 0; k < y.length; k++) {
// 						y[k].removeAttribute("class");
// 					}
// 					this.setAttribute("class", "same-as-selected");
// 					break;
// 				}
// 			}
// 			h.click();
// 	});
// 	b.appendChild(c);
// }
// x[i].appendChild(b);
// a[0].addEventListener("click", function(e) {
// 		/*when the select box is clicked, close any other select boxes,
// 		and open/close the current select box:*/
// 		e.stopPropagation();
// 		closeAllSelect(this);
// 		this.nextSibling.classList.toggle("select-hide");
// 		this.classList.toggle("select-arrow-active");
// 	});
// }
// function closeAllSelect(elmnt) {
// /*a function that will close all select boxes in the document,
// except the current select box:*/
// var x, y, i, arrNo = [];
// x = document.getElementsByClassName("select-items");
// y = document.getElementsByClassName("select-selected");
// for (i = 0; i < y.length; i++) {
// 	if (elmnt == y[i]) {
// 		arrNo.push(i)
// 	} else {
// 		y[i].classList.remove("select-arrow-active");
// 	}
// }
// for (i = 0; i < x.length; i++) {
// 	if (arrNo.indexOf(i)) {
// 		x[i].classList.add("select-hide");
// 	}
// }
// }
// /*if the user clicks anywhere outside the select box,
// then close all select boxes:*/
// document.addEventListener("click", closeAllSelect);

})
