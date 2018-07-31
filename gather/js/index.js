'use strict';

document.addEventListener('DOMContentLoaded', function() {

	// Start Writing Intro Subtitle Text

	var introSubtitle = document.getElementsByClassName('intro__subtitle');
	introSubtitle[0].innerHTML = ' ';

	introSubtitle[0].addEventListener('animationend', function() {

		if(introSubtitle[0].classList.contains('intro__subtitle--first')) {
			introSubtitle[0].classList.remove('intro__subtitle--first');
			introSubtitle[0].classList.add('intro__subtitle--second');
		} else if (introSubtitle[0].classList.contains('intro__subtitle--second')) {
			introSubtitle[0].classList.remove('intro__subtitle--second');
			introSubtitle[0].classList.add('intro__subtitle--first');
		}

	});

	// End Writing Intro Subtitle Text

	// Start Services Color Choice

	var servicesColors = document.getElementById('colors');
	var viewportHeight = window.innerHeight;

	function ifServicesColorChange() {
		let colorChangeText = document.getElementsByClassName('color-change--text');
		let colorChangeBackground = document.getElementsByClassName('color-change--background');
		let colorChangeSvgFill = document.getElementsByClassName('color-change--fill');
		let colorChangeSvgFillAlways = document.getElementsByClassName('color-change--fill-always');
		let servicesColorsInputs = servicesColors.getElementsByTagName('input');
		let servicesColorsActiveColor = '#3b414c';

		for(let i = 0; i < servicesColorsInputs.length; i++) {
			if(servicesColorsInputs[i].checked) {
				servicesColorsActiveColor = servicesColorsInputs[i].dataset.color;

				for(let j = 0; j < colorChangeText.length; j++) {
					colorChangeText[j].style.color = servicesColorsActiveColor;
				}
				for(let k = 0; k < colorChangeBackground.length; k++) {
					colorChangeBackground[k].style.backgroundColor = servicesColorsActiveColor;
				}
				for(let d = 0; d < colorChangeSvgFill.length; d++) {
					colorChangeSvgFill[d].onmouseover = function() {
						this.style.fill = servicesColorsActiveColor;
					};
					colorChangeSvgFill[d].onmouseout = function() {
						this.style.fill = '#3b414c';
					};
				}
				for(let d = 0; d < colorChangeSvgFillAlways.length; d++) {
					colorChangeSvgFillAlways[d].style.fill = servicesColorsActiveColor;
				}
			}
		}
	}

	servicesColors.addEventListener('change',  function() {
		ifServicesColorChange();
	});

	// End Services Color Choice

	// Start Scroll Burger Color Check

	window.addEventListener('scroll', function () {
		let scrollCheck = this.scrollY;
		let burgerInput = document.getElementById('menu');
		let burgerButtonColor = document.getElementsByClassName('menu__item');

		if(burgerInput.checked == false && (scrollCheck + 25) > viewportHeight) {
			for(let i = 0; i < burgerButtonColor.length; i++) {
				burgerButtonColor[i].style.backgroundColor = '#010916';
			}
		} else {
			for(let i = 0; i < burgerButtonColor.length; i++) {
				burgerButtonColor[i].style.backgroundColor = '#ffffff';
			}
		}
	});

	// End Scroll Burger Color Check

	// Start Check Click Btn And Scroll

	var linkNav = document.querySelectorAll('[href^="#"]');
	const SCROLLSPEED = 0.6;

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

	//Start Check Nav Menu Scroll Active Link

	function getCoords(elem) {
		let box = elem.getBoundingClientRect();
		return box.top + pageYOffset;
	}

	var navMenuLinks = document.getElementsByClassName('nav-menu__link');

	var navMenuListIntro = document.getElementsByClassName('nav-menu__link--intro');
	var navMenuListAbout = document.getElementsByClassName('nav-menu__link--about');
	var navMenuListSkills = document.getElementsByClassName('nav-menu__link--skills');
	var navMenuListServices = document.getElementsByClassName('nav-menu__link--services');
	var navMenuListWork = document.getElementsByClassName('nav-menu__link--work');

	var sectionIntro = document.getElementById('intro');
	var sectionAbout = document.getElementById('about');
	var sectionSkills = document.getElementById('skills');
	var sectionServices = document.getElementById('services');
	var sectionWork = document.getElementById('work');

	var sectionIntroHeight = getCoords(sectionIntro);
	var sectionAboutHeight = getCoords(sectionAbout);
	var sectionSkillsHeight = getCoords(sectionSkills);
	var sectionServicesHeight = getCoords(sectionServices);
	var sectionWorkHeight = getCoords(sectionWork);

	function removeNavActiveClass() {
		for(let i = 0; i < navMenuLinks.length; i++) {
			navMenuLinks[i].classList.remove('nav-menu__link--active');
		}
	}

	window.addEventListener('scroll', function () {
		let scrollCheck = this.scrollY;

		if(scrollCheck < sectionAboutHeight) {
			removeNavActiveClass();
			navMenuListIntro[0].classList.add('nav-menu__link--active');
		} else if(scrollCheck >= sectionAboutHeight && scrollCheck < sectionSkillsHeight) {
			removeNavActiveClass();
			navMenuListAbout[0].classList.add('nav-menu__link--active');
		} else if(scrollCheck >= sectionSkillsHeight && scrollCheck < sectionServicesHeight) {
			removeNavActiveClass();
			navMenuListSkills[0].classList.add('nav-menu__link--active');
		} else if(scrollCheck >= sectionServicesHeight && scrollCheck < sectionWorkHeight) {
			removeNavActiveClass();
			navMenuListServices[0].classList.add('nav-menu__link--active');
		} else {
			removeNavActiveClass();
			navMenuListWork[0].classList.add('nav-menu__link--active');
		}

	});

	//End Check Nav Menu Scroll Active Link


})
