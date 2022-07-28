// continuação da aula 24 (if, else if, else).

// se - if
// se não - else

const num = 10;

if (num >= 0 && num <= 5) {
  console.log('O número está entre 0 e 5.');
} else {
console.log('O número não está entre 0 e 5.');
}

// else if
// o bloco executa a primeira verdadeira

const numero = 10;

if (numero >= 0 && numero <= 5) {
  console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
  console.log('O número não está entre 6 e 8.');
}  else if (numero >= 9 && numero <= 11) {
  console.log('O número não está entre 9 e 11.');
} else {
  console.log('O número não está entre 0 e 11.');
}