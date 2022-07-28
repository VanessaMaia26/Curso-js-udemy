// objetos

// criando um objeto dentro de uma variável - froma literal {}
 const pessoa1 = {
  nome: 'Vanessa',
  sobrenome: "Maia",
  idade: 18,

 }; // podemos ter funções dentro sem usar a palavra function

 console.log(pessoa1.nome);
 console.log(pessoa1.sobrenome);
 console.log(pessoa1.idade);

 const pessoa2 = {
  nome: 'Ermesson',
  sobrenome: "Lima",
  idade: 26
 };

 console.log(pessoa2.nome);
 console.log(pessoa2.sobrenome);
 console.log(pessoa2.idade);

 // criar uma função q criei esses objetos para mim
 function criarPessoa (nome,sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  };
 }

 const pessoa01 = criarPessoa('Vanessa', 'Maia', 18);
 console.log(pessoa01.nome);
 console.log(pessoa01.sobrenome);
 console.log(pessoa01.idade);

 // tbm pode ser feito da seguinte maneira
 function criarOutrasPessoas (nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
 } // isso tudo de uma froam mais simplificada

 //ainda sobre criar um objeto dentro de uma constante 
 const pessoa10 = {
  nome: 'Luiz',
  sobrenome: 'Almeida',
  idade: '75',

  fala()  {
console.log(`A minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    ++this.idade;
  }
 }; // podemos colocar funções dentro dela, sem precisar usar a palavra function
 // nesse caso this é a pessoa10

 pessoa10.fala(); // ela vai ter 75 anos
 pessoa10.incrementaIdade(); // vai somar um 
 pessoa10.fala(); // nesse caso teremos 76
