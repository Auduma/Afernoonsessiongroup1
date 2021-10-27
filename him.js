document.getElementById("states").style.display = "none"
document.getElementById("amstates").style.display = "none"
function openorclose(){
    var country= document.getElementById("country").value

    if (country === "Nigeria"){
        document.getElementById("states").style.display = "block" 
        document.getElementById("amstates").style.display = "none"
    }
     else if ( country=== "America") {
            document.getElementById("amstates").style.display = "block"
            document.getElementById("states").style.display = "none"
        }
    
}