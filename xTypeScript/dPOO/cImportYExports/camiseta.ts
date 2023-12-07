export class Camiseta { //Aquí se indica que esta clase se puede exportará otros archivos.
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

    public setMaterial(material: string) {
        this.material = material;
    }

    public getMaterial(): string{
        return this.material;
    }
}

var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 10, "Algodón");

console.log(camiseta);
