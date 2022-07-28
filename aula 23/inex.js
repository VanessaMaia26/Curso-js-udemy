// avaliação de curto-circuíto - dependendo se for && ou ||, a partir do momento que o sistema encontra um treu ou false, eles param a checagem.
  
// retorna o valor real

/*
&& - AND - E (todas precisam ser verdadeiras para retornar true). Precisa de apenas uma falsa para retornar false.
|| - OR - OU (todas precisam ser falsas para retornar false). Precisa de apenas uma verdadeira para retornar true.
*/

console.log('Vanessa Maia' && 0 && 'Maria Chiquinha'); // retotnou 0 pq ele faz parte de um dos valores q são considerados falsos em js

console.log('Vanessa Maia' && true && 'Maria Chiquinha'); // retorna o último valor apois a checagem, pois literariamente os dois valores são verdadeiros

/* valores que se avaliam em falso 

false (valor litral)
0
'', "", `` (se as stings estiverem vazias)
null
undefined
NaN
*/

function falaOi () {
  return 'Oi';
}
 let vaiExecutar = false; // aqui temos um valor falso

 console.log(vaiExecutar && falaOi());

 // or

console.log(0 || false || null || 'Jubileu do Arrocha' || true);

const corUsuario = null;
const corPadrao = 'amarelo'; // podemos substituir isso

const corUsuario1 = null; // por isso
const corPadrao1 = corUsuario1 || 'amarelo';

console.log(corPadrao1); // se o usuário tivesse selecionado uma cor, o resultado seria a sua cor escolhida, pois o OR irá mostrar o primeiro valor verdadeiro.
// Como ali n havia selecionado nada o resultado foi amarelo, pois null seria false e ele exibirá o primeiro valor verdadeiro.

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);