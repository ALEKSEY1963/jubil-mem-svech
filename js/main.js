const menuBtn = document.querySelector(".menu__btn");
const menuBurger = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuBurger.classList.toggle("menu--open");
});

const swiperOne = new Swiper(".feedback__slider", {
  loop: false,

  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperTwo = new Swiper(".certificates__slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    360: {
      slidesPerView: 1,
    },
  },
});
