/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg, tem 1.8 de altura e seu IMC é de 25.925925925925924.

Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 30
const pesoEmKg = 84
const alturaEmM = 1.8

let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

// Primeira forma
console.log(nome, sobrenome, 'tem', idade, 'anos pesa', peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu imc é de', indiceMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento);

// Segunda forma
console.log(nome + ' ' + sobrenome + 'tem' + idade + 'anos pesa' + peso + 'kg');

// Terceira forma : template strings - strings no qual podemos adicionar variáveis dentro dela.

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);