const hamburgerMenu = document.querySelector('.hamburger')
const hamburgerOpen = document.querySelector('.nav-bar__img--hamburger')
const hamburgerClose = document.querySelector('.hamburger__close-btn')

hamburgerOpen.addEventListener('click',()=>{
   hamburgerMenu.style.height="100vh"
   hamburgerMenu.style.visibility = "visible";
})
hamburgerClose.addEventListener('click',()=>{
   hamburgerMenu.style.height="0vh"
    hamburgerMenu.style.visibility = "hidden"
 })
