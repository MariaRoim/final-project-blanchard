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
  spaceBetween: 50,
  
  navigation: {
    nextEl: '.events__swiper-btn-next',
    prevEl: '.events__swiper-btn-prev',
  },
});

const swiper4 = new Swiper('.projects__swiper-container', {
  slidesPerView: 3,
  loop: false,
  spaceBetween: 50,

  navigation: {
    nextEl: '.projects__swiper-btn-next',
    prevEl: '.projects__swiper-btn-prev',
  },
});