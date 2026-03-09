//animation du menu hamburger
function myFunction(){
    let firstBar = document.querySelector(".first_bar"),
    secondBar = document.querySelector(".second_bar"),
    Navig = document.querySelector(".navig"),
    joinUs = document.querySelector(".join_us");
    Navig.appendChild(joinUs);
    Navig.classList.toggle('Navig');
    firstBar.classList.toggle("firstBar");
    secondBar.classList.toggle("secondBar");
    joinUs.classList.toggle('joinUs');
};

//appel de la page de connexion
function getConnexionPage(){
    let connexionPage = document.querySelector(".connexion_page");
    connexionPage.classList.toggle("connexionPage");
};

//clic sur le logo talentHub
let logo = document.querySelector("#logo"),
a = document.createElement = ("a");
a.href = "index.html";
logo.addEventListener("click", ()=>{
    a.actived = true
})