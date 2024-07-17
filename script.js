
let btnMenu = document.getElementById('btn-abrir');
let menu = document.getElementById('menu-moblie');
let btnFechar = document.querySelector('.btn-fechar');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

window.revelar = ScrollReveal({reset:true})

revelar.reveal('#texto',{
    duration: 2000,
    distance: '90px',
})

revelar.reveal('.paragrafo', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.btn-entrar', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.about-3d', {
    origin: "right",
    duration: 2000,
    distance: '90px',
    delay: 510
})

revelar.reveal('.about-text', {
    origin: "left",
    duration: 2000,
    distance: '90px',
    delay: 510
})

revelar.reveal('.card-container', {
    origin: "top",
    duration: 2000,
    distance: '90px',
    delay: 500
})