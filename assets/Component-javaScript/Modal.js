const modalOpen = document.querySelector('.modal__btn--Submit')
const modalClose = document.querySelector('.modal__btn--close')
const modal = document.querySelector('.modal--secondary-action')
modalOpen.addEventListener('click',()=>{
        modal.style.visibility = 'visible'
})
modalClose.addEventListener('click',()=>{
    modal.style.visibility = 'hidden'
})