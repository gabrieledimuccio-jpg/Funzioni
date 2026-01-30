 let num = prompt(`Inserire il numero di lanci da eseguire a testa`);


 let array_1 = [];
let lanci = num;
for (let i = 0; i < lanci; i++) {
  array_1.push(Math.floor(Math.random() * (6 - 1) + 1));
}

  let array_2 = [];
 for (let i = 0; i < lanci; i++) {
   array_2.push(Math.floor(Math.random() * (6 - 1) + 1));
 }


 let totale = array_1.reduce((tot,el) =>{
    tot = tot + el;
    return tot
 })
 
 let totale2 = array_2.reduce((tot,el) =>{
    tot = tot + el;
    return tot
 })

 
 if (totale > totale2) {
    console.log(totale);
 }else {
    console.log(totale2); 
 }


