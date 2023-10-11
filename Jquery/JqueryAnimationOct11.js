jQuery(function(){


$("#animatebtnid").on("click",function(){

    $("img").animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
      }, 2500 );

});

});