//ce fichier permet dafficher un pafagraphe qui indique quil y a aucun element a voir

function noItem(text, options){
    const options = { 
        show_btn = false,
        btn_text,
        action = () => {},
    } = options;
    
    const no_item = document.createElement("div")
    no_item.className = "no_item flex-column"
    
    const btn = "";
    if (show_btn){
        btn = `<boutton>${btn_text}</boutton>`
    }
    
    no_item.innerHTML = ` 
    <p>${text}</p>
    ${btn}
    `
}