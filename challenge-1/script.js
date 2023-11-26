"use strict";
(function () {
  const navbar = document.querySelector(".navbar");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  window.onresize = (event) => {
    if (screen.width <= 767) {
      navbar.style.display = "none";
    } 
    else {
        navbar.style.display = "block";
    }
  };

  if (navbar && hamburgerMenu) {
    hamburgerMenu.addEventListener("click", () => {
      if (navbar.style.display === "block") {
        navbar.style.display = "none";
      } else {
        navbar.style.display = "block";
      }
    });
  }
})();
