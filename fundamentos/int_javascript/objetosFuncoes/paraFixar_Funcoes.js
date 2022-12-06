/*Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/

const a = 4;
const b = 2;

function sum(a, b) {
    return a + b;
}
console.log(sum(4, 2));

function subtraction (a, b) {
    return a - b;
}
console.log(subtraction(4, 2));

function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 2));

function division(a, b) {
    return a / b;
}
console.log(division(4, 2));

function module(a, b) {
    return a % b;
}
console.log(module(4, 2));


// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const num1 = 0;
const num2 = 0;
const num3 = 0;

function maiorDeDois(num1, num2) {
    if (num1 > num2) {
        maiorDeDois = 'O número '+ num1 + ' é maior que o '+ num2;
    } else if (num1 < num2){
        maiorDeDois = 'O número '+ num2 + ' é maior que o '+ num1;
    } else {
        maiorDeDois = 'Os números são iguais';
    }
    return maiorDeDois;
}
console.log(maiorDeDois(5,2));


// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorDeTres(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        maiorDeTres = 'O número '+ num1 +' é o maior dos 3!';
    } else if (num2 > num1 && num2 > num3) {
        maiorDeTres = 'O número '+ num2 +' é o maior dos 3!';
    } else if (num3 > num1 && num3 > num2) {
        maiorDeTres = 'O número '+ num3 +' é o maior dos 3!';
    } else {
        maiorDeTres = 'Existem números iguais';
    }
    return maiorDeTres;
}
console.log(maiorDeTres(3,15,5));



// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.


function positiveNegative(num1) {
    if (num1 > 0) {
        positiveNegative = 'positive';
    } else if (num1 < 0) {
        positiveNegative = 'negative';
    } else {
        positiveNegative = 'zero';
    }
    return positiveNegative;
}
console.log(positiveNegative(0));


// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

