//onload

    //   document.addEventListener("DOMContentLoaded", function(event) {
    //     console.log("document onload");
    //     alert("document onload");
    // });

window.onload = function() {
    alert('Windows onload');
        console.log('Logo has been loaded!!!');
      };

//onunload

window.onunload = (event) => {  
    alert('The page is unloaded');  
        console.log('The page is unloaded');  
    }; 


    window.addEventListener('resize', function(event) {

        this.alert("docuemt reszied");
    }, true);