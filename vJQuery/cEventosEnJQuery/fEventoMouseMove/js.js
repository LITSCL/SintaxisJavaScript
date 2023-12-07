$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    var div_seguir = $("#seguir");

    $(document).mousemove(function() { //Este listener se ejecuta cuando se mueve el cursor dentro de la web.
        console.log("Eje X: " + event.clientX + "px");
        console.log("Eje Y: " + event.clientY + "px");
        div_seguir.css("left", event.clientX);
        div_seguir.css("top", event.clientY);
    });
});
