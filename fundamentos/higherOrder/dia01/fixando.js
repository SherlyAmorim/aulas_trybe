const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ];

// forEach: Mostre no console o nome das pessoas do array de pesspas

pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));


// find: Encontre a primeira pessoa chamada 'Aline'

pessoas.find((pessoa) => pessoa.nome === 'Aline');


// some: Verifique se alguma pessoa tem mais de 30 anos

pessoas.some((pessoa) => pessoa.idade > 30);


// every: verifique se todas as pessoas tem mais de 30 anos

pessoas.every((pessoa) => pessoa.idade > 30);