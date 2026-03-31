/*ici c'est lensemble des fonction qui permete de recupere ou
envoyer les donnees relatifs au profil au backend
*/
import { CONFIG } from './config.js';
import { getToken } from './userApi.js';
import { afficherModal } from "../globalSettings/main.js";

export async function getProfil(token) {
//    alert("appel de getProfil")
    try {
        const request = await fetch(`${CONFIG.API_BASE_URL}/apiUser/profil/`, {
            method: 'get',
            headers: {
                'Authorization': "Bearer " + token,
            }
        });
        if (!request.ok) {
            throw new Error(request.status + " " + request.statusText);
        }
        const data = await request.json()
        afficherModal(data)
        return data
    } catch (error) {
        afficherModal(error);
    }
}

export async function createProfil(data) {
    try {
        const request = await fetch('url')
            .then(res => res.json())
            .then(data => {
                
            })
            .catch(err => console.error(err));;
    } catch (err) {
        alert(err);
        
    }
}