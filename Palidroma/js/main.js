let parolaUser = prompt('Inserisci la parola da verificare');
// console.log(parolaUser);




function reverse () {
    //stringa vuota dove inserire la parola nel senso opposto
    let reverseParola ='';
    // variabile dove andremo a dichiarare se la parola è o meno palindroma
    let palindroma;

    // Metto tutte le lettere minuscole perché in caso di nome tipo "Anna" pur essendo palindroma non lo accetterebbe
    parolaUser = parolaUser.toLowerCase();
    console.log(parolaUser);
    
    for (let i = (parolaUser.length - 1); i >= 0; i--) {
        const lettera = parolaUser[i];
        reverseParola += lettera;
    }
    console.log(reverseParola);

    if (parolaUser == reverseParola ) {
        palindroma = ('La parola è palindroma');
        // console.log('la parola è palindroma');
        
    } else {
        palindroma = ('La parola NON è palindroma');
        // console.log('la parola NON è palindroma');
        
    }
    return palindroma;
}

let result = reverse ();

console.log(result);

