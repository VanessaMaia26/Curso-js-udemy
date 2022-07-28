/*
 Operadores lógicos 

 && -> AND -> E (todas as expressões preciosam ser veraddeiras para retornar true). Caso alguma delas for falsa a expressão complea vai retornar falsa.

 || -> OR -> OU

 ! -> NOT -> NÃO

*/

// podemos fazer várias comparções
console.log(true && true && true && true); // true, pois todas são verdadeiras

// podemos criar uma variável de expressão
const expressaoAnd = true && false && true && true; // nesse caso deu false pq nem todas as expressões eram verdadeiras.

console.log(expressaoAnd);

// expressão or, não precisa q todas sejam verdadeiras, apenas uma verdadeira já será necessário para a expressão retornar true.
const expressaoOr = true || false || false || false; // caso todas foram falsa, a expressão irá retornar falsa

console.log(expressaoOr);

// expressão not
console.log(false); // dará false, pois nalógica estou atribuindo false
console.log(!false);  //negando, nesse cara dará true
console.log(!!false); // n é comum, mas podemos utilizar, negar várias vezes


// exemplo na prática de and

const usuario = 'Ariadinna'; // form que o usuário digitou
const senha = '123456'; // form que o usuário digitou

const vaiLogar = usuario === "Ariadinna" && senha === '123456';
console.log(vaiLogar);