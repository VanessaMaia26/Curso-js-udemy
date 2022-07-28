// Strings

let umaString = 'Um "texto"'

console.log(umaString)

// Cada caracter de uma string, tem um índice que vária de acordo com a string utilizada. lembrando que inicia-se de 0, o espaçamento conta. (Um texto - 01234567)

// Se eu quiser identificar um caracter que está em uma posição específica do índice, utilizamos os [].

let outraString = 'Um amor'

console.log(outraString[4])

// Ou tbm podemos utilizar a .charAt().
//Podemos tbm concatenar uma string utilizando .concat(). Porém, n é recomendado. Segue, os exemplos variados para cocatenar uma string.
console.log(outraString.concat(' em um lindo dia. '))
console.log(outraString + ' em um lindo dia. ')
console.log(`${outraString} em um lindo dia.`)

// Se eu quiser em qual índice começa a palavra "amor", por exemplo: .indexof('amor')
console.log(outraString.indexOf('amor'))

// Comçando de trás pra frente.
console.log(outraString.lastIndexOf('amor'))

// Expressões regulares (curso específico)
console.log(outraString.match(/[a-z]/g)) //todas as letras minúsculas.
console.log(outraString.search(/[a-z]/g))
console.log(outraString.replace('Um', 'Outro')) //Substituir a palvara.

let novaString = 'O rato roeu a roupa do rei de roma.'
console.log(novaString.replace(/r/g, '#')) //substituindo todas as letras r por #. O g é quem faz com que todas as letras sejam substituidas.

console.log(novaString.length) // saber o tamanho de uma string

console.log(novaString.slice(2, 6)) // fatiar a frase. Sempre pegando um a mais do fim.

//Tbm podemos utilizar números negativos.
console.log(novaString.slice(-5)) ///É basicamente feita uma subtração.
console.log(novaString.slice(-5, -1)) // mais usado e mais simples

console.log(novaString.substring(umaString.length - 5, umaString.length - 1)) // usado para fazer a mesma coisa do porém é mais longo.

// Dividir uma string basiado em algum carcter qualquer.
console.log(novaString.split('r'))
console.log(novaString.split(' ', 3))

console.log(novaString.toUpperCase()) //tudo maiúscula
console.log(novaString.toLowerCase()) // tudo minúscula
