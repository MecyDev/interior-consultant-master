const open = document.getElementById("menu-open");
const close = document.getElementById("menu-close");

open.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.replace("visible-none", "visible");
});

close.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.replace("visible", "visible-none");
});
