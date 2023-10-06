
jQuery(function(){

    
$("#btnid").on("click mouseenter",function(e){

if(e.type=="mouseenter"){
    $(".hideinfo").css("color","red");

}else{
    $(".hideinfo").hide();

}

});

});

$(document).ready(function(){


//mouse events
// $("#btnid").click(function(){

//     //hide the things
//  $(".hideinfo").hide();

// //$(".hideinfo").css("color","red");

// });

//new version



// $("#slideupid").dblclick(function(){

//     //hide the things
//  $(this).slideUp();

// //$(".hideinfo").css("color","red");

// });


$("#hoverid").hover(function(){

$(this).css("background","yellow");

}, function(){
    $(this).slideUp();

}

);


$("#imgid").dblclick(function(){

//    $(this).slideUp();
$(this).css("width","200px");
$(this).css("height","200px");

    });


    $("#imgid").click(function(){

        //    $(this).slideUp();
        $(this).css("width","500px");
        $(this).css("height","500px");
        
            });

        
$("#inputid").mouseleave(function(){

    $(this).css("background","yellow");
    
    });

    
$("#inputidmouseenter").mouseleave(function(){

    $(this).css("background","yellow");
    
    });

});

