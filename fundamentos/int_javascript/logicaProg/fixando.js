// Utilizando os conceitos de Algoritmos e Lógica de Programação, calcule a soma de todos os números de 1 a 100. O resultado será:

let array = [];
let sum = 0;

for (let index = 1; index <= 100; index += 1){
    sum += index; 
}
console.log('soma: ' + sum);


// Pensando numa estrutura de repetição, aponte quantas vezes você pode subtrair 5 de 100?


let cont = 0;

for (let index = 100; index > 0; index -= 5){
    cont = cont + 1;
}
console.log(cont);
