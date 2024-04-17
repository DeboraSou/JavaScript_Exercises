const numero = 3;
let tentativa;

while (tentativa !== numero) {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 5:"));

    if (tentativa === numero) {
        console.log("%cParabéns! Você acertou!", 'color: blue');
    } else {
        console.log("%cVocê errou, tente novamente.", 'color: red');
    }
}