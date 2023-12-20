const menuBtn = document.querySelector('.menu__btn')
const menuBurger = document.querySelector('.header__menu-list')

menuBtn.addEventListener('click',()=>{
    menuBurger.classList.toggle('menu--open')
})