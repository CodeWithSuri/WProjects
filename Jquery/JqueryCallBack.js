jQuery(function () {


    $("#buttonid").on("click", function () {


        alert("before callback called");
        $("#descid").slideToggle("slow", function () {

            $("#descid2").text("Callback funcation called");
            alert("callback called");
        });

    });

});