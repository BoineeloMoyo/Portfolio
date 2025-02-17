document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const projectGrids = document.querySelectorAll('.project-grid');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hide all grids
            projectGrids.forEach(grid => grid.classList.remove('active'));

            // Show selected grid
            const category = button.getAttribute('data-category');
            document.getElementById(category).classList.add('active');
        });
    });
});
let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down → Hide navbar
    navbar.classList.add("nav-hidden");
  } else {
    // Scrolling up → Show navbar
    navbar.classList.remove("nav-hidden");
  }
  lastScrollY = window.scrollY;
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }

  function closeMenu() {
    document.querySelector(".nav-links").classList.remove("active");
  }