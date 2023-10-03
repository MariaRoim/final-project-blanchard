document.querySelector('#header__menu-btn-1').addEventListener('click', function () {
  document.querySelector('#header__menu-btn-1').classList.toggle('is-active');
});

document.querySelector('#header__menu-btn-2').addEventListener('click', function () {
  document.querySelector('#header__menu-btn-2').classList.toggle('is-active');
});

document.querySelector('#header__menu-btn-3').addEventListener('click', function () {
  document.querySelector('#header__menu-btn-3').classList.toggle('is-active');
});

document.querySelector('#header__menu-btn-4').addEventListener('click', function () {
  document.querySelector('#header__menu-btn-4').classList.toggle('is-active');
});

document.querySelector('#header__menu-btn-5').addEventListener('click', function () {
  document.querySelector('#header__menu-btn-5').classList.toggle('is-active');
});

const btns = document.querySelectorAll(".header__menu-btn");
const dropdowns = document.querySelectorAll(".header__dropdown");
const activeClassdropdowns = "header__dropdown-active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".header__dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns);
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns);
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  });
});

document.querySelectorAll(".header__dropdown-simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
});

const swiper = new Swiper('.hero__swiper-container', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },

  effect: "fade",
  allowTouchMove: false,
});

const selector = document.querySelector('.choices');
const choices = new Choices(selector, {
  searchEnabled: false,
  placeholder: false,
});

const swiper2 = new Swiper('.gallery__swiper-container', {
  slidesPerView: 1,
  loop: false,

  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction"
  },

  navigation: {
    nextEl: '.gallery__swiper-btn-next',
    prevEl: '.gallery__swiper-btn-prev',
  },
});

$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  active: false,
  icons: false,
});

$(document).ready(function () {
  //прикрепляем клик по заголовкам acc-head
  $('#accordeon .ui-accordion-header').on('click', f_acc);
});

function f_acc() {
  //скрываем все кроме того, что должны открыть
  $('#accordeon .ui-accordion-content').not($(this).next()).slideUp(5000);
  // открываем или скрываем блок под заголовком, по которому кликнули
  $(this).next().slideToggle(5000);
}

function f_acc() {
  //скрываем все кроме того, что должны открыть
  $('#accordeon .ui-accordion-content').not($(this).next()).slideDown(5000);
  // открываем или скрываем блок под заголовком, по которому кликнули
  $(this).next().slideToggle(5000);
}

document.querySelectorAll('.catalog__tab').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.catalog__tab').forEach(function (btn) {
      btn.classList.remove('.catalog__tab__active')
    });
    e.currentTarget.classList.add('catalog__tab__active');

    document.querySelectorAll('.catalog__artist-container').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('catalog__artist-container__active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__artist-container__active');
  })
});

const swiper3 = new Swiper('.events__swiper-container', {
  slidesPerView: 3,
  loop: false,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    1024: {
      spaceBetween: 27
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  pagination: {
    el: '.events__swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.events__swiper-btn-next',
    prevEl: '.events__swiper-btn-prev',
  },
});

const swiper4 = new Swiper('.projects__swiper-container', {
  loop: false,
  spaceBetween: 50,
  slidesPerView: 3,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    1024: {
      slidesPerView: 2,
    },
    1920: {
      slidesPerView: 3,
    }
  },

  navigation: {
    nextEl: '.projects__swiper-btn-next',
    prevEl: '.projects__swiper-btn-prev',
  },
});

var element = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(element);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = element.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    }
  },

  messages: {
    name: {
      required: 'Недопустимый формат',
    },

    tel: {
      required: 'Недопустимый формат'
    }
  }
});

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.75846806898367, 37.60108849999989],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14
  });
  myMap.behaviors.disable('scrollZoom');

  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/place-mark.svg',
    iconImageSize: [20, 20],
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('#menu').classList.toggle('is-active')
})

document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('#burger').classList.toggle('open-menu')
})

document.querySelector('#search-btn').addEventListener('click', function () {
  document.querySelector('#search-open').classList.toggle('is-active')
})

document.querySelector('#search-btn').addEventListener('click', function () {
  document.querySelector('#search-btn').classList.toggle('is-open')
})

document.querySelector('#search-btn').addEventListener('click', function () {
  document.querySelector('#search-btn').classList.toggle('header__search-btn-close')
})

document.querySelector('#search-btn').addEventListener('click', function () {
  if ((window.innerWidth >= 320) && (window.innerWidth <= 768))  {
    document.querySelector('#logo').classList.toggle('is-unvisible');
    document.querySelector('#burger').classList.toggle('is-unvisible');
  }
});