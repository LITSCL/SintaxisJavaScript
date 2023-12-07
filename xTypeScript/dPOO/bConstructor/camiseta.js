var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio, material) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
        this.material = material;
    }
    Camiseta.prototype.setMaterial = function (material) {
        this.material = material;
    };
    Camiseta.prototype.getMaterial = function () {
        return this.material;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 10, "Algodón"); //Utilizando el constructor.
console.log(camiseta);
