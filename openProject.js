
window.onload = myFunc;
var openedProj = document.getElementById('openproj');


function myFunc() {
  document.getElementById("cont-projetos").onclick = proj;
}

function proj(e) {
    if (e.target.className == 'img-cont') {
      var id = e.target.id;
      openedProj.style.display = "inline";
      openedProj.style.opacity = "100%";

      openedProj.className=id;
  
      }
      ifOpen();

  
}

function closeProj(){
  if(openedProj.style.display == "inline"){
    openedProj.style.display = "none";
    openedProj.style.opacity = "0%";
    openedProj.className="";
  }

}





