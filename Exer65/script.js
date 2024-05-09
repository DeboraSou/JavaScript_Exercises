function multiplicacao(...numeros) {
    // reduce: É um método usado para multiplicar os valores no array numeros.
    return numeros.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);

};

console.log(multiplicacao(5, 5, 5, 5, 5)); // 3125.