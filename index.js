let menu = document.getElementById("mobile-menu-container");
let active = false;
function mobClick(){
  active = !active;
  if (active){
    menu.style.display = "flex";
  }
  else{
    menu.style.display = "none";
  }
}