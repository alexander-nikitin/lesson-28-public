$(document).ready(function(){
  var modal = $('.modal'),
      modalDialog = $('.modal__dialog'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      map0 = 0;

  modalBtn.on('click', function(){
    modal.toggleClass('modal_visible');
  });
  closeBtn.on('click', function(){
    modal.removeClass('modal_visible');
  });
  $(document).on('keydown', function(){
    if (event.keyCode == 27) {
      modal.removeClass('modal_visible');
    }
  });

  modal.on('click', function(e){
    if (e.target != modalDialog[0] && modalDialog.has(e.target).length === 0) {
      modal.removeClass('modal_visible');
    }
  });

  $(window).on('scroll', function(){
    var control = $('.control').offset().top;
    if ( $(window).scrollTop() > control) {
      $('.arrow').show();
    } else {
      $('.arrow').hide();
    }
  })
  $('.arrow').on('click', function(){
    $('html,body').stop().animate({ scrollTop: 0 }, 1000);
  });

  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container-projects', {
    // Optional parameters
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  bullets.css('left', prev.width() +30 )
  next.css('left', prev.width() + 30 + bullets.width() + 30);

  var mySwiperSteps = new Swiper ('.swiper-container-steps', {
    // loop: true,
    pagination: {
      el: '.swiper-pagination-steps',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next-steps',
      prevEl: '.swiper-button-prev-steps',
    },
    on: {
			slideNextTransitionStart: function () {
        var index = mySwiperSteps.activeIndex + 1;
        var index2 = mySwiperSteps.activeIndex;
        $('.steps__item').removeClass("active");
        $(".steps__item:nth-child("+index+")").addClass("active");
        $(".step-fraction span").text(index);
        mySwiperStepsTwo.slideTo(index2);
			},
			slidePrevTransitionStart: function () {
        var index = mySwiperSteps.activeIndex + 1;
        var index2 = mySwiperSteps.activeIndex;
        $('.steps__item').removeClass("active");
        $(".steps__item:nth-child("+index+")").addClass("active");
        $(".step-fraction span").text(index);
        mySwiperStepsTwo.slideTo(index2);
      }
		}
  });

  $(".steps__item").click(function() {
    var index = $(this).index();
    mySwiperSteps.slideTo(index);
  });

  var mySwiperStepsTwo = new Swiper ('.swiper-container-steps-two', {
  });

  var nextStep = $('.swiper-button-next-steps');
  var prevStep = $('.swiper-button-prev-steps');
  var bulletsStep = $('.swiper-pagination-steps');

  bulletsStep.css('left', prevStep.width() +30 );
  nextStep.css('left', prevStep.width() + 30 + bulletsStep.width() + 30);

   

  $(window).on('scroll', function(){
    $('.section-title').each(function(){
      if ( $(this).offset().top <= $(window).scrollTop() + $(window).height() - 100) {
        $(this).addClass('animate');
      }
    });
  });
  
  //Валидация форм

  $('.modal__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true
      },
      userEmail: {
        required: true
      },
      policyCheckbox: {
        required: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не меньше 2 букв",
        maxlength: "Имя должно быть не больше 15 букв"
      },
      userPhone: {
        required: "Заполните поле"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox: {
        required: "Необходимо согласие"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
          $('.modal__form').css("display", "none");
          $('.modal__text').css("display", "block");
        }
      });
    }
  });

  $('.control__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true
      },
      policyCheckbox: {
        required: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не меньше 2 букв",
        maxlength: "Имя должно быть не больше 15 букв"
      },
      userPhone: {
        required: "Заполните поле"
      },
      policyCheckbox: {
        required: "Необходимо согласие"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
        }
      });
    }
  });

  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true
      },
      userQuestion: {
        required: true
      },
      policyCheckbox: {
        required: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не меньше 2 букв",
        maxlength: "Имя должно быть не больше 15 букв"
      },
      userPhone: {
        required: "Заполните поле"
      },
      userQuestion: {
        required: "Заполните поле"
      },
      policyCheckbox: {
        required: "Необходимо согласие"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "question.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
        }
      });
    }
  });

  // Маска для поля с Телефоном

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(000) 000-00-00"});

  // Подключение карты

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    // ymaps.ready(function () {
    //   var myMap = new ymaps.Map('map', {
    //           center: [47.208901, 39.631539],
    //           zoom: 9
    //       }, {
    //           searchControlProvider: 'yandex#search'
    //       }),
  
    //       // Создаём макет содержимого.
    //       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    //           '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    //       ),
  
    //       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    //           hintContent: 'ТЦ PLAZA',
    //           balloonContent: 'Это красивая метка'
    //       }, {
    //           // Опции.
    //           // Необходимо указать данный тип макета.
    //           iconLayout: 'default#image',
    //           // Своё изображение иконки метки.
    //           iconImageHref: 'img/map-marker.svg',
    //           // Размеры метки.
    //           iconImageSize: [30, 42],
    //           // Смещение левого верхнего угла иконки относительно
    //           // её "ножки" (точки привязки).
    //           iconImageOffset: [-5, -38]
    //       });
    //       myMap.behaviors.disable('scrollZoom');
    //       myMap.geoObjects.add(myPlacemark);
    // });
    $(window).scroll(function () {
      if((map0 == 0) && ($(this).scrollTop() > $('.footer__map').offset().top - $(this).height()*4/5)) {
        map0 = 1;
        $('.footer__map').html("<script type='text/javascript' charset='utf-8' async src='https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ace7a28bde525c6e8aa03dc6f9b86f64d42d03a37ce50d13cb0d2ed3f0e8be94b&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true'></script>'")
      }
    });
  });