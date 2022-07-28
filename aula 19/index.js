/*
Primitivos (imutáveis): string, number, boolean, undefinid
Null (bigint, symbol)

referência (mutável): array, objact, function
*/

//valor primitivo : são copiados quando usamos o sinal de atribuição =
let a = "A";
let b = a; // copia // [...a] nesse caso b se torna totalmente independente
console.log(a, b);

a = 'Qualquer coisa'; // alterando o valor de a 
console.log(a, b); // porém, o valor de b contiua o mesmo de início pq fizemos uma cópia de valor de a para b.

// valor não primitivo: os valores não podem ser copiados, pois seus valores apontam pro mesmo local da memória. Esses são os valores de referências. 
let c = [1, 2, 3];
let d = c;
console.log(c, d);
// os dois apontam pro mesmo local na memória, então se eu alterar o valor de c consequentemente irei auterar o valor de d

c.push(4); // adicionei mais um elemento em c
console.log(c, d); // mesmo só alterando c, o valor de d tbm foi juntamente alterado 

d.pop(); // tirando um valor de d 
// msm tentando alterar o valor apenas de d para o de início, o valor de c tbm foi alterado. 
console.log(c, d);

const e = {
nome: 'Vanessa',
sobrenome: 'Maia',
};

const f = [...a];

e.nome = 'João';
console.log(e, f)