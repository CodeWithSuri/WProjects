function displpayCurrentYear(){

    alert("button");
   // window.location.href="http://www.google.com";
}


//mouse events
document.getElementById("externalbutton").onclick = displpayCurrentYear;

document.getElementById("externalbutton").onmouseleave = displpayCurrentYear;
document.getElementById("externalbutton").onmouseenter = displpayCurrentYear;

document.getElementById("externalbutton").onmousedown = displpayCurrentYear;
document.getElementById("externalbutton").onmouseup = displpayCurrentYear;

//keyboard events


function userpressedthekeyup(){
    alert("key up");
}

function userpressedthekeydown(){
    alert("key down");
}

function userpressedthekey(){
    alert("key pressed");
}

function userawyfromtextbox(){
    alert("onblur");
}
function userfocusedtextbox(test){
    test.style.background = "yellow";
    
}

document.getElementById("username").onkeydown=userpressedthekeydown;

document.getElementById("username").onkeyup=userpressedthekeyup;

document.getElementById("username").onblur=userawyfromtextbox;

//depricated
//document.getElementById("username").onkeypress=userpressedthekey;




