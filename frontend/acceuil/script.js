import { afficherModal } from "../globalSettings/main.js";
import { getToken } from "../api/userApi.js";
import { CONFIG } from "../api/config.js";
import { renderHeader, createHeader } from '../components/header/header.js'

document.addEventListener('DOMContentLoaded', function(){
    renderHeader(".true-header", createHeader());
});


/*
//clic sur le logo talentHub
let logo = document.querySelector("#logo");
let a = document.createElement = ("a");
a.href = "index.html";
logo.addEventListener("click", ()=>{
    a.actived = true;
});
*/
document.addEventListener('DOMContentLoaded', function(){
    loginForm();
    renderHeader(".true-header", createHeader());
    verifyConexion();
});

//animation du menu hamburger
window.myFunction = function(){
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
window.getConnexionPage = () => {
    let connexionPage = document.querySelector(".connexion_page");
    connexionPage.classList.toggle("connexionPage");
};


//function du login
async function loginForm(){
	
    const login_form = document.getElementById("login_form")
    if (login_form){
    	
        login_form.addEventListener("submit", async (e) => {
            e.preventDefault()
            const email = document.getElementById("email").value;
            const password = document.getElementById("mot_passe").value;
            
            const data = {
                email: email,
                password : password,
            }
            const reponse = await getToken(data)
            
            afficherModal(reponse)
        })
    }else{
        alert(`${login_form} non trouvé`)
    }
   
}


function verifyConexion() {
    const token = localStorage.getItem("token") || null;
    
    if (token){
        window.location.href = (`/frontend/Page post inscription`)
    }else{
        afficherModal("vous netes pas connecter");
    }
}