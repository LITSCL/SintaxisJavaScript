$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.
    var a_google = $("#google");
    a_google.attr("href", "https://jquery.com/"); //El método "attr" permite seleccionar un atributo de un elemento y modificarlo (Primer argumento=atributo, segundo argumento=valor).
    a_google.attr("class", "link"); //El método "attr" también permite añadir atributos.
});
