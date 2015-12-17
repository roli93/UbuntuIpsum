$(document).ready(function(){
    $("#satisfactionLevel").change(function(){
        $("#satisfactionBar").css("width",$(this).val()+"%")
    });
    updateSatisfactionLevel()
});
