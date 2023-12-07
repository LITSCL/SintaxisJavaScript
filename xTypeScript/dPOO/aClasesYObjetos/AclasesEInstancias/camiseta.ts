class Camiseta { //Nombre de la clase.
    public color: string; //Atributo de la clase.
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;
    private material: string; //Atributo privado (Se necesita utilizar getters y setters).

    public setMaterial(material: string): void { //Método Setter.
        this.material = material;
    }

    public getMaterial(): string { //Método Getter.
        return this.material;
    }
}

var camiseta = new Camiseta(); //Creación de un objeto perteneciente a la clase Camiseta.

camiseta.color = "Rojo"; //Cambiando valor del atributo.
camiseta.modelo = "Manga larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;
//No se puede cambiar el atributo material de esta forma porque solo se puede modificar desde dentro de la clase.

camiseta.setMaterial("Algodón");

console.log(camiseta); //Mostrando en consola el objeto.
