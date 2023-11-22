const notes = [20,15,12,8,5,0]

const notation = function(note){
    if(note >= 18){
        console.log("Excellent, bon travail")
    } else if(note >= 15){
        console.log("Bien")
    } else if(note >= 11){
        console.log("Peut mieux faire")
    } else if(note >= 5){
        console.log("Insuffisant")
    } else {
        console.log("Catastrophique, il faut tout revoir")
    }
}

notes.forEach(x => notation(x));