 function numeri(N) {
    for (let i = 0; i <= N; i++) {
        
        if (i % 15 === 0) {
            console.log(`fizzBuzz`);
        }else if (i % 5 === 0){
            console.log(`Buzz`);
        }else if (i % 3 === 0) {
            console.log(`Fizz`);
        }else{
            console.log(i);
        }
    }
    
}
let N = Number(prompt(`Scegli un numero:`))
numeri(N);


