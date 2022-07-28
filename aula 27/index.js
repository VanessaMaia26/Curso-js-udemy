// operador ternário (? :). Usado para substituir e encurtar partes do código (se ? / se não :).

const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
  console.log('Usuário VIP');
} else {
  console.log('Usuário normal');
}

// usando o operador ternário...
//usando coom 2 exemplos
 const pontuacaoUsuario1 = 1000;
 const nivelUsuario = pontuacaoUsuario1 >= 1000 ? 'Usuário VIP' : 'Usuário normal';

 const corUsuario = null; // n escolheu nenhuma cor
 const corPadrao = corUsuario || 'Preto';

 console.log(nivelUsuario, corPadrao);