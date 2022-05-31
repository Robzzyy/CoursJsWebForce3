// Ceci est un commentaire

// AFFICHAGE
// on peut afficher les resultats de nos programmes via la console.
console.log('zerfzerze');

// les variables 
// Une variables est une entité informatique qui sert de conteneur à une donnée.
// Toute donnée fournie à une ordinateur est stockéee dans une zone mémoire repérable

// par la machine grace a une adresse memoire. Une variable est crée pour cotnenir cette memoire.

//la valeur est donc stockée quelque part dans la RAM. la variable contient l'adresse à laquelle

// la maxhine peut aller récupérer cette valeur.

// DECLARATION DE VARIABLE 
// -let
// -var
// -const

// const permet de déclarer une constante nomée.
// elle doit être initialisée dès sa déclaration et ne peut plus changer de valeur dans la suite du script
const maConstante = 'roby';
console.log(maConstante);
// tentative de reaffectation d'une valeur à une constante:
// maConstante = 'bonjou'; // renvoi une erreur

// var permet de déclarer une variable globale, Elle appartient d'office à l'espace global même si elle est déclarée à l'interieur d'un bloc.

if(true) {
    var varGlobale = 5;
}
console.log('varGlobale = ', varGlobale);

// let permet de declarer une variable de bloc.Elle n'est accessible que dans le bloc auquel elle appartient.
if(true) {
    let varLocale = 5;
    console.log('varLocale depuis son bloc = ',varLocale);
}
// console.log('varLocale depuis l/espace global =', varLocale); // genere une erreur

var animal = 'Chien';
console.log('animal: ', animal);
console.log("Chien");
// on ne peut pas appeler une variable par sa valeur
//console.log(Chien); // genere une erreur 

var volaille = 'poulet';
var Volaille = 'canard';
console.log('volaille : ',volaille)
console.log('Volaille :', Volaille);

// une variable doit etre declarée avant d'être utilisé
// le code suivant génère une erreuur:
// console.log( bonjour);
// let bonjour = 'bonjour';

// Mais celui-ci n'en genere pas:
//console.log(typeof bonjour);
// var bonjour = 'bonjour';
console.log(num);
num =6;
num+=5;
var num;

// une variable possede:
// -un NOM
// doit commencer par une lettre, un tiret bas (_) ou un symbole $
// les caracteres qui suivent peuvent etre des chiffres et ou des lettres
// la convention camelCase d'applique pour les variables et les fonctions.

// - UN TYPE DE DONNEE 
// 6 types primitifs de donnée:
// 1.null
var maVariableNulle = null;

// 2.undefined
var maVariableUndefined = undefined;

// ces deux types permettent de vider une variable , mais ne sont pas identiques:
console.log('maVariableNulle: ',maVariableNulle);
console.log('maVariableUndefined:',maVariableUndefined);

console.log(' typeof maVariableNulle: ', typeof maVariableNulle);
console.log(' typeof maVariableUndefined:', typeof maVariableUndefined);

console.log('null==undefined', null === undefined);

console.log('null == undefined', null == undefined);
// 3. Chaines de caracteres: String
let string = "ma chaine de caractere";
console.log('string = ', string);
console.log('typeof string = ', typeof string);

// 4. type number
// entiers, decimaux, infinity, -infinity,
console.log('typeof infinity =',Infinity);

var grosEntier = 454547875756755765778n; // BigInt

// Boolean
var somme = '1'+'1'; 
console.log(somme);
let poisson = 'carpe';
let age = 23;
let lieu = 'lac';

let phrase = " la "+ poisson + ' de ' + age + ' ans nage dans un ' + lieu + '.';
console.log(phrase);

// Concatenaton moderne 
let phrase2 = `la ${poisson} de ${age} ans nage dans un ${lieu}`;
console.log(phrase2);

// conversion type number -> string
console.log(age);
console.log(age.toString());

// conversion type string -> number
console.log('parsInt("14"):',parseInt("14"));
console.log('parseFloat("12.6"): ', parseFloat("12.6"));

console.log('parsInt("5.5424"):',parseInt("5.5424"));

// Structures de controle:
// - IF...ELSE
var nomAnimal;
var animall;

animall = "Chat";

if(animall === "Chien") {
    nomAnimal = "Brutus";
} else if (animall === "Chat"){
    nomAnimal="Tom";
} else {
    nomAnimal= "Hein"
}

