function register() {
    var age = document.getElementById("age").value
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    if(age=== ""){
        document.getElementById("popup").innerHTML= "Input Data"
    }
    else if(age <=17 && age>=1){
            alert("omo").getElementById
        }
        // document.getElementById("popup").innerHTML= "You are a Child"
      
    else if(age<=29 && age>=18 ){
        document.getElementById("popup").innerHTML= "You are a Teenager"
    }
    else if (age<=79 && age>=30){
        document.getElementById("popup").innerHTML= "You are an Adult"
    }
    else if(age==="0" || age>=190){
        document.getElementById("popup").innerHTML="Error!!"
    }
    

}
