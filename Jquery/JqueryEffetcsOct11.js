jQuery(function(){

    $("#hideid").on("click",function(){

      //  $("#descid").hide();
        //$("#descid").hide("slow");
       // $("#descid").hide(10000);
       $("#descid").hide("slow",function(){
        $("#descid2").show();
       });

    });

    
    $("#showid").on("click",function(){

        $("#descid").show();

    });

    $("#toggleid").on("click",function(){

        $("#toggledescid").toggle();

        //$("#toggledescid").toggle("slow");
    });

    $("#fadeinid").on("click",function(){

$("#fadindesc").fadeIn();


$("#noraml").fadeIn();
$("#slow").fadeIn("slow");
$("#fast").fadeIn("fast");
$("#veryfast").fadeIn(40);
$("#veryslow").fadeIn(2500);
    });



    $("#fadeoutid").on("click",function(){

       // $("#fadindesc").fadeOut();

       $("#noraml").fadeOut();
       $("#slow").fadeOut("slow");
       $("#fast").fadeOut("fast");
       $("#veryfast").fadeOut(40);
       $("#veryslow").fadeOut(2500);
       
       // $("p").fadeOut("slow");
            });

});