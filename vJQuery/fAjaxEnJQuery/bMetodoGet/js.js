$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    //Petición GET forma 1 (Petición a una URL que retorna un JSON).
    $.get("https://reqres.in/api/users?page=1", function(response) { //En el argumento de la función de callback se almacena la respuesta.
        console.log(response);
    });

    //Petición GET forma 2 (Petición a una URL que retorna un JSON).
    $.get("https://reqres.in/api/users", {page: 1}, function(response) {
        console.log(response);
        response.data.forEach((response, i) => { //Aquí se recorren todos los objetos del JSON.
            $("#datos").append("<p>" + response.first_name + " " + response.last_name + "</p>")
        });
    });

});
