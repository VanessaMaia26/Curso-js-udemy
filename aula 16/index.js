// arrays - lista, coleção de coisas
// para criarmos um array precisamos utilizar os [] e dentro dele iremos separar os elementos por vírgulas
// os arrays tbm são indexados assim como as strings. Porém, eles são indexados por elementos e n por caracteres.

//               0        1        2
const alunos =  ['Luiz', 'Maria', 'João']; // organização é essencial (js n liga pra isso, mas desorganização n é uma boa prática de programação).
 console.log(alunos); // exibir array completo (indexados). Esse é o console log normal q usamos sempre. 
console.log(alunos[0]); // exibir apenas o selecionado (indexados).

// tbm podemos editar um valor
alunos[0] = 'Eduardo'; // seleciona o índice q quer mudar
console.log(alunos);

//adicionar um elemento no array
alunos[3] = 'Luíza'; // seleciona o elemento q quer adicionar. No caso adicionou o 3 q n existia.
// Nesse caso, esse método n é tão recomendado, pois para fazer dessa maneira eu deveria saber o tamanaho do array. 

//saber o tamanho do arraya é igual ao das strings 
console.log(alunos.length);

// podemos adicionar diretamente um elemento no final do array
alunos[alunos.length] = 'Luíza'; // podemos fazer isso repetidamnete
alunos[alunos.length] = 'Hernrique';
alunos[alunos.length] = 'Amanda';
alunos[alunos.length] = 'Maia';

// colocar um elemento no final do meu array tbm
alunos.push('Emilly');
alunos.push('Morgana');
alunos.push('Valentina');

console.log(alunos);

// adicionar no início
alunos.unshift('Rayssa');
alunos.unshift('Rayane');

console.log(alunos);

// remover elementos do array
alunos.pop(); // nesse caso o último elemento deixa de existir.
// com a função pop, podemos salvar o elemento que estavamos removendo do array em uma vaiável

const removidoDoFim = alunos.pop(); // assi veremos o elemento q foi removido
console.log(removidoDoFim);
console.log(alunos);

// agr removendo do começo
const removidoDoComeco = alunos.shift();

console.log(removidoDoComeco)
console.log(alunos);

// se eu quero remover u elemento de array e n quero q os índices sejam mexidos
delete alunos[1];  // nesse caso o ínndice 1 será um índice vazio
console.log(alunos);

//acessar índice q n existe
console.log(alunos[50]); // undefined

// fatiar o array
console.log(alunos.slice(0, 4)); //sempre colocando um número a mais do q quer pegar

// fatiar usando negativos // pega o tamanho do array menos o valor negativo
console.log(alunos.slice(0, -3));
