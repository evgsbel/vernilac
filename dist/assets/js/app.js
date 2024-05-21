"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// masked inputs
$(function () {
  Inputmask({
    "mask": "+7 (999) 999 - 99 - 99"
  }).mask('.phone-mask');
});

// mobile menu
$(function () {
  var btnMenu = document.querySelector('.js-toggle-mobile-menu');
  var menu = document.querySelector('.js-mobile-menu');
  var body = document.querySelector('body');
  btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('is-active');
    menu.classList.toggle('is-open');
    body.classList.toggle('opened-menu');
  });
  var mobileLink = document.querySelectorAll('.header-nav__link');
  mobileLink.forEach(function (el) {
    el.addEventListener('click', function () {
      btnMenu.classList.toggle('is-active');
      menu.classList.toggle('is-open');
      body.classList.toggle('opened-menu');
    });
  });
});

// fixed header
$(function () {
  function stickySidebar() {
    var scrollDistance = $(document).scrollTop(),
      headerHeight = $('.js-fixed-total').outerHeight(true),
      // sidebarHeight = $('aside').outerHeight(true),
      footerOffsetTop = $('.js-stop-header').offset().top,
      $header = $('.js-fixed-total');
    if (scrollDistance >= headerHeight) {
      $header.addClass('is-fixed');
    } else {
      $header.removeClass('is-fixed');
    }
  }
  window.addEventListener("load", stickySidebar);
  window.addEventListener("scroll", stickySidebar);
});

// anchors
$(function () {
  var anchors = document.querySelectorAll('a[href*="#"]');
  var _iterator = _createForOfIteratorHelper(anchors),
    _step;
  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

//sliders
$(function () {
  //production
  new Swiper('.js-production-slider', {
    speed: 2000,
    navigation: {
      nextEl: '.production-arrow-next',
      prevEl: '.production-arrow-prev'
    }
  });
  $('.production-nav__btn').on('shown.bs.tab', function (el) {
    var id = this.dataset.id;
    var thisSwiper = document.getElementById('js-production-slider--' + id);
    thisSwiper.swiper.update();
  });

  //exhibition
  new Swiper('.js-exhibition-slider', {
    spaceBetween: 30,
    slidesPerView: 3,
    speed: 2000,
    navigation: {
      nextEl: '.exhibition-arrow-next',
      prevEl: '.exhibition-arrow-prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    }
  });

  //example
  new Swiper(".js-example-slider", {
    slidesPerView: "2.5",
    centeredSlides: true,
    spaceBetween: 100,
    initialSlide: 2,
    speed: 2000,
    navigation: {
      nextEl: '.example-arrow-next',
      prevEl: '.example-arrow-prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2.5
      }
    }
  });
  //reviews
  new Swiper(".js-reviews-slider", {
    slidesPerView: "5",
    spaceBetween: 30,
    speed: 2000,
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 5
      }
    }
  });
  // production nav
  new Swiper(".js-production-nav-slider", {
    slidesPerView: 6,
    spaceBetween: 20,
    speed: 1000,
    grabCursor: true,
    navigation: {
      nextEl: '.production-nav-next',
      prevEl: '.production-nav-prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 4
      },
      1024: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 6
      }
    }
  });
});

// change location in cart
$(function () {
  var changeBtn = $('.js-change-location');
  changeBtn.on('click', function () {
    changeBtn.removeClass('is-active');
    if (!$(this).hasClass('is-active')) {
      $(this).addClass('is-active');
    } else {
      $(this).removeClass('is-active');
    }
    if (changeBtn.hasClass('is-active')) {
      $('.cart-obtain__btn').removeAttr('disabled');
    } else {
      $('.cart-obtain__btn').attr('disabled', 'true');
    }
  });
});
// map
$(function () {
  if ($('#map').length > 0) {
    var init = function init() {
      // Создание карты.
      var myMap = new ymaps.Map("map", {
        zoom: 10,
        center: [55.755811, 37.617617],
        controls: []
      });
      var destinations = {
        'ИП ЧУГУНОВ': [55.785392, 37.237756],
        'ИП УСОЛЬЦЕВА': [55.785392, 37.237757],
        'ИП ЦЫГАНОВА': [55.615334, 37.482367],
        'LAC TOP': [55.615334, 37.482368],
        'СИМФОНИЯ КРАСОК': [55.720798, 37.697433],
        'ИП БЕЛОВ': [55.777904, 37.853955],
        'ООО ОКРАШЕНО': [55.701699, 37.604044]
      };
      for (var _i = 0, _Object$keys = Object.keys(destinations); _i < _Object$keys.length; _i++) {
        var pls = _Object$keys[_i];
        var myPlacemark = new ymaps.Placemark(destinations[pls], {
          balloonContentHeader: "",
          balloonContentBody: '<img src="assets/img/map-icon-2.png">',
          balloonContentFooter: ""
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'assets/img/map-icon.png',
          iconImageSize: [40, 40],
          balloonOffset: [14, 43],
          iconContent: pls
        });
        myPlacemark.events.add('click', function (e) {
          var activeGeoObject = e.get('target');
          var iconContent = activeGeoObject.options.get('iconContent');
          var iconImage = activeGeoObject.options.get('iconImageHref');
          var iconSize = activeGeoObject.options.get('iconImageSize');
          myMap.panTo(destinations[iconContent], {
            flying: true,
            delay: 1500
          }).then(function () {
            myMap.options.set('maxAnimationZoomDifference', Infinity);
            //myMap.setZoom(10, {duration: 1500});
          });

          changeBtn.removeClass('is-active');
          $('.cart-obtain__btn').attr('disabled', 'true');
          changeBtn.each(function () {
            var btnAttr = $(this).data('map');
            if (iconContent === btnAttr) {
              $(this).toggleClass('is-active');
            }
          });
        });
        myMap.geoObjects.add(myPlacemark);
      }
      var changeBtn = $('.js-change-location');
      changeBtn.on('click', function (e) {
        e.preventDefault();
        var pos = $(this).data('map');

        // переходим по координатам
        myMap.panTo(destinations[pos], {
          flying: true,
          delay: 1500
        }).then(function () {
          myMap.options.set('maxAnimationZoomDifference', Infinity);
          myMap.balloon.open(destinations[pos], '<img src="assets/img/map-icon-2.png">', {
            closeButton: false,
            offset: [14, 43]
          });
        });
      });
      function check() {
        if (window.matchMedia("(max-width: 768px)").matches) {
          myMap.destroy();
        }
      }
      check();
      window.addEventListener("load", check);
      window.addEventListener('resize', check);
    };
    ymaps.ready(init);
  }
});

// check screen
function check() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    $('.partners__heading').addClass('collapsed');
    $('.partners__descr').addClass('collapse');
  } else {
    $('.partners__heading').removeClass('collapsed');
    $('.partners__descr').removeClass('collapse');
  }
}
check();
window.addEventListener("load", check);
window.addEventListener('resize', check);