$(document).ready(function(){
    var paises = $(".pais");
    var datos_happy = [['Argentina', 59.7], ['Bolivia', 57.5], ['Brazil', 63.8], ['Canada', 72.3], ['Chile', 62.3], ['Cameroon', 50.8], ['"Congo', 0.0], ['"Congo', 54.9], ['Colombia', 61.6], ['Costa Rica', 71.2], ['Cuba', 0.0], ['Dominican Republic', 56.9], ['Ecuador', 59.3], ['Guatemala', 64.0], ['Guyana', 0.0], ['Honduras', 59.5], ['Haiti', 37.2], ['Jamaica', 58.9] ['Maldives', 52.0], ['Mexico', 64.7], ['Montenegro', 55.5], ['Nicaragua', 61.4], ['Panama', 63.0], ['Peru', 58.0], ['Paraguay', 56.9], ['Puerto Rico', 0] ['El Salvador', 63.5], ['Uruguay', 64.4], ['United States', 69.4], ['Venezuela', 50.5]]
    var datos_income = [['Argentina', 22100], ['Bahamas', 37100], ['Bosnia and Herzegovina', 14900], ['Bolivia', 8720], ['Brazil', 14700], ['Canada', 48900], ['Switzerland', 68400], ['Chile', 25100], ['Cameroon', 3640], ['"Congo', 1090], ['"Congo', 3910], ['Colombia', 14600], ['Costa Rica', 20300], ['Cuba', 9790], ['Dominican Republic', 18400], ['Ecuador', 11400], ['Guatemala', 8640], ['Honduras', 5730], ['Haiti', 2910], ['Jamaica', 9760], ['St. Kitts and Nevis', 26400], ['St. Lucia', 15400], ['Maldives', 19500], ['Mexico', 19800], ['Montenegro', 21600], ['Nicaragua', 5410], ['Panama', 31500], ['Peru', 12800], ['Paraguay', 12700], ['El Salvador', 8780], ['Trinidad and Tobago', 26200], ['Uruguay', 21600], ['United States', 62500], ['St. Vincent and the Grenadines', 12500], ['Venezuela', 8320]]


    paises.mouseenter(function(){
        var idpais = $(this).attr("id");
        $('#'+idpais).fadeTo("fast", 0.5)
        
    });

    paises.mouseleave(function(){
        var idpais = $(this).attr("id"); 
        $('#'+idpais).fadeTo("fast", 1)
        
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