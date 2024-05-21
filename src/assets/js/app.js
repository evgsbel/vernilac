// masked inputs
$(() => {
  Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');
});

// mobile menu
$(() => {
  const btnMenu = document.querySelector('.js-toggle-mobile-menu');
  const menu = document.querySelector('.js-mobile-menu');
  const body = document.querySelector('body');
  btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('is-active')
    menu.classList.toggle('is-open');
    body.classList.toggle('opened-menu')
  });
  let mobileLink = document.querySelectorAll('.header-nav__link');
  mobileLink.forEach(function(el) {
    el.addEventListener('click', function() {
      btnMenu.classList.toggle('is-active')
      menu.classList.toggle('is-open');
      body.classList.toggle('opened-menu')
    })
  })
});

// fixed header
$(() => {
function stickySidebar () {
  let scrollDistance = $(document).scrollTop(),
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
$(() => {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
})

//sliders
$(() => {
  //production
  new Swiper('.js-production-slider', {
    speed: 2000,
    navigation: {
      nextEl: '.production-arrow-next',
      prevEl: '.production-arrow-prev',
    }
  });

$('.production-nav__btn').on('shown.bs.tab', function (el) {
    let id = this.dataset.id;
    let thisSwiper = document.getElementById('js-production-slider--' + id);
    thisSwiper.swiper.update();
 })

  //exhibition
  new Swiper('.js-exhibition-slider', {
    spaceBetween: 30,
    slidesPerView: 3,
    speed: 2000,
    navigation: {
      nextEl: '.exhibition-arrow-next',
      prevEl: '.exhibition-arrow-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    },
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
      prevEl: '.example-arrow-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
      }
    },
  });
  //reviews
  new Swiper(".js-reviews-slider", {
    slidesPerView: "5",
    spaceBetween: 30,
    speed: 2000,
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  // production nav
  new Swiper(".js-production-nav-slider", {
    slidesPerView: 6,
    spaceBetween: 20,
    speed: 1000,
    grabCursor: true,
    navigation: {
      nextEl: '.production-nav-next',
      prevEl: '.production-nav-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 6,
      },
    },
  });
});


// change location in cart
$(() => {
  let changeBtn = $('.js-change-location');
  changeBtn.on('click', function () {
    changeBtn.removeClass('is-active')

    if (!($(this).hasClass('is-active'))) {
      $(this)
        .addClass('is-active')

    } else {
      $(this).removeClass('is-active')
    }

    if (changeBtn.hasClass('is-active')) {
      $('.cart-obtain__btn').removeAttr('disabled')
    } else {
      $('.cart-obtain__btn').attr('disabled', 'true')
    }
  });
});
// map
$(() => {
  if ($('#map').length > 0) {
    ymaps.ready(init);

    function init() {
      // Создание карты.
      let myMap = new ymaps.Map("map", {
        zoom: 10,
        center: [55.755811, 37.617617],
        controls: []
      });
      let destinations = {
        'ИП ЧУГУНОВ': [55.785392, 37.237756],
        'ИП УСОЛЬЦЕВА': [55.785392, 37.237757],
        'ИП ЦЫГАНОВА': [55.615334, 37.482367],
        'LAC TOP': [55.615334, 37.482368],
        'СИМФОНИЯ КРАСОК': [55.720798, 37.697433],
        'ИП БЕЛОВ': [55.777904, 37.853955],
        'ООО ОКРАШЕНО': [55.701699, 37.604044]
      }

      for (let pls of Object.keys(destinations)) {
        let myPlacemark = new ymaps.Placemark(destinations[pls], {
          balloonContentHeader: "",
          balloonContentBody: '<img src="assets/img/map-icon-2.png">',
          balloonContentFooter: "",

        }, {
          iconLayout: 'default#image',
          iconImageHref: 'assets/img/map-icon.png',
          iconImageSize: [40, 40],
          balloonOffset: [14, 43],
          iconContent: pls
        });

        myPlacemark.events.add('click', function (e) {

          let activeGeoObject = e.get('target');
          let iconContent = activeGeoObject.options.get('iconContent')
          let iconImage = activeGeoObject.options.get('iconImageHref')
          let iconSize = activeGeoObject.options.get('iconImageSize')


          myMap.panTo(destinations[iconContent], {
            flying: true,
            delay: 1500
          }).then(function () {
            myMap.options.set('maxAnimationZoomDifference', Infinity);
            //myMap.setZoom(10, {duration: 1500});
          });
          changeBtn.removeClass('is-active')
          $('.cart-obtain__btn').attr('disabled', 'true')
          changeBtn.each(function () {
            let btnAttr = $(this).data('map')
            if (iconContent === btnAttr) {
              $(this).toggleClass('is-active')
            }
          });
        })

        myMap.geoObjects
          .add(myPlacemark);
      }
      let changeBtn = $('.js-change-location')
      changeBtn.on('click', function (e) {
        e.preventDefault();

        let pos = $(this).data('map');

        // переходим по координатам
        myMap.panTo(destinations[pos], {
          flying: true,
          delay: 1500
        }).then(function () {
          myMap.options.set('maxAnimationZoomDifference', Infinity);
          myMap.balloon.open(destinations[pos], '<img src="assets/img/map-icon-2.png">', {
            closeButton: false,
            offset: [14, 43],
          });
        });
      });
      function check(){
        if( window.matchMedia("(max-width: 768px)").matches ){
          myMap.destroy();
        }
      }
      check();
      window.addEventListener("load", check);
      window.addEventListener( 'resize', check );
    }

  }
})

// check screen
function check(){
  if( window.matchMedia("(max-width: 768px)").matches ){
   $('.partners__heading').addClass('collapsed');
   $('.partners__descr').addClass('collapse');
  } else {
    $('.partners__heading').removeClass('collapsed');
    $('.partners__descr').removeClass('collapse');
  }
}
check();
window.addEventListener("load", check);
window.addEventListener( 'resize', check );

