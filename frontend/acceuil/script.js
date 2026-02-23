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
function getConnexionPage(){
    let connexionPage = document.querySelector(".connexion_page");
    connexionPage.classList.toggle("connexionPage");
};