console.log('nom de l\'animal:', nomAnimal);

var secondAnimal = "raton-laveur";
var secondAnimalName;
var hasAnimal = true;
if(hasAnimal === true && secondAnimal ==="Chat"){
    secondAnimalName = 'Mistigri'
} else if (secondAnimal === 'Chien') {
    secondAnimalName = 'Brutus ll';
} else {
    secondAnimalName = " le " + secondAnimal;
}

console.log('secondAnimalName:', secondAnimalName);

// let monPersonnage = prompt('Quel est mon personnage préféré');
// if(monPersonnage === "Superman") {
//     alert('Bravo');
// } else {
//     alert('CE PC s\'autodetruira dans 10....9...8...0');
// }

//utilisation de 'switch" au lieu des if...else..if
// let heure = prompt('Quelle heure est-il');

// switch(heure) {
//     case "8h":
//     console.log('Petit dejeuner');
//     break;

//     case "12h":
//         console.log('Déjeuner');
//         break;
//         case "20h":
//         case "21h":
//         console.log("Diner");
//         break;
//         default:
//             console.log('Vous avez pas faim vous?')
// }

// les ternaires 
let salutation= "Bonjour";

salutation === "Bonjour" ? console.log("Bonjour") : console.log("Bonsoir");

var Moment = salutation === "Bonjour" ? "c'est le matin": "c'est le soir";

console.log('Moment: ', Moment);

var soleil=true;
var piscine;
soleil ? piscine = false : piscine =true;
piscine = soleil ?? soleil;

console.log('piscine', piscine);

// boucle while() {}
let iterateur = 0;
while(iterateur<5){
    console.log('valeur de l\iterateur: ', iterateur);
    iterateur++;
   
}

// boucle DO {} WHILTE ()
iterateur = 0;
do {
    console.log('Valeur dee l\iterateur:', iterateur);
    iterateur++;
} while (iterateur<0);

// boucle FOR
for (let i=0; i<5;i++ ) {
    console.log('Valeur dee l\iterateur:', i);
}
let listeIngredients = [
    "1 litre de lait",
    "2 oeufs",
    "sel",
    "poivre",
];

document.write ('<p><ul>');
for(let i = 0;i< listeIngredients.length;i++){
    document.write(`<li>${listeIngredients[i]}</li>`)
}
document.write("</ul></p>");

// la boucle FOR ... OF


let oiseau  = {
    espece:"pie",
    age:"3mois",
    habitat:"ville",
}

for(propriete in oiseau){
    console.log(`${propriete}: ${oiseau[propriete]}`);
}

let peintures = new Array ('La Joconde', "l'homme au gant", "le prout");

document.write ('<p><ul>');
for(let i = 0;i< peintures.length;i++){
    document.write(`<li>${peintures[i]}</li>`)
    
}
document.write("</ul></p>");

// l'instruction BREAK
let indexPeinture = null;
let peintureRecherchee = "l'homme au gant";

for(i=0;i<peintures.length;i++) {
    if(peintures[i] === peintureRecherchee){
        indexPeinture =i;
        break;
    }
}

if(indexPeinture) {

}

// tableau
let t = ["element1","element2","element3"];
document.write(t);

// les fonctions
const article = document.querySelector("article");
console.log('article',article);

article.innerHTML = "<h2>les fonctions</h2>";

function maFonction(parametre1, parametre2, parametre3) {
    console.log("Execution du code interne de maFonction()....");
    console.log('parametre1: ',parametre1);
    console.log('parametre2: ',parametre2);
    console.log('parametre3: ',parametre3);

    article.innerHTML += "<p><ul>";
    article.innerHTML +="<li>" + parametre1 + "</li>"
    article.innerHTML +="<li>" + parametre2 + "</li>"
    article.innerHTML +="<li>" + parametre3 + "</li>"
}
// pour declancher l'execution de maFonction() il faut l'appeler
maFonction("Chien",true,153);

function roby (nombre) {
    console.log("Execution du code interne de roby()....");
    console.log('nombre: ',nombre);
    article.innerHTML += "<p>" + (nombre*nombre) + "</p>"

}

roby(9);

var animal="singe";
const maFonction2 = function() {
    let animal = "prout";
    let autreAnimal="ahah";
    console.log(animal);
    return autreAnimal;
}

console.log(animal);