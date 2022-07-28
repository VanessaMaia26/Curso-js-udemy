/* Operadores aritméticos 

 ° + adição / concatenação 
 ° - subtração
 ° divisão
 ° multiplicação 
 ° ** potenciação (elevar um número a outro).
 ° % Retorna o resto da divisão (não tem nada aver com a porcentagem em si aqui em programação).

 */

 // adição (para utilizar os outros é só mudar os sinais).
 const num1 = 5;
 const num2 = 10;
 console.log(num1 + num2);
// Se caso ums dos valores for uma string, por esemplo...essa adição passar a fazer uma concatenção .(união de dois valores).

/* Precedência

()
**
* / %
+ -

*/

// Operador de encremento ++

let contador = 1; // Como é uma valor que está sendo variado ao longo do tempo, sabemos que não poderemos utilizar const.
contador++; // 2 
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador);

// Pós fixado vs pré fixado
let eu = 1;
eu++; // Nesse caso, ele executa a ação primeiro e depois encrementa o valor.

let você = 1;
++você // Nesse caso, primeiro ele faz a conta e depois ele retorna o valor.

// Também podemos fazer
let amador = 1;
console.log(amador++); //EXecutou a ação do console log. Exibiu o valor antigo e depois ele foi encrmentado.
console.log(amador); // Apenas exibir o valor da linha.

let amor = 1;
console.log(++amor);
console.log(amor);

// Ainda podemos fazer
const passo = 2; // ele irá somar de 2 em 2
let contatos = 0;

contatos = contatos + passo;
console.log(contatos); //Isso é igual a: contatos += passo; Esse é um atalho para chegarmos ao valor de forma mais simples e fácil.
contatos = contatos + passo;
console.log(contatos);
contatos = contatos + passo;
console.log(contatos);

// Operador de decremento -- funciona da mesma forma.
// Operador de atribuição *
// Operador de potenciação **


// Tratar strings em números inteiros
//NaN - Not a Number 
const num4 = 10;
const num5 = parseInt ('5'); // só usando os parênteses ela faz a concatenação 
//Usando parênteses e parseInt ele faz a soma (parseInt)
console.log(num4 + num5);

// Tratar strings em número de ponto flutuante (parseFloat)
const num10 = 100;
const num11 = parseFloat(12.6);
console.log(num10 + num11);

// Tratar strings em número qualquer número (Number)
const num100 = 16;
const num111 = Number(156.8); // Qualquer string que será inserida, ela irá ser transformada em número (se caso for possível, é claro)
console.log(num100 + num111);
