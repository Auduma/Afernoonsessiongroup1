
function daterefresh(){
    let seconds = 1000
    let timeout = setTimeout("displaydate",seconds)
}
function displaydate(){
    let sams = new Date()
    document.getElementById("message").innerHTML = sams
    
}