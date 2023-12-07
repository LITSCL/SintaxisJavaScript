$(document).ready(function() {
    var busqueda = $("#caja .resaltado").parent().parent().parent().find("p"); //El método (parent) permite retroceder a la selección anterior (Queda seleccionado el elemento anterior) y el método find permite seleccionar un elemento (En este caso se retrocedio al <ul>, luego al <div>, luego al body y se seleccionó la etiqueta <p>).
    busqueda.css("background", "red");
});
