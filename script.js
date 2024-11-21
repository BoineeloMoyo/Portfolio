/* =======================  Toggle Icon Navbar =================== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* =======================  Scroll Section Active Link ================================ */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    /* =======================  Sticky Navbar =================== */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* ========= Remove toggle icon and navbar when clicking navbar links (scroll) ============== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* =======================  Scroll Reveal  ================================ */

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-info, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .proficiency-container, .portfolio-box .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-info h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-info p, .about-content', { origin: 'right' });
