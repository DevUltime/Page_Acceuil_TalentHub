export function createHeader(user) {
const header = `
<div class="header-app flex-row">
   ${user ?  `<span class="hd-menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
        </svg>
    </span>` : ""}
    <div class="app-meta flex-row">
        <div class="logo-container">
            <img src="../assets/pictures/Logo.png" alt="logo" />
        </div>
        <h1 class="name-app">TalentHub</h1>
    </div>
</div>
${user ? `<div class="hd-search">
    <span class="material-symbols-outlined btn-rechercher">search</span>
    <input type="search" placeholder="Trouver un Talent">
</div>
<nav class="flex-row hd-nav">` : ""}

    ${user ? `<a  class="hd-notification">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
            <path
                d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665" />
            <circle cx="18" cy="8" r="3" />
        </svg>
    </a>
    <a  href="/frontend/messagerie/index.html" class="hd-msg">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
    </a>  
    <button class="join_us btn-full">
        <a href="#">Join Us</a>
    </button>` : 
    `<ul class="register-action  flex-row" >
        <li><a href="/frontend/acceuil/index.html">acceuil</a></li>
        <li><a href="../Inscription/index.html">inscription</a></li>
        <li><a href="#" onclick="getConnexionPage()">connexion</a></li>
    </ul>`}
</nav>
${ user ? `<div class="header-user flex-row">
    <div class="profil hd-profil-container">
        <img src="${user.profil}" alt="profil" />
    </div>
    <p class="hd-pseudo">${user.pseudo}</p>
</div>` : " "}
`;


return header;
}


export function renderHeader(selector, content) {
let element = document.querySelector(selector);
if (!element) {
return 0;
}
element.className = "header-content flex-row"
element.innerHTML = content;

}
