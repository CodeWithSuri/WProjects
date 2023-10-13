jQuery(function(){

    $("#loginbtnid").on("click",function(){


        //Getting the value from Html element using val() method in Jquery
        let usernameval= $("#usernameid").val();
        
        let passwordval= $("#passwordid").val();
        
        //Write the contnet to any Html element using the text() method in Jquery
        if(usernameval==""){
            $("#Usernameerrorid").text("Username is required").css("color","red");
        }else{

            $("#Usernameerrorid").text("");
           // $("#Usernameerrorid").hide();
            
        }


        //Write the HTML contnet to any Html element using the html() method in Jquery
        if(passwordval==""){
            $("#passworderrorid").html("<b> Password is required </b>").css("color","red");
        }else{

            $("#passworderrorid").text("");
           // $("#Usernameerrorid").hide();
            
        }

        


    });

// reading the element values using the attr() method 
    $("#btnid").on("click",function(){

      let websiteUrl=  $("#atagid").attr("href");

      let userid=  $("#atagid").attr("userid");

      alert(websiteUrl);
      alert(userid);

    });
// Setting  the element values using the attr() method 
$("#chckbtnid").on("click",function(){

    
$("input[type='checkbox']").attr("checked","checked");

  });


});