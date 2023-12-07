//String.
var cadena: string = "Hola Mundo";
console.log(cadena)

//number.
var numero: number = 12;
console.log(numero);

//Booleano.
var verdaderoFalso: boolean = true;
console.log(verdaderoFalso);

//Any (Se puede almacenar cualquier tipo de dato).
var cualquiera: any = "Buenardo"
console.log(cualquiera);

//Variable multi-tipo.
var multiTipo: string | number = 1000; //Esta variable soporta string y number.
console.log(multiTipo);

//Array forma 1 (A los Arrays hay que definirles el tipo de dato).
var lenguajes: Array<string> = ["PHP", "Java", "C#"];
console.log(lenguajes);

//Array forma 2.
var juegos: string[] = ["Age of Empires", "Quake 2", "Turok 2"];
console.log(juegos);

//tipo de dato personalizado.
type stringNumber = string | number; //Aqui se crea un tipo de dato llamado "stringNumber" que soporta tanto string y number.
var datoPersonalizado: stringNumber = "Dato Personalizado";
console.log(datoPersonalizado);
