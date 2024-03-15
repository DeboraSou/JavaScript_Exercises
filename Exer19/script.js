const senha = "jt W3k7oC*";

if (
    /[A-Z]/.test(senha) &&
    /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/\-]/.test(senha) &&
    senha.length >= 8
) {
    console.log("%cAcesso concedido, seja bem-vindo!", 'color: #005aff');
} else {
    console.log("%cAcesso negado!", 'color: #ff2500');
}