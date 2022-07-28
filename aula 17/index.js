// funções :definir nome da função juntamente seguido de () e definir corpo da mesma com as {}.

// crinando função 1 - declaração clássica
function saudação() {
console.log('Bom dia!');
} // nesse caso não precisa do ponto e vírgula.
/// podemos executar quantas linhas de códigos quisermos dentro do corpo de uma função

saudação(); // isso é obrigatório

// parâmetros de função - vem dentro () similar as variáveis
function saudacaoDois(nome) {
  console.log(`Bom dia ${nome}!`);
} // lembrando do uso dos ``

saudacaoDois('Luiz'); // essa função pode serreutilizada
saudacaoDois('Laura');
saudacaoDois('Lidianne');

// para retornar um valor da função
function idd(idade) {
  console.log(`Eu tenho ${idade} anos.`)
  return 18
}

idd('18');

const variavel = idd('18');
console.log(variavel); // nesse caso oq será salvo nessa variável será o valor de adicionei em na função return. 

// porém, n faz parte de uma boa programação utilizar esse método, pois poderemos adicionar um valor que n tem a ver com a variável. Entt, temos...
function agradecimento(nome) {
  return `Obrigada, ${nome}!`;
}

const variavelDois = agradecimento('Henrique');
console.log(variavelDois);

// a partir do momento q o sistema encontra return ele n ler mais nada q vem depois dele, ou seja, ao colocar return encerramos ma função.
// tudo q está no scoopy  (dentro) da função está protegido. 
function soma(x, y) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 5));
console.log(soma(4, 8));

// criando função 2 - jogar uma função dentro de uma variável // função anônima

const raiz = function numero (n) {
return n ** 0.5;
}; // neste caso precisamos do ponto e vírgula, pois estamos utilizando o sinal de atribuição =.

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(36));

//criando funação 3 - euou function - removemos a palvar function e sim => (maior q)
const raizQuadrada = (n) => {
  return n ** 0.5;
  }; 

console.log(raiz(3));
console.log(raiz(6));
console.log(raiz(12));

// quando temos só uma linha de função, podemos eliminar as chaves e ponto e vírgula (um dos) e eliminar os ()
const raizTres = n => n ** 0.5;

console.log(raiz(10));
console.log(raiz(20));
console.log(raiz(30));