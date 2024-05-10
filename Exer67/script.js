function calculaMedia(...valores) {
    const soma = valores.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma / valores.length;
}

console.log(calculaMedia(7, 9, 8, 10));