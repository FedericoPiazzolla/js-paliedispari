// Numero user
const evenOrOdd = prompt("Scrivi se è pari o dispari");
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(evenOrOdd, userNumber);

// numero computer
const computerNumber = getRndInteger(1, 5);
console.log(computerNumber);

const sum = userNumber + computerNumber;
console.log(sum);

const result = evenOdd();

if (evenOrOdd === result) {
  console.log("HAI VINTO!!!!!!");
} else {
  console.log("hai perso :(");
}

// FUNZIONE PER GENERARE UN NUMERO CASUALE DA 1 A 5
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// FUNZIONE PER DETERMINARE SE LA SOMMA è PARI O DISPARI
function evenOdd() {
  if (sum % 2 == 0) {
    console.log("pari");
  } else {
    console.log("dispari");
  }
};