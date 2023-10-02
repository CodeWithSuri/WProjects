function getuserfoucsedontheinputbox(e){


   e.style.background=e.value;
}

function userAwayFrominputbox(e){

    
    
   e.style.background="skyblue";

   var firstval= Math. floor((Math. random() * 255) + 1);
   var secondval=Math. floor((Math. random() * 255) + 1);
   var thirdval= Math. floor((Math. random() * 255) + 1);
   

   var autotextcolor = "rgb("+firstval+","+secondval+","+thirdval+")";

   e.value=autotextcolor;

}

function userchangedinputbox(e){


    alert("text changed");
}


function userselectedVal(e){

    alert(e.value);

    if(e.value=="CSS"){

        var content=" <br>pealse go through the below link for CSS related information : <br> <a href='https://www.tutorialrepublic.com/css-tutorial/'>Click here</a>";

        document.getElementById("courselinksid").innerHTML  += content;
        
    }else if(e.value=="HTML"){

    }else{

    }
}