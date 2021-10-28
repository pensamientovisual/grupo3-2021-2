$(document).ready(function(){
    
var data_ag = {key: 'Argentina', value: 59.7, income: 22100, dh: 0.83};
var data_bo = {key: 'Bolivia', value: 57.5, income: 8720, dh: 0.703};
var data_br = {key: 'Brazil', value: 63.8, income: 14700, dh: 0.761};
var data_ca = {key: 'Canada', value: 72.3, income: 48900, dh: 0.922};
var data_ch = {key: 'Chile', value: 62.3, income: 25100, dh: 0.847};
var data_co = {key: 'Colombia', value: 61.6, income: 14600, dh: 0.761};
var data_cos = {key: 'Costa Rica', value: 71.2, income: 20300, dh: 0.794};
var data_ec = {key: 'Ecuador', value: 59.3, income: 11400, dh: 0.758};
var data_el = {key: 'El Salvador', value: 63.5, income: 8780, dh: 0.667};
var data_un = {key: 'United States', value: 69.4, income: 62500, dh: 0.92};
var data_gu = {key: 'Guatemala', value: 64.0, income: 8640, dh: 0.651};
var data_hai = {key: 'Haiti', value: 37.2, income: 2910, dh: 0.503};
var data_ho = {key: 'Honduras', value: 59.5, income: 5730, dh: 0.623};
var data_ja = {key: 'Jamaica', value: 58.9, income: 9760, dh: 0.726};
var data_me = {key: 'Mexico', value: 64.7, income: 19800, dh: 0.767};
var data_ni = {key: 'Nicaragua', value: 61.4, income: 5410, dh: 0.651};
var data_pa = {key: 'Panama', value: 63.0, income: 31500, dh: 0.795};
var data_par = {key: 'Paraguay', value: 56.9, income: 12700, dh: 0.724};
var data_per = {key: 'Peru', value: 58.0, income: 12800, dh: 0.759};
var data_do = {key: 'Dominican Republic', value: 56.9, income: 18400, dh: 0.745};
var data_ur = {key: 'Uruguay', value: 64.4, income: 21600, dh: 0.808};
var data_ve = {key: 'Venezuela', value: 50.5, income: 8320, dh: 0.726};
    

    var paises = $(".pais");

    paises.mouseenter(function(){
        var idpais = $(this).attr("id");
        $(this).fadeTo("fast", 0.5);

        if (idpais == 'Argentina'){
            $("#info_pais").text(`Pais: ${data_ag.key}`)
            $("#info_pais1").text(`Felicidad: ${data_ag.value}`)
            $("#info_pais2").text(`PIB: ${data_ag.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_ag.dh}`)
        }

        else if (idpais == 'Bolivia'){
            $("#info_pais").text(`Pais: ${data_bo.key}`)
            $("#info_pais1").text(`Felicidad: ${data_bo.value}`)
            $("#info_pais2").text(`PIB: ${data_bo.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_bo.dh}`)
        }

        else if (idpais == 'Brazil'){
            $("#info_pais").text(`Pais: ${data_br.key}`)
            $("#info_pais1").text(`Felicidad: ${data_br.value}`)
            $("#info_pais2").text(`PIB: ${data_br.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_br.dh}`)
        }

        else if (idpais == 'Canada'){
            $("#info_pais").text(`Pais: ${data_ca.key}`)
            $("#info_pais1").text(`Felicidad: ${data_ca.value}`)
            $("#info_pais2").text(`PIB: ${data_ca.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_ca.dh}`)
        }

        else if (idpais == 'Chile'){
            $("#info_pais").text(`Pais: ${data_ch.key}`)
            $("#info_pais1").text(`Felicidad: ${data_ch.value}`)
            $("#info_pais2").text(`PIB: ${data_ch.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_ch.dh}`)
        }
        
        else if (idpais == 'Colombia'){
            $("#info_pais").text(`Pais: ${data_co.key}`)
            $("#info_pais1").text(`Felicidad: ${data_co.value}`)
            $("#info_pais2").text(`PIB: ${data_co.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_co.dh}`)
        }

        else if (idpais == 'Costa Rica'){
            $("#info_pais").text(`Pais: ${data_cos.key}`)
            $("#info_pais1").text(`Felicidad: ${data_cos.value}`)
            $("#info_pais2").text(`PIB: ${data_cos.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_cos.dh}`)
        }

        else if (idpais == 'Ecuador'){
            $("#info_pais").text(`Pais: ${data_ec.key}`)
            $("#info_pais1").text(`Felicidad: ${data_ec.value}`)
            $("#info_pais2").text(`PIB: ${data_ec.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_ec.dh}`)
        }

        else if (idpais == 'El Salvador'){
            $("#info_pais").text(`Pais: ${data_el.key}`)
            $("#info_pais1").text(`Felicidad: ${data_el.value}`)
            $("#info_pais2").text(`PIB: ${data_el.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_el.dh}`)
        }

        else if (idpais == 'United States'){
            $("#info_pais").text(`Pais: ${data_un.key}`)
            $("#info_pais1").text(`Felicidad: ${data_un.value}`)
            $("#info_pais2").text(`PIB: ${data_un.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_un.dh}`)
        }

        else if (idpais == 'Guatemala'){
            $("#info_pais").text(`Pais: ${data_gu.key}`)
            $("#info_pais1").text(`Felicidad: ${data_gu.value}`)
            $("#info_pais2").text(`PIB: ${data_gu.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_gu.dh}`)
        }

        else if (idpais == 'Haiti'){
            $("#info_pais").text(`Pais: ${data_hai.key}`)
            $("#info_pais1").text(`Felicidad: ${data_hai.value}`)
            $("#info_pais2").text(`PIB: ${data_hai.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_hai.dh}`)
        }

        else if (idpais == 'Honduras'){
            $("#info_pais").text(`Pais: ${data_ho.key}`)
            $("#info_pais1").text(`Felicidad: ${data_ho.value}`)
            $("#info_pais2").text(`PIB: ${data_ho.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_ho.dh}`)
        }

        else if (idpais == 'Jamaica'){
            $("#info_pais").text(`Pais: ${data_ja.key}`)
            $("#info_pais1").text(`Felicidad: ${data_ja.value}`)
            $("#info_pais2").text(`PIB: ${data_ja.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_ja.dh}`)
        }

        else if (idpais == 'Mexico'){
            $("#info_pais").text(`Pais: ${data_me.key}`)
            $("#info_pais1").text(`Felicidad: ${data_me.value}`)
            $("#info_pais2").text(`PIB: ${data_me.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_me.dh}`)
        }

        else if (idpais == 'Nicaragua'){
            $("#info_pais").text(`Pais: ${data_ni.key}`)
            $("#info_pais1").text(`Felicidad: ${data_ni.value}`)
            $("#info_pais2").text(`PIB: ${data_ni.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_ni.dh}`)
        }

        else if (idpais == 'Panama'){
            $("#info_pais").text(`Pais: ${data_pa.key}`)
            $("#info_pais1").text(`Felicidad: ${data_pa.value}`)
            $("#info_pais2").text(`PIB: ${data_pa.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_pa.dh}`)
        }

        else if (idpais == 'Paraguay'){
            $("#info_pais").text(`Pais: ${data_par.key}`)
            $("#info_pais1").text(`Felicidad: ${data_par.value}`)
            $("#info_pais2").text(`PIB: ${data_par.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_par.dh}`)
        }

        else if (idpais == 'Peru'){
            $("#info_pais").text(`Pais: ${data_per.key}`)
            $("#info_pais1").text(`Felicidad: ${data_per.value}`)
            $("#info_pais2").text(`PIB: ${data_per.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_per.dh}`)
        }

        else if (idpais == 'Dominican Republic'){
            $("#info_pais").text(`Pais: ${data_do.key}`)
            $("#info_pais1").text(`Felicidad: ${data_do.value}`)
            $("#info_pais2").text(`PIB: ${data_do.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_do.dh}`)
        }

        else if (idpais == 'Uruguay'){
            $("#info_pais").text(`Pais: ${data_ur.key}`)
            $("#info_pais1").text(`Felicidad: ${data_ur.value}`)
            $("#info_pais2").text(`PIB: ${data_ur.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_ur.dh}`)
        }

        else if (idpais == 'Venezuela'){
            $("#info_pais").text(`Pais: ${data_ve.key}`)
            $("#info_pais1").text(`Felicidad: ${data_ve.value}`)
            $("#info_pais2").text(`PIB: ${data_ve.income}`)
            $("#info_pais3").text(`Desarrollo humano: ${data_ve.dh}`)
        }
    });

    paises.mouseleave(function(){
        var idpais = $(this).attr("id");
        $(this).fadeTo("fast", 1);
        $("#info_pais").text(`Pais: `)
        $("#info_pais1").text(`Felicidad: `)
        $("#info_pais2").text(`PIB: `)
        $("#info_pais3").text(`Desarrollo humano: `)
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