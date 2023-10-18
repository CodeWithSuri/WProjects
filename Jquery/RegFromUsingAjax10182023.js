jQuery(function(){


var countrieslistFromjson=[];
    $.ajax({

        url:'https://api.first.org/data/v1/countries',
        headers:{

            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json'
        },
        method:'GET',
        dataType:'json',
        data:'',
        success:function(response){

            alert("ajax call is working");

            if(response.status =='OK'){

                alert("Got the valid data");

                var countriesDataFromJson = response.data;
                console.log(countriesDataFromJson);

                $.each(countriesDataFromJson,function(key,value){
                    countrieslistFromjson.push(value.country);
                });
                console.log(countrieslistFromjson);


                //Now we are adding the counties names to dropdown

                var fname="suri";
                var lastname="surendra";
                var fullname= fname +"kumar "+lastname;

                var optionsforcountryDropdown="";
                $.each(countrieslistFromjson,function(countryid,countryname){
                   // optionsforcountryDropdown += "<option value='"+countryid+"' > "+countryname+"</option>";

                    optionsforcountryDropdown += `<option value='${countryid}'>${countryname} </option>`;


                });

               // $("#countrydropdownid").append("<option value='"+countryid+"'>"+countryname+"</option>");

               $("#countrydropdownid").append(optionsforcountryDropdown);


            }else{

                alert("Got the Invalid data");
            }


        },
        error:function(error){
            alert("ajax call  is  not working due to some error");
        },
    })

});