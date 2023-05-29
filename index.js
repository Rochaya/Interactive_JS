// Fonctionnalite 1

const FooterClickEvent = () => {
    document.querySelector("footer").addEventListener("click", () => {
        console.log("Ca clique mon chef");
    });
};

document.addEventListener("DOMContentLoaded", FooterClickEvent);

// Fonctionnalite 1-bis (Le nb de click s'affiche directement avec la methode precedente mais l'exercice est de l'afficher dans un console log)

const CountClickEvent = () => {
    let i = 0;
    document.querySelector("footer").addEventListener("click", () => {
        i++;
        console.log("Clique numero" + i);
    });    
};

document.addEventListener("DOMContentLoaded", CountClickEvent);

// Fonctionnalite 2 

const ToggleNavbar = () => {
    document.querySelector(".navbar-toggle").addEventListener("click", () => {
        // a finir
    })
}