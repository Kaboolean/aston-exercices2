const ps=require('prompt-sync')();

const nombre = Number(ps('Entrez un nombre : '));

for (let i = 1; i <= nombre; i++) {
    const etoile = '*'.repeat(i);
    console.log(etoile);
}