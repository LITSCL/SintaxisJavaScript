$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    $("#caja").hide();

    $("#mostrarOcultar").click(function() {
        $("#caja").toggle("fast"); //El método "toggle" detecta si el elemento seleccionado se esta mostrando o no, en caso de que si, lo oculta (Desde izquierda a derecha), en caso de que no, lo muestra (Desde izquierda a derecha). Se le puede entregar como parámetro el tiempo de transisión ("fast", "normal" o un valor entero en ms (300=300ms)).
    });

});
