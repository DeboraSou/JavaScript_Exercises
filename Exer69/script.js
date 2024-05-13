let executaFuncao = function (funcao, argumento1, argumento2) {
    funcao(argumento1, argumento2);
};

let minhaFruncao = function (a, b) {
    console.log("Resultado: ", a * b);
};

executaFuncao(minhaFruncao, 4, 6);