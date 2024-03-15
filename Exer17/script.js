let temSol = true;
let temChuva = false;

let clima = "ensolarado";

if (clima === "ensolarado" && !temChuva) {
    console.log("%cÉ um bom dia para sair.", 'color: #ffffff; background-color: #9999ff');
} else {
    console.log("%cNão é um bom dia para sair!", 'color: #ffffff; background-color: #ff0000');
}