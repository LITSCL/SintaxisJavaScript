$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    $("a").each(function() {
        var a_link = $(this);
        var enlace = $(this).attr("href");
        a_link.text(enlace);
    });

    $("#agregar").click(function() {
        var input_texto = $("#texto");
        $("#menu").prepend("<li><a href='" + input_texto.val() + "'>" + input_texto.val() + "</a></li>"); //El método "prepend" permite añadir elementos al inicio.
    });

});
