$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    $("a").each(function() { //El método each busca todos los elementos que se entregaron en la selección (Cada vez que encuentra un elemento se ejecuta el código).
        var a_link = $(this); //En esta variable se almacena la etiqueta <a>.
        var enlace = $(this).attr("href"); //En esta variable se almacena el valor del atributo href de la etiqueta <a>.
        a_link.text(enlace); //Aqui a la etiqueta <a> se le modifica el texto.
    });

});
