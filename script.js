// ===== données des catégories et questions =====

const categories = {
    "Chill": {
        premium: false,
        questions: [
            "Ton plus gros red flag ?",
            "Tu as déjà stalk quelqu'un pendant combien de temps ?",
            "La personne la plus attirante ici ?",
            "Ton ex que tu regrettes encore ?",
            "La chose la plus gênante que tu as faite en soirée ?",
            "T'as déjà menti sur ton body count ?",
            "Tu as déjà ghost quelqu'un sans raison ?",
            "La pire excuse que tu as inventée ?",
            "Tu as déjà screen une conversation pour l'envoyer à quelqu'un ?",
            "Tu préfères tromper ou être trompé ?",
            "Ton dernier DM envoyé ?",
            "Le crush le plus improbable que tu as eu ?",
            "Tu as déjà simulé une maladie ?",
            "La personne ici avec qui tu ferais un date ?",
            "Ton plus gros mensonge à tes parents ?",
            "Tu as déjà supprimé des messages pour cacher quelque chose ?",
            "Le truc le plus immature que tu fais encore ?",
            "Tu as déjà pleuré pour quelqu'un qui s'en foutait ?",
            "Ton type idéal ?",
            "Tu as déjà flirté avec le/la crush d'un ami ?",
            "Tu as déjà fait semblant d'être bourré ?",
            "Le dernier snap gênant que tu as envoyé ?",
            "Tu as déjà relu 50 fois une conversation ?",
            "Le truc que personne ne sait sur toi ?",
            "Tu as déjà été jaloux sans raison ?",
            "Ton pire date ?",
            "Tu as déjà inventé une relation ?",
            "La personne que tu bloques si elle t'écrit ?",
            "Tu as déjà répondu \"ça va\" alors que pas du tout ?",
            "Ton talent inutile ?",
            "Le truc que tu caches dans ton téléphone ?",
            "Tu as déjà liké une vieille photo par accident ?",
            "La chose la plus toxique que tu as faite ?",
            "Ton plus gros complexe ?",
            "Tu as déjà regretté un bisou ?",
            "La chose que tu trouves attirante mais que tu n'avoues pas ?",
            "Ton crush actuel ?",
            "Tu as déjà parlé mal d'un ami derrière son dos ?",
            "La pire rumeur sur toi ?",
            "Tu as déjà fait semblant d'aimer quelqu'un ?",
            "Le truc le plus gênant que tu as envoyé en vocal ?",
            "Tu as déjà supprimé une story après l'avoir postée ?",
            "La personne ici que tu trust le moins ?",
            "Ton type que tu ne devrais pas aimer ?",
            "Tu as déjà été pris en flag ?",
            "Ton plus gros moment de solitude ?",
            "Tu as déjà menti sur ton âge ?",
            "Le pire vent que tu as pris ?",
            "Ton crush de célébrité ?",
            "Tu caches quoi en ce moment ?"
        ]
    },
    
    "Actions Soft": {
        premium: false,
        questions: [
            "Like la 5e personne sur Insta.",
            "Envoie \"tu me manques\" à quelqu'un.",
            "Appelle ton ex (2 sonneries).",
            "Mets une story \"Je dois vous avouer un truc...\"",
            "Fais un compliment gênant à quelqu'un ici.",
            "Imite ton crush.",
            "Donne ton téléphone 2 minutes.",
            "Lis ton dernier DM à voix haute.",
            "Fais un regard séducteur à quelqu'un.",
            "Laisse quelqu'un fouiller ta galerie 10 sec.",
            "Envoie un emoji cœur à la 3e personne de Snap.",
            "Change ta bio Insta pendant 1h.",
            "Dis qui est le plus attirant ici.",
            "Fais un vocal \"je t'aime\" au hasard.",
            "Montre ta dernière photo.",
            "Raconte ton pire râteau.",
            "Fais une déclaration dramatique.",
            "Laisse quelqu'un choisir ton fond d'écran.",
            "Écris \"je suis amoureux(se)\" en story.",
            "Appelle quelqu'un en haut-parleur.",
            "Fais semblant de pleurer.",
            "Montre ta dernière recherche TikTok.",
            "Envoie \"on parle ?\" à quelqu'un.",
            "Fais un câlin à la personne à droite.",
            "Fais 10 pompes.",
            "Mets une chanson gênante.",
            "Lis ton dernier message supprimé.",
            "Change ton prénom sur Snap.",
            "Mets une photo gênante en pp.",
            "Fais un slow de 30 secondes.",
            "Raconte un secret.",
            "Fais une imitation.",
            "Complimente ton ex.",
            "Envoie un snap bizarre.",
            "Laisse quelqu'un poster une story.",
            "Fais un discours amoureux.",
            "Écris \"j'avoue tout\" à quelqu'un.",
            "Donne ton téléphone à gauche.",
            "Fais un aveu public.",
            "Parle avec une voix sexy 1 min.",
            "Dis un truc que tu n'assumes pas.",
            "Raconte ton fantasme le plus soft.",
            "Mets un filtre ridicule.",
            "Fais un TikTok en direct.",
            "Avoue ton crush.",
            "Dis une vérité sur quelqu'un ici.",
            "Fais un compliment forcé.",
            "Change ton statut.",
            "Mets ton ex en fond d'écran.",
            "Fais un post insta gênant a la mort"
        ]
    },
    
    "Gêne Totale": {
        premium: false,
        questions: [
            "Qui ici serait le pire en couple ?",
            "La personne la moins attirante ici ?",
            "Qui tromperait en premier ?",
            "Qui est le plus toxique ?",
            "Ton ex le plus nul ?",
            "Tu as déjà menti sur tes sentiments ?",
            "Qui ici te déçoit le plus ?",
            "Ton crush le plus honteux ?",
            "Tu as déjà envoyé un nude ? (si oui fais voir)",
            "Qui ici a le plus gros ego ?",
            "Tu as déjà regretté un flirt ?",
            "Qui ici serait le pire au lit ?",
            "Ton ex que tu bloques encore ?",
            "Qui ici ment le plus ?",
            "Tu as déjà fake un orgasme ?",
            "Qui ici est le plus jaloux ?",
            "Ton ex le plus toxique ?",
            "Tu as déjà trompé ?",
            "Qui ici t'attire secrètement ?",
            "Ton plus gros regret amoureux ?",
            "Tu as déjà embrassé sans sentiments ?",
            "Qui ici t'intimide ?",
            "Ton secret le plus lourd ?",
            "Tu as déjà été le plan B ?",
            "Qui ici serait le meilleur coup ?",
            "Tu as déjà manipulé quelqu'un ?",
            "Qui ici fait le plus semblant ?",
            "Ton plus gros mensonge en couple ?",
            "Tu as déjà espionné un téléphone ?",
            "Qui ici serait infidèle ?",
            "Tu as déjà été toxique ?",
            "Ton ex que tu stalke encore ?",
            "Qui ici a le plus de red flags ?",
            "Tu as déjà menti sur l'amour ?",
            "Qui ici t'a déjà déçu ?",
            "Tu as déjà crush sur un ami ?",
            "Qui ici a le pire humour ?",
            "Tu as déjà regretté un \"je t'aime\" ?",
            "Qui ici serait le plus jalousé ?",
            "Tu as déjà joué avec quelqu'un ?",
            "Qui ici est le plus manipulateur ?",
            "Tu as déjà menti pour plaire ?",
            "Qui ici serait le pire mari/femme ?",
            "Tu as déjà regretté une relation ?",
            "Qui ici te plaît le plus physiquement ?",
            "Tu as déjà été amoureux(se) d'un ex d'ami ?",
            "Qui ici t'énerve secrètement ?",
            "Tu as déjà été jaloux maladif ?",
            "Qui ici serait le meilleur date ?",
            "Tu caches encore des sentiments ?"
        ]
    },
    
    "Dark Confessions": {
        premium: true,
        questions: [
            "La pire chose que tu as faite sans jamais l'avouer ?",
            "Tu as déjà aimé deux personnes en même temps ?",
            "Tu as déjà détruit un couple ?",
            "Tu as déjà manipulé quelqu'un pour obtenir quelque chose ?",
            "Le message que tu regretteras toute ta vie ?",
            "Tu as déjà menti pour coucher avec quelqu'un ?",
            "La personne que tu as le plus blessée ?",
            "Tu as déjà screen une nude ?",
            "Tu as déjà humilié quelqu'un volontairement ?",
            "Ton secret le plus sale ?",
            "Tu as déjà fait semblant d'être amoureux(se) ?",
            "Tu as déjà trompé sans jamais te faire prendre ?",
            "La chose la plus toxique que tu fais encore ?",
            "Tu as déjà brisé le cœur de quelqu'un sans remords ?",
            "La personne ici que tu pourrais embrasser ?",
            "Tu as déjà menti sur tes intentions ?",
            "Ton fantasme le plus inavouable ?",
            "Tu as déjà utilisé quelqu'un pour rendre jaloux ?",
            "Tu as déjà parlé mal d'un ami proche ?",
            "Le plus gros karma que tu as pris ?",
            "Tu as déjà supprimé des preuves ?",
            "La chose que tu caches à ton/ta crush ?",
            "Tu as déjà été l'amant(e) secret(e) ?",
            "Tu as déjà trahi un ami pour de l'amour ?",
            "Le truc que tu espères que personne ne découvre ?",
            "Tu as déjà joué avec les sentiments de quelqu'un ?",
            "Le DM le plus honteux que tu as envoyé ?",
            "Tu as déjà menti sur ton passé ?",
            "La personne ici avec qui tu aurais un plan secret ?",
            "Tu as déjà regretté un flirt en couple ?",
            "Le pire message envoyé bourré ?",
            "Tu as déjà stalké pendant des heures ?",
            "Le truc le plus immature que tu fais en relation ?",
            "Tu as déjà comparé deux personnes au lit ?",
            "La vérité que tu refuses d'admettre ?",
            "Tu as déjà voulu ruiner une relation ?",
            "Le mensonge que tu répètes encore ?",
            "Tu as déjà fait croire à quelqu'un qu'il/elle avait une chance ?",
            "La chose que tu n'avoueras jamais à tes parents ?",
            "Tu as déjà regretté un \"je t'aime\" ?",
            "La personne ici qui te tente le plus ?",
            "Tu as déjà gardé quelqu'un \"au cas où\" ?",
            "Le secret que tu emporterais dans la tombe ?",
            "Tu as déjà fait semblant de ne pas voir un message ?",
            "La pire vengeance que tu as faite ?",
            "Tu as déjà brisé une amitié pour un crush ?",
            "Le truc que tu n'assumes pas de ton passé ?",
            "Tu as déjà menti sur tes sentiments pour éviter une dispute ?",
            "La personne que tu bloques si elle revient ?",
            "Tu as déjà aimé quelqu'un uniquement physiquement ?"
        ]
    },
    
    "+18 Soft": {
        premium: true,
        questions: [
            "Tu préfères embrasser ou être embrassé ?",
            "La personne ici la plus attirante ?",
            "Tu as déjà envoyé une photo suggestive ?",
            "Ton plus gros turn-on ?",
            "Tu as déjà embrassé plus d'une personne en soirée ?",
            "Le lieu le plus improbable où tu as flirté ?",
            "Tu as déjà regretté une nuit ?",
            "La chose la plus sexy chez quelqu'un ?",
            "Tu as déjà eu un crush interdit ?",
            "Le fantasme que tu n'oses pas dire ?",
            "Tu préfères dominant ou dominé ?",
            "Tu as déjà eu un flirt secret ?",
            "La chose la plus audacieuse que tu as faite ?",
            "Tu as déjà menti sur ton expérience ?",
            "La personne ici que tu pourrais dater ?",
            "Tu as déjà couché le premier soir ?",
            "Le message le plus chaud que tu as reçu ?",
            "Tu as déjà eu une relation cachée ?",
            "La chose la plus attirante chez toi ?",
            "Tu as déjà simulé un crush ?",
            "La personne ici qui te trouble ?",
            "Tu as déjà regretté un bisou ?",
            "Le truc le plus excitant qu'on t'ait dit ?",
            "Tu as déjà été attiré par un ami ?",
            "Le moment le plus intense que tu as vécu ?",
            "Tu as déjà joué à un jeu de séduction risqué ?",
            "La chose que tu aimerais tester ?",
            "Tu as déjà été jaloux en flirt ?",
            "La personne ici avec qui tu aurais une tension ?",
            "Tu as déjà flirté en couple ?",
            "Le compliment le plus sexy reçu ?",
            "Tu as déjà envoyé un vocal suggestif ?",
            "La chose la plus attirante chez ton ex ?",
            "Tu as déjà eu un crush sur un prof ?",
            "Le plus gros move que tu as fait ?",
            "Tu as déjà eu une relation ambiguë ?",
            "La chose que tu trouves irrésistible ?",
            "Tu as déjà regretté un date ?",
            "La personne ici que tu trouves magnétique ?",
            "Tu as déjà voulu embrasser quelqu'un ici ?",
            "Le plus gros flirt que tu as tenté ?",
            "Tu as déjà caché une relation ?",
            "La chose la plus sensuelle que tu aimes ?",
            "Tu as déjà été attiré par quelqu'un d'interdit ?",
            "Le regard le plus intense que tu as eu ?",
            "Tu as déjà voulu rendre quelqu'un jaloux ?",
            "Le truc qui te fait craquer direct ?",
            "Tu as déjà eu une tension non résolue ?",
            "La personne ici que tu trouves sexy ?",
            "Tu as déjà imaginé un scénario avec quelqu'un ici ?"
        ]
    },
    
    "Actions Hardcore": {
        premium: true,
        questions: [
            "Envoie \"je pense à toi ce soir\" à quelqu'un.",
            "Appelle ton crush et dis juste \"oups\".",
            "Poste \"j'ai un secret\" en story.",
            "Laisse quelqu'un fouiller tes DM 30 sec.",
            "Mets un cœur à ton ex.",
            "Envoie \"on devrait parler...\" à quelqu'un.",
            "Donne ton téléphone 3 minutes.",
            "Fais une déclaration à quelqu'un ici.",
            "Mets une ancienne photo en pp.",
            "Avoue ton crush par message.",
            "Appelle quelqu'un au hasard.",
            "Lis ton dernier message supprimé.",
            "Envoie un snap ambigu.",
            "Mets \"je regrette\" en bio.",
            "Fais un compliment très direct.",
            "Envoie un emoji flamme à quelqu'un.",
            "Fais semblant de pleurer en vocal.",
            "Poste une story mystérieuse.",
            "Dis qui tu embrasserais ici.",
            "Envoie \"tu me manques un peu\".",
            "Laisse quelqu'un répondre à ta place.",
            "Envoie un message audacieux.",
            "Change ton prénom sur Snap.",
            "Appelle ton ex en haut-parleur.",
            "Dis ton fantasme soft.",
            "Fais un slow 1 minute.",
            "Poste un \"?\" en story.",
            "Envoie un message gênant.",
            "Laisse quelqu'un choisir un contact.",
            "Dis qui te plaît vraiment.",
            "Mets une chanson romantique.",
            "Fais un aveu public.",
            "Envoie \"c'était mieux avec toi\".",
            "Montre ta galerie 20 sec.",
            "Avoue ton type exact.",
            "Envoie un snap direct.",
            "Dis ton plus gros regret.",
            "Mets \"j'assume rien\" en bio.",
            "Avoue qui te tente ici.",
            "Envoie un vocal sexy.",
            "Poste \"ça dérape ce soir\".",
            "Appelle quelqu'un que tu évites.",
            "Dis la vérité la plus risquée.",
            "Envoie un message ambigu à un crush.",
            "Change ton fond d'écran.",
            "Avoue ton secret le plus chaud.",
            "Fais un compliment gênant.",
            "Envoie un message à minuit.",
            "Laisse quelqu'un lire tes notes.",
            "Dis qui te plaît le plus ici."
        ]
    },
    
    "Couple Destroyer": {
        premium: true,
        questions: [
            "Qui ici finirait en couple ?",
            "Qui tromperait en premier ?",
            "Le couple le plus fake ?",
            "Qui a encore des sentiments pour son ex ?",
            "Qui cache un crush ici ?",
            "Qui est le plus jaloux ?",
            "Qui serait infidèle ?",
            "Qui ment le plus en amour ?",
            "Qui se remettrait avec son ex ?",
            "Qui est le plus manipulateur ?",
            "Qui joue avec les sentiments ?",
            "Qui est le plus toxique ?",
            "Qui est amoureux en secret ?",
            "Qui ferait un plan à trois ?",
            "Qui embrasserait qui ?",
            "Qui a déjà trompé ?",
            "Qui fait semblant d'être détaché ?",
            "Qui est le plus romantique ?",
            "Qui serait le pire en relation ?",
            "Qui garde quelqu'un \"au cas où\" ?",
            "Qui stalke encore son ex ?",
            "Qui serait capable de mentir longtemps ?",
            "Qui tomberait amoureux le plus vite ?",
            "Qui est le plus intense ?",
            "Qui est le plus red flag ?",
            "Qui a le plus de secrets ?",
            "Qui cache encore un crush ?",
            "Qui serait jaloux maladif ?",
            "Qui finirait en mariage ici ?",
            "Qui aurait une relation secrète ?",
            "Qui a le plus d'ex ?",
            "Qui est le plus attirant ?",
            "Qui ment sur son body count ?",
            "Qui est le plus mystérieux ?",
            "Qui embrasserait son crush ce soir ?",
            "Qui regrette une relation ?",
            "Qui est le plus impulsif ?",
            "Qui se remettrait avec quelqu'un ici ?",
            "Qui ferait le premier move ?",
            "Qui a déjà été plan B ?",
            "Qui est encore amoureux ?",
            "Qui est le plus possessif ?",
            "Qui ferait un date surprise ?",
            "Qui joue double jeu ?",
            "Qui cache un DM ?",
            "Qui ferait un scandale ?",
            "Qui est le plus passionné ?",
            "Qui ferait une crise de jalousie ?",
            "Qui a le plus de tension ici ?",
            "Qui va déraper ce soir ?"
        ]
    }
};


