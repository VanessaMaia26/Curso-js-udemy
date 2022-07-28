// Math.

// transformar em número inteiro
let num1 = 9.54578;
let num2 = Math.floor(num1); // arredondando para baixo
console.log(num2);

// arredondano pra cima
let num3 = 9.54578;
let num4 = Math.ceil(num3); // arredondando para cima
console.log(num4);

// arredondano pro  mais próximo
let num5 = 9.54578;
let num6 = Math.round(num5); // arredondano pro  mais próximo
console.log(num6);

// de uma sequência de números podemos pegar o maior dessa sequência
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// de uma sequência de números podemos pegar o menor dessa sequência
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// gerar números aleatórios
console.log(Math.random());
// tbm podemos atribuir da seguinte forma
const aleatorio1 = Math.random();
console.log(aleatorio1);
// pegar um número aleatório entre 10 e 5 por exemplo
const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio2);

// pegar o valor de pi
console.log(Math.PI(243));

// potenciação
console.log(Math.pow(2, 10)); // ler-se 2 elevado a 10
console.log(2 ** 10); // outra froma de efetuar a potenciação

// raiz quadrada
let num7 = 9;
console.log(num7 ** (1 / 2));
//raiz quadrada
let num8 = 9;
console.log(num8 ** 0.5);

// em js podemos dividir um número por 0 e ainda é avaliado por true. Com um valor infinit.
console.log(100 / 0);
