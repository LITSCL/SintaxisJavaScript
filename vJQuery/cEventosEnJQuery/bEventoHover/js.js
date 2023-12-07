$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    var div_caja = $("#caja");

    function mouseEntrando() {
        $(this).css("background", "red"); //this hace referencia a div_caja.
    }

    function mouseSaliendo(){
        $(this).css("background", "yellow"); //this hace referencia a div_caja.
    }

    div_caja.hover(mouseEntrando, mouseSaliendo); //El método "hover" recibe una función de callback en su primer argumento la cual se ejecuta cuando entra el cursor, y la función de callback del segundo argumento se ejecuta cuando sale el cursor.

});
