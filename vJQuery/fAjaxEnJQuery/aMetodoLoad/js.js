$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    $("#datos").load("https://reqres.in"); //El método "load" permite realizar peticiones AJAX por GET a una URL y cargarlos en un elemento html.

});
