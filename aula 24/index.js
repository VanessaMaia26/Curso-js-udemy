/* estruturas condicionais - disviar o fluxo da aplicação quando necessário.

if - se (pode ser usado sozinho)

else if - se não (sempre que precisar de mais de uma condição). Ele só pode ser usado se já existir um if antes (podemos usar quantos else if quiser).

else - quando estiver fora da condição (só podemos ter um else na checagem e por último).
*/

 /*
 const hora = 10;

 if (hora < 12) {
  console.log('Bom dia!');
 } 
 */

 /* exemplos: 
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
 */

const hora = 50;

if (hora >= 0 && hora <= 11) {
  console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
  console.log('Boa noite');
} else {
  console.log('Olá');
}

// podemos omiter o else if sequisermos e usar só o else

const dinheiroNaConta = null;

if (dinheiroNaConta) {
  console.log('Vou para o restaurante');
} else {
  console.log('Não vou para o restaurante');
}