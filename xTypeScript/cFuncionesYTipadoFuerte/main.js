//1. Función sin retorno.
function retornarNada() {
}
//2. Función con retorno.
function retornarString() {
    return "Soy un String";
}
//3. Función con 1 parámetro.
function mostrarUnParametro(p1) {
    return p1;
}
//4. Función con 2 parámetros.
function mostrarDosParametros(p1, p2) {
    return p1 + " - " + p2;
}
console.log(retornarNada());
console.log(retornarString());
console.log(mostrarUnParametro("Hola"));
console.log(mostrarDosParametros("Hola", "Mundo"));
