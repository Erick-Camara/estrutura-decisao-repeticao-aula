const prompt = require(`prompt-sync`)();

let soma = 0;

for (let i = 1; i <= 3; i++) {
    let numero = parseInt(prompt(`Digite o numero ${i} `));
    soma += numero;
}

console.log(`A soma é ${soma}`);