// ===== variables globales du jeu =====

let selectedCategory = null;
let players = [];
let currentIndex = 0;
let skips = {};
let premiumActive = false;

const home = document.getElementById("home");


// ===== fonction : chargement du menu principal =====

function loadHome() {
    home.innerHTML = "";
    
    for (let cat in categories) {
        const div = document.createElement("div");
        div.className = "card " + (categories[cat].premium ? "premium" : "free");
        div.innerHTML = cat + (categories[cat].premium ? " 🔒" : "");
        div.onclick = () => selectCategory(cat);
        home.appendChild(div);
    }
}

loadHome();


// ===== fonction : sélection d'une catégorie =====

function selectCategory(cat) {
    if (categories[cat].premium && !premiumActive) {
        selectedCategory = cat;
        showPremiumModal();
        return;
    }
    
    selectedCategory = cat;
    document.getElementById("home").classList.add("hidden");
    document.getElementById("playersScreen").classList.remove("hidden");
}


// ===== fonction : ajouter un joueur =====

function addPlayer() {
    const maxPlayers = premiumActive ? 25 : 5;
    const currentInputs = document.querySelectorAll("#playersList input");
    const errorMsg = document.getElementById("errorMsg");
    const btnAdd = document.getElementById("btnAddPlayer");

    if (currentInputs.length >= maxPlayers) {
        // Au lieu d'une alerte, on affiche le texte dans la page
        errorMsg.innerText = `⚠️ Limite de ${maxPlayers} joueurs atteinte (Mode ${premiumActive ? 'Premium' : 'Gratuit'})`;
        
        // On peut aussi secouer le bouton pour montrer le blocage
        btnAdd.style.animation = "shake 0.2s ease-in-out 0s 2";
        setTimeout(() => btnAdd.style.animation = "", 400);
        return;
    }

    // Si on est bon, on crée l'input
    const input = document.createElement("input");
    input.placeholder = "Prénom du joueur " + (currentInputs.length + 1);
    document.getElementById("playersList").appendChild(input);
    
    // On efface l'erreur si elle était affichée
    errorMsg.innerText = "";
}


