import { getToken } from '../api/userApi.js';
import { getUser } from '../api/userApi.js';
import { createUser } from '../api/userApi.js';
import { getProfil } from '../api/profilApi.js'
const data = {
	email : "tkemma585@gmail.com",
	password : "123456",
};
const dataUser = {
    email : "hhh7@gmail.com",
    password : "123456",
    phone : "000880016",
}
const token = await getToken(data);
//getProfil(token);
getUser(token);
//createUser(dataUser);
alert("fin")
