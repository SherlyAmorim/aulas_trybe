// let pizzas = {
//     sabor: "Palmito",
//     preco: 39.90,
//     borda: true,
// };

// for(let key in pizzas){
//     console.log(key)
// };

// for(let key in pizzas){
//     console.log(pizzas[key])
// };

// for(let key in pizzas){
//     console.log(pizzas)
// };



// let pizzasDoces = ['chocolate', 'banana', 'morango'];

// for(let key in pizzasDoces){
//     console.log(key);
// };

// for(let key in pizzasDoces){
//     console.log(pizzasDoces);
// };

// for(let key in pizzasDoces){
//     console.log(pizzasDoces[key]);
// }

// for(let key in pizzasDoces){
//     console.log(key, pizzasDoces[key]);
// }


// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let name in names){
    console.log('Olá ' + names[name]);
  }

// Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let cars = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let car in cars){
    console.log(car + ': ' + cars[car]);
  }
