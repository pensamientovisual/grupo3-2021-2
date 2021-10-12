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
        if (idpais.includes('2')){
            var newidpais = idpais.substring(0, idpais.length - 1)
            $('#'+idpais).fadeTo("fast", 0.5)
            $('#'+newidpais+'1').fadeTo("fast", 0.5)
        }
        else {
            var newidpais = idpais.substring(0, idpais.length - 1)
            $('#'+idpais).fadeTo("fast", 0.5)
            $('#'+newidpais+'1').fadeTo("fast", 0.5)       
            $("#prueba").text(idpais)
        }
        if (idpais.includes('1')){
            var newidpais = idpais.substring(0, idpais.length - 1)
            $('#'+idpais).fadeTo("fast", 0.5)
            $('#'+newidpais+'2').fadeTo("fast", 0.5)
        }
        else {
            var newidpais = idpais.substring(0, idpais.length - 1)
            $('#'+idpais).fadeTo("fast", 0.5)
            $('#'+newidpais+'2').fadeTo("fast", 0.5)       
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
        if (idpais.includes('2')){
            var newidpais = idpais.substring(0, idpais.length - 1)
            $('#'+idpais).fadeTo("fast", 1)
            $('#'+newidpais+'1').fadeTo("fast", 1)
        }
        else {
            var newidpais = idpais.substring(0, idpais.length - 1)
            $('#'+idpais).fadeTo("fast", 1)
            $('#'+newidpais+'1').fadeTo("fast", 1)       
            $("#prueba").text(idpais)
        }
        if (idpais.includes('1')){
            var newidpais = idpais.substring(0, idpais.length - 1)
            $('#'+idpais).fadeTo("fast", 1)
            $('#'+newidpais+'2').fadeTo("fast", 1)
        }
        else {
            var newidpais = idpais.substring(0, idpais.length - 1)
            $('#'+idpais).fadeTo("fast", 1)
            $('#'+newidpais+'2').fadeTo("fast", 1)       
            $("#prueba").text(idpais)
        }
    });

});

$(document).ready(function(){
    var opcion1 = $("#opcion1");

    opcion1.click(function(){
        $(".titulo").hide();
        $(".descripcion").hide();
        $("#mapa_izq").hide();
        $("#mapa_nuevo").show();
        $("#h3").show();
        $("#p3").show();
    });

});