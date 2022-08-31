console.log('JS OK ')

// Esercizio 1 PALINDROMA

// Chiedo all'utente di inserire una parola
let word = prompt('inserisci una parola')

let wordReverse = word.split("").reverse().join("");

if (word === wordReverse) {
  console.log("la parola è palindroma");
} else {
  console.log("la parola non è palindroma");
}


// Esercizio 2  PARI E DISPARI

//chiedo utente pari o dispari
const user = prompt('Scegli pari o dispari');
console.log(user);
    
//chiedo a utente di inserire numero da 1 a 5
const number = parseInt(prompt('Inserisci numero da 1 a 5'));
if (number <= 5){
    console.log(number)
}else alert('error')

    
// Genero un numero random per il Pc
let pc = parseInt(Math.random() * 5 + 1) ;
console.log(pc);
    

// Creo funzione Somma tra numero User e Numero Pc
// inserisco condizione per cui utente deve scegliere solo numeri da 1 a 5
function plusNumb(num1, num2) {
    if (num1 <= 5){
    const sum = num1 + num2;
    return sum;

    } return 'errore';
    
}
// Collego il risultato alla funzione
const total = plusNumb(number, pc);
console.log(total);

// Creo funzione che determina se pari o dispari   
function isOddOrEven(plusNumb){
    if (plusNumb % 2 === 0){
        return 'pari'
    }

    return 'dispari';   
}
    
let  OddOrEven
if (!isNaN(total)) {
    OddOrEven = isOddOrEven(total);
    console.log(isOddOrEven(total));
}

// Dichiaro un vincitore

let result;

if(user === OddOrEven){
    result = 'winner user'
}
else {
    result = 'winner pc'
}

console.log(result)