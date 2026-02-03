function num (N) {
    if (N > 0 & N <10) {
        console.log(`1 cifra`);

    }else if (N >= 10 & N <= 99){    
        console.log(`2 cifre`);
        
    }else if (N >= 100 & N <= 999){    
        console.log(`3 cifre`);
        
    }else if (N >= 1000 & N <= 9999){    
        console.log(`4 cifre`);
        
    }else if (N <= 0) {
        console.log(`numero non positivo`);
        
    }else{
        console.log(`numero troppo grande`);
    }
}
let N = Number(prompt(`Scegli un numero:`))

num (N)