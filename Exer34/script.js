let objetoOriginal = {
    nome: "Lucas",
    idade: 25,
    altura: 1.87,
};

let objetoAtualizado = {
    ...objetoOriginal,
    profissao: "Bombeiro"
};

console.log("Objeto Original: ", objetoOriginal);
console.log("Objeto Atualizado: ", objetoAtualizado);