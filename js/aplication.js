$(document).ready(function(){
    var paises = $(".pais");

    discos.mouseenter(function(){
        $(this).fadeTo("fast", 0.5);

    });

    discos.mouseleave(function(){
        $(this).fadeTo("fast", 1);
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