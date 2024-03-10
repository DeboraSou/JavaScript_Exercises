let valor1 = 15, valor2 = "15";

res = valor1 == valor2;

// A resposta só será true, pois o Javascript não leva em consideração o tipo de variável (Number, String, Boolean...). Para dar false é necessário usar o operador de igualdade estrita(`===`).
console.log(res);