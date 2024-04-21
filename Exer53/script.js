console.log("Break com For:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log("\nBreak com While:");
let num = 1;

while (num <= 10) {
    if (num === 5) {
        break;
    }
    console.log(num);
    num++;
}