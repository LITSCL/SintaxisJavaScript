$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    var div_caja = $("#caja");

    div_caja.click(function() { //Este listener ejecuta el código cuando se hace click.
        $(this).css("background", "red");
    });

    div_caja.dblclick(function() { //Este listener ejecuta el código cuando se hace doble click.
        $(this).css("background", "green");
    });

});
