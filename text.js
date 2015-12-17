$(document).ready(function(){
    $("#textUp").click(function(){
        changeTextSize(+.3)
    });
    $("#textDown").click(function(){
        changeTextSize(-.3);
    });
    $("#paragraphNumber input").attr("max",$("div.text-column p").length);
    $("#action input").click(function(){
        updateParagraphInputPresence();
    });
    initializeParagraphInputPresence();
});

function updateParagraphInputPresence(){
    if($("#action input:checked").val() === "text")
            $("#paragraphNumber").fadeOut();
        else
            $("#paragraphNumber").fadeIn();
}

function initializeParagraphInputPresence(){
    if($("#action input:checked").val() === "text")
            $("#paragraphNumber").hide();
}


function changeTextSize(stepEm){
    jQueryElement = $("#action input:checked").val() === "text"? 
        $("div.text-column"):
        $("div.text-column p").eq($("#paragraphNumber input").val()-1);
    var currentSizeEm = parseFloat(jQueryElement.css("font-size"))/parseFloat($("body").css("font-size"));
    var newSizeEM = currentSizeEm+stepEm;
    jQueryElement.css("font-size",newSizeEM+"em");
}
