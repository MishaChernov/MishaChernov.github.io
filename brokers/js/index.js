'use strict';

document.addEventListener('DOMContentLoaded', function() {


	// Start Check The Window Height On Broker Profile page

	if(document.getElementsByClassName('page-broker-profile').length > 0) {


		let windowHeight = $(window).height() - 135;
		let asideHeight = $('.profile-card').height();

		if( (windowHeight - asideHeight) >= 20) {
			document.getElementsByClassName('page-broker-profile')[0].classList.add('page-broker-profile--height');
		}
	}

	// End Check The Window Height On Broker Profile page



	// Start Find Profile Stickers

	if(document.getElementsByClassName('profile').length > 0) {
		var profile = document.getElementsByClassName('profile');

		if(profile[0].classList.contains('profile--pro') == true) {
			document.querySelector('.sticker--pro').style.display = 'block';
		}
	}

	// End Find Profile Stickers


	// Start Check Feedbacks If They Are

	if(document.getElementsByClassName('broker-feedback__list').length > 0) {

		let feedbackList = document.getElementsByClassName('broker-feedback__list');

		if(!feedbackList[0].hasChildNodes()) {

			let feedbackButton = document.getElementsByClassName('broker-feedback__no-feedbacks');
			feedbackButton[0].classList.add('broker-feedback__no-feedbacks--visible');

			let pageNav = document.getElementsByClassName('page-nav__list');
			pageNav[0].classList.add('page-nav__list--hidden');
		}
	}

	// End Check Feedbacks If They Are



	// Start Check If There Is Broker Picture

	if(document.getElementsByClassName('profile-card__image-wrapper').length > 0) {
		if(!document.getElementsByClassName('profile-card__image')[0].getAttribute('src').length > 0) {

			document.getElementsByClassName('profile-card__image')[0].style.display = 'none';


			var colors = ['#382c75', '#0cb175', '#000000', '#18316b', '#f2744d', '#faa61a'];
			let randomNum = Math.floor(Math.random() * 6);

			document.getElementsByClassName('profile-card__image-wrapper')[0].style.background = (colors[randomNum]);


			let profileNameFirst = document.getElementsByClassName('profile-card__name-first')[0].innerHTML.charAt(0);
			let profileNameSecond = document.getElementsByClassName('profile-card__name-second')[0].innerHTML.charAt(0);

			document.getElementsByClassName('profile-card__without-picture')[0].innerHTML = profileNameFirst + profileNameSecond;
			document.getElementsByClassName('profile-card__without-picture')[0].style.display = 'block';

		}
	}

	// End Check If There Is Broker Picture



	// Start Check If There Is Feed Full In The Broker card

	if(document.getElementsByClassName('profile-card').length > 0) {
		let titleCardEllement = document.getElementsByClassName('title---JS');

		for(let i = 0; i < titleCardEllement.length; i++) {
			let childEllement = $(titleCardEllement[i]).siblings('.feed---JS');

			if(!childEllement[0].innerHTML.length > 0) {
				titleCardEllement[i].parentNode.remove();
			}
		}

	}

	// End Check If There Is Feed Full In The Broker card



	// Start Fill Background In Start

	if(document.getElementsByClassName('rating__progress').length > 0) {
		let progress = document.querySelectorAll('.rating__progress');

		for(let i = 0; i < progress.length; i++) {
			let value = progress[i].getAttribute('data-percent') + "%";
			progress[i].style.width = value;
		}
	}


	// End Fill Background In Start



	// Start Fill Color Gray If Custom Broker Percent is 0


	if(document.getElementsByClassName('rating__custom-percent').length > 0) {
		let customPercent = document.querySelector('.rating__custom-percent-number');
		customPercent = customPercent.innerHTML.slice(0, -1);  // Remove the last char (%) in ellemnt

		if(customPercent == '0') {
			let ratingOptions = document.querySelector('.profile-info__options');
			ratingOptions.classList.add('profile-info__options--no-active');
		}
	}

	// End Fill Color Gray If Custom Broker Percent is 0



	// Start Check Outside Clicks

		$(".burger").click(function(e) {
			e.preventDefault();
			$(".burger").toggleClass('burger--open');
		  $(".nav-menu").toggleClass('nav-menu--open');
		});

		$(document).mouseup(function(e) {
		  var $target = $(e.target);
		  if ($target.closest(".nav-menu").length == 0 && $target.closest(".burger").length == 0) {
		    $(".nav-menu").removeClass("nav-menu--open");
				$(".burger").removeClass("burger--open");
		  }
		});


		$(".select__btn").click(function(e) {
			e.preventDefault();
			$(".select__btn").toggleClass('select__btn--open');
		  $(".select__list").toggleClass("select__list--open");
		});

		$(document).mouseup(function(e) {
		  var $target = $(e.target);
		  if ($target.closest(".select__list").length == 0 && $target.closest(".select__btn").length == 0) {
		    $(".select__btn").removeClass("select__btn--open");
				$(".select__list").removeClass("select__list--open");
		  }
		});

	// End Check Outside Clicks


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

	// Start Check Click Btn And Scroll

	var linkNav = document.querySelectorAll('[href^="#"]');
	const SCROLLSPEED = 0.3;

	for (var i = 0; i < linkNav.length; i++) {
		linkNav[i].addEventListener('click', function(e) {
			e.preventDefault();
			var w = window.pageYOffset,
				hash = this.href.replace(/[^#]*(.*)/, '$1'),
				t = document.querySelector(hash).getBoundingClientRect().top,
				start = null;

			requestAnimationFrame(step);
			function step(time) {
				if (start === null) start = time;
				var progress = time - start,
					r = (t < 0 ? Math.max(w - progress/SCROLLSPEED, w + t) : Math.min(w + progress/SCROLLSPEED, w + t));
				window.scrollTo(0,r);
				if (r != w + t) {
					requestAnimationFrame(step)
				} else {
					location.hash = hash;
				}
			}
		}, false);
	}

	// End Check Click Btn And Scroll

	if(document.getElementsByClassName('language__btn').length > 0) {
		var languageBtn = document.getElementById('language__btn');

		languageBtn.addEventListener('click', function(e) {
			e.preventDefault();
			$('.language__list').toggleClass('language__list--open');
		});

		$('.language__checkbox').each(function() {
			if($(this).is(":checked")) {

				let langName = $(this).data('lang');
				$('<i class="flag-icon"></i>').addClass(langName).attr('id', langName).hide().fadeIn('slow').appendTo(languageBtn);
			} else {
				let langName = $(this).data('lang');

				let elem = document.getElementById(langName);
				console.log(elem);
				$(elem).fadeOut('slow').remove();
			}
		})

		$('html').on('click', '.language__checkbox', function() {
			if($(this).is(":checked")) {

				let langName = $(this).data('lang');
				$('<i class="flag-icon"></i>').addClass(langName).attr('id', langName).appendTo(languageBtn);
			} else {
				let langName = $(this).data('lang');

				let elem = document.getElementById(langName);
				console.log(elem);
				$(elem).remove();
			}
		})
	}






	var windowWidth = window.innerWidth;

	if(windowWidth <= 1280) {

		$('.intro__card-list').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			adaptiveHeight: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 5000,
			centerMode: true,
			focusOnSelect: false,
			variableWidth: true
			});

			$('.featured__cards').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				adaptiveHeight: true,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 5000,
				centerMode: true,
				focusOnSelect: false,
				variableWidth: true
				});
	}

})
