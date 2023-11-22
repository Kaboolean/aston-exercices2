const ps=require('prompt-sync')();

const number = Number(ps("Saisissez un nombre : "))

let sum = null;

for(i = 1; i < number+1; i++){
    sum += i
}

console.log(sum)