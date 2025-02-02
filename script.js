// Initialisation du scrolling smooth avec Lenis
const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// Animation GSAP : effet domino

// Animation de l'élément hero-content
gsap.from(".hero-content", { 
    opacity: 0, 
    y: -50, 
    duration: 1 
});

// Animation de la section About
gsap.from(".about", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
    ease: "power2.out" // Courbe d'accélération
});

// Animation de la section Experience
gsap.from(".experience", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.6,
    ease: "power2.out", // Courbe d'accélération
    stagger: {
        amount: 0.5, // Durée totale de l'effet de décalage
        from: "start" // Démarre l'effet de décalage du premier élément
    }
});

// Animation des éléments de la liste Experience
gsap.from(".experience li", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    delay: 0.9, // Délai supplémentaire pour les éléments de la liste
    ease: "power2.out",
    stagger: {
        amount: 0.5, // Durée totale de l'effet de décalage
        from: "start" // Démarre l'effet de décalage du premier élément
    }
});

// Animation du titre des projets
gsap.from(".projects h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.4
});

// Animation des éléments de projet
gsap.from(".project-item", {
    opacity: 0,
    y: 50, // Déplace les éléments 50px vers le bas
    duration: 1,
    stagger: {
        amount: 0.5, // Durée totale de l'effet de décalage
        from: "start" // Démarre l'effet de décalage du premier élément
    },
    delay: 1.8,
    onComplete: () => {
        // Remettre la position des éléments après l'animation
        gsap.set(".project-item", { y: 0 });
    }
});

// Animation de la section Contact
gsap.from(".contact", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 2.2
});



// Animation GSAP pour les liens de projet avec différentes directions
const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach((link, index) => {
    const direction = index % 2 === 0 ? 50 : -50; // Alterne la direction entre positive et négative
    const delay = 2.5 + index * 0.2; // Délai progressif pour chaque animation

    gsap.from(link, {
        opacity: 0,
        y: direction, // Utilise la direction pour le mouvement
        duration: 1,
        ease: "power2.out",
        delay: delay,
    });
});



// Fonction pour choisir un ID d'image au hasard pour la section hero
const imageIds = [36, 43, 60, 61, 88, 96];

function getRandomImageId() {
    const randomIndex = Math.floor(Math.random() * imageIds.length);
    return imageIds[randomIndex];
}

// Appliquer l'image d'arrière-plan aléatoire
const heroSection = document.querySelector('.hero');
heroSection.style.backgroundImage = `url('https://picsum.photos/id/${getRandomImageId()}/1920/1080?blur&grayscale')`;


// Fonction pour ajuster la hauteur minimale de la section des projets
function adjustProjectsMinHeight() {
    const projectList = document.querySelector('.project-list');
    const projectItems = projectList.children.length; // Nombre d'items

    // Calculer le nombre d'éléments par ligne en fonction de la largeur de l'écran
    const itemWidth = 400; // Largeur fixe des éléments (peut être modifié si nécessaire)
    const containerWidth = projectList.clientWidth; // Largeur de la liste des projets
    const itemsPerRow = Math.floor(containerWidth / itemWidth); // Nombre d'items pouvant s'afficher par ligne

    // Calculer le nombre de lignes
    const numberOfRows = Math.ceil(projectItems / itemsPerRow); // Arrondir à l'entier supérieur

    // Hauteur minimale (par exemple, 300px par item)
    const itemHeight = 300; 
    const minHeight = numberOfRows * itemHeight; 

    // Appliquer la hauteur minimale à la section des projets
    const projectsSection = document.querySelector('.projects');
    projectsSection.style.minHeight = `${minHeight}px`;
}

// Appel de la fonction pour ajuster la hauteur minimale au chargement
adjustProjectsMinHeight();

// Réajuster la hauteur minimale lors du redimensionnement de la fenêtre
window.addEventListener('resize', adjustProjectsMinHeight);
