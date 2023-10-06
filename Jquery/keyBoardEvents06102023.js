/// <reference types="jquery" />

//old style and depricated since 3.0 version
// $(document).ready(function(){

// });

jQuery(function() { 

    // old style
    // $("#Greetingid").keypress(function(){
    // });

    $("#Greetingid").on("keyup",function(){

        let greetingtextValue = $(this).val();

        $("#showgreetingId").text(greetingtextValue).css("color","green");

    });

    
    $("#Greetingid").on("keydown",function(){

        let greetingtextValue = $(this).val();

        $("#showgreetingId").text(greetingtextValue).css("text-decoration","underline");

    });


    
    $("#Greetingid").on("keypress",function(){

        let greetingtextValue = $(this).val();

        $("#showgreetingId").text(greetingtextValue).css("color","red");

    });

});