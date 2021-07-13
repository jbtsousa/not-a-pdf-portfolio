
window.onload = myFunc;

function myFunc() {
  document.getElementById("cont-projetos").onclick = proj;

}

function proj(e) {
    if (e.target.className == 'img-cont') {
        alert(e.target.id);
      }
  
}



