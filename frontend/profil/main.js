/*demo de remplissage de la section profil et a propos avec des données statiques pour le moment, 
mais qui seront dynamique dans la version finale de l'application*/
const infoUser = {
  photo: "./profil.jpg.jpg",
  nom: "Tamo",
  prenom: "Eleonor",
  profession: "developpeur web fullstack",
  ville: "Dscang",
  nationalite: "Cameroun",
  note: 4.8,
  avis: 1690,
  dateDebut: "10 janvier 2026",
  propos: "je suis un devellopeur fullstack, jai une experience de cinq au service de la CIA en ce sui concerne le developpement dappli web pour extraire les donnee miliraire ce qui a permit a la CIA de faire des mullions deconomie en peut de temps juste grace a mes connaissance",
  phone: "+237 640499175",
  whatsapp: "+237 640499175",
  email: "TamoEleonor@gmail.com",
  linkedin: "TamoEleonor",
  face1book: "TamoEleonor237",
  instagram: "TamoEleonor officiel",
  impression: 30,
  revenu: 500,
  projet_temps: 10,
  clicks: 500,       
};
const avis = [
  {
    pseudo: "Pablo dikaprio",
    photo_avis: "./avis1.jpg",
    message: "jaime vraiment ce que tu fais tamo, mais tu devrai tameliorer au niveau du temps de livraison, tu es un peu lent dans ce sens",
    date: "12/10/2025",
    nationalite: "senegal",
    localisation: "Dakar",
    note: 2.3,
  },
  {
    pseudo: "alexendra miguel",
    photo_avis: "./avis2.jpg",
    message: "jaime vraiment ce que tu fais tamo, mais tu devrai tameliorer au niveau du temps de livraison, tu es un peu lent dans ce sens",
    date: "12/10/2005",
    nationalite: "paris",
    localisation: "france",
    note: 4.3,
  },
  {
    pseudo: "alexendra miguel",
    photo_avis: "./avis3.jpg",
    message: "jaime vraiment ce que tu fais tamo, mais tu devrai tameliorer au niveau du temps de livraison, tu es un peu lent dans ce sens",
    date: "12/10/2005",
    nationalite: "paris",
    localisation: "france",
    note: 3,
  }
]
const services = [
  /*{
    titre: "creation d'Application Web",
    photo_service: "./service1.png",
    description: "jaime vraiment ce que tu fais tamo, mais tu devrai tameliorer au niveau du temps de livraison, tu es un peu lent dans ce sens",
    prix : "500",
    livraison: "7",
    note: 4.5,
  },
  {
    titre: "creation de site web",
    photo_service: "./service2.png",
    description: "jaime vraiment ce que tu fais tamo, mais tu devrai tameliorer au niveau du temps de livraison, tu es un peu lent dans ce sens",
    prix : "500",
    livraison: "7",
  },*/
];
const stats = {
  service: services.length,
  projet_cours: 5,
  projetsRealises: 50,
  clientsSatisfaits: 45,
  tauxReussite: "90%",
};
const portfolios =[
  ];
