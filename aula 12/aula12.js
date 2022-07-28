let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// Devemos criar uma variável temporária para não perder os valores das variáveis.
const varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;

console.log(varA, varB, varC);

// também podemos fazer da seguinte forma, sem criar uma variável nova.
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);