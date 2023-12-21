const menuBtn = document.querySelector(".menu__btn");
const menuBurger = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuBurger.classList.toggle("menu--open");
});

const swiperOne = new Swiper(".feedback__slider", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
