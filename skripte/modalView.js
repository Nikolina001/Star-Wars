var modal = document.getElementById("modalwindow");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

let inputFullName = document.getElementById("FullName");
let inputAdress = document.getElementById("Adress");
let inputemail = document.getElementById("email");

btn.onclick = function(e) {
    e.preventDefault();
    let bprazno = false;
    
    if(inputFullName.value === "" || inputAdress.value === "" || inputemail.value === "") {
        bprazno = true;
    }
    
    if(!bprazno){
        modal.style.display = "block";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
