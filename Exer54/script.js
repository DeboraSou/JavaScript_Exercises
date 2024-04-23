console.log("Continue com For:");
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue;
    }
    console.log(`${i}`);
}

console.log("\nContinue com While:");
let j = 1;

while (j <= 10) {
    if (j === 3) {
        j++;
        continue;
    }
    console.log(j);
    j++;
}