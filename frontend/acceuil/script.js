import { afficherModal } from "../globalSettings/main.js";

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
            const email = document.getElementById("email").value
            const password = document.getElementById("mot_passe").value
            try {
                const  requette = await fetch(login_form.action, {
                   method : login_form.method, 
                   headers : {
                       'Content-Type' : 'application/json'
                   },
                   body : JSON.stringify({
                       email : email,
                       password : password,
                   }), 
                });
                
                if (!requette.ok){
                    throw new Error(requette.status + " " + requette.statusText);
                }else{
                    const text = `${email} authentifier avec success`;
                    afficherModal(text);
                    let connexionPage = document.querySelector(".connexion_page");
                    connexionPage.classList.toggle("connexionPage");
                }
                const requetteData = await requette.json()
                console.log(requetteData.access)
                localStorage.setItem("token", requetteData.access)
            } catch (error) {
              afficherModal(error);
            }
        })
    }else{
        alert(`${login_form} non trouvé`)
    }
   
}


