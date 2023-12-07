$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    //Cargar datos a una URL mediante método "ajax".
    $("#formulario").submit(function(e) { //1. Aquí se captura cuando se envíe el formulario.
        e.preventDefault(); //2. Esta instrucción evita que se redirija a la web (Evita que se envíe a la url especificada en el atributo "action" del formulario).

        var usuario = { //3. Aquí se almacenan los datos recojidos del fomulario (Los que se van a cargar).
            nombre: $("input[name='nombre']").val(),
            apellido: $("input[name='apellido']").val()
        };

        console.log(usuario);

        //4. El método "ajax" permite realizar peticiones AJAX (Aquí se esta cargando datos).
        $.ajax({ //5. Este método recibe como argumento un json (Con todos los datos necesarios para la petición AJAX).
            type: "POST", //6. Aquí en "type" se indica el método a utilizar para la petición.
            url: $(this).attr("action"), //7. Aquí en "url" se indica la URL a la cual se le hará la petición AJAX.
            data: usuario, //8. Aquí en "data" se indican los datos a enviar (En este caso es un JSON con 1 objeto).
            beforeSend: function() { //9. Aquí en "beforeSend" se asigna una función la cual se ejecutará antes de que se envíen los datos.
                console.log("Enviando usuario...");
            },
            success: function(response) { //10. Aquí en "success" se asigna una función la cual se ejecutará si la petición AJAX se realizó correctamente.
                console.log("Petición realizada")
                console.log(response);
            },
            error: function() { //11. Aquí en "error" se asigna una función la cual se ejecutará si la petición AJAX se no se realizó correctamente.
                console.log("A ocurrido un error");
            },
            timeout: 10000 //12. Este es el tiempo en ms máximo de espera para la petición (Si se sobrepasa se mostrará el error)
        });
    });

});
