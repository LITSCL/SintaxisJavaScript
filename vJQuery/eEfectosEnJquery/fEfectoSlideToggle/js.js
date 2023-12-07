$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    $("#caja").hide();

    $("#mostrarOcultar").click(function() {
        $("#caja").slideToggle("fast"); //El método "slideToggle" detecta si el elemento seleccionado se esta mostrando o no, en caso de que si, lo oculta (Desde arriba hacia abajo), en caso de que no, lo muestra (Desde arriba hacia abajo). Se le puede entregar como parámetro el tiempo de transisión ("fast", "normal" o un valor entero en ms (300=300ms)).
    });

});
