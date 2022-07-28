//estrutura condicional - Switch / Case

// comaparando com if
const data = new Date() // sem nada seria o dia atual, caso queira pode especificar, como na aula anterior.
let diaSemana = data.getDay()
diaSemana = 7
let diaSemanaTexto

if (diaSemana === 0) {
  diaSemanaTexto = 'Domingo'
} else if (diaSemana === 1) {
  diaSemanaTexto = 'Segunda'
} else if (diaSemana === 2) {
  diaSemanaTexto = 'Terça'
} else if (diaSemana === 3) {
  diaSemanaTexto = 'Quarta'
} else if (diaSemana === 4) {
  diaSemanaTexto = 'Quinta'
} else if (diaSemana === 5) {
  diaSemanaTexto = 'Sexta'
} else if (diaSemana === 6) {
  diaSemanaTexto = 'Sábado'
} else {
  diaSemanaTexto = ''
}

console.log(diaSemana, diaSemanaTexto)

// usando Switch

const data1 = new Date('1985-02-15 00:00:00')
let diaSemana1 = data1.getDay()
let diaSemanaTexto1

// entre () colocamos a variável que queremos checar. Usamos switch para checar apenas uma variável.
switch (diaSemana1) {
  case 0:
    diaSemanaTexto1 = 'Domingo'
    break // ao usar case não podemos deixar de utilizar break para terminar o código.
}

switch (diaSemana1) {
  case 1:
    diaSemanaTexto1 = 'Segunda'
    break
}

switch (diaSemana1) {
  case 2:
    diaSemanaTexto1 = 'Terça'
    break
}

switch (diaSemana1) {
  case 3:
    diaSemanaTexto1 = 'Quarta'
    break
}

switch (diaSemana1) {
  case 4:
    diaSemanaTexto1 = 'Quinta'
    break
}

switch (diaSemana1) {
  case 5:
    diaSemanaTexto1 = 'Sexta'
    break
}

switch (diaSemana1) {
  case 6:
    diaSemanaTexto1 = 'Sábado'
    break
  default: // seria um else por exemplo
    diaSemanaTexto1 = ''
}

console.log(diaSemana1, diaSemanaTexto1)

// colocando a forma switch dentro de uma função: n seria necessário utilizar break.

const data2 = new Date('1999-07-22 00:30:00')
let diaSemana2 = data2.getDay()
const diaSemanaTexto2 = getDay(diaSemana2)

function getDay(diaSemana2) {
  let diaSemana2

  switch (diaSemana2) {
    case 0:
      diaSemanaTexto2 = 'Domingo'
      return diaSemanaTexto2

    case 1:
      diaSemanaTexto2 = 'Segunda'
      return diaSemanaTexto2

    case 2:
      diaSemanaTexto2 = 'Terça'
      return diaSemanaTexto2

    case 3:
      diaSemanaTexto2 = 'Quarta'
      return diaSemanaTexto2

    case 4:
      diaSemanaTexto2 = 'Quinta'
      return diaSemanaTexto2

    case 5:
      diaSemanaTexto2 = 'Sexta'
      return diaSemanaTexto2

    case 6:
      diaSemanaTexto2 = 'Sábado'
      return diaSemanaTexto2

    default:
      diaSemanaTexto = ''
      return diaSemanaTexto
  }
} // podemos eliminar break e substituir tds por return e tirar o return do final.
console.log(diaSemana2, diaSemanaTexto2)
