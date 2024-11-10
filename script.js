//chambres

let actuelIndex = 0; 
// Cette variable actuelIndex est utilisée pour suivre le point de départ de l'affichage dans le carrousel.
// Elle est initialisée à 0, ce qui signifie que le carrousel commence à afficher les chambres depuis le premier élément.

const chambres = document.querySelectorAll('.buts');
// Cette ligne sélectionne tous les éléments du DOM qui ont la classe .buts (qui représentent les chambres) et les stocke dans une liste

const totalChambres = chambres.length;
// La variable totalChambres stocke le nombre total d'éléments (chambres) dans le carrousel. 
// Elle permet de savoir combien d'éléments le carrousel contient.
//totalChambres est une variable qui stocke le nombre total de chambres dans le carrousel


// Masquer toutes les chambres
//Cette fonction est utilisée pour gérer l'affichage des chambres dans
// le carrousel. Elle est souvent appelée chaque fois que l'utilisateur clique pour 
//changer la chambre visible ou lorsqu'on veut mettre à jour l'affichage après avoir modifié l'index
function mettreàjourlecarrousel() {

    
    for (let i = 0; i < chambres.length; i++) {
//Cette boucle parcourt tous les éléments dans la liste chambres (qui contient les chambres du carrousel).
//i commence à 0 et augmente de 1 à chaque itération, jusqu'à ce que i atteigne la longueur totale de chambres.



//À chaque tour de boucle, l'élément chambres[i] (la chambre correspondante) voit sa propriété CSS display modifiée à 'none'.
//Cela cache la chambre de l'affichage sur la page, la rendant invisible.
        chambres[i].style.display = 'none';
    }

    // Afficher 4 chambres en fonction de actuelIndex
    //Cette portion de code est responsable de l'affichage des chambres dans le carrousel. 


    for (let i = actuelIndex; i < actuelIndex + 4; i++)
//Cette boucle commence à l'index actuelIndex, ce qui signifie qu'elle commence à partir de la chambre spécifiée par actuelIndex        
//La boucle continue jusqu'à actuelIndex + 4, donc elle parcourt 4 chambres au total. Par exemple, si actuelIndex est 0, la boucle parcourra les indices 0, 1, 2 et 3     
//i++ fait en sorte que l'index augmente à chaque itération pour passer à la chambre suivante      
{
        if (i < totalChambres) 
//Cette condition sert à s'assurer que l'index i ne dépasse pas le nombre total de chambres dans le carrousel.
//i représente l'index de la chambre à afficher dans la boucle. Par exemple, si i est 0, cela correspond à la première chambre, si i est 1, cela correspond à la deuxième, et ainsi de suite.
//totalChambres représente le nombre total de chambres présentes dans le carrousel (calculé au préalable avec chambres.length).            
            {

//chambres[i].style.display = 'block'; rend la chambre à l'index i visible en lui attribuant un affichage de type bloc, ce qui permet à l'élément d'apparaître sur la page.
            chambres[i].style.display = 'block'; // Afficher les chambres
        }
    }
}

function mettreàjourIndex(increment) {
    actuelIndex += increment;

    // Si on est à la fin, revenir au début
    if (actuelIndex >= totalChambres) {
        actuelIndex = 0;
    } else if (actuelIndex < 0) {
        // Si actuelIndex est négatif, le réinitialiser à un index valide
        actuelIndex = totalChambres - 4;
        if (actuelIndex < 0) {
            actuelIndex = 0;
        }
    }

    // Mettre à jour l'affichage des chambres
    mettreàjourlecarrousel();
}

// Ajouter des événements pour mettre à jour l'affichage lors du clic sur les boutons
document.getElementById('prev').addEventListener('click', function() {
    mettreàjourIndex(-4); // Reculer de 4 chambres
});

document.getElementById('next').addEventListener('click', function() {
    mettreàjourIndex(4); // Avancer de 4 chambres
});

// Mettre à jour l'affichage lors du premier chargement de la page
mettreàjourlecarrousel();





        


//activites
const images = document.querySelectorAll('.butes');

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseenter', function() {
        images[i].classList.add('active');
    });
    images[i].addEventListener('mouseleave', function() {
        images[i].classList.remove('active');
    });
}




//commentaires
const elementsCarousel = document.querySelectorAll('.owl-carousel2 .but');
const points = document.querySelectorAll('.point');
let indiceActuel = 0;

function afficherElement(indice) {
    for (let i = 0; i < elementsCarousel.length; i++) {
        elementsCarousel[i].style.display = i === indice ? 'block' : 'none';
    }
    mettreAJourPoints(indice);
}

function mettreAJourPoints(indice) {
    for (let i = 0; i < points.length; i++) {
        points[i].classList.remove('active');
    }
    points[indice].classList.add('active');
}

for (let i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function() {
        indiceActuel = parseInt(this.dataset.index, 10); // Conversion en nombre entier
        afficherElement(indiceActuel);
    });
}

// Afficher le premier élément par défaut
afficherElement(indiceActuel);




  



  
  