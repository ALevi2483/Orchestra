function toggleMenu() {
  const nav = document.getElementById("mainNav");

  nav.classList.toggle("show");
}

window.addEventListener("resize", function () {

  const nav = document.getElementById("mainNav");

  if (window.innerWidth > 768) {
    nav.classList.remove("show");
  }

});
