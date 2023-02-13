/*
Retornando valores quando a promise é resolvida:
Vamos criar uma promise e usar a função setTimeout para criar um código assíncrono que demora 1000 milissegundos (1 segundo) para ser executado. Além do setTimeout, vamos criar também uma função chamada generateRandomNumber que gera um número aleatório entre 0 e 10.
*/

// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });
  resolvedPromise()
  console.log(resolvedPromise()); // Não vai trazer o retorno pois não está sendo tratado com then

/*
Retornando um erro quando a promise é rejeitada
Da mesma forma que podemos retornar um valor quando a promise for resolvida, também podemos retornar um valor quando ela for rejeitada, usando a função reject:
*/

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });
  console.log(rejectedPromise());