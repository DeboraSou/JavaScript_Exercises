let idade = 18;

if (idade === 16 || idade === 17) {
    console.log("%cVocê já está apto a votar.", 'color: #ffffff; background-color: #0000ff');
} else if (idade <= 15) {
    console.log("%cVocê ainda não pode votar.", 'color: #ffffff; background-color: #ff0000');
} else if (idade < 70) {
    console.log("%cVocê tem a obrigação de votar.", 'color: #000000; background-color: #ffa500');
} else {
    console.log("%cVocê não tem mais a obrigação de votar.", 'color: #000000; background-color: #00ffa5');
}