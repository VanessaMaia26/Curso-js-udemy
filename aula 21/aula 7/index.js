/* Regras para criação de contantes.

* Não podemos criar constantes com palavras reservadas.
* As constantes precisam ter nomes significativos - irá funcior, porém não fará sentido e dificultará o seu entendimento. 
* Não podemos começar o nome de uma constante com um número - se póssível com letras minúsculas.
* O nome das constantes não podem conter espaços ou traços.
* Utilização de camelCase para a elaboração de constantes com nomes compostos - nomeCompleto.
* Case-sensitive - letra maiúscila e letra minússula fazem diferença.
* não utilize Var, utilize const.
* Não podemos modificar o valor de uma constante, ela tem que ser criada e inicializada ao mesmo tempo. 
*/

const nome = "João";
console.log(nome);

// Podemos pegar o valor de uma variável ou uma constante e atribuair para outra variável ou outra constante. 

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero; // + - * / 
console.log(resultado);
const resultadoDuplicado = resultado * 2; 
console.log(resultadoDuplicado)
let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado)

//Descobrir o tipo da variável/constate
console.log(typeof (primeiroNumero));