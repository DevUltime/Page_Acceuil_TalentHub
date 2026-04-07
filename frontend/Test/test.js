
import { getToken } from '../api/userApi.js';
import { getUser } from '../api/userApi.js';
import { createUser } from '../api/userApi.js';
import { getProfil } from '../api/profilApi.js'
import { afficherModal } from '../globalSettings/main.js'
import { createHeader } from '../components/header/header.js'
import { headerControler } from '../components/header/header.js'
import { renderHeader } from '../components/header/header.js'

const data = {
	email : "tkemma585@gmail.com",
	password : "123456",
};
const dataUser = {
    email : "hz1@gmail.com",
    password : "hz1",
    phone : "hz1",
}


/*const token = await getToken(data);
//getProfil(token);
//getUser(token);
createUser(dataUser);*/

document.addEventListener("DOMContentLoaded", () => {
    renderHeader(".header", headerControler(createHeader()))
})


