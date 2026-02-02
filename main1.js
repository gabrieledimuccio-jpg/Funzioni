//  ESERCIZIO CORRETTO
 
 function totale(lanci) {
    let player1 = 0;
    let player2 = 0;
    for (let i = 0; i < lanci; i++) {
        let player1L = Math.floor(Math.random() * (6 - 1) + 1);
        let player2L = Math.floor(Math.random() * (6 - 1) + 1);
        
        player1 = player1 + player1L
        player2 = player2 + player2L
    }
    if (player1 > player2) {
        return `Player1 vince con un totale di ${player1}`;
    }else if (player2 > player1) {
        return `Player2 vince con un totale di ${player2}`;
    }else{
        return `I giocatori hanno pareggiato con un totale di ${player1}`
    }
}
let lanci = Number(prompt(`Inserire il numero di lanci da eseguire a testa`));
let risultato = totale(lanci);
console.log(risultato);


// ESECIZIO DA CORREGGERE

// let num = prompt(`Inserire il numero di lanci da eseguire a testa`);


// let array_1 = [];
// let lanci = num;
// for (let i = 0; i < lanci; i++) {
//     array_1.push(Math.floor(Math.random() * (6 - 1) + 1));
// }

// let array_2 = [];
// for (let i = 0; i < lanci; i++) {
//     array_2.push(Math.floor(Math.random() * (6 - 1) + 1));
// }


// let totale = array_1.reduce((tot,el) =>{
//     tot = tot + el;
//     return tot
// })

// let totale2 = array_2.reduce((tot,el) =>{
//     tot = tot + el;
//     return tot
// })


// if (totale > totale2) {
//     console.log(totale);
// }else {
//     console.log(totale2); 
// }


