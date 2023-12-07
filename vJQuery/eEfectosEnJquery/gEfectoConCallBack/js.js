$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    $("#caja").hide();

    $("#mostrarOcultar").click(function() {
        $("#caja").slideToggle("fast", function() { //A todos los efectos se les puede entregar como segundo parámetro una función callback la cual ejecutará sus instrucciones una vez terminada la animación.
            console.log("Termino la animación");
        });
    });

});
