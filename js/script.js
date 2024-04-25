document.addEventListener("DOMContentLoaded", function () {
  // Typed.js initialization
  var typed = new Typed(".typing", {
    strings: [
      "",
      "DevOps Architect",
      "Cloud Engineer",
      "Automation Specialist",
      "CI/CD Expert",
      "Containerization Engineer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Smooth scrolling
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    easing: "easeInOutQuad",
  });

  // Navbar toggle
  const navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", function () {
    document.querySelector(".navbar-collapse").classList.toggle("show");
  });

  // Navbar close on link click
  const navbarLinks = document.querySelectorAll(".navbar-nav li a");
  navbarLinks.forEach(function (navbarLink) {
    navbarLink.addEventListener("click", function () {
      document.querySelector(".navbar-collapse").classList.remove("show");
    });
  });
});
