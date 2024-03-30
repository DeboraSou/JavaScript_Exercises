let arrayOriginal = ["Laranja", "Limão", "Abacaxi", "Ameixa", "Uva", "Manga"];
let copiaArray = [...arrayOriginal];

copiaArray[3] = "Morango";

console.log("Itens do Array Original: ", arrayOriginal);
console.log("Cópia do Array Original: ", copiaArray);