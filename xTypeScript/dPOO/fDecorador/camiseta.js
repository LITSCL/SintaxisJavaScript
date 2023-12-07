var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador (Sirven para añadir funciones a las clases).
function estamparLogo(logo) {
    return function (target) {
        target.prototype.estampar = function () {
            console.log("Camiseta estampada con el logo " + logo);
        };
    };
}
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
    Camiseta = __decorate([
        estamparLogo("Oracle") //Todos los decoradores hacen efecto en la clase que esta abajo (No hay que utilizar ";").
    ], Camiseta);
    return Camiseta;
}());
var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 10, "Algodón");
console.log(camiseta);
camiseta.estamparLogo(); //Llamando al decorador.
//NOTA: Los decoradores todavía no tienen soporte completo (Se deben usar en Angular para no tener errores en la terminal) (De todas formas si funciona en el navegador).
