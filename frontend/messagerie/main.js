console.log("Hello world!");

document.addEventListener("DOMContentLoaded", function() {
    MAJmessage();
    openChat();
    showMenu();
});

//demo de remplissage de la section contact, qui sera plus tard remplie par les données de la base de données via le backend

const contacts = [
    {
        photo: "contact1.png",
        nom: "Jean Dupont",
        message: "Bonjour, je suis intéressé par votre profil. Pouvez-vous me contacter ?",
        date: "2024-06-01 10:30"
    },
    {
        photo: "contact2.png",
        nom: "Marie Curie",
        message: "Bonjour, j'ai vu votre profil et je pense que vous pourriez être un bon candidat pour notre entreprise.",
        date: "2024-06-01 11:15"
    },
    {
        photo: "contact3.png",
        nom: "Albert Einstein", 
        message: "Bonjour, je suis un grand fan de votre travail. Puis-je vous contacter ?",
        date: "2024-06-01 12:00"
    }
]

function MAJmessage() {
    const all_contacts = document.querySelector(".contact-list");
    if (all_contacts) {
        all_contacts.innerHTML = "";
        contacts.forEach((contact) => {
            const contact_element = document.createElement("div");
            contact_element.className = "contact-particulier flex-row";
            contact_element.style.flexWrap = "nowrap";
            contact_element.innerHTML = `
                <div class="contact-photo profil">
                    <img src="${contact.photo}" alt="Photo de ${contact.nom}">
                </div>
                <div class="contact-info flex-column">
                    <div class="nom-date flex-row">
                        <span class="contact-nom">${contact.nom}</span>
                        <span class="contact-date">${contact.date}</span>
                    </div>
                    <div class="message-auther-info flex-column">
                        <p class="contact-message">${contact.message}</p>
                        <p class="contact-auther-info"></p>
                    </div>
                </div>
            `;
            all_contacts.appendChild(contact_element);
    });
    }else {
        console.error("Le conteneur de contacts n'a pas été trouvé.");
    }
}

function fillChatHeader(contact) {
    console.log("Ouvrir le chat avec " + contact.nom);
    const  info_header = document.querySelector(".chat-header-info")
    if (info_header) {
        info_header.innerHTML = `
            <span class="chat-close" onclick="closeChat()">
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
  <path d="m12 19-7-7 7-7" />
  <path d="M19 12H5" />
</svg>

                </span>
            <div class="contact-photo profil">
                <img src="${contact.photo}" alt="Photo de ${contact.nom}">
            </div>
            <div class="contact-info flex-column">
                <span class="contact-nom">${contact.nom}</span>
                <span class="chat-auther-info">hors ligne</span>
            </div>
        `;
    } else {
        console.error("Le conteneur de l'en-tête du chat n'a pas été trouvé.");
    }
}

function openChat() {
    const contact_elements = document.querySelectorAll(".contact-particulier");
    contact_elements.forEach((element) => {
        element.addEventListener("click", function() {
            document.querySelector(".section-contact").style.display = "none";
            document.querySelector(".section-chat").style.display = "block";
            index = Array.from(contact_elements).indexOf(element);
            fillChatHeader(contacts[index]);
        });
    });
}

function closeChat() {
    document.querySelector(".section-chat").style.display = "none";
    document.querySelector(".section-contact").style.display = "block";
}

function showMenu(){
    let show = "true";
    const menu_element = [
        {boutton: ".contact-menu", menu: ".contact-menu-list"},
        {boutton: ".chat-menu", menu: ".chat-menu-list"},
        ]
    menu_element.forEach( ({ boutton, menu }) => {
        boutton = document.querySelector(boutton)
        if (boutton){
            boutton.addEventListener("click", () => {
            console.log("recherche du menu...")
            let menu_selected = document.querySelector(menu)
            if (menu){
                if (show === "true"){
                    menu_selected.style.display = "block";
                    show = "false";
                    console.log("menu deroulé")
                }else{
                    menu_selected.style.display = "none";
                    show = "true";
                    console.log("menu fermé")
                }
            }else{
                console.log(`le menu: ${menu} na pas ete trouvé`)
            }
        })
    }else{
        console.log(`boutton: ${boutton} n'a pas ete trouvé`)
    }
    });
}

function afficherMessage(message){
    msg_content = document.createElement("div")
    msg_content.className = "message-particulier"
    msg_content.innerHTML = `
    <div class="msg_text">${message.content}</div> 
    <div class="msg_time"></div>
    `
}