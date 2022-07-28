/*
operadores de comparação
> maior que
>= maior que ou igual a (se uma dessas comparações for verdadeira, toda a expressão receberá o valor de true, mesmo se a outra n for).
< menor que
<= menor que ou igual a 

== igualdade (= atribuição): igualdade entre dois operando (valor). Não é recomendado o seu uso. ****************
=== igualdade estrita (valor e tipo)
!= diferente (valor). Não é recomendado o seu uso. ****************
!== diferente estrito (valor e tipo)
*/ 

// essas expressões sempre retornarão valores booleanos.

console.log(100 > 10);

// tbm podemos enfatizar que essas expressões não necessariamente são utilizadas com valores numéricos, podemos utilizar de várias formas, porém, os valores numéricos são os mais utilizados.

// jogando em uma variável (daí podemos usar o valor dessa variável para fazer diversas coisas).

const comp = 10 > 1;
console.log(comp);

// Quando usammos os operadores de comparação que possuem mais de uma comparação, se uma dessas comparações for verdadeira, toda a expressão receberá o valor de true, mesmo se a outra n for

const comparacao = 10 >= 5;
console.log(comparacao);

// podemos cirar variáveis separadas para os números

const num1 = 10;
const num2 = 11;

const compara = num1 < num2;

console.log(compara);

// O == funciona, mas n é recomendado, pois se compararmos uma string com um número ele vai converter essa string em número por si só e isso n faz parte de uma boa prática de programação, pois pode dá erro futuramente. ******************
const num3 = 10; // number
const num4 = '10'; // string

const comp1 =  num3 == num4; // num1 é igual a num2?

console.log(comp1);

// O certo a ser usado é o ===, pois além de checar o valor, ele irá checar o tipo
const num5 = 10; //number
const num6 = '10'; // string

const comp2 =  num5 === num6; // num1 é igual a num2?

console.log(comp2);

// != funciona, mas n é recomendado, pois irá ocorrer o msm erro do ==. ********************
const num7 = 10; //number
const num8 = '10'; // string

const comp3 =  num7 != num8; // num1 é igual a num2?

console.log(comp3);

// o certo é usar !==
const num9 = 10; //number
const num10 = '10'; // string

const comp4 =  num9 !== num10; // num1 é igual a num2?

console.log(comp4);
