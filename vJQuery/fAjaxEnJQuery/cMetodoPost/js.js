$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    //Cargar datos a una URL mediante POST.
    $("#formulario").submit(function(e) { //1. Aquí se captura cuando se envíe el formulario.
        e.preventDefault(); //2. Esta instrucción evita que se redirija a la web (Evita que se envíe a la url especificada en el atributo "action" del formulario).

        var usuario = { //3. Aquí se almacenan los datos recojidos del fomulario (Los que se van a cargar).
            nombre: $("input[name='nombre']").val(),
            apellido: $("input[name='apellido']").val()
        };

        console.log(usuario);

        //4. Carga de datos a la URL mediante POST.
        $.post($(this).attr("action"), usuario, function(response) { //Se utiliza post, $(this) hace referencia al formulario y se obtiene el valor del atributo "action" (La web donde se van a cargar los datos), se cargan los datos de la variable usuario y finalmente se utiliza una función de callback para simplemente mostrar los datos cargados.
            console.log(response);
        });
    });

});
