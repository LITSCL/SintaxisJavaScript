$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.
    //Selector de ID.
    var p_rojo = $('#rojo'); //Aca se esta seleccionando el parrafo con ID=rojo y almacenandolo en una variable.
    p_rojo.css("background", "red") //Aca se esta cambiando el color de fondo del elemento seleccionado.
        .css("color", "green");  //Aca se esta cambiando el color de la letra del elemento seleccionado.
});
