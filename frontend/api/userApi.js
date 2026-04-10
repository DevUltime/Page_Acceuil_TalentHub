/*ici c'est lensemble des fonction qui permete de recupere ou
envoyer les donnees relatifs a l'utilisateur au backend
*/
import { CONFIG } from './config.js'
import { afficherModal } from "../globalSettings/main.js";

export async function getToken(data) {
	try {
		const request = await fetch(`${CONFIG.API_BASE_URL}/api/token/`, {
			method : 'post',
			headers : {
				'Content-Type' : 'application/json',
			},
			body : JSON.stringify(data),
		});
		if (!request.ok){
			throw new Error(request.status + " " + request.statusText);
		}
		const reponse =  await request.json();
//		alert(reponse.access);
        localStorage.setItem("token", reponse.access)
		return `${data.email} authentifié avec succes`;
		
	} catch (error) {
	  return (error);
	}
}

export async function getUser(token) {
    
    try {
        const request = await fetch(`${CONFIG.API_BASE_URL}/apiUser/user/`, {
            headers : {
                'Authorization' : 'Bearer ' + token,
            },
        });

        if (!request.ok) {
            throw new Error(request.status + " " + request.statusText);
        }
        const data = await request.json();
        afficherModal(data)
        return data;
        
    } catch (err) {
        return err;
        
    }
}

export async function createUser(data) {
    try {
        const request = await fetch(`${CONFIG.API_BASE_URL}/apiUser/user/`, {
            method : 'post',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(data),
        });
        if (!request.ok) {
            throw new Error(request.status + " " + request.statusText);
        }
        return ` ${data.email} authentifié avec success`;
    } catch (err) {
        return err;
    }
}

