(function($){
	"use strict";

    $('#UpperCase').click(function(){
        $('#ConvertCaseField').val($('#ConvertCaseField').val().toUpperCase()); 
    });

    $('#LoweCase').click(function(){
        $('#ConvertCaseField').val($('#ConvertCaseField').val().toLowerCase()); 
    });

    $('.btn-group .btn').click(function(){
        $('.btn-copy').addClass('copy-active'); 
    });

    $('#ConvertCaseField').click(function(){
        $('.btn-copy').removeClass('copy-active'); 
    });

}(jQuery));

function copyTextFun() {
    // Get the text field
    var copyText = document.getElementById("ConvertCaseField");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}