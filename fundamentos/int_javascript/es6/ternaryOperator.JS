// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `verdade` : `mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `verdade` : `mentira`;
console.log(falseExpression); // isso é mentira


//   
console.log(' ');
console.log(' ');

// 

let idade = 22;

// const verificaIdade = (idade >= 18) ? 'Pode dirigir!' : 'Não pode dirigir!';

// console.log(verificaIdade);

console.log(idade >= 18 && 'Você já pode dirigir!');