const soma = (num1, num2) => {
    return num1 + num2;
}
console.log(soma(2, 2));

//   
console.log(' ');
console.log(' ');

// 

const objetoPessoa = (nome, idade) => {
    return {
        nome: nome,
        idade: idade
    }
}
console.log(objetoPessoa('Joaquim', 25));

//   
console.log(' ');
console.log(' ');

// 

const objetoPessoa2 = (nome, idade) => ({nome: nome, idade: idade})

console.log(objetoPessoa2('Joaquim', 25));