const open = document.getElementById("menu-open");
const close = document.getElementById("menu-close");

open.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.style.display = "block";
});

close.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.style.display = "none";
});

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    const menu = document.getElementById("menu");
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
