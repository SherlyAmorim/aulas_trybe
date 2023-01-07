// Com o template literals
console.log(`Primeira linha; 
Segunda linha; 
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

//   
console.log(' ');
console.log(' ');

// 

const pessoa = {
    nome: 'Marcia',
    sobrenome: 'Albuquerque',
    anoNasc: 1979
}

console.log(`Paciente: ${pessoa.nome} ${pessoa.sobrenome}
Idade: ${2023 - pessoa.anoNasc}`);
