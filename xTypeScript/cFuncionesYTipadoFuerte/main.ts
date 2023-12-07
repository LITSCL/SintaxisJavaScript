//1. Función sin retorno.
function retornarNada(): void {
  
}

//2. Función con retorno.
function retornarString(): string {
  return "Soy un String";
}

//3. Función con 1 parámetro.
function mostrarUnParametro(p1: string): string {
  return p1;
}

//4. Función con 2 parámetros.
function mostrarDosParametros(p1: string, p2: string): string {
  return p1 + " - " + p2;
}

console.log(retornarNada());
console.log(retornarString());
console.log(mostrarUnParametro("Hola"));
console.log(mostrarDosParametros("Hola", "Mundo"));

