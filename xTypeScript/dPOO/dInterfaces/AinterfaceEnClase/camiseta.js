var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio, material) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
        this.material = material;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 10, "Algodón");
camiseta.setColor("Amarillo");
console.log(camiseta);
console.log(camiseta.getColor());
