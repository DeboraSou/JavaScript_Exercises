do {
    tentativa = parseInt(prompt("Insira um número maior do que 10:"));
    if (tentativa <= 10) {
        console.log("O número inserido é muito baixo!");
    }
}

while (tentativa <= 10) {
    console.log("Bom trabalho!");
}