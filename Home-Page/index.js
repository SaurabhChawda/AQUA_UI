const hamburgerMenu = document.querySelector('.hamburger')
const hamburgerOpen = document.querySelector('.nav-bar__img--hamburger')
const hamburgerClose = document.querySelector('.hamburger__close-btn')

hamburgerOpen.addEventListener('click',()=>{
   hamburgerMenu.style.visibility = "visible";
   hamburgerMenu.style.height="25vh"
})
hamburgerClose.addEventListener('click',()=>{
    hamburgerMenu.style.visibility = "hidden"
    hamburgerMenu.style.height="0vh"
 })
