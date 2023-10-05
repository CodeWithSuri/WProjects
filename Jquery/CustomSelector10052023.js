$(document).ready(function(){


    // :odd will use for doing the effets on table odd rows
    $("tr:odd").css("background","purple");
    $("tr:odd").css("color","white");
    //$("tr:odd").hide();
    
    // :even will use for doing the effets on table odd rows
    $("tr:even").css("background","skyblue");
    $("tr:even").css("color","yellow");
    //$("tr:even").hide();

    $("li:even").css("background","skyblue");
    $("li:odd").css("background","yellow");

    $("th").css("background","green");

    $("th").css("color","white");


    $("p:first").css("color","green");

    $("p:last").css("color","red");


    
    $("li:first").css("color","green");

    $("li:last").css("color","red");
    

    $("input:text").css("background","green");

    $("input:password").css("background","yellow");

    
    $("form input:text").css("background","red");


    // Prevent form submission
$( "form" ).on( "submit", function( event ) {
    event.preventDefault();
  } );



    

});