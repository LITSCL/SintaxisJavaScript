$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    var input_nombre = $("#nombre");

    $(input_nombre).focus(function() { //Este listener se ejecuta cuando el usuario seleccione el input (Haga focus).
        $(this).css("border", "2px solid green");
    });

    $(input_nombre).blur(function() { //Este listener se ejecuta cuando el usuario deje de seleccionar el input (Deje de hacer focus).
        $(this).css("border", "1px solid #7a7a7a");
    });

});
