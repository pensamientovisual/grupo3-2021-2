$(document).ready(function(){
    var paises = $(".pais");

    paises.mouseenter(function(){
        var idpais = $(this).attr("id");
        if (idpais.includes('1')){
            var newidpais = idpais.substring(0, idpais.length - 1)
            $('#'+idpais).fadeTo("fast", 0.5)
            $('#'+newidpais).fadeTo("fast", 0.5)
        }
        else {
            $('#'+idpais).fadeTo("fast", 0.5)
            $('#'+idpais+'1').fadeTo("fast", 0.5)       
            $("#prueba").text(idpais)
        }
    });

    paises.mouseleave(function(){
        var idpais = $(this).attr("id");
        if (idpais.includes('1')){
            var newidpais = idpais.substring(0, idpais.length - 1)
            $('#'+idpais).fadeTo("fast", 1)
            $('#'+newidpais).fadeTo("fast", 1)
        }
        else {
            $('#'+idpais).fadeTo("fast", 1)
            $('#'+idpais+'1').fadeTo("fast", 1)       
            $("#prueba").text(idpais)
        }
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