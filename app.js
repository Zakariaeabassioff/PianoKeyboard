//Ajouter un son à chaque fois que l'on clique sur une touche du piano

//Regrouper les touches blanches dans un même tableau
const whiteKeys = [...document.querySelectorAll('path.white-keys')];
//Regrouper les touches noires dans un même tableau
const blackKeys = [...document.querySelectorAll('path.black-keys')];
//On concatène les deux tableaux pour avoir un seul tableau
const keys = [...whiteKeys, ...blackKeys];

keys.forEach((key, i) => {
    key.dataset.index = i + 1;
    key.addEventListener('click', (e) => { 
        const index = e.target.dataset.index;
        playSound(index);
    })
});
    
//Fonction qui joue le son
const playSound = (index) => {
    const audio = new Audio(`audio/key-${index}.mp3`);
    audio.play();
};
