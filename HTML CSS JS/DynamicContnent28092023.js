function countrybuttononlcick(){

    document.getElementById("countrylistDivid").style="dispaly:block";

    var countrylist= ["India","China","Japan","America","Bali"];

    var options="";

    countrylist.map((val,id)=>{

        options +=`<option value="${val}" id="${id}"> ${val} </option>`
    });

    document.getElementById("counrylistselect").innerHTML=options;


    alert("clicked");
}
