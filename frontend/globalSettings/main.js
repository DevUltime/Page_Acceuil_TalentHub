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
	alert("✅ Modal ajouté au DOM");
alert("Nombre de modals dans le DOM:" + document.querySelectorAll('.modal').length);
alert("Contenu du modal:" + modal.outerHTML);
	//document.body.style.opacity = "0.1"
	setTimeout(() => {
		modal.remove()
		document.body.style.opacity = "1"
	}, 3000);
	
}
console.log("bonjour")
/*
document.addEventListener("DOMContentLoaded", () =>  {
	//alert("hello, cest le fichier externe qui est en action");

	afficherModal("bonsoir", "ouvrir", "fermer")
})
*/


