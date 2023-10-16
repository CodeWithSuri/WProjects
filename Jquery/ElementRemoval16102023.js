jQuery(function(){



   $("a").removeAttr("href");
   $(".emptydivcls").removeAttr("class");

    $("#emptydivid").on("click",function(){

        $(".emptydivcls").empty();

    });

    
    $("#hideid").on("click",function(){

        $(".emptydivcls").hide();

    });


    
    $("#removeelementid").on("click",function(){

        $("p").remove();

    });


    
    $("#unwrapbuttonid").on("click",function(){

        $(".pcls").unwrap();

    });

    
    $("#wrapbuttonid").on("click",function(){

        $(".pcls").wrap("<div class='emptydivcls2'> </div>");

    });

    
    

});