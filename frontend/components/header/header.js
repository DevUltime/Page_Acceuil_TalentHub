export function createHeader(user = null) {
    const header = `
    <div class="header-app flex-row">
    <span class="header-menu">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
        </svg>
    </span>
    <div class="app-meta flex-row">
        <div class="logo-container">
            <img src="../assets/pictures/Logo.png" alt="logo"/>
        </div>
        <h1 class="name-app">TalentHub</h1>
    </div>
    </div>
    <div class="header-search">
        <span class="material-symbols-outlined btn-rechercher">search</span>
        <input type="search" placeholder="Trouver un Talent">
    </div>
    <nav>
        <span class="hd-notification">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                <path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665" />
                <circle cx="18" cy="8" r="3" />
            </svg>
        </span>
        <span class="hd-msg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
        </span>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
    </nav>
    ${ user ? <div class="header-user flex-row">
        <div class="profil hd-profil-container">
            <img src="" alt="profil"/>
        </div>
        <p class="hd-pseudo">devUltime</p>
    </div> : " "}
    `;

    return header;
}

export function headerControler(header, user = null) {
    const header_content = document.createElement("div");
    header_content.className = "header-content flex-row";
    header_content.innerHTML = header;
    
    if (!user){
        alert("il n'est pas connecter ")
        search_barre = document.querySelector(".header-search")
        if (search_barre){
            search_barre.style.display = "none";
        }
    }
    return header_content;
}
export function renderHeader(place, content) {
    let element = document.querySelector(place);
    if (element) {
        element.appendChild(content);
    }
}
