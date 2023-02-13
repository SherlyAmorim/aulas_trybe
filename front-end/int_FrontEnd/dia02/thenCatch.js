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

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });

// promise que pode ser rejeitada ou resolvida dependendo do resultado da função (Se for gerado um número par ou ímpar)
const randomPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0){        
        resolve(randomNumber);
      } else {
        reject(new Error(`O número ${randomNumber} é inválido. Somente números pares são válidos!`));
      }
    }, 1000);
  });


resolvedPromise().then((response) => {
    console.log(`ResolvedPromise: O número gerado é ${response}`);
});

rejectedPromise()
    .then((response) => {
        console.log(`RejectPromise: O número gerado é ${response}`);
    })
    .catch((error) => {
        console.log(`RejectPromise: ${error.message}`);
    });

randomPromise()
.then((response) => {
    console.log(`RejectPromise: O número gerado é ${response}`);
})
.catch((error) => {
    console.log(`RejectPromise: ${error.message}`);
});