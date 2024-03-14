let v1 = prompt("Digite o 1º número:");
let v2 = prompt("Digite o 2º número:");

// O prompt retorna strings, logo é necessário a conversão dos valores para numbers.
v1 = parseFloat(v1);
v2 = parseFloat(v2);

let soma = v1 + v2;
console.log(`%cA soma de ${v1} + ${v2} é: ${soma}.`, 'color: #3300ff');

let subtracao = v1 - v2;
console.log(`%cA subtração de ${v1} - ${v2} é: ${subtracao}.`, 'color: #ff0000');

let multiplicacao = v1 * v2;
console.log(`%cA multiplicação de ${v1} * ${v2} é: ${multiplicacao}.`, 'color: #800080');