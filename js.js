let button = document.getElementById("toggle");
let menu = document.getElementById("all");
let active= false;
button.addEventListener("click", apertura);
function apertura(){
    if(active){
        menu.style.display = "block";
        active = false;
    }
    else{
        menu.style.display = "none";
        active= true;
    }

}
