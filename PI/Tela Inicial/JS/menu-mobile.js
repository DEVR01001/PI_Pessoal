let btnMenu = document.getElementById('btn-menu-abrir')
let menu = document.getElementById('mobile-btn')
let overlay = document.getElementById('overlay-mobile')
let btnFechar = document.getElementById('btn-fechar')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})


btnFechar.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})