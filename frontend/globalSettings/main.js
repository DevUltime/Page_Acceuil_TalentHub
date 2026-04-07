//configiration global

//const urlServer = "http://localhost:8000/";
//export urlServer;

//fonction pour laffichage dynamique dun modal
export function afficherModal(text="rien", options={}){ 
	//differents options:
	const {
		textBad = "annuler",
		textGood = "effectuer",
		showBtnBad = false,
		showBtnGood = false,
	} = options;
	
	const modal = document.createElement("div")
	modal.className = "modal flex-column";
	
	let modal_btn_good = "";
	let modal_btn_bad = "";
	
	if (showBtnGood){
		modal_btn_good = `<button class="btn-good">${textGood}</button>`
	}
	
	if (showBtnBad){
		modal_btn_bad = `<button class="btn-bad">${textBad}</button>`
	}
	
	modal.innerHTML = `
	<p class="modal-text">${text}</p> 
	<div class="modal-actions flex-row">
	    ${modal_btn_bad}
	    ${modal_btn_good}
	</div>
	`;
	document.body.appendChild(modal)
	setTimeout(() => {
		modal.remove()
	}, 2000);
	
} 

function afficherDefault(element, text, icon){
	const place = document.getElementById(element)
	const defaultElement = document.createElement("div")
	defaultElement.innerHTML = `
	<span>${icon}</span> 
	<p>${text}</p>
	`;	
}

export function note_etoile(nbr_etoile){
  const etoile = document.createElement("span")
  etoile.className = "etole";
  etoile.innerHTML = `
    <svg>
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>`; 
  const demi_etoile = document.createElement("span")
  demi_etoile.className = "demi_etoile";
  demi_etoile.innerHTML  = `
    <svg>
        xmlns="http://www.w3.org/2000/svg"
        width="24"
         height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" />
    </svg>`;

  const etoiles = document.createElement('span');
  etoiles.className = "etoiles flex-row";
  for (let i = 0; i < Math.floor(nbr_etoile); i++){
    etoiles.appendChild(etoile.cloneNode(true));
  }
  if((nbr_etoile % 1) !== 0){
    etoiles.appendChild(demi_etoile.cloneNode(true))
  }
  return etoiles;
}

