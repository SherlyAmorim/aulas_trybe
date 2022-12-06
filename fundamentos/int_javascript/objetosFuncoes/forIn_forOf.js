// o código que mostra as marcas de carros presentes em um Array é:

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]); //Saab, Volvo, BMW
  console.log(cars); //[ 'Saab', 'Volvo', 'BMW' ],[ 'Saab', 'Volvo', 'BMW' ],[ 'Saab', 'Volvo', 'BMW' ]
  console.log(index); // 0, 1, 2
  console.log(index, cars[index]); // 0 Saab, 1 Volvo, 2 BMW
  console.log(cars[index][0]); // S, V, B
}


// Um outro exemplo é a iteração nas chaves de um objeto:

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }


//   for/of

// o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in


let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

