let number = 7;

for(let cont = 1; cont <= 9; cont +=1){
    console.log("");
    console.log(number * cont);
}

console.log('');
console.log("==============================");
console.log('');

let listaDeNomes = ['Joana', 'Maria', 'Lucas'];
for(let index = 0; index < listaDeNomes.length; index +=1){
    let message = 'Boas vindas, ' + listaDeNomes[index] + '!';
    console.log(message);
}

console.log('');
console.log("==============================");
console.log('');

let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

console.log('');
console.log("==============================");
console.log('');

// Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let index = 0; index < groceryList.length; index +=1){
    console.log(groceryList[index]);
}