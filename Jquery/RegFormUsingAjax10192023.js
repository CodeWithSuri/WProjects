jQuery(function(){


var countrieslistFromjson=[];

//var userinfo='{username:"suri", userid:1}';
    $.ajax({

        url:'https://api.first.org/data/v1/countries',
        headers:{

            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json'
        },
        method:'GET',
        dataType:'json',
       // data:userinfo,
       data:'',
        success:function(response){

            //alert("ajax call is working");

            if(response.status =='OK'){

                //alert("Got the valid data");

                var countriesDataFromJson = response.data;
                console.log(countriesDataFromJson);

                $.each(countriesDataFromJson,function(key,value){
                  
                    countrieslistFromjson.push(value.country);
                });
                console.log(countrieslistFromjson);


                //Now we are adding the counties names to dropdown

                //var fname="suri";
                //var lastname="surendra";
                //var fullname= fname +"kumar "+lastname;

                var optionsforcountryDropdown="";
                $.each(countrieslistFromjson,function(countryid,countryname){
                   // optionsforcountryDropdown += "<option value='"+countryid+"' > "+countryname+"</option>";

                    optionsforcountryDropdown += `<option value='${countryid}'>${countryname} </option>`;


                });

                //$("#countrydropdownid").append("<option value='"+countryid+"'>"+countryname+"</option>");

               $("#countrydropdownid").append(optionsforcountryDropdown);


            }else{

                alert("Got the Invalid data");
            }


        },
        error:function(error){
            alert("ajax call  is  not working due to some error");
        },
    });


    function getcheckboxSelectedValues(){

        var selectedHobies = $('.hobbies:checked').map(function(_, el) {
            return $(el).val();
        }).get();
        
        return selectedHobies;
    }

    $("#fnameid").on("blur",function(){


        var pattern = /^[a-z0-9_-]{5,8}$/;
    if(pattern.test($(this).val())){
        $("#errorFirstname").hide();
    }else{
        $("#errorFirstname").show().text("First name must have  one small char and one number one sepecial char -_ also Username will be min 5 and max 8");
    }

    });


    $("#lnameid").on("keyup",function(){


        var pattern = /^[a-z0-9_-]{4,6}$/;
    if(pattern.test($(this).val())){
        $("#errorLastname").hide();
    }else{
        $("#errorLastname").show().text("Last must have  one small char and one number one sepecial char -_ also Username will be min 4 and max 6");
    }

    });


    $("#emailid").on("change",function(){


        var pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(pattern.test($(this).val())){
        $("#errorEmail").hide();
    }else{
        $("#errorEmail").show().text("Please enter valid email address");
    }

    });


    
    $("#phnoid").on("keydown",function(){


        var pattern = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if(pattern.test($(this).val())){
        $("#errorPhno").hide();
    }else{
        $("#errorPhno").show().text("Please enter valid phone number");
    }

    });


    $("#addressid").on("change",function(){


        var pattern = /^[#.0-9a-zA-Z\s, ,-]+$/;
    if(pattern.test($(this).val())){
        $("#errorAddress").hide();
    }else{
        $("#errorAddress").show().text("Please enter valid address");
    }

    });

    
    $("#Socialnetworklinkid").on("keyup",function(){


        var pattern = /^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    if(pattern.test($(this).val())){
        $("#errorSocialNetworklink").hide();
    }else{
        $("#errorSocialNetworklink").show().text("Please enter valid social link");
    }

    });

    
    $("#passwordid").on("keyup",function(){


        var pattern =/^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/; 
           if(pattern.test($(this).val())){
        $("#errorpassword").hide();
    }else{
        $("#errorpassword").show().text("Please enter valid password");
    }

    });


        
    $("#cnpasswordid").on("keyup",function(){


        var pwdVal=  $("#passwordid").val();
        
        var cnpwdVal=  $("#cnpasswordid").val();

        if(pwdVal ==cnpwdVal ){
        $("#errorcnpassword").hide();
    }else{
        $("#errorcnpassword").show().text("Confrim password is not match");
    }

    });

    

   


    $("#regFormid").on("submit",function(event){

        alert("User clicked on user Reg button");

        //radio button
       // var radioValue = $("input[name='gender']:checked").val();
        
       //store form values in variables 
        var fname =$("#fnameid").val();
        var lname =$("#lnameid").val();
        var email =$("#emailid").val();
        var phno =$("#phnoid").val();
        var address =$("#addressid").val();
        var socaillink =$("#Socialnetworklinkid").val();
        var pwd =$("#passwordid").val();
        var cnpwd =$("#cnpasswordid").val();
        var hobbies =getcheckboxSelectedValues();
        var gender =$("input[name='gender']:checked").val();
        var countries =$("#countrydropdownid").val();

        //then validate variables data
        
        if(fname==""){

            $("#errorFirstname").show();
        }else{
            $("#errorFirstname").hide();
        }


        if(lname==""){

            $("#errorLastname").show();
        }else{
            $("#errorLastname").hide();
        }
        
        if(email==""){

            $("#errorEmail").show();
        }else{
            $("#errorEmail").hide();
        }
        
        if(phno==""){

            $("#errorPhno").show();
        }else{
            $("#errorPhno").hide();
        }
        
        if(address.trim()==""){

            $("#errorAddress").show();
        }else{
            $("#errorAddress").hide();
        }
        
        if(socaillink==""){

            $("#errorSocialNetworklink").show();
        }else{
            $("#errorSocialNetworklink").hide();
        }

        
        if(pwd==""){

            $("#errorpassword").show();
        }else{
            $("#errorpassword").hide();
        }

        
        if(cnpwd==""){

            $("#errorcnpassword").show();
        }else{
            $("#errorcnpassword").hide();
        }
        
        if(gender==undefined || gender=='undefined'){

            $("#errorGender").show();
        }else{
            $("#errorGender").hide();
        }
        
        if(hobbies.length==0){

            $("#errorHobbies").show();
        }else{
            $("#errorHobbies").hide();
        }
        
        if(countries=='Select country'){

            $("#errorCountry").show();
        }else{
            $("#errorCountry").hide();
        }
        


        
        event.preventDefault();

    });




});