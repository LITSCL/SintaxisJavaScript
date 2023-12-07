$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    var div_caja = $("#caja");

    div_caja.mousedown(function() { //Este listener se ejecuta mientras se mantiene presionado el click.
        $(this).css("border-color", "gray");
    });

    div_caja.mouseup(function() {
        $(this).css("border-color", "black"); //Este listener se ejecuta cuando se deja de hacer click.
    });

});
