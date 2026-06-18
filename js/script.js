function toggleMenu() {
  const nav = document.getElementById("mainNav");

  nav.classList.toggle("show");
}

// Close menu when screen becomes desktop size
window.addEventListener("resize", function () {

  const nav = document.getElementById("mainNav");

  if (window.innerWidth > 850) {
    nav.classList.remove("show");
  }

});

// Close menu after clicking a navigation link on mobile
document.addEventListener("DOMContentLoaded", function () {

  const navLinks = document.querySelectorAll("#mainNav a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      if (window.innerWidth <= 850) {

        const nav = document.getElementById("mainNav");
        nav.classList.remove("show");

      }

    });

  });

});

// Close menu when ESC key is pressed
document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    const nav = document.getElementById("mainNav");
    nav.classList.remove("show");

  }

});
