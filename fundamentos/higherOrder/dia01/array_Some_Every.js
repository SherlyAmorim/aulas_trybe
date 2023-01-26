const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
  ];
  
  const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência'); // verifica se existe alguém que tenha o cargo de Gerência.
  
  console.log(verificaCargo); // true


  const verificaCargo2 = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner'); // verifica se existe alguém que tenha o cargo de Product Owner.

console.log(verificaCargo2); // false


// Agora imagine que você precise verificar se existe algum nome que comece com a letra desejada. Analise e execute o código abaixo:

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false


//Imagine que você pegou um boletim escolar antigo e quer verificar se passou em todas as matérias.

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = Object.values(grades).every((result) => result === 'Aprovado'); // false
  
  console.log(verifyGrades);


  /*Você ficou responsável por conferir a lista de pessoas convidadas de uma festa de casamento e precisa verificar se o nome da pessoa está ou não na lista. Para isso, você deve utilizar o código abaixo e desenvolver sua lógica a partir dele:*/

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((verifyName) => verifyName === name);

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));



/*Você ficou responsável por criar um sistema que verifica se as pessoas da mesma turma possuem uma determinada faixa de idade. Você deve utilizar o array people e desenvolver a sua lógica a partir dele. Para isso:

Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;

Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.*/


const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
 let verifyAges = (array, minAge) => array.every((person) => person.age >= minAge);
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));




 