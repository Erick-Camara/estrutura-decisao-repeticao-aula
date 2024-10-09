/*
crie um algoritmo que receba 6 numeros e imprima a sua media aritmetica
*/

const prompt = require(`prompt-sync`)();

let soma = 0;

let quantidade = parseInt(prompt(`Informe a quantidade de números `));

for (let i = 1; i <= quantidade; i++) {
    let numero = parseInt(prompt(`Digite o numero ${i} `));
    soma += numero;
}

let media = soma / quantidade

console.log(`A media é ${media}`);