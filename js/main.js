var numPaneles = 2;

function iframeUpdate () {
    $("iframe").contents().find("html").html( "<html><head><style type='text/css'>" + $("#css-panel").val() + "</style></head><body>" + $("#html-panel").val() + "</body></html>");
    document.getElementById("output-panel").contentWindow.eval( $("#js-panel").val());
}

/*----- Altura y Anchura de paneles -----*/

$(".panel").height( $(window).height() - $("header").height() - 1 );
$(".panel").width( ($(window).width() / numPaneles) - 2);

function tamanoPanel() {
    $(".panel").height( $(window).height() - $("header").height() - 1 );
    $(".panel").width( ($(window).width() / numPaneles) - 2);
}

/*----- -------------------------- -----*/

/*----- Calcular el número de paneles visibles -----*/

$("#html-bttn").click(function(){
    if ($("#html-panel").hasClass("oculto")) {
        $("#html-panel").removeClass("oculto");
        numPaneles++;
    }

    else {
        $("#html-panel").addClass("oculto");
        numPaneles--;
    }
});

$("#css-bttn").click(function(){
    if ($("#css-panel").hasClass("oculto")) {
        $("#css-panel").removeClass("oculto");
        numPaneles++;
    }

    else {
        $("#css-panel").addClass("oculto");
        numPaneles--;
    }
});

$("#js-bttn").click(function(){
    if ($("#js-panel").hasClass("oculto")) {
        $("#js-panel").removeClass("oculto");
        numPaneles++;
    }

    else {
        $("#js-panel").addClass("oculto");
        numPaneles--;
    }
});

$("#output-bttn").click(function(){
    if ($("#output-panel").hasClass("oculto")) {
        $("#output-panel").removeClass("oculto");
        numPaneles++;
    }

    else {
        $("#output-panel").addClass("oculto");
        numPaneles--;
    }
});

/*----- ------------------------ -----*/

/*----- Ocultar y mostrar paneles -----*/

$(".bttn").click(function(){
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).css("backgroundColor", "#c21e56");
    }

    else {
        $(this).css("backgroundColor", "#242124");
        $(this).addClass("active");
    }

    tamanoPanel();
});

/*----- -------------------------------------- -----*/

$("textarea").on('change keyup paste', function(){
    iframeUpdate();
});