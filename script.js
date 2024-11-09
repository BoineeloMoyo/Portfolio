/* =======================  Toggle Icon Navbar =================== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* =======================  Scroll section active link ================================ */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* =======================  Sticky Navbar =================== */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* ========= remove toggle icon and navbar when clicking navbar linkc (scroll)  ============== */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/* =======================  Scroll reveal  ================================ */

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-info, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .proficiency-container, .portfolio-box .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-info h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-info p, .about-content', { origin: 'right' });

/* =======================  Professional pie charts  ================================ */

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=> {
    var dots = elem.getAttribute('data-dots');
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots * marked /100);
    var points = "";
    var rotate = 360/ dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i =  0; i<percent; i++) {
        pointsMarked[i].classList.add('marked')  
        
    }

})



