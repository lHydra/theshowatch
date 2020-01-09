import "./index.sass";

function toggleMenu() {
  document
    .getElementById("page-content-wrapper")
    .classList.toggle("menu-toggle");
  document.getElementById("mobile-wrapper").classList.toggle("toggled");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".menu-toggle").addEventListener("click", e => {
    e.preventDefault();
    toggleMenu();
  });
});
