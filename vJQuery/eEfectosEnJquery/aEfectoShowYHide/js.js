$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    $("#caja").hide();

    $("#mostrar").click(function() {
        $("#caja").show("fast"); //El método "show" permite mostrar un elemento (Hacerlo visible desde izquierda a derecha), se le puede entregar como parámetro el tiempo de transisión ("fast", "normal" o un valor entero en ms (300=300ms)).
    });

    $("#ocultar").click(function() {
        $("#caja").hide("fast"); //El método "hide" permite mostrar un elemento (Hacerlo invisible desde izquierda a derecha), se le puede entregar como parámetro el tiempo de transisión ("fast", "normal" o un valor entero en ms (300=300ms)).
    });

});
