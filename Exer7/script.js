for (var i = 1; i <= 5; i++) {
    console.log("Iteração: " + i);
};

console.log(`Valor final de i fora do loop (usando var) ${i}.\n`);

for (let j = 1; j <= 5; j++) {
    console.log("Iteração: " + j);
};

console.log(`Valor final de j fora do loop (usando let) ${j}.`); // O correrá um erro aqui, pois a variável let é limitada ao escopo do loop.