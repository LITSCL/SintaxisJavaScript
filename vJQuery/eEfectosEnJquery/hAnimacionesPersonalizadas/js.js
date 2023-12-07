$(document).ready(function() { //El simbolo dolar hace referencia a JQuery, el argumento hace referencia a lo que se esta seleccionando y lo que sigue es un método.

    $("#animar").click(function() {
    $("#caja").animate({
        marginLeft: "500px",
        borderRadius: "999px",
        fontSize: "30px",
        height: "120px",
        lineHeight: "120px"
        }, "slow")
    .animate({
        marginTop: "100px"
        }, "slow")
    .animate({
        marginLeft: "0px",
        borderRadius: "0px",
        fontSize: "20px",
        height: "50px",
        lineHeight: "50px"
        }, "slow")
    .animate({
        marginTop: "0px"
        }, "slow");
    });

});
