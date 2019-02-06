'use strict';

document.addEventListener('DOMContentLoaded', function() {

	// Start Writing Intro Subtitle Text
	function writingIntroSubtitleText() {

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

	}
	// End Writing Intro Subtitle Text


	// Start Services Color Choice
	function servicesColorChoice() {

		var servicesColors = document.getElementById('colors');
		var viewportHeight = window.innerHeight;

		function ifServicesColorChange() {
			let colorChangeText = document.getElementsByClassName('color-change--text');
			let colorChangeBorder = document.getElementsByClassName('color-change--border');
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
					for(let j = 0; j < colorChangeBorder.length; j++) {
						colorChangeBorder[j].style.borderColor = servicesColorsActiveColor;
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

	}
	// End Services Color Choice


	// Start Scroll Burger Color Check
	function scrollBurderColorCheck() {

		window.addEventListener('scroll', function () {
			let scrollCheck = this.scrollY;
			var viewportHeight = window.innerHeight;
			let burgerInput = document.getElementById('menu');
			let burgerButtonColor = document.getElementsByClassName('menu__item');


			if(burgerInput.checked == false && (scrollCheck) > viewportHeight) {
				for(let i = 0; i < burgerButtonColor.length; i++) {
					burgerButtonColor[i].style.backgroundColor = '#010916';
				}
			} else {
				for(let i = 0; i < burgerButtonColor.length; i++) {
					burgerButtonColor[i].style.backgroundColor = '#ffffff';
				}
			}
		});

	}
	// End Scroll Burger Color Check


	// Start Check Click Btn And Scroll
	function checkClickBtnAndScroll() {

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

	}
	// End Check Click Btn And Scroll


	//Start Check Nav Menu Scroll Active Link
	function checkNavMenuScrollActiveLink() {

		function getCoords(elem) {
			let box = elem.getBoundingClientRect();
			return box.top + pageYOffset;
		}

		var navMenuLinks = document.getElementsByClassName('nav-menu__link');

		var navMenuListIntro = document.getElementsByClassName('nav-menu__link--intro');
		var navMenuListAbout = document.getElementsByClassName('nav-menu__link--about');
		var navMenuListSkills = document.getElementsByClassName('nav-menu__link--skills');
		var navMenuListServices = document.getElementsByClassName('nav-menu__link--testimonials');
		var navMenuListWork = document.getElementsByClassName('nav-menu__link--work');
		var navMenuListContact = document.getElementsByClassName('nav-menu__link--contact');
		var navMenuListResume = document.getElementsByClassName('nav-menu__link--resume');

		var sectionIntro = document.getElementById('intro');
		var sectionAbout = document.getElementById('about');
		var sectionSkills = document.getElementById('skills');
		var sectionServices = document.getElementById('testimonials');
		var sectionWork = document.getElementById('work');
		var sectionContact = document.getElementById('contact-me');
		var sectionResume = document.getElementById('resume');

		var sectionIntroHeight = getCoords(sectionIntro);
		var sectionAboutHeight = getCoords(sectionAbout);
		var sectionSkillsHeight = getCoords(sectionSkills);
		var sectionServicesHeight = getCoords(sectionServices);
		var sectionWorkHeight = getCoords(sectionWork);
		var sectionContactHeight = getCoords(sectionContact);
		var sectionResumeHeight = getCoords(sectionResume);

		function removeNavActiveClass() {
			for(let i = 0; i < navMenuLinks.length; i++) {
				navMenuLinks[i].classList.remove('nav-menu__link--active');
			}
		}

		window.addEventListener('scroll', function () {
			let scrollCheck = this.scrollY + 20;

			if(scrollCheck < sectionAboutHeight) {
				removeNavActiveClass();
				navMenuListIntro[0].classList.add('nav-menu__link--active');
			} else if(scrollCheck >= sectionAboutHeight && scrollCheck < sectionSkillsHeight) {
				removeNavActiveClass();
				navMenuListAbout[0].classList.add('nav-menu__link--active');
			} else if(scrollCheck >= sectionSkillsHeight && scrollCheck < sectionResumeHeight) {
				removeNavActiveClass();
				navMenuListSkills[0].classList.add('nav-menu__link--active');
			} else if(scrollCheck >= sectionResumeHeight && scrollCheck < sectionWorkHeight) {
				removeNavActiveClass();
				navMenuListResume[0].classList.add('nav-menu__link--active');
			} else if(scrollCheck >= sectionWorkHeight && scrollCheck < sectionServicesHeight) {
				removeNavActiveClass();
				navMenuListWork[0].classList.add('nav-menu__link--active');
			} else if(scrollCheck >= sectionServicesHeight && scrollCheck < sectionContactHeight) {
				removeNavActiveClass();
				navMenuListServices[0].classList.add('nav-menu__link--active');
			} else if(scrollCheck >= sectionContactHeight && scrollCheck > sectionServicesHeight) {
				removeNavActiveClass();
				navMenuListContact[0].classList.add('nav-menu__link--active');
			}

		});

	}
	//End Check Nav Menu Scroll Active Link


	//Start btn hover effect
	function btnHoverEffect() {

		var buttons = document.getElementsByClassName('btn');

		for(let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('mouseenter', function(e) {
				let bodyRect = document.body.getBoundingClientRect(),
				    elemRect = this.getBoundingClientRect(),
						relX = e.pageX - (elemRect.left - bodyRect.left),
						relY = e.pageY - (elemRect.top - bodyRect.top);

						this.childNodes[1].style.top =  relY + 'px';
						this.childNodes[1].style.left = relX + 'px';
			});
			buttons[i].addEventListener('mouseout', function(e) {
				let bodyRect = document.body.getBoundingClientRect(),
				    elemRect = this.getBoundingClientRect(),
						relX = e.pageX - (elemRect.left - bodyRect.left),
						relY = e.pageY - (elemRect.top - bodyRect.top);

						this.childNodes[1].style.top =  relY + 'px';
						this.childNodes[1].style.left = relX + 'px';
			})
		}

	}
	//End btn hover effect



	// Start Testimonials Slider
	function testimonialsSlider() {

		var slides = document.querySelectorAll('.testimonials__list .testimonials__item');
		var timeline = document.querySelectorAll('.testimonials__timeline');
		var currentSlide = 0;
		nextSlide();
		var cnt = 0;
		var fivecnt = 0;


		function nextSlide() {
			slides[currentSlide].className = 'testimonials__item';
			currentSlide = (currentSlide+1)%slides.length;
			slides[currentSlide].className = 'testimonials__item testimonials__item--showing';
		}

		var playing = true;
		var pauseButton = document.getElementById('testimonials__button');

		function pauseSlideshow(){
			playing = false;
			pauseButton.classList.add('testimonials__button--paused');
			timeline[currentSlide].style.webkitAnimationPlayState = 'paused';

		}

		function playSlideshow(){
			playing = true;
			timer();
			pauseButton.classList.remove('testimonials__button--paused');
			timeline[currentSlide].style.webkitAnimationPlayState = 'running';
		}

		pauseButton.onclick = function(){
			if(playing){ pauseSlideshow(); }
			else{ playSlideshow(); }
		};



		function timer() {
			if(!playing)
				return;
			cnt += 100;
			if(cnt >= 5000){
				cnt=0;
				everyFive();
			}
			setTimeout(timer, 100);
		}

		function everyFive(){
			fivecnt++;
			nextSlide();
		}

		timer();

	}
	// End Testimonials Slider




	writingIntroSubtitleText();
	servicesColorChoice();
	scrollBurderColorCheck();
	checkClickBtnAndScroll();
	checkNavMenuScrollActiveLink();
	testimonialsSlider()
	btnHoverEffect();
})
