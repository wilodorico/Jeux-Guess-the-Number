const recupSaisi =document.getElementById('main');
const numeroSaisi = document.getElementById('numero');
const quantiteEssai = document.getElementById('essai');
let nombreEssai = 10;
quantiteEssai.textContent = nombreEssai;

//Refresh de la page au click btn start
let start = document.getElementById('start');
start.addEventListener('click', function(){
    window.location.reload();
});

//initialisation d'un chiffre aleatoire
function init() 
{
    return Math.floor(Math.random() * 100) + 1;  
};
let aleatoire = init();
//console.log(aleatoire);

// function clic btn Tester : 
const btnTester = document.getElementById('test');
btnTester.addEventListener('click', function()
{
    // code comparaison de numero aleatoire avec numero saisi
    let numSaisi = numeroSaisi.value;
    let numRandom = aleatoire;
    let test = compare(numSaisi, numRandom);
    //console.log(test);
    
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
            btnTester.setAttribute('disabled','');
            return `${valeur} C'est gagné ! <strong> click START pour recommencer</strong>`;
        } else {
            return "ça bug !!!"
        }
    };
    //création d'un élément <p> avec la valeur tester
    let newP = document.createElement('p');
    newP.innerHTML = `<p>${test} </p>`;
    recupSaisi.appendChild(newP);     
});