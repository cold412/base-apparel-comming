
const btn = document.getElementById("btn");



btn.onclick = test;

function  test () {
   document.getElementById("validation").style.display = "flex";
   setTimeout(test2,1000);
}



function  test2 () {
   document.getElementById("validation").style.display = "none";
}


