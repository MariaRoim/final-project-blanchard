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