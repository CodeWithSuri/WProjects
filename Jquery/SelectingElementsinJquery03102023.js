
$(document).ready(function(){


    //Syntax for writing the selectors in Jquery
    // $("tag name/ id /class").action();
    $("#updatebtnid").click(function(){
       // $("#headingoneid").text("<b>Learning Jquery syntax !</b>");
       $("#headingoneid").html("<b>Learning Jquery syntax ! updated by id</b>");
    
    
    });



    $(".updatebtncls").click(function(){

        $(".headingonecls").text("Learning Jquery syntax ! updated by class ");

    });


    $("input").click(function(){

        $("u").text("Learning Jquery syntax ! updated by tag name ");

    });


    // attribute based selector
    $("input[type='text']").css("background","green");









});