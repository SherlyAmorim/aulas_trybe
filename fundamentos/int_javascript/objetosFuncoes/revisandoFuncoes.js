/*Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/

const a = 5;
const b = 3;

function adicao (a, b){
    return a + b;
}

function subt (a, b) {
    return a - b;    
}

function multip (a, b) {
    return a * b;    
}

function divis (a, b) {
    return a / b;    
}

function mod (a, b) {
    return a % b;
}


// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.


function maior(num1, num2) {
    if (num1 > num2){
        return num1 + ' é maior que ' + num2;
    }
    else if (num2 > num1){
        return num2 + ' é maior que ' + num1;
    }
    else {
        return 'Valores Iguais';
    };   
}
console.log(maior(3, 3));


// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.


function maior3(val1, val2, val3) {
    if (val1 > val2 && val1 > val3){
        return val1 + ' é o maior número';
    }
    else if (val2 > val1 && val2 > val3){
        return val2 + ' é o maior número';
    }
    else if (val3 > val1 && val3 > val2){
        return val3 + ' é o maior número';
    }
    else {
        return 'Existem Valores Iguais';
    };    
}
console.log(maior3(4, 1, 2));


// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function posNeg(number) {
    if (number > 0){
        return 'Positivo';
    }
    else if (number < 0){
        return 'Negativo';;
    }   
    else {
        return 'Zero';
    };    
}
console.log(posNeg(-4));


// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

function triangulo (ang1, ang2, ang3) {
    let positivAngs = ang1 > 0 && ang2 > 0 && ang3 > 0
    let sumAngs = ang1 + ang2 + ang3 === 180

    if (positivAngs){
        if (sumAngs){
            return true;
        }else {
            return false;
        }
    }
    else {
        return "Existe algum ângulo inválido, revise!"
    }
}
console.log(triangulo(90, 55, -35));