import { renderHeader, createHeader } from '../components/header/header.js'

document.addEventListener('DOMContentLoaded', function(){
    renderHeader(".true-header", createHeader());
});

//activation de la side bar

const aside = document.querySelector('aside'),
btn_fermer_sidebar = document.querySelector(".btn-fermer-sidebar"),
Profil = document.querySelector('.profil .profil-freelancer');

Profil.addEventListener('click', () => {
    aside.classList.add('asideActive')
})
btn_fermer_sidebar.addEventListener('click', () =>{
    aside.classList.remove('asideActive')
})
document.addEventListener('click', (event) =>{
    if(!aside.contains(event.target) && !Profil.contains(event.target)) {
        aside.classList.remove('asideActive')
    }
})