let minigame = {
    recupSaisi: document.getElementById('main'),
    numeroSaisi: document.getElementById('numero'),
    quantiteEssai: document.getElementById('essai'),
    btnTester: document.getElementById('test'),
    nombreEssai: 0,
    aleatoire: 0,

    start: function() {
        let resetP = document.querySelectorAll('#main p');
        for (let i = 0; i < resetP.length; i++) {
            resetP[i].remove();
        }
        this.nombreEssai = 10;
        this.quantiteEssai.textContent = this.nombreEssai;
        this.numeroSaisi.value = "";
        this.numeroSaisi.focus();
        this.numeroSaisi.setAttribute('onkeypress', 'minigame.pressEnter(event)');
        this.btnTester.removeAttribute('disabled', '');
        this.aleatoire = Math.round(Math.random() * 100);
    },
    init: function() {
        let startBtn = document.getElementById('start');
        startBtn.addEventListener('click', this.start.bind(this));
        this.btnTester.addEventListener('click', this.test.bind(this));

    },
    compare: function(valeur, random) {
        if (this.nombreEssai <= 0) {
            alert("Click sur Start pour commencer !!!");
            return "";
        }
        this.nombreEssai--;
        this.quantiteEssai.textContent = this.nombreEssai;
        if (this.nombreEssai == 0 && valeur != random) {
            this.btnTester.setAttribute('disabled', '');
            alert("Dommage C'est perdu ! Il fallait trouver le chiffre : " + this.aleatoire);
            return " ";
        }

        if (valeur < random) {
            return valeur + " " + "C'est plus !";
        } else if (valeur > random) {
            return valeur + " " + "C'est moins !";
        } else if (valeur == random) {
            this.numeroSaisi.removeAttribute('onkeypress', '');
            this.btnTester.setAttribute('disabled', '');
            return `${valeur} C'est gagné ! <strong> click START pour recommencer</strong>`;
        }
    },
    test: function() {
        // code comparaison de numero aleatoire avec numero saisi
        let numSaisi = this.numeroSaisi.value;
        let test = this.compare(numSaisi, this.aleatoire);
        this.numeroSaisi.value = "";
        this.numeroSaisi.focus();
        //console.log(test);

        //création d'un élément <p> avec la valeur tester
        let newP = document.createElement('p');
        newP.innerHTML = `<p class="paragraphe">${test} </p>`;
        this.recupSaisi.appendChild(newP);
    },
    pressEnter: function(event) {
        let code = event.which || event.keyCode; //Selon le navigateur c'est which ou keyCode
        if (code == 13) { //le code de la touche Enter
            return this.test();
        }
    },
}

minigame.init();