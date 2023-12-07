$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    $("#mostrar").click(function() {
        $(".caja").toggle("shake");
    });

});
