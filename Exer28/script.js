let genero = "Masculino";
let idade = 27;

let mensagem = (genero === "Feminino") ? "Olá Senhora!" : "Olá Senhor!";
mensagem += (idade >= 18) ? " Você é uma pessoa adulta." : " Você é menor de idade.";

console.log(`${mensagem}`);