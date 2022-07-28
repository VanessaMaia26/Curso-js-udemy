const numero = Number(prompt('Digite um número:')); // pormpt sempre nos retorna uma string entt se quisermos fazer uma adição precisamos transformar essa string em número.

// Tbm podemos fazer:

// let numero = prompt('Digite um número:');
// numero = Number(numero);

// Lembrando que para fazer essa alteração devemos substituir o const por let.

const numeroTitulo = window.document.getElementById('numero-titulo'); // eu quero obter uma elemento por id. dentro dos parênteses ficam extamente uma string falando qual id quero selecionar. Podemos modificá-los a partir do momento que salvarmos na memório, para isso temos: const seguito do titulo da mesma para melhor identificação.
const texto = window.document.getElementById('Texto');

/*
Raiz quadrada:
É um número interiro: truo ou false
É NaN: truo ou false
Arredondando para baixo:
Arredondando para cima:
Com duas casas decimais:
*/

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';

texto.innerHTML += `<p>Raiz quadrada:${numero ** 0.5}.</p>`; // parâgrafos

texto.innerHTML += `<p>É NaN:${Number.isNaN(numero)}.</p>`;

texto.innerHTML += `<p>${numero} é um número inteiro: ${Number.isInteger(
  numero
)}.</p>`;

texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;

texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;

texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
