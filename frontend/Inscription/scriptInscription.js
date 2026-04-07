import { afficherModal } from '../globalSettings/main.js'
import { createUser } from '../api/userApi.js'
//chargement du DOM
alert("bonjour")
document.addEventListener("DOMContentLoaded", () => {
    createUser();
});
// animation du menu hamburger
window.myFunction = () => {
    let firstBar = document.querySelector(".first_bar"),
    secondBar = document.querySelector(".second_bar"),
    Navig = document.querySelector(".navig");
    Navig.classList.toggle('Navig');
    firstBar.classList.toggle("firstBar");
    secondBar.classList.toggle("secondBar");
};
// appel de la page de connexion
window.getConnexionPage = () => {
    let connexionPage = document.querySelector(".connexion_page");
    connexionPage.classList.toggle("connexionPage");
};
//clic sur le logo de Talenthub
/*
let logo = document.querySelector("#logo"),
a = document.createElement("a");
a.href = "../accueil/index.html";
logo.addEventListener("click", ()=>{
    a.click();
})
*/
async function createUser(){
    const register_form = document.getElementById("register_form")
   
    if (register_form){
        register_form.addEventListener("submit", async (e) => {
            e.preventDefault()
            const email = document.getElementById("email").value;
            const last_name = document.getElementById("nom").value;
            const first_name = document.getElementById("prenom").value;
            const password = document.getElementById("mot_passe_register").value;
            const phone = document.getElementById("phone").value;
          
            let requetteData = {
                email : email, 
                last_name : last_name,
                first_name : first_name, 
                password : password,
                phone : phone, 
            }
            
            try {
                const requette = await fetch(register_form.action, {
                    method : register_form.method,
                    headers : {
                        "Content-Type" : "application/json",
                    },
                    body : JSON.stringify(requetteData), 
                });
                if (!requette.ok){
                	throw new Error(requette.status + " " + requette.statusText);
                }
                const data = await requette.json();
                const text = `${email} enregistrer avec succes`;
                alert("attention...!!!")
                afficherModal(text) //cette instruction est sencee afficher le modal
                alert(text) //jutilise alert par ce que afficherModal ne marche pas
            }catch (error) {
              afficherModal(error)
            }
            
        });
    }else{
        console.log(`${register_form} non trouvé`)
    }
}
