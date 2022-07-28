// Criação de variáveis - variáveis que mudam

let nome = "João";
//var - tbm é utilizada para criar variáveis

// Irá subtituir o nome "João" pela variável nome.

console.log(nome, "nasceu em 1984");
console.log("Em 2000", nome, "conheceu maria");
console.log(nome, "casou-se com maria em 2012");
console.log("Maria teve um filho com", nome, "em 2015");
console.log("O filho de", nome, "se chama eduardo");

/* Pode-se declarar uma variável e não inicializar ela.
Sendo: let nome; - declarei a variável
nome = "Qualquer valor"; - inicializando a variável 
*/

console.log(nome);

/* Regras para criação de variáveis.

* Não podemos criar variáveis com palavras reservadas.
* As variáveis precisam ter nomes significativos - irá funcior, porém não fará sentido e dificultará o seu entendimento. 
* Não podemos começar o nome de uma ariável com um número - se póssível com letras minúsculas.
* O nome das ariáveis não podem conter espaços ou traços.
* Utilização de camelCase para a elaboração de variáveis com nomes compostos - nomeCompleto.
* Case-sensitive - letra maiúscila e letra minússula fazem diferença.
* não utilize Var, utilize let.
* Não podemos redeclara variáveis com let - let nomeCliente = "Luiz";-> nomeCliente = "Otávio";
*/
let nomeCliente = "Luiz";
nomeCliente = "Otávio";

console.log(nomeCliente);