jQuery(function(){


$("#animatebtnid").on("click",function(){

    $("img").animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        height: "300px"
      } );



});


$("#animatebtnid2").on("click",function(){


  $("img").animate({width: "30%"},10000)
          .animate({height: "500px"});
          // .animate({opacity: 0.4});


});

});