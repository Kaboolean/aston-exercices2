const ps=require('prompt-sync')();

const nombre = Number(ps('Entrez un nombre : '));

for (let i = 1; i <= nombre; i++) {
    const espaces = ' '.repeat(nombre - i);

    const left = '*'.repeat(i);

    const right = '*'.repeat(i - 1);

    console.log(espaces + left + right);
}