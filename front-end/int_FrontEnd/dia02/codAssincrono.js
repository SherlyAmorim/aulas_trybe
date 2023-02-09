// Veja o seguinte código. Qual será a saída quando você rodar ele?

console.log("Log 1");

setTimeout(() => console.log("Async log"), 1000);

console.log("Log 2");
console.log("Log 3");

// Saída:
// Log 1
// Log 2
// Log 3
// Async log