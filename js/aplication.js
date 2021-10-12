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
    var idboton = 0

    opcion1.click(function(){
        if (idboton == 0){
            $(".titulo").hide();
            $(".descripcion").hide();
            $("#mapa_izq").hide();
            $("#mapa_nuevo").show();
            $("#h3").show();
            $("#p3").show();
            idboton = 1
        }
        else if (idboton == 1){
            $(".titulo").show();
            $(".descripcion").show();
            $("#mapa_izq").show();
            $("#mapa_nuevo").hide();
            $("#h3").hide();
            $("#p3").hide();
            idboton = 0
        }
    });
});

// De acá en adelante es el intento de leyenda WHR
var margin = {top: 30, right: 30, bottom: 100, left: 60},
    width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

$(document).ready(function(){
    const svg = d3.select("#legend1")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
  
  
      
  
      svg.append("circle").attr("cx",200).attr("cy",10).attr("r", 6).style("fill", "#dbfff6")
      svg.append("circle").attr("cx",200).attr("cy",70).attr("r", 6).style("fill", "#81a69b")
      svg.append("circle").attr("cx",200).attr("cy",130).attr("r", 6).style("fill", "#5d8276")
      svg.append("circle").attr("cx",200).attr("cy",160).attr("r", 6).style("fill", "#51766a")
      svg.append("circle").attr("cx",200).attr("cy",190).attr("r", 6).style("fill", "#466b5f")
      svg.append("circle").attr("cx",200).attr("cy",220).attr("r", 6).style("fill", "#3a6054")
      svg.append("circle").attr("cx",200).attr("cy",250).attr("r", 6).style("fill", "#2f5548")
      svg.append("circle").attr("cx",200).attr("cy",280).attr("r", 6).style("fill", "#244a3e")
      svg.append("circle").attr("cx",200).attr("cy",310).attr("r", 6).style("fill", "#193f33")
      svg.append("circle").attr("cx",200).attr("cy",340).attr("r", 6).style("fill", "#0d3529")
      svg.append("circle").attr("cx",200).attr("cy",370).attr("r", 6).style("fill", "#022b1f")
      
      svg.append("text").attr("x", 220).attr("y", 10).text("[36 , 38)").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 220).attr("y", 40).text("...").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 220).attr("y", 70).text("[50 , 52)").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 220).attr("y", 100).text("...").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 220).attr("y", 130).text("[56 , 58)").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 220).attr("y", 160).text("[58 , 60)").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 220).attr("y", 190).text("[60 , 62)").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 220).attr("y", 220).text("[62 , 64)").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 220).attr("y", 250).text("[64 , 66)").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 220).attr("y", 280).text("[66 , 68)").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 220).attr("y", 310).text("[68 , 70)").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 220).attr("y", 340).text("[70 , 72)").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 220).attr("y", 370).text("[72 , 74)").style("font-size", "15px").attr("alignment-baseline","middle")
      
});