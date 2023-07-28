let giocataUser = prompt('Scegli "pari" o "dispari"').toLowerCase();


while (giocataUser != 'pari' && giocataUser != 'dispari') {
    giocataUser = prompt('Attenzione, puoi scegli solo "pari" o "dispari"').toLowerCase();
}


let numUser = parseInt(prompt('Inserisci un numero intero tra 1 e 5'));

while (numUser > 5 || numUser < 1 || isNaN(numUser)) {
    numUser = parseInt(prompt('Attenzione puoi inserire solo un numero intero tra 1 e 5'));
}

function numRandom () {
    const numeroRandom = Math.floor(Math.random() * 5) + 1;
    
    return numeroRandom;
}

const random = numRandom ();

console.log('Hai scommesso sul: ' + giocataUser);
console.log('Il numero che hai scelto è: ' + numUser);

console.log('Il numero del pc è: ' + random);

const sum = numUser + random;
console.log('La somma dei due numeri è: ' + sum);

function pariDispari () {

    let parDis;
    if (sum % 2 == 0) {
        parDis = ('pari');       
    } else {
        parDis = ('dispari');        
    }
    return parDis;
}

const risultato = pariDispari ();
console.log('Il numero è: ' + risultato);

if (giocataUser == risultato) {
    console.log('HAI VINTO');
} else {
    console.log('HAI PERSO');
}
