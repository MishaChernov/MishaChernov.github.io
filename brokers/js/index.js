'use strict';

document.addEventListener('DOMContentLoaded', function() {

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

	var windowWidth = window.innerWidth;

	if(windowWidth <= 1280) {

		$('.intro__card-list').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			adaptiveHeight: true,
			arrows: false,
			autoplay: false,
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
