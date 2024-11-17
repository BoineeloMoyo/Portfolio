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
