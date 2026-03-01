const hedchog = document.getElementById("hedchog");
const mylabel = document.getElementById("debug");

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
    hedchog.style.top = hedchog.offsetTop + 10 + "px";
    mylabel.textContent = `${hedchog.style.left}, ${hedchog.style.top}`;

  }

  if (a.key === "ArrowDown") {
    hedchog.style.top = hedchog.offsetTop - 10 + "px";
    mylabel.textContent = `${hedchog.style.left}, ${hedchog.style.top}`;
    // hedchog.style.top = hedchog.offsetBottom + 10 + "px";
  }
});
