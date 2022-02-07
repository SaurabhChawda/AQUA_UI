const toastPrimaryBtn = document.querySelector('.toast__btn--primary')
const toastRegularBtn = document.querySelector('.toast__btn--regular')
const toastSimple = document.querySelector('.toast--simple')
const toastRegular = document.querySelector('.toast--regular')
const toastPrimaryClose = document.querySelector('.toast__close--primary')
const toastRegularClose = document.querySelector('.toast__close--regular')
toastPrimaryBtn.addEventListener('click',()=>{
    toastSimple.style.visibility="visible"
})
toastRegularBtn.addEventListener('click',()=>{
    toastRegular.style.visibility="visible"
})
toastPrimaryClose.addEventListener('click',()=>{
    toastSimple.style.visibility="hidden"
})
toastRegularClose.addEventListener('click',()=>{
    toastRegular.style.visibility="hidden"
})