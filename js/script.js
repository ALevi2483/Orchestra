// ========================================
// MOBILE NAVIGATION
// ========================================

const MOBILE_BREAKPOINT = 1200;

function toggleMenu() {
  const nav = document.getElementById("mainNav");
  const menuButton = document.querySelector(".menu-toggle");

  if (!nav || !menuButton) {
    return;
  }

  const isOpen = nav.classList.toggle("show");

  menuButton.setAttribute(
    "aria-expanded",
    isOpen ? "true" : "false"
  );
}


// ========================================
// CLOSE MOBILE MENU
// ========================================

function closeMenu() {
  const nav = document.getElementById("mainNav");
  const menuButton = document.querySelector(".menu-toggle");

  if (!nav || !menuButton) {
    return;
  }

  nav.classList.remove("show");
  menuButton.setAttribute("aria-expanded", "false");
}


// ========================================
// PAGE LOAD
// ========================================

document.addEventListener("DOMContentLoaded", function () {

  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll("#mainNav a");

  // Set initial accessibility state
  if (menuButton) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-controls", "mainNav");
  }


  // Close mobile menu after selecting a navigation link
  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        closeMenu();
      }

    });

  });

});


// ========================================
// WINDOW RESIZE
// ========================================

// Close the mobile menu when switching
// from mobile/tablet layout to desktop layout.

window.addEventListener("resize", function () {

  if (window.innerWidth > MOBILE_BREAKPOINT) {
    closeMenu();
  }

});


// ========================================
// KEYBOARD ACCESSIBILITY
// ========================================

// Press Escape to close the mobile navigation.

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    const nav = document.getElementById("mainNav");

    if (nav && nav.classList.contains("show")) {

      closeMenu();

      const menuButton = document.querySelector(".menu-toggle");

      if (menuButton) {
        menuButton.focus();
      }

    }

  }

});
