
const hedchog = document.getElementById("hedchog");
document.addEventListner("keydown", function (a) {
  if(a.key === "ArrowRight") player.style.left = player.offsetLeft + 10 + "px";
  if(a.key === "ArrowLeft") player.style.left = player.offsetLeft + 10 + "px";
  if(a.key === "ArrowUp") player.style.top = player.offsetTop + 10 + "px";
  if(a.key === "ArrowDown") player.style.top = player.offsetTop + 10 + "px";


    }
