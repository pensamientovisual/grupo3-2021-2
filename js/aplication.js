$(document).ready(function(){
    var paises = $(".pais");

    paises.mouseenter(function(){
        var idpais = $(this).attr("id");
        $("#prueba").text(idpais)
        $('#'+idpais).fadeTo("fast", 0.5)
        $('#'+idpais+'1').fadeTo("fast", 0.5)       
        $("#prueba").text(idpais)
    });

    paises.mouseleave(function(){
        var idpais = $(this).attr("id");
        $("#prueba").text(idpais)
        $('#'+idpais).fadeTo("fast", 1)
        $('#'+idpais+'1').fadeTo("fast", 1)
        $("#prueba").text("soy un texto")
    });

});

$(document).ready(function(){
    var boton1 = $(".boton1");
    var idboton1 = 0;


    boton1.click(function(){
        if (idboton1 == 0){
            $("#titulo").fadeTo("fast", 0);
            idboton1 = 1
        }
        else if (idboton1 == 1){
            $("#titulo").fadeTo("fast", 1);
            idboton1 = 0
        }
    });

});