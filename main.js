let burger = document.querySelector('.burger');
let navmenu  = document.querySelector('.navmenu'); 
let links = document.querySelectorAll('.navmenu li');

burger.addEventListener('click', ()=>{
    navmenu.classList.toggle('open');
    links.forEach(link =>{
        link.classList.toggle('fade');
    })
});