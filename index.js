const recupSaisi = document.getElementById('main');
const numeroSaisi = document.getElementById('numero');
const quantiteEssai = document.getElementById('essai');
let nombreEssai;
let aleatoire;

//Refresh de la page au click btn start
let start = document.getElementById('start');
start.addEventListener('click', init);

//initialisation d'un chiffre aleatoire
function init() 
{
    let resetP = document.querySelectorAll('#main p');
    for(let i = 0; i < resetP.length; i++){
        resetP[i].remove();
    }  
    nombreEssai = 10;
    quantiteEssai.textContent = nombreEssai;
    numeroSaisi.value = "";
    numeroSaisi.focus();
    btnTester.removeAttribute('disabled','');
    aleatoire = Math.round(Math.random() * 100);
    //console.log(aleatoire);    
};

//function pour comparer les valeurs
function compare(valeur, random)
    {
        nombreEssai--;
        quantiteEssai.textContent = nombreEssai;
        if(nombreEssai == 0){
            btnTester.setAttribute('disabled','');
            alert("Dommage C'est perdu ! Il fallait trouver le chiffre : " + aleatoire);
        }
        if(valeur < random){
            return valeur + " " + "C'est plus !";
        } else if(valeur > random){
            return valeur + " " + "C'est moins !";
        } else if(valeur == random){
            //window.test = function(){}; // annule la touche entrée
            numeroSaisi.removeAttribute('onkeypress', '');
            btnTester.setAttribute('disabled','');
            return `${valeur} C'est gagné ! <strong> click START pour recommencer</strong>`;
        } else {
            return alert("Click sur Start pour commencer !!!")
        }
    };

// function clic btn Tester : 
const btnTester = document.getElementById('test');
btnTester.addEventListener('click', test);

function test()
{
    // code comparaison de numero aleatoire avec numero saisi
    let numSaisi = numeroSaisi.value;
    let numRandom = aleatoire;
    let test = compare(numSaisi, numRandom);
    numeroSaisi.value = "";
    numeroSaisi.focus();
    //console.log(test);

    //création d'un élément <p> avec la valeur tester
    let newP = document.createElement('p');
    newP.innerHTML = `<p class="paragraphe">${test} </p>`;
    recupSaisi.appendChild(newP);    
};


function pressEnter(event) {
    let code = event.which || event.keyCode; //Selon le navigateur c'est which ou keyCode
    if (code == 13) { //le code de la touche Enter
        return test();
    }
}

