// para executar no terminal, execute
// o comando node ./teste.js

const arrayEntrada = [
    2, 7, 21, 10, 1, 9, 6, 11, 16, 12, 14, 3
];

console.log("Original", arrayEntrada);

const arrayMap = arrayEntrada.map(elemento => {
    return elemento ** 2;
});

console.log("Quadrado - Map", arrayMap);

const arrayFilter = arrayEntrada.filter(elemento => {
    return elemento % 2 === 0;
});

console.log("Pares - Filter", arrayFilter);

const arrayReduce = arrayEntrada.reduce((elemento1, elemento2) => {
    return elemento1 + elemento2;
});

console.log("Soma - Reduce", arrayReduce);

