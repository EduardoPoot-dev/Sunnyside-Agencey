const menuHamburger = document.querySelector('#menu-hamburger')
const menu = document.querySelector('.header__menu')

const iconBars = document.querySelector('.fa-bars')
const iconXMark = document.querySelector('.fa-xmark')

menuHamburger.addEventListener('click', e => {
    const menuActive = document.querySelector('.header__menu--active')

    if( menuActive ) {
        menu.classList.remove('header__menu--active')

        iconBars.style.opacity = "1"
        iconXMark.style.opacity = "0"
    } else {
        menu.classList.add('header__menu--active')

        iconBars.style.opacity = "0"
        iconXMark.style.opacity = "1"
    }
})