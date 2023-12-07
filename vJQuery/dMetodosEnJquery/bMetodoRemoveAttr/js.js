$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.
    var a_google = $("#google");
    a_google.attr("href", "https://jquery.com/");
    a_google.removeAttr("class"); //El método "removeAttr" permite remover un atributo de un elemento.
});
