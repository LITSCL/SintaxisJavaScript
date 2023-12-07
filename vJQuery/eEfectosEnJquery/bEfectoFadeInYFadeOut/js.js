$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    $("#caja").hide();

    $("#mostrar").click(function() {
        $("#caja").fadeIn("fast"); //El método "fadeIn" permite mostrar un elemento (Hacerlo visible de forma difuminada), se le puede entregar como parámetro el tiempo de transisión ("fast", "normal" o un valor entero en ms (300=300ms)).
    });

    $("#ocultar").click(function() {
        $("#caja").fadeOut("fast"); //El método "fadeOut" permite mostrar un elemento (Hacerlo invisible de forma difuminada), se le puede entregar como parámetro el tiempo de transisión ("fast", "normal" o un valor entero en ms (300=300ms)).
    });

});
