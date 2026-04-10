import { afficherModal } from '../globalSettings/main.js'
import { createUser } from '../api/userApi.js';
//chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
    setUser();
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

async function setUser(){
    const register_form = document.getElementById("register_form")
   
    if (register_form){
        register_form.addEventListener("submit", async (e) => {
            e.preventDefault()
            const email = document.getElementById("email").value || "rien";
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
            
            //alert(email + " " + last_name + " " + first_name + " " + password + " " + phone) 
            const response = await createUser(requetteData);
            afficherModal(response);
            alert(response)

        });
    }else{
        console.log(`${register_form} non trouvé`)
    }
}
