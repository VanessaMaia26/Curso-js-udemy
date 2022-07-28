// Diferenças entre VAR e LET
var nome = 'Luiz' // usando var, podmeos redeclrar ela normalmente sem nenhum erro.
var nome = 'Otávio'

nome = 'Luiz' // NÃO FAÇA ISSO! Coloque o var. 

console.log(nome)

let nome = 'Luiz' // Já em let, ao fazer isso, não posso redeclara-lá, pois irá gerar um erro.
nome = 'Otávio' // Agora sim podemos alterar usando apenas "nome".

// Tipos de dados primitivos: string, number, underfined, null e boolean, symbol (que será passado mais à frente).

const nome = 'Luiz' // string
const nome1 = 'Luiz' // string
const nome2 = `Luiz` // string
const num1 = 10 // number
const num2 = 10.52 // number
let nomeAluno // undefined (não aponta para local algum da memória).Usado para linguagem 'JS'.
let sobrenomeAluno = null // Nulo (não aponta para lugal algum da memória). Usado para desconfigurar uma variávrel.
const boolean = false // Boolean (true e false). Valor lógico.

console.log(typeof nome, nome) // Usado para ver o tipo e valor de uma variável respectivamente.

const a = [1, 2] // Array
const b = a // Array

console.log(a, b)

b.push(3) // mudar valor (nesse caso de b).
console.log(a, b)

let c = 2; // Lembrando que let pode ser alterada, ao contrário  da const.
const d = c; // Não mudei para const pq não iremos alterar.
console.log(c, d); // Se eu altero o valor de um, não afeto o valor do outro. 
// Nesse caso o valor será 2, 2

c = 3 // Agora ism poderei mudar o valor apenas de uma variável.
console.log(c, d); // Agora temos os valores 3, 2 respectivamente. 



