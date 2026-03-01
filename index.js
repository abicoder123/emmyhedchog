const hedchog = document.getElementById("hedchog");

document.addEventListener("keydown", function (a) {
  if (a.key === "ArrowRight") {
    hedchog.style.left = hedchog.offsetLeft + 10 + "px";
  }

  if (a.key === "ArrowLeft") {
    hedchog.style.left = hedchog.offsetLeft - 10 + "px";
  }

  if (a.key === "ArrowUp") {
    hedchog.style.top = hedchog.offsetTop - 10 + "px";
  }

  if (a.key === "ArrowDown") {
    hedchog.style.top = hedchog.offsetTop + 10 + "px";
  }
});
