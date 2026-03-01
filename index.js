const hedchog = document.getElementById("hedchog");
const mylabel = document.getElementById("debug");

let hedgeY=50;

document.addEventListener("keydown", function (a) {
  if (a.key === "ArrowRight") {
    hedchog.style.left = hedchog.offsetLeft + 10 + "px";
    mylabel.textContent = `${hedchog.style.left}, ${hedchog.style.top}`;
  }

  if (a.key === "ArrowLeft") {
    hedchog.style.left = hedchog.offsetLeft - 10 + "px";
    mylabel.textContent = `${hedchog.style.left}, ${hedchog.style.top}`;
  }

  if (a.key === "ArrowUp") {
    hedgeY = hedgeY-10;
    hedchog.style.top = hedgeY + "px";
    
    mylabel.textContent = `${hedchog.style.left}, ${hedchog.style.top}`;
    // hedchog.style.top = hedchog.offsetBottom + 10 + "px";

  if (a.key === "ArrowDown") {
        hedgeY = hedgeY+10;
    hedchog.style.top = hedgeY + "px";
    //hedchog.style.top = hedchog.offsetTop - 10 + "px";
    
    mylabel.textContent = `${hedchog.style.left}, ${hedchog.style.top}`;

  }
});
