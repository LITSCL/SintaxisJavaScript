var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    Camiseta.prototype.setMaterial = function (material) {
        this.material = material;
    };
    Camiseta.prototype.getMaterial = function () {
        return this.material;
    };
    return Camiseta;
}());
var camiseta = new Camiseta(); //Creación de un objeto perteneciente a la clase Camiseta.
camiseta.color = "Rojo"; //Cambiando valor del atributo.
camiseta.modelo = "Manga larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;
//No se puede cambiar el atributo material de esta forma porque solo se puede modificar desde dentro de la clase.
camiseta.setMaterial("Algodón");
console.log(camiseta); //Mostrando en consola el objeto.
