let idade = prompt("Digite a sua idade.");

let data = new Date();
let anoNascimento = data.getFullYear() - idade;

console.log(`%cVocê nasceu em ${anoNascimento}.`, 'color: #ff0099');