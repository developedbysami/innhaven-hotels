const menuBtn  = document.getElementById("menu-btn")
const menuBtnIcon = document.querySelector("i")
const navLinks = document.getElementById("nav-links")

menuBtn.addEventListener('click',()=>{
    navLinks.classList.toggle("open")
    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute('class', isOpen ? "ri-close-line": "ri-menu-3-line")
})

navLinks.addEventListener('click',()=>{
    navLinks.classList.remove('open')
    menuBtnIcon.setAttribute('class',"ri-menu-3-line")
})


/* --- SCROLL REVEAL --- */

const scrollRevealOptions = {
    distance : "50px",
    origin : "bottom",
    duration : 1000,
    
}


ScrollReveal().reveal(".header__container h1",{
    ...scrollRevealOptions
})
ScrollReveal().reveal(".header__content .section__description",{
    ...scrollRevealOptions,
    delay: 500
})
ScrollReveal().reveal(".header__btns",{
    ...scrollRevealOptions,
    delay: 1000
})