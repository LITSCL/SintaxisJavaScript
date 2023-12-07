$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    $("#elemento-movido").draggable();
    $("#area").droppable({ //El método "droppable" permite que se ejecute un listener (Un JSON con una función) cuando se introduzca un elemento dentro del div (Area).
        drop: function() {
            console.log("Has soltado algo dentro del area");
        }
    });

});
