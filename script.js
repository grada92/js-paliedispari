console.log('JS OK ')

// chiedo di inserire all'utente una parola
const word = prompt('inserire parola')

console.log(word)





//chiedo utente pari o dispari
const user = prompt('Inserisci pari o dispari');
console.log(user);
    
//chiedo a utente di inserire numero da 1 a 5
const number = parseInt(prompt('Inserisci numero da 1 a 5'));
console.log(number);
    
// Genero un numero random per il Pc
let pc = parseInt(Math.random() * 5 + 1) ;
console.log(pc);
    

// Creo funzione Somma tra numero User e Numero Pc
function plusNumb(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
    
const total = plusNumb(number, pc);
console.log(total);
    
    
    
    
    
function isOddOrEven(plusNumb) {
        
    return (numb % 2 === 0) ? 'pari' : 'dispari'; 
}
    
if (!isNaN(numb)) {
    console.log(isOddOrEven(numb));
}