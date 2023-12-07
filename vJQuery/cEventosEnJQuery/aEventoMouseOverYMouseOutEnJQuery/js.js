$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.
    //MouseOver y MouseOut
    var div_caja = $("#caja");

    div_caja.mouseover(function() {
        $(this).css("background", "red"); //this hace referencia a div_caja.
    });

    div_caja.mouseout(function() {
        $(this).css("background", "yellow"); //this hace referencia a div_caja.
    });

});
