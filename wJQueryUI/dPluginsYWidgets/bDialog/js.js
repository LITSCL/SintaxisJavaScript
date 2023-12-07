$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    $("#mostrar").click(function() {
        $("#dialogo").dialog(); //El método "dialog", añade estilos a un div para que se vea como un cuadro de dialogo (Tambien se puede mover con el cursor).
    });

});
