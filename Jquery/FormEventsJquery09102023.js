jQuery(function () {


    $("#usernameid").on("change", function () {

        let username = $("#usernameid").val();

        //let usernameval= $(this).val();

        if (username.length < 6 || username.length > 8) {

            //alert("required username length should be min 6 and max 8");
            $("#usernameerror").text("Required username length should be min 6 and max 8").css("color", "red");
        } else {

            //alert("username is having valid length");
            $("#usernameerror").text("Username is having valid length").css("color", "green");
        }

    });



    $("#passwordid").on("keyup", function () {

        let pwdval = $(this).val();

        if (pwdval.length < 6 || pwdval.length > 8) {

            //alert("required pwd length should be min 6 and max 8");
            $("#pwderror").text("Required pwd length should be min 6 and max 8").css("color", "red");
        } else {

            //alert("username is having valid length");
            $("#pwderror").text("Pwd is having valid length").css("color", "green");
        }


    });


    $("#reasonid").on("focus", function () {

        let reasonval = $(this).val();

        if (reasonval == '') {

            $("#reasonerror").text("Must fill the reason!  from focus").css("color", "red");
        } else {

            $("#reasonerror").text("");
        }
    });


    
    $("#reasonid").on("blur", function () {

        let reasonval = $(this).val();

        if (reasonval == '') {

            $("#reasonerror").text("Must fill the reason! from blur").css("color", "red");
        } else {

            $("#reasonerror").text("");
        }
    });


    $("#roleid").on("change", function () {

        alert("role changed");

    });


    $("#loginformid").on("submit",function(event){


        let usernameval =$("#usernameid").val();
        let reasonVal =$("#reasonid").val();
        let roleval =$("#roleid").val();
        
        var formdataidval= `<label> Username : ${usernameval} </label> <br>
        
        <label> Reason : ${reasonVal} </label> <br>
        <label> Role  : ${roleval} </label>
        `;

        $("#formdataid").html(formdataidval);

        // for stoping the form submition
        event.preventDefault();

    })


});