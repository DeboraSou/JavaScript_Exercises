console.log("Impressão dos números pares com For e Continue:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }

    console.log(i);
}

console.log("\nImpressão dos números pares com While e Continue:");
let j = 1;

while (j <= 20) {
    if (j % 2 !== 0) {
        j++;
        continue;
    }
    console.log(j);
    j++;
}