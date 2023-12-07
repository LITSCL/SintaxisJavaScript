//Una interface es un contrato, cualquier elemento que la implemente debe respetarla (En este caso se deben crear 2 métodos).
interface CamisetaInterface { //Definiendo Interface.
    setColor(color: string): void;
    getColor(): string;
}

class Camiseta implements CamisetaInterface { //Implementando interface a la clase.
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

    public setColor(color: string) { //Iniciando método de la interface.
        this.color = color;
    }

    public getColor(): string { //Iniciando método de la interface.
        return this.color;
    }
}

var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 10, "Algodón");

camiseta.setColor("Amarillo");

console.log(camiseta);
console.log(camiseta.getColor());
