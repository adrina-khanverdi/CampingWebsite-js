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
const scrollHeader=gsap.timeline({
    scrollTrigger:{
        trigger:".services",
        start:"-200+top top",
        toggleActions:"play reverse play reverse",


    }

})
scrollHeader.to(".service" , {
    scale:1,
    duration:1, 
    stagger:0.3
})

const scrollPlace = gsap.timeline({
    scrollTrigger:{
        trigger:".service",
        start:"bottom top",
        toggleActions:"play play play reverse",

    }
})
scrollPlace.to(".place", {
    scale:1,
    duration:1,
})

const scrollNewsletter = gsap.timeline({
    scrollTrigger:{
    trigger:".newsletter",
    start:"-300+top top",
    toggleActions:"play play play reverse",
    }
})
scrollNewsletter
.to(".newsletter__img",{
    x:0,
    duration:1,
    ease: "back.out(1.7)",
})
.to(".newsletter__title" ,{
    y:0,
    duration:.5,
    ease: "circ.out",

}, "-=.1")
.to(".newsletter__caption",{
    y:0,
    duration:.5,
    ease: "power4.out",

})
