console.log("DevSetup - Environnement de développement initialisé");

let counter = 0;

setInterval(() => {
  counter++;
  console.log(`Application en cours d'exécution... ${counter}`);
}, 3000);
