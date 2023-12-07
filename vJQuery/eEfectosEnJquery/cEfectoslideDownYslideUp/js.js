$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    $("#caja").hide();

    $("#mostrar").click(function() {
        $("#caja").slideDown("fast"); //El método "slideDown" permite mostrar un elemento (Hacerlo visible desde arriba hacia abajo), se le puede entregar como parámetro el tiempo de transisión ("fast", "normal" o un valor entero en ms (300=300ms)).
    });

    $("#ocultar").click(function() {
        $("#caja").slideUp("fast"); //El método "fadeOut" permite mostrar un elemento (Hacerlo visible desde arriba hacia abajo), se le puede entregar como parámetro el tiempo de transisión ("fast", "normal" o un valor entero en ms (300=300ms)).
    });

});
