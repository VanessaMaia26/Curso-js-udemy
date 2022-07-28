let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');

// concole.log(typeof num1, typeof num2); Só para verificar o tipo da variável, que nesse caso são duas strings.

// cosole.log(num1 + num2); Se tentassemos fazer uma conta de adição não conseguirí-amos, iria acontecer uma concatenação, pois temos duas strings. 

num1 = Number (num1); // Agora iremos tranformar as strings em números.
num2 = Number (num2);

console.log(num1 + num2);

const resultado = num1 + num2;
alert('O resultado da sua conta foi:' + resultado); // Poderíamos usar da forma mais moderna: alert(`O resultado da sua conta foi: ${resultado}`);
// Ou ainda: alert(`O resultado da sua conta foi: ${num1 + num2}`); Mas não pode ser usado em códigos mais complexos!
