const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")
const headerContentTitle =document.querySelector(".header-content")
const headerContentImag =document.querySelector(".header-content-imag")

let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav-menu--open")

        navOpen = false
    } else {
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav-menu--open")
        navOpen = true
    }
})
gsap.to(headerContentTitle,{
        marginLeft:0,
        duration:2,
        ease: "power1.out",
})
gsap.to(headerContentImag,{
    marginLeft:0,
    duration:2,
    ease: "power1.out",

})