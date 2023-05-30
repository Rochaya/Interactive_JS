// Fonctionnalite 1

const FooterClickEvent = () => {
    document.querySelector("footer").addEventListener("click", () => {
        console.log("Ca clique mon chef");
    });
};

// Fonctionnalite 1-bis (Le nb de click s'affiche directement avec la methode precedente mais l'exercice est de l'afficher dans un console log)

const CountClickEvent = () => {
    let i = 0;
    document.querySelector("footer").addEventListener("click", () => {
        i++;
        console.log("Clique numero" + i);
    });    
};

// Fonctionnalite 2 

const ToggleNavbar = () => {
    document.querySelector(".navbar-toggler").addEventListener("click", () => {
        document.getElementById("navbarHeader").classList.toggle("collapse");
    });
};

// Fonctionnalite 3

const ChangeColor = () => {
    const colorButton = document.querySelector(".btn-outline-secondary");
    colorButton.addEventListener("click", () => {
        colorButton.style.color = "red";
    });
};

// Fonctionnalite 4 

const ChangeColorPrevious = () => {
    const colorButton = document.querySelector(".col-md-4:nth-child(2) .btn-outline-secondary");
    let btnClicked = false;

    colorButton.addEventListener("click", () => {
        if (!btnClicked) {
            colorButton.style.color = "green";
            btnClicked = true;
        } 
        else {
            colorButton.style.color = "";
            btnClicked = false;
        }
    });
};

// Fonctionnalite 5 (je le ferais plus tard pas interessant de ouf)


// Mal lu l'enoncer du 6 donc ici c'est une fonction pour modifier la taille d'une card au hover la 6 est juste en dessous.

const reduceCardSizeOnHover = () => {
    const cardsHover = document.querySelectorAll(".card");
  
    cardsHover.forEach((card) => {
        card.style.transition = "transform 0.4s ease";
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(0.8)";
        });
  
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
};

// Fonctionnalite 6

const BtnViewHoverEffect = () => {
    const cardsBtnView = document.querySelectorAll(".card");
  
    cardsBtnView.forEach((card) => {
        const btnView = card.querySelector(".btn-success");
        const img = card.querySelector(".card-img-top");
        const textCard = card.querySelector("p.card-text");
        let btnHovered = false;
    
        img.style.transition = "width 0.4s ease-in-out";
        textCard.style.transition = "opacity 0.4s ease-in-out";
    
        btnView.addEventListener("mouseenter", () => {
            if (!btnHovered) {
                textCard.style.opacity = 0;
                img.style.width = "20%";
                btnHovered = true;
            } 
            else {
                textCard.style.opacity = 1;
                img.style.width = "100%";
                btnHovered = false;
            }
        });
    });
};

// Execution
FooterClickEvent();
CountClickEvent();
ToggleNavbar();
ChangeColor();
ChangeColorPrevious();
BtnViewHoverEffect();

// reduceCardSizeOnHover();

