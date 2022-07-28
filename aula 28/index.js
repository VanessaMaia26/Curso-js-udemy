// Objeto date (função construtora) entt tem q usar new. A primeira letra é maiúscula.

const data = new Date(); // 01/01/1978 Timestamp unix ou época unix.
console.log(data.toString());


const data1 = new Date(2019, 3, 20, 15, 14, 27);
console.log(data.toString()); //  0 - 11 (janeiro - dezembro).

const data2 = new Date('2019-04-20 20:20:59');
console.log(data.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // n começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - 6 (domingo - sábado).

console.log(data.toString());

//podemos fazer tbm..para saber os ms da hora do marco 0 até a data q foi estimada
console.log(Date.now());


function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
 const dia = zeroAEsquerda(data.getDate());
 const mês = zeroAEsquerda(data.getMonth() + 1);
 const ano = zeroAEsquerda(data.getFullYear());
 const hora = zeroAEsquerda(data.getHours());
 const min = zeroAEsquerda(data.getMinutes());
 const seg = zeroAEsquerda(data.getSeconds());

 return `${dia}/${mês}/${ano}/ ${hora}:${min}:${seg}`;
}

const data3 = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