// ===== fonction : démarrer la partie =====

function startGame() {
    const inputValues = document.querySelectorAll("#playersList input");
    players = [];
    
    inputValues.forEach(i => {
        if (i.value.trim() !== "") {
            players.push(i.value.trim());
        }
    });
    
    // Vérification du nombre minimal
    if (players.length < 2) {
        return alert("Ajoutez au moins 2 joueurs pour commencer !");
    }

    // Double vérification de la limite au cas où le DOM aurait été manipulé
    const maxPlayers = premiumActive ? 25 : 5;
    if (players.length > maxPlayers) {
        return alert(`Trop de joueurs ! Limite de ${maxPlayers} dépassée.`);
    }
    
    players.forEach(p => skips[p] = 1);
    
    document.getElementById("playersScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
    nextQuestion();
}


// ===== fonction : afficher la question suivante =====

function nextQuestion() {
    const player = players[currentIndex];
    document.getElementById("currentPlayer").innerText = "Tour de : " + player;
    
    const qs = categories[selectedCategory].questions;
    const random = qs[Math.floor(Math.random() * qs.length)];
    document.getElementById("questionBox").innerText = random;
    
    currentIndex = (currentIndex + 1) % players.length;
}


// ===== fonction : passer une question (skip) =====

function skipQuestion() {
    const player = players[(currentIndex - 1 + players.length) % players.length];
    
    if (skips[player] > 0) {
        skips[player]--;
        nextQuestion();
    } else {
        alert("Plus de skip !");
    }
}


// ===== fonction : mode chaos (question aléatoire toutes catégories) =====

function chaosMode() {
    const allQs = [];
    
    for (let c in categories) {
        if (!categories[c].premium || premiumActive) {
            allQs.push(...categories[c].questions);
        }
    }
    
    const random = allQs[Math.floor(Math.random() * allQs.length)];
    document.getElementById("questionBox").innerText = "🔥 CHAOS : " + random;
}


// ===== fonction : retour au menu principal =====

function backToHome() {
    selectedCategory = null;
    players = [];
    currentIndex = 0;
    skips = {};
    
    document.getElementById("playersList").innerHTML = "";
    document.getElementById("questionBox").innerText = "";
    document.getElementById("currentPlayer").innerText = "";
    
    document.getElementById("playersScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}


// ===== fonction : initialisation stripe (paiement premium) =====

function startStripe() {
    const stripe = Stripe("pk_test_TA_CLE_PUBLIQUE_ICI");
    alert("Mode MVP : active Premium simulé.");
    premiumActive = true;
    alert("Premium activé !");
}


// ===== fonction : afficher la modal premium =====

function showPremiumModal() {
    document.getElementById("premiumModal").classList.remove("hidden");
}


// ===== fonction : fermer la modal premium =====

function closePremiumModal() {
    document.getElementById("premiumModal").classList.add("hidden");
}


// ===== audio de fond =====

const audio = new Audio("https://www.myinstants.com/media/sounds/gta-san-andreas-theme-song.mp3");
audio.play();
