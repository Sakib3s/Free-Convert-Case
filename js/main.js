(function($){
	"use strict";

    function capitalizedCase(string) {
        return string.toString().replace(/(?:^|\s)\w/g, function(match) {
            return match.toUpperCase();
        });
    }

    function firstLetterUpper(string) {
        var newString = string.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
        return newString;
    }

    function alternateCase(string) {
        var chars = string.toLowerCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
        }
        return chars.join("");
    }

    function inverseCase(string) {
        var chars = string.toUpperCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toLowerCase();
        }
        return chars.join("");
    };

    function toTitleCase(string) {
        return string.replace(/(?:^|\s)\w/g, function(match) {
            return match.toUpperCase();
        });
    }

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

    $('#CapitalizedCase').click(function(){
        var content = capitalizedCase($('#ConvertCaseField').val());
        $('#ConvertCaseField').val(content);
    });

    $('#SentenceCase').click(function(){
        var content = firstLetterUpper($('#ConvertCaseField').val());
        $('#ConvertCaseField').val(content);
    });

    $('#AlternatingCase').click(function(){
        var content = alternateCase($('#ConvertCaseField').val());
        $('#ConvertCaseField').val(content);
    });

    $('#TitleCase').click(function(){
        var content = toTitleCase($('#ConvertCaseField').val());
        $('#ConvertCaseField').val(content);
    });

    $('#InverseCase').click(function(){
        var content = inverseCase($('#ConvertCaseField').val());
        $('#ConvertCaseField').val(content);
    });

    $('#clear').click(function(){
        $('#ConvertCaseField').val('');
    });

    $('#ConvertCaseField').click(function(){
        var content = $('#ConvertCaseField').val();
        if(content == 'Type or paste your content here') {
            $('#ConvertCaseField').val('');
        }
    });

    // Report Count
    $('#ConvertCaseField').click(function(){
        var wordCounts = {};

        $("#ConvertCaseField").each(function() {
            var input = '#' + this.id;
            word_count(input);

            $(this).keyup(function() {
                word_count(input);
            });
        });

        function word_count(field) {
            var number = 0;
            var matches = $(field).val().match(/\b/g);
            if (matches) {
                number = matches.length / 2;
            }
            wordCounts[field] = number;
            var finalCount = 0;
            $.each(wordCounts, function(k, v) {
                finalCount += v;
            });
            $('#finalcount').text(finalCount)
        }
    });

    // Character Count
    $("#ConvertCaseField").keyup(function() {
        var value = $("#ConvertCaseField").val();
        $('#charactercount').text(value.length);
    });

    // Line Count
    $("#ConvertCaseField").keyup(function() {
        var value = $("#ConvertCaseField").val();   
        var lines = value.split(/\r|\r\n|\n/);
        $('#linecount').text(lines.length);
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