'use strict';

document.addEventListener('DOMContentLoaded', function() {

  // Start Check If Bids More Than One Then Change His color

  if($('.deal-card__bids').length > 0) {
    $('.deal-card__bids').each(function() {
      let bid = $(this);

      if(+bid.text() >= 1) {
        bid.css('color', '#0cb175');
      }
    })
    $('.tabs-controls__label--active').each(function() {
      let bid = $(this).find('.tabs-controls__count');
      let count = bid.text().replace('(', '').replace(')', '');

      if(+count >= 1) {
        bid.css('color', '#0cb175');
      }
    })
  }

  // End Check If Bids More Than One Then Change His color

  // Start Check If Bids More Than One In Ended Requests

  if($('.deal-card__item--ended').length > 0) {
    $('.deal-card__item--ended').each(function() {
      var buttons = $(this).find('.deal-card__buttons');
      var buttonsBids = $(this).find('.deal-card__buttons--ended-bids');
      var bid = $(this).find('.deal-card__bids');

      if(+bid.text() >= 1) {
        buttons.removeClass('deal-card__buttons--ended');
        buttonsBids.css('display', 'flex');
        bid.css('color', '#0cb175');
      }
    })
  }

  // End Check If Bids More Than One In Ended Requests

  // Start Check Tabs On My-Request page

  if($('.deal-card__tab-wrapper').length > 0) {

    $('[name=my-request-tab]').each(function(i,d){
      var p = $(this).prop('checked');

      if(p){
        $('.deal-card__tab-wrapper').fadeOut('fast');
        $('.deal-card__tab-wrapper').eq(i).fadeIn('fast');
      }
    });

    $('[name=my-request-tab]').on('change', function(){
      var p = $(this).prop('checked');

      // $(type).index(this) == nth-of-type
      var i = $('[name=my-request-tab]').index(this);

      $('.deal-card__tab-wrapper').fadeOut('fast');
      $('.deal-card__tab-wrapper').eq(i).fadeIn('fast');
    });

  }

  // End Check Tabs On My-Request page


  // Start Find Disabled Questions

  if($('.disabled-elements-preview-JS').length > 0) {

    $('.request__wrapper').each(function(index) {

      $(this).bind("keyup change input", function() {

        if($(this).hasClass('question-type__text')) {
          let questionOrder = index;
          let input = $(this).find('.input');
          let valueAll = false;

          input.each(function() {
            if($(this).val().length == 0) {
              valueAll = true;
            }
          })

          if(valueAll == false) {
            let question = document.getElementsByClassName('request__wrapper')[questionOrder + 1];
            question.classList.add('disabled-elements-preview-JS--hidden');
          } else {
            let question = document.getElementsByClassName('request__wrapper')[questionOrder + 1];
            question.classList.remove('disabled-elements-preview-JS--hidden');
          }

        } else if($(this).hasClass('question-type__radio')) {

          let questionOrder = index;
          let input = $(this).find('.input');
          let valueAll = false;

          input.each(function() {
            if($(this).attr('checked') == 'checked') {
              valueAll = true;
            }
          })

          if(valueAll == false) {
            let question = document.getElementsByClassName('request__wrapper')[questionOrder + 1];
            question.classList.add('disabled-elements-preview-JS--hidden');
          } else {
            let question = document.getElementsByClassName('request__wrapper')[questionOrder + 1];
            question.classList.remove('disabled-elements-preview-JS--hidden');
          }

        } else if($(this).hasClass('question-type__range')) {

          let questionOrder = index;
          let input = $(this).find('.request__range-output');
          let valueAll = true;

          if(input.text() != '0') {
            valueAll = false;
          }

          if(valueAll == false) {
            if(document.getElementsByClassName('request__wrapper')[questionOrder + 1]) {
              let question = document.getElementsByClassName('request__wrapper')[questionOrder + 1];
              question.classList.add('disabled-elements-preview-JS--hidden');
            } else {
              $('.request__btn').attr('disabled', 'disabled');
            }
          } else {

            if(document.getElementsByClassName('request__wrapper')[questionOrder + 1].length > 0) {
              let question = document.getElementsByClassName('request__wrapper')[questionOrder + 1];
                question.classList.remove('disabled-elements-preview-JS--hidden');
            } else {
              $('.request__btn').removeAttr('disabled');
            }
          }

        }
      })


    })

  }

  // End Find Disabled Questions

  // Start Find Disabled Input Inside A Question

  if($('.disabled-elements-JS').length > 0) {

    $('.disabled-elements-JS').each(function() {
      disabledInput();

      $('.input').each(function(index) {
        $(this).addClass(`input-${index + 1}`)
      })

      $('.input').change(function() {
        disabledInput();
      })
      $('.input').keyup(function() {
        disabledInput();
      })

    });

    function disabledInput() {
      let count = $('.input').length;

      for (let i = 1; i <= count; i++) {

        if($(`.input-${i}`).val() != '') {
          $(`.input-${i+1}`).removeAttr('disabled');
        } else {
          $(`.input-${i+1}`).attr('disabled', 'disabled');
        }

      }
    }

  }

  // Start Find Disabled Input Inside A Question



	// Start Find Textarea Max length

	if($('#textarea-max').length > 0) {

		$('#request__textarea').on('keyup', function(){
      let my_txt = $(this).val();
      let length = my_txt.length;
			const max = $('#textarea-max').attr('data-max');

			if (length >= max) {
				$('#textarea-max').css('color', 'red');
				$('#textarea-max').text(max - length);
		  } else {
				$('#textarea-max').text(max - length);
				$('#textarea-max').css('color', '#8a8c8f');
		  }
		});
	}

	// End Find Textarea Max length

	// Start Check If Change Range Value And Put This To span

		if($('#request__range-input').length > 0) {

			$(document).on('input', '#request__range-input', function() {
				var newval = $(this).val();
    		$("#request__range-output").text(newval);
	    });

		}

	// Start Check If Change Range Value And Put This To span

	// Start Check Modals

	if(document.getElementsByClassName('modal').length > 0) {
		let modal = $('.modal');
		let modalLogin = $('#modal-login');
		let modalFeedback = $('#modal-feedback');
		let modalSign = $('#modal-sign');
		let linkLogin = $('.login-link');
		let linkSignUp = $('.sign-up-link');
		let linkFeedback = $('.modal-feedback-btn');
		let overlay = $('.overlay');
		let formFeedback = $('.modal-feedback__form');
		let modalThanksReview = $('#modal-thanks-review');


		if(document.getElementsByClassName('profile--pro').length > 0) {
			$('.modal-feedback__name-last').addClass('modal-feedback__name-last--pro');
		}

		if($('.modal--visible').height() >= $(window).height()) {
			$('.modal--visible').css('overflow-y', 'scroll');
		}

		$('.modal-feedback__input').on('keyup', function(){
      let my_txt = $(this).val();
      let length = my_txt.length;
			const max = $(this).data('max');

			if (length >= max) {
				$(this).next('i').find('span').css('color', 'red');
				$(this).next('i').find('span').text(length);
		  } else {
				$(this).next('i').find('span').text(length);
				$(this).next('i').find('span').css('color', '#d1d2d4');
		  }
		});

		formFeedback.submit(function( event ) {
		  event.preventDefault();

			$('.modal-feedback__input').each(function() {
				if($(this).val().length <= $(this).data('max')
					&& $(this).val().length >= 1) {

					modal.each(function() {
						this.classList.remove('modal--visible');
						$(this).fadeOut(0);
					})

					modalThanksReview.fadeIn('fast');
					modalThanksReview[0].classList.add('modal--visible');
					overlay[0].classList.add('overlay--visible');
				}

				else {
					return false;
				}

			})
		});

		linkFeedback.each(function() {
			this.addEventListener('click', function(e) {
				e.preventDefault();

				modal.each(function() {
					this.classList.remove('modal--visible');
					$(this).fadeOut(0);
				})

				modalFeedback.fadeIn('fast');
				modalFeedback[0].classList.add('modal--visible');
				overlay[0].classList.add('overlay--visible');
			});
		})

		linkLogin.each(function() {

			this.addEventListener('click', function(e) {
				if(!(this.classList.contains('nav-menu__link--login'))) {
          e.preventDefault();

  				modal.each(function() {
  					this.classList.remove('modal--visible');
  					$(this).fadeOut(0);
  				})

  				modalLogin.fadeIn('fast');
  				modalLogin[0].classList.add('modal--visible');
  				overlay[0].classList.add('overlay--visible');
        }
			});

		});

		linkSignUp.each(function() {

			this.addEventListener('click', function(e) {
				e.preventDefault();

				modal.each(function() {
					this.classList.remove('modal--visible');
					$(this).fadeOut(0);
				})

				modalSign.fadeIn('fast');
				modalSign[0].classList.add('modal--visible');
				overlay[0].classList.add('overlay--visible');
			});

		});


			$(document).mouseup(function(e) {
				var $target = $(e.target);
				if ($target.closest('.modal--visible').length == 0) {
					modal.fadeOut( 'fast' );
					overlay.removeClass('overlay--visible');
				}
			});

			$(document).mouseup(function(e) {
				$('.modal-close').click(function() {
					modal.fadeOut( 'fast' );
					overlay.removeClass('overlay--visible');
				})
			});

			$(document).keydown(function(e) {
			  if (e.keyCode == 27) {
					var $target = $(e.target);
					if ($target.closest('.modal--visible').length == 0) {
						modal.fadeOut( 'fast' );
						overlay.removeClass('overlay--visible');
					}
			  }
			});
	}

	// End Check Modals


	// Start Check Mobile Version Broker Profile Fixed header

	if($('.mobile-hide').css('display') == 'block') {

		let header = $(".header");

		$('.mobile-hide__name-first')[0].innerHTML = $('.profile-card__name-first')[0].innerHTML;
		$('.mobile-hide__name-second')[0].innerHTML = $('.profile-card__name-second')[0].innerHTML;

	  $(window).scroll(function() {

	    let mobileHide = $('.mobile-hide');
			let profileCard = $('.profile-card');
	    let headerHeight = header.height();
	    let some = window.scrollY;

	    if (some >= headerHeight) {
				mobileHide.css('position', 'fixed');
	      mobileHide.css('top', '0px');
				profileCard.css('margin-top', '140px');
	    } else {
				mobileHide.css('position', 'relative');
	      mobileHide.css('top', 0);
				profileCard.css('margin-top', '20px');
	    }


	  });
	}

	// End Check Mobile Version Broker Profile Fixed header


	// Start Check If There Are A Lot Of Text And Hide It

	if(document.getElementsByClassName('show-more-wrapper').length > 0) {

		let windowWidth = $(window).width();

		if(windowWidth < 800) {
			 $('.readmore').shorten({
				moreText: 'read more',
				lessText: 'read less',
				showChars: 270
			});
		}
	}

	// End Check If There Are A Lot Of Text And Hide It


	// Start Check The Window Height On Broker Profile page

	if(document.getElementsByClassName('page-broker-profile').length > 0) {


		let windowHeight = $(window).height() - 135;
		let windowWidth = $(window).width();
		let asideHeight = $('.profile-card').height();

		if( ((windowHeight - asideHeight) >= 20) &&  windowWidth > 800) {
			document.getElementsByClassName('page-broker-profile')[0].classList.add('page-broker-profile--height');
		}
	}

	// End Check The Window Height On Broker Profile page



	// Start Find Profile Stickers

	if(document.getElementsByClassName('profile').length > 0) {
		let profile = document.getElementsByClassName('profile');

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

	if(document.getElementsByClassName('modal-feedback__img').length > 0) {

		if(!document.getElementsByClassName('modal-feedback__img')[0].getAttribute('src').length > 0) {

			document.getElementsByClassName('modal-feedback__img')[0].style.display = 'none';

		}
	}

	// End Check If There Is Broker Picture



	// Start Check If There Is Feed Full In The Broker card

	if(document.getElementsByClassName('profile-card').length > 0) {

		$('.feed---JS').each(function() {

			if(!$(this).text().length) {
				console.log(($(this).html()) == '');
				$(this).parent().addClass('parent---JS-remove');
			}
		})

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
				$(elem).remove();
			}
		})
	}






	var windowWidth = window.innerWidth;

	if(windowWidth <= 1280 && document.getElementsByClassName('intro__card-list').length > 0) {

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
