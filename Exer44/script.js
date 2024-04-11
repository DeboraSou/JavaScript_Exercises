let carro = {
    modelo: "Rubicon",
    ano: 2024,
    cor: "Prata"
};

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
};