interface CamisetaInterface {
    setColor(color: string): void;
    getColor(): string;
}

//Decorador (Sirven para añadir funciones a las clases).
function estamparLogo(logo: string) { //Este es el nombre del decorador (Nesesario para asignarlo a una clase).
    return function(target: Function) {
        target.prototype.estampar = function(): void { //Donde dice "estampar" es el nombre de la función.
            console.log("Camiseta estampada con el logo " + logo);
        }
    }
}

@estamparLogo("Oracle") //Todos los decoradores hacen efecto en la clase que esta abajo (No hay que utilizar ";").
class Camiseta implements CamisetaInterface {
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;
    private material: string;

    constructor(color: string, modelo: string, marca: string, talla: string, precio: number, material: string) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
        this.material = material;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }
}

var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 10, "Algodón");

console.log(camiseta);
camiseta.estampar(); //Llamando al decorador.

//NOTA: Los decoradores todavía no tienen soporte completo (Se deben usar en Angular para no tener errores en la terminal) (De todas formas si funciona en el navegador).
