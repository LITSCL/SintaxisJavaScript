$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.
    //Selector de Atributo.
    var a_etiquetaConAtributoTitleGoogle = $('[title="Google"]'); //Aca se esta seleccionando los elementos con atributo title=Google;
    a_etiquetaConAtributoTitleGoogle.css("background", "red") //Se estan modificando las propiedades los elementos con atributo title=Google;
});
