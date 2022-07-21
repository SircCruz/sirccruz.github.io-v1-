
var scrollFunction = function(){
    var y = window.scrollY;
    if(y > 800){
        document.getElementById("navigation").style.display = "block";
    }
    else{
        document.getElementById("navigation").style.display = "none";
    }
  }
  
  window.addEventListener("scroll", scrollFunction);