
jQuery(function(){


    $("#headingId").css("color","red");



    $(window).on( "resize", function() {
        $( "body" ).prepend( "<div> width" + $( window ).width() + "</div>" );
      } );
    
      $(window).scroll(function(){

        $("#scrollmsgid").show().fadeOut("slow");
        
      });


});

//old verison
// $(document).ready(function(){


// });