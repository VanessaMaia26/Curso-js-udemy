// Aqui terremos uma soma normal, pois temos dois números (que já foi visto antes).

let num1 = 1; // number
let num2 = 2.5; // number

console.log(num1 + num2);


// Nesse caso queremos que os números sejam strings para q assim posssamos concalená-los e não somos.
let num3 = 10; // number
let num4 = 4.7; // number

console.log(num3.toString() + num4); // Aqui utilizamos o toString para mudar 'temporariamente' o valor de num3 em string. 
console.log(typeof num3); // Ao verificar o valor de num3, podemos perceber que ele contiua sendo um número, exatamente pelo falo de que otoString tem como função atribuir um valor temporário para tal valor, para assim podemos fazer algo com ele, que nesse caso seria a concatenação.


// Para alterar um número em uma string permanentemente, devemos utilizar: 
let num5 = 10; // number 

num5 = num5.toString(); // Transfromando em string de forma permanente.
console.log(typeof  num5); // verificando seu valor.


// Transformando em número binário:
let num6 = 26;

console.log(num6.toString(2)); // adiciona-se o número 2 no toString


// Arredondamento
let num7 = 26.072003;

console.log(num7.toFixed(2)); // Utilizamos toFixed e o valor dentro dos parênteses indica quantas casas decimais querremos arredondar. 


// Saber se tal número é inteiro
let num8 = 57.17;

console.log(Number.isInteger(num8)); // ele vai retornar verdadeiro ou falso.


// Saber se tal conta é inválida
let temp = num8 * 'Olá'; // criado uma variável temporária
console.log(Number.isNaN(temp)); // aqui eu basicamente estou perguntando se essa conta é NaN, inválida...


//resolver imprecisão dos resultados
let num9 = 0.7;
let num10 = 0.1;

num9 += num10;
num9 += num10;
num9 += num10;

num9 = parseFloat(num9.toFixed(2)); // corrigida a imprecisão
// o parsefloat pode ser number no lugar

console.log(num9);
console.log(Number.isInteger(num9)); // passa a ser true


// Podemos resolver isso com contas tbm
let num11 = 0.7;
let num12 = 0.1;

num11 = ((num11 * 100) + (num12 * 100)) / 100; // 0.8
num11 = ((num11 * 100) + (num12 * 100)) / 100; // 0.9
num11 = ((num11 * 100) + (num12 * 100)) / 100; // 1.0

console.log(num11);
console.log(Number.isInteger(num11));