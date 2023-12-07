"use strict";
exports.__esModule = true;
var camiseta_1 = require("./camiseta"); //Importando clase Camiseta (También se debe indicar el nombre del archivo sin la extensión).
//NOTA: Para que este tipo de importaciones funcione, se debe ejecutar el programa en un servidor (Ya que los navegadores no soportan commonjs "Es un módulo de TS para eportar e importar").
var nuevaCamiseta = new camiseta_1.Camiseta("Azul", "Manga Corta", "Adidas", "M", 15, "Algodón");
console.log(nuevaCamiseta);
