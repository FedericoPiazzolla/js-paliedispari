const userWord = prompt("Inserisci una parola");
console.log(userWord, userWord.length);

const userReverse = wordUserReverse(userWord);
console.log(userReverse);

if (userReverse == userWord) {
  console.log("parola palindroma");
} else {
  console.log("parola non palindroma");
}


// devo prendere la parola dell utente
// contare ogni carattere
// ricomporla a partire dall'ultimo carattere, dell'userWord
function wordUserReverse(word) {

  let wordReverse = "";
  for (let i = word.length - 1; i >= 0; i--) {
    wordReverse += word[i]
  };

  return wordReverse;
};
  