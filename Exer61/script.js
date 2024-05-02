function verificarParOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
};

let resultado = verificarParOuImpar(6);
console.log("O número escolhido é: " + resultado);