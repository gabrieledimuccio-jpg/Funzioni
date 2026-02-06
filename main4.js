function palindromia(str) {
    let pal =  str.replace(/\W/g, "");
    
    let result = pal.split("").reverse().join("");
    
    if (pal === result) {
        console.log(`true`);
        
    } else {
        console.log(`false`);
        
    }
}

let frase = `angolo bar a bologna.`;
palindromia(frase)