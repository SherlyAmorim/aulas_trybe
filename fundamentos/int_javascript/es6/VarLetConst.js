function userInfo() {
    let userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);
  }
  userInfo();

//   
console.log(' ');
console.log(' ');

// 

if (true) {
    // inicio do escopo do if
    const userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

//   
console.log(' ');
console.log(' ');

// 

var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas

//   
console.log(' ');
console.log(' ');

// 

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

//   
console.log(' ');
console.log(' ');

// 

function hello() {
    let saudacoes = ["Hello World!", "Olá Mundo!"];
    console.log(saudacoes[0]);
  }
  hello();