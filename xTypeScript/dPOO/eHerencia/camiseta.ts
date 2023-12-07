interface CamisetaInterface {
    setColor(color: string): void;
    getColor(): string;
}

//Clase padre.
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

//Clase hija.
class Sudadera extends Camiseta { //Con la palabra "extends" se está indicando que la clase "Sudadera" hereda de "Camiseta".
    public capucha: boolean;

    setCapucha(capucha: boolean) {
        this.capucha = capucha;
  }

  getCapucha(): boolean {
        return this.capucha;
  }
}

var sudadera = new Sudadera("Rojo", "Manga Larga", "Nike", "L", 10, "Algodón"); //Constructor heredado.
sudadera.setColor("Blanco"); //Método heredado.
sudadera.precio = 50; //Atributo heredado.
sudadera.setCapucha(true);

console.log(sudadera);
