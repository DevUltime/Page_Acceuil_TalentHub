//cette fonction permet de recuperer les donnes des avis dans le backend et l'afficher dans le decodeURIComponent(encodedUriComponentString);
import { note_etoile} from '../components/etoile/etoile.js'
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
];

document.addEventListener('DOMContentLoaded', function(){
    renderAvis(avis);
});

function createAvisComponent(avis){
  const avis_template = document.getElementById("avis-template")
  
  const clone = avis_template.content.cloneNode(true);
  clone.querySelector(".avis-name").innerText = avis.pseudo
  
  clone.querySelector(".avis-content").innerText = avis.message
  clone.querySelector(".avis-localisation").innerText = avis.localisation + " " + avis.nationalite;
  clone.querySelector(".avis-note").innerText = avis.note;
  clone.querySelector(".avis-star").appendChild(note_etoile(parseFloat(avis.note)));
  clone.querySelector(".avis-date").innerText = avis.date
  clone.querySelector(".avis-profil-container img").src = avis.photo_avis
  
  return clone;
}

function renderAvis(allAvis){
    alert("appel de avis")
    const avis_container = document.querySelector(".all-avis")
    const fragment = document.createDocumentFragment()
    
    avis.forEach((av) => {
        const element = createAvisComponent(av)
        fragment.appendChild(element)
    });
    
    avis_container.appendChild(fragment)
}