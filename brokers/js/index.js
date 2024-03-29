'use strict';

document.addEventListener('DOMContentLoaded', function() {

  // Start Find All Buttons And Make Them Vertical Align middle

  if($('.btn--vertical').length > 0) {
    $('.btn--vertical').each(function() {
      var height = $(this).height();
      $(this).css('line-height', height + 'px');
    })
  }

  // End Find All Buttons And Make Them Vertical Align middle

  // Start Check Click On Log Out link

  if($('body').hasClass('log-in--true')) {

    $('.logout-link').click(function(e) {
      e.preventDefault();
      $('body').removeClass('log-in--true');
      $('body').addClass('log-in--false');
      $('.nav-menu__submenu').removeClass('nav-menu__submenu--open');
    });

  }

  // End Check Click On Log Out link


  // Start Check If Page Has Class (profile-form__input--no-changed) And Add Disabled Attribute

  if($('.profile-form__input--no-changed').length > 0) {
    $('.profile-form__input--no-changed').each(function() {
      $(this).attr('disabled', 'disabled');
    })
  }

  // End Check If Page Has Class (profile-form__input--no-changed) And Add Disabled Attribute


  // Start Check If My Balance Amount More Than 0 Then Change Color

  if($('.my-balance__amount').length > 0) {
    $('.my-balance__amount').each(function() {
      var text = $(this).text();

      if(+text > 0) {
        $(this).css('color', '#0cb175');
      }
    })
  }

  // End Check If My Balance Amount More Than 0 Then Change Color



  // Start Check If Profile Share Social Buttons More Than Two Then Modified Block

  if($('.profile-info__share').length > 0) {

    let socialsAmount = $('.profile-info__share').find('a').length;

    if(socialsAmount >= 3) {
      $('.profile-info__share').addClass('profile-info__share--many-items');
    } else {
      $('.profile-info__share').removeClass('profile-info__share--many-items');
    }
  }

  // End Check If Profile Share Social Buttons More Than Two Then Modified Block


  // Start Check If File Is Uploaded And Add Name

    if($('.request__btn-upload').length > 0) {

      $('.input--file').each(function() {
        $(this).on('change', function () {
          $(this).parent().addClass('request__btn-upload--ok');
          $(this).parent().next().find('b').text($(this).val().replace("C:\\fakepath\\", ""));
          $(this).parent().next().fadeIn('slow');
        });
      })

      $('.file-close-button').on('click', function() {
        $(this).parent().siblings('label').removeClass('request__btn-upload--ok');
        $(this).parent().siblings('label').children('input').val('');
        $(this).parent().fadeOut('fast');
      })

    }


  // End Check If File Is Uploaded And Add Name

  // Start Click On Card Plan

  if($('.card-plan').length > 0) {
    var buttonChecked = $('.card-plan__checked');
    var cardBack = $('.card-plan__wrapper--back');
    var cardFront = $('.card-plan__wrapper--front');
    var cardPlanFirst = $('.card-plan--first');
    var btnBack = $('.btn-back');

    var titleMain = $('.request__title-main');
    var titleSecond = $('.request__title-second');
    var payment = $('.payment');

    buttonChecked.on('click', function() {
      cardBack.addClass('card-plan__wrapper--back--checked');
      cardFront.addClass('card-plan__wrapper--front--checked');
      titleMain.css('display', 'none');
      titleSecond.fadeIn('fast');
      btnBack.fadeIn('fast');
      cardPlanFirst.addClass('card-plan--first--checked');

      $('.request__step-wrapper').addClass('request__step-wrapper--checked');
    })

    $('.request__form').mouseup(function(e) {
		  var $target = $(e.target);
		  if($('.card-plan__wrapper--back--checked').length > 0) {
        if ($target.closest(".card-plan__wrapper--back--checked").length == 0) {
          cardBack.removeClass('card-plan__wrapper--back--checked');
          cardFront.removeClass('card-plan__wrapper--front--checked');
          cardPlanFirst.removeClass('card-plan--first--checked');
          $('.request__step-wrapper').removeClass('request__step-wrapper--checked');

          titleMain.fadeIn('fast');
          titleSecond.css('display', 'none');
          btnBack.fadeOut('fast');
  		  }
      }
		});
  }

  if($('.card-plan--first--checked').length > 0) {
    $('.card-plan--first--checked').find('input').on('click', function(event) {
      event.preventDefault();
    })
  }

  if($('.btn-promo-failed').length > 0) {
    $('.btn-promo-failed').on('click', function(event) {
      $('.card-plan__item--promo').removeClass('card-plan__item--failed');
    })
  }


  // End Click On Card Plan


  // Start Check Click On Next-Btn in Broker's Registration page

  if($('.page-broker-registration').length > 0) {
    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets

    $(".request__btn--next").click(function(event){

      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      //activate next step on progressbar using the index of next_fs
      $("#progressbar li").eq($("article").index(next_fs)).addClass("preview__step--active");
      // $("#progressbar li").eq($("article").index(next_fs - 1)).addClass("preview__step--click");


      //show the next fieldset
      next_fs.addClass('request__step--active');
      next_fs.fadeIn('fast');
      //hide the current fieldset with style
      current_fs.fadeOut('fast');
    });

    // $(".preview__step--click").click(function(){
    //   console.log('click');
    //
    //   current_fs = $('.request__step--active');
    //   previous_fs = current_fs.prev();
    //
    //   //de-activate current step on progressbar
    //   $("#progressbar li").eq($("request__step").index(current_fs)).removeClass("acpreview__step--active");
    //
    //   //show the previous fieldset
    //
    //   previous_fs.fadeIn('fast');
    //   //hide the current fieldset with style
    //   current_fs.fadeOut('fast');
    // });
    //
    // $(".request__btn--submit").click(function(){
    //   return false;
    // })

  }
  // End Check Click On Next-Btn in Broker's Registration page






  // Start Check profile-form Fields And Change Button

  if($('.profile-form').length > 0) {
    var btn = $('.profile-form__save-btn');

    // $('.profile-form__btn--disabled').click(function(event) {
    //   event.preventDefault();
    // })

    $('.profile-form').submit(function( event ) {
      event.preventDefault();
      setTimeout(function() {
        btn.addClass('profile-form__save-btn--saved');
      }, 2000);
    });

    $('.profile-form__btn--cancel').click(function() {
      btn.removeClass('profile-form__save-btn--saved');
    });

    $('.profile-form__label').each(function(index) {

      $(this).bind("change input", function() {
        let questionOrder = index;
        let input = $(this).find('.profile-form__input');
        let valueAll = false;

        if(input.val().length > 0 || input.prop('checked')) {
          valueAll = true;
        } else {
          btn.removeClass('profile-form__save-btn--active');
          btn.removeClass('profile-form__save-btn--saved');
        }
      })

    })

  }


  // End Check profile-form Fields And Change Button



  // Start Check Request Details Page Aside Position Fixed

  if($('.request-card').length > 0) {

    var header = $('.request-card');
    var card = $('.request-card');
    var headerHeight = header[0].offsetTop;

    $(window).on('load', function() {
      $(window).scroll(function() {
        let windowHeight = $(window).height() - 135;
        let windowWidth = $(window).width();
        let asideHeight = $('.request-card').height();

        if( window.scrollY > headerHeight && (((windowHeight - asideHeight) >= 20) &&  windowWidth > 800)) {
          card.css('position', 'fixed');
          card.css('top', '53px');
        } else {
          card.css('position', 'relative');
          card.css('top', 0);
        }
      });
    });
  }

  // End Check Request Details Page Aside Position Fixed


  // Start Find Btn-OK And Check Click After Hide Parent block

  if($('.btn-ok').length > 0) {
    $('.btn-ok').each(function() {
      $(this).click(function() {
        $(this).parents('.request-header__hint').fadeOut('fast');
      })
    })
  }

  // End Find Btn-OK And Check Click After Hide Parent block

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
      var elementHeight = $(this).find('.request__wrapper-show').height();
      var element = $(this).find('.request__wrapper-show');

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
    let modalRegistered = $('#modal-registered');
    let modalPassword = $('#modal-password');
    let modalCellphone = $('#modal-cellphone');
    let modalCellphoneCode = $('#modal-cellphone-code');
    let modalThanksCellphone = $('#modal-thanks-cellphone');
    let modalMustVerified = $('#modal-must-verified');
    let modalCompleteRegistered = $('#modal-complete-registered');

		let linkLogin = $('.login-link');
		let linkSignUp = $('.sign-up-link');
    let linkPassword = $('.change-password-link');
    let linkPasswordThanks = $('.modal-password__form');
		let linkFeedback = $('.modal-feedback-btn');
    let linkCellphone = $('.verify-cellphone-link');
    let linkMustVerified = $('.must-verified-link');
		let overlay = $('.overlay');
		let formFeedback = $('.modal-feedback__form');
    let registrationForm = $('#registration-form');
		let modalThanksReview = $('#modal-thanks-review');
    let modalThanksPassword = $('#modal-thanks-password');


		if(document.getElementsByClassName('profile--pro').length > 0) {
			$('.modal-feedback__name-last').addClass('modal-feedback__name-last--pro');
		}

    if(registrationForm.length > 0) {
      registrationForm.submit(function( event ) {
  		  event.preventDefault();

        modal.each(function() {
          this.classList.remove('modal--visible');
          $(this).fadeOut(0);
        })

        modalCompleteRegistered.fadeIn('slow');
        modalCompleteRegistered[0].classList.add('modal--visible');
        overlay[0].classList.add('overlay--visible');
      });
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

    modalCellphoneCode.submit(function( event ) {
		  event.preventDefault();

      modal.each(function() {
        this.classList.remove('modal--visible');
        $(this).fadeOut(0);
      })

      modalThanksCellphone.fadeIn('slow');
      modalThanksCellphone[0].classList.add('modal--visible');
      overlay[0].classList.add('overlay--visible');

      $('.profile-form__label--cellphone').removeClass('cellphone-not-verified');
      $('.profile-form__label--cellphone').addClass('cellphone-verified');
		});

		modalCellphone.submit(function( event ) {
		  event.preventDefault();

      modal.each(function() {
        this.classList.remove('modal--visible');
        $(this).fadeOut(0);
      })

      modalCellphoneCode.fadeIn('fast');
      modalCellphoneCode[0].classList.add('modal--visible');
      overlay[0].classList.add('overlay--visible');

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

    linkMustVerified.each(function() {
			this.addEventListener('click', function(e) {
				e.preventDefault();

        modal.each(function() {
          this.classList.remove('modal--visible');
          $(this).fadeOut(0);
        })

        window.location.href = 'profile.html';
        window.history.back();

        $('.profile-form__label--cellphone').addClass('profile-form__label--cellphone-anim');

			});
		})

    linkCellphone.each(function() {
			this.addEventListener('click', function(e) {
				;e.preventDefault();

        if($('body').hasClass('log-in--true')) {
          modal.each(function() {
  					this.classList.remove('modal--visible');
  					$(this).fadeOut(0);
  				})

  				modalCellphone.fadeIn('fast');
  				modalCellphone[0].classList.add('modal--visible');
  				overlay[0].classList.add('overlay--visible');
        } else {
          modal.each(function() {
  					this.classList.remove('modal--visible');
  					$(this).fadeOut(0);
  				})

  				modalRegistered.fadeIn('fast');
  				modalRegistered[0].classList.add('modal--visible');
  				overlay[0].classList.add('overlay--visible');
        }

			});
		})

		linkFeedback.each(function() {
			this.addEventListener('click', function(e) {
				e.preventDefault();

        if($('body').hasClass('log-in--true') && $('body').hasClass('number-verified')) {
          modal.each(function() {
  					this.classList.remove('modal--visible');
  					$(this).fadeOut(0);
  				})

  				modalFeedback.fadeIn('fast');
  				modalFeedback[0].classList.add('modal--visible');
  				overlay[0].classList.add('overlay--visible');
        } else if ($('body').hasClass('log-in--true') && $('body').hasClass('number-not-verified')) {
          modal.each(function() {
  					this.classList.remove('modal--visible');
  					$(this).fadeOut(0);
  				})

  				modalMustVerified.fadeIn('fast');
  				modalMustVerified[0].classList.add('modal--visible');
  				overlay[0].classList.add('overlay--visible');
        } else {
          modal.each(function() {
  					this.classList.remove('modal--visible');
  					$(this).fadeOut(0);
  				})

  				modalRegistered.fadeIn('fast');
  				modalRegistered[0].classList.add('modal--visible');
  				overlay[0].classList.add('overlay--visible');
        }

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

    linkPassword.each(function() {

			this.addEventListener('click', function(e) {
        e.preventDefault();

         modal.each(function() {
           this.classList.remove('modal--visible');
           $(this).fadeOut(0);
         })

         modalPassword.fadeIn('fast');
         modalPassword[0].classList.add('modal--visible');
         overlay[0].classList.add('overlay--visible');
  			});

		});

    linkPasswordThanks.each(function() {

			this.addEventListener('submit', function(e) {
        e.preventDefault();

         modal.each(function() {
           this.classList.remove('modal--visible');
           $(this).fadeOut(0);
         })

         modalThanksPassword.fadeIn('fast');
         modalThanksPassword[0].classList.add('modal--visible');
         overlay[0].classList.add('overlay--visible');
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

    if(document.getElementsByClassName('.profile-card__name-first').length > 0) {
      $('.mobile-hide__name-first')[0].innerHTML = $('.profile-card__name-first')[0].innerHTML;
      $('.mobile-hide__name-second')[0].innerHTML = $('.profile-card__name-second')[0].innerHTML;
    }




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

    if(window.innerWidth >= 800 && $('body').hasClass('log-in--true')) {

      $(".nav-menu__login-img").click(function(e) {
        e.preventDefault();
        $(".nav-menu__submenu").toggleClass("nav-menu__submenu--open");
      });

      $(document).mouseup(function(e) {
  		  var $target = $(e.target);
  		  if ($target.closest(".nav-menu__submenu").length == 0 && $target.closest(".nav-menu__login-img").length == 0) {
  				$(".nav-menu__submenu").removeClass("nav-menu__submenu--open");
  		  }
  		});
    }

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
				autoplay: false,
				autoplaySpeed: 5000,
				centerMode: true,
				focusOnSelect: false,
				variableWidth: true
				});
	}

  if(windowWidth <= 800 && $('.request__step--third').length > 0) {

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
      return evt.touches ||             // browser API
             evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        xDown = getTouches(evt)[0].clientX;
        yDown = getTouches(evt)[0].clientY;
    };

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) && !($('.card-plan__wrapper--back').hasClass('card-plan__wrapper--back--checked'))) {/*most significant*/
            if ( xDiff > 0 ) {
                $('.request__step-slider').css('transform', 'translateX(-70%)');
                $('.card-plan--second').removeClass('card-plan--mobile');
                $('.card-plan--first').addClass('card-plan--mobile');
            } else {
                $('.request__step-slider').css('transform', 'translateX(0%)');
                $('.card-plan--first').removeClass('card-plan--mobile');
                $('.card-plan--second').addClass('card-plan--mobile');
            }
        } else {
            return;
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };



  }



})
