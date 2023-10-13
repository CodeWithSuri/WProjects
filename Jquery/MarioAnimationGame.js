jQuery(function(){

    $("#startid").on("click",function(){

      //  $("#imgid").animate({left:"+=1250px"},10000);

      $("#imgid").animate({left:"+=150px"},2000).animate({marginTop:"26px"}).animate({left:"+=150px"},2000).animate({marginTop:"0px"});
    });

    
    $("#stopid").on("click",function(){

        $("#imgid").stop();
    });

    
    $("#backid").on("click",function(){
        $("#imgid").animate({left:"-=150px"},2000);
    });
    
    $("#resetid").on("click",function(){

        $("#imgid").animate({left:"0"},"fast");
    });

});