document.addEventListener("DOMContentLoaded", function () {
  MAJSectionProfil();
  MAJavis();
  MAJservices();
  MAJportfolios();
  lien_contact();
  default_div();
});
function MAJSectionProfil() {
  const emplacement = [
    { classSelect: ".nom", valeur: infoUser.nom },
    { classSelect: ".prenom", valeur: infoUser.prenom },
    { classSelect: ".profession", valeur: infoUser.profession },
    { classSelect: ".ville", valeur: infoUser.ville },
    { classSelect: ".nationalite", valeur: infoUser.nationalite },
    { classSelect: ".note", valeur: String(infoUser.note) },
    { classSelect: ".avis", valeur: infoUser.avis },
    { classSelect: ".since", valeur: infoUser.dateDebut },
    { classSelect: ".a-propos-text", valeur: infoUser.propos },
    { classSelect: ".email", valeur: infoUser.email },
    { classSelect: ".phone", valeur: infoUser.phone },
    { classSelect: ".whatsapp", valeur: infoUser.whatsapp },
    { classSelect: ".contact-facebook", valeur: infoUser.facebook },
    { classSelect: ".linkedin", valeur: infoUser.linkedin },
    { classSelect: ".contact-instagram", valeur: infoUser.instagram },
    { classSelect: ".clicks", valeur: infoUser.clicks },
    { classSelect: ".revenu-temps", valeur: infoUser.revenu },
    { classSelect: ".projet-temps", valeur: infoUser.projet_temps },
    { classSelect: ".impression", valeur: infoUser.impression },
    { classSelect: ".nbr-service-value", valeur: stats.service },
    { classSelect: ".nbr-projet-realise-value", valeur: stats.projetsRealises },
    { classSelect: ".projet-cours-value", valeur: stats.projet_cours },
    { classSelect: ".client-satisfait-value", valeur: stats.clientsSatisfaits },
    { classSelect: ".taux-reussite-value", valeur: stats.tauxReussite },
  ];
  emplacement.forEach(({ classSelect, valeur }) => {
    const element = document.querySelector(classSelect);
    if (element) {
      //dans le cas ou lement est trouvé
      element.innerText = valeur;
    } else {
      console.log(`${classSelect} n'a pas ete trouvé`);
   }
  });

  //chargement de la photo de profil
  const image = document.querySelector(".photo-profil");
  const url = infoUser.photo;
  if (image){
    image.src = url; 
  }
    //ajout de la note
  note_user = document.getElementById("notation-user");
  if(note_user){
    note_user.appendChild(note_etoile(parseFloat(infoUser.note)));
  }else{
    console.log('element de notation pas trouvé');
  }
  console.log("✅️ informations de lutilisateur charger avec success");

}
function  MAJavis(){
  id = 0;
  avis.forEach((avs) => { 
    const all_avis = document.querySelector(".all-avis");
    id++;
    const new_id = "avis" + String(id);
    const new_avis = `
    <div class="avis-personel flex-column">
      <div class="avis-info flex-row">
       <div class="avis-photo-div profil">
        <img class="photo_avis" src="${avs.photo_avis}" alt="photoavis"/>
       </div>
       <div class="autre-info-avis flex-column">
        <div class="avis-pseudo flex-row">
          <h3>${avs.pseudo}</h3> 
          <span class="avis-note" id="${new_id}"></span>
        </div>
        <div class="avis-localisation flex-row">
       <!--   <span class="svg-profil">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
  <circle cx="12" cy="10" r="3" />
</svg>
 </span> -->
          <h3>${avs.localisation}</h3> 
          <h3>${avs.nationalite}</h3>
        </div>
       </div>
      </div>
      <div class="avis-text-date flex-column">
        <div class="avis-text">
          <p>${avs.message}<p>
        </div>
        <div class="avis-date">
          <h4>${avs.date}</h4>
        </div>
      </div>
    </div>
    `;
    const avis_note= document.getElementById(new_id)
    if(avis_note){
      avis_note.appendChild(note_etoile(parseFloat(avis.note)));
    }else{
      console.log("avis_note non trouvé")
    }
    if (all_avis){
      all_avis.insertAdjacentHTML('beforeend', new_avis);
      const avis_note= document.getElementById(new_id)
    if(avis_note){
      avis_note.appendChild(note_etoile(parseFloat(avs.note)));
    }else{
      console.log("avis_note non trouvé")
    }
    }else{
      console.log("element non trouvée");
    }
  });
  console.log("✅️ avis chargés avec succes");
}
function MAJservices(){
  const all_services = document.querySelector(".all-services")
  id = 0
  services.forEach((svcs) => {
    if(all_services){
      id++;
      new_id = String(id);
      id_image = "image" + String(id);
      console.log(new_id)
      const service = `
      <div class="service-particulier flex-column">
        <div class="service-img-div" id="${id_image}">
      
        </div>
        <div class="service-info flex-column">
          <h2 class="service-title flex-row">${svcs.titre}</h2> 
          <div class="prix-delivery flex-row"> 
            <div class="service-prix flex-row"><span>à parti de: </span><h3>${svcs.prix}</h3></div> 
            <div class="service-delivery flex-row"><span>livré en: </span><h3>${svcs.livraison}</h3><span>jours</span></div> 
          </div>
          <div>
            <button class="service-btn btn-good">decouvrir</button>
          </div>
        </div>
      </div>
      `;
      console.log(`${svcs.photo_service}`);
      all_services.insertAdjacentHTML("beforeend", service);
      const image = document.getElementById(`${id_image}`);
      image.style.backgroundImage = `url("${svcs.photo_service}")`;
    }else{
      console.log("le conteneur des services na pas ete trouvée")
    }
  });

  console.log("✅️ services chargés avec success");
}
function MAJportfolios(){
}
function note_etoile(nbr_etoile){
  const etoile = `
  <span class="etoile">
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
</svg>

  </span> `
  const demi_etoile = `
  <span class="demi_etoile">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" />
</svg>

  </span>
  `;
  const etoiles = document.createElement('div');
  etoiles.className = "etoiles flex-row";
  const realy_start = parseInt(nbr_etoile);
  for (let i = 0; i < realy_start; i++){
    etoiles.insertAdjacentHTML("beforeend", etoile);
  }
  if((nbr_etoile - realy_start) !== 0){
    etoiles.insertAdjacentHTML("beforeend", demi_etoile)
  }
  return etoiles;
}
/*demo de remplissage de la section statistiques avec des données statiques pour le moment,*/
function lien_contact(){
  const cool_message="vous serez rediriger vers un element exterieur";
  const warning_message="pour votre securiter, nous vous conseillons de rester sur la plateforme pour echanger des message, vous pourvez le faire en cliquant sur le bouton 'contacter' ci-dessous";
  const class_lient_contact = [
    {classe: ".contact-facebook", lien: "https://facebook.com/", contact: infoUser.facebook, message: cool_message },
    {classe: ".whatsapp", lien: "https://wa.me/", contact: infoUser.whatsapp, message: warning_message },
    {classe: ".contact-instagram", lien: "https://www.instagram.com/", contact: infoUser.instagram, message: cool_message },
    {classe: ".email", lien: "mailto:", contact: infoUser.email, message:warning_message },
    {classe: ".phone", lien: "tel:", contact: infoUser.phone, message: warning_message },
    {classe: ".linkedin", lien: "https://www.linkedin.com/in/", contact: infoUser.linkedin, message:  cool_message },
    ];
  class_lient_contact.forEach(({classe, lien, contact, message}) => {
    let element = document.querySelector(classe);
    if (element){
    element.addEventListener("click", function(){
      element.style.color = "white";
      alert(message);
      setTimeout(() => {
        window.location.href = lien + contact;
      }, 1500);
    });
    }else{
        console.log(`${classe} n'a pas ete trouvé`)
    }
  });
} 

function default_div(){
  element = [
    {data: services, message:"pas de service pour le moment", div:".services-container"},
    {data: avis, message:"pas d'avis pour le moment", div:".avis-container"},
    {data: portfolios, message:"pas de portfolio pour le moment", div:".portfolio-container"},
    ];
    element.forEach(({data, message, div}) => {
      nbr = data.length;
      if (nbr < 1){
        const defaut= `
          <div class="default flex-column">
            <span class="svg-default">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
  <path d="M12 9v4" />
  <path d="M12 17h.01" />
</svg>

            </span>
            <h2>${message}</h2>
          </div>
        `
        element = document.querySelector(div)
        if(element){
            element.insertAdjacentHTML("beforeend", defaut);
        }else{
            console.log(`${div} non trouvé`)
        }
      }
    });
}