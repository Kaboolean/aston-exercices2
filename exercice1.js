const ps=require('prompt-sync')();

const arrayLength = 3
const array = []
let greatest = null;

for(i= 0; i< arrayLength; i++){
    array.push(Number(ps(`Number ${i+1} : `)))

    if(greatest == null){
        greatest = array[i]
    } else {
        greatest = array[i] > greatest ? array[i] : greatest
    }
}

console.log(greatest)

