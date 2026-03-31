import { note_etoile } from "../components/etoile/etoile.js";
const services = [
  {
    title: "creation d'Application Web",
    service_picture: "./service1.png",
    description: "jaime vraiment ce que tu fais tamo, mais tu devrai tameliorer au niveau du temps de livraison, tu es un peu lent dans ce sens",
    price : "500",
    delivery: "7",
    note: 4.5,
    
  },
  {
    title: "creation de site web",
    service_picture: "./service2.png",
    description: "jaime vraiment ce que tu fais tamo, mais tu devrai tameliorer au niveau du temps de livraison, tu es un peu lent dans ce sens",
    price : "500",
    delivery: "7",
    note: 3.3,
  },
];

document.addEventListener('DOMContentLoaded', function(){
    renderService(services);
});

function createServiceCard(service){
    const service_template = document.getElementById("service-template");
    const clone = service_template.content.cloneNode(true);
    
    const picture = clone.querySelector(".service-img");
    const title = clone.querySelector(".service-title");
    const note = clone.querySelector(".service-note");
    const star = clone.querySelector(".service-star");
    const price = clone.querySelector(".service-prix");
    const delivery = clone.querySelector(".service-delivery");

    //remplissage des differents elements
    picture.style.backgroundImage = `url(${service.service_picture})`;
    title.innerText = service.title;
    note.innerText = service.note;
    price.innerText = service.price;
    delivery.innerText = service.delivery;
    star.appendChild(note_etoile(parseFloat(service.note)));
    
    return clone;
}

function renderService(services){
    const services_container = document.querySelector(".all-services")
    
    const fragment = document.createDocumentFragment()
    
    services.forEach((service) => {
        const element = createServiceCard(service)
        fragment.appendChild(element)
    });
    
    if (services_container){
        services_container.appendChild(fragment)
    }
}

