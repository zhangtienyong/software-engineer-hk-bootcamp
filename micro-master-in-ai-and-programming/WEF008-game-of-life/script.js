document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Navbar
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            navLinks.forEach((navLink) => {
                navLink.classList.remove('active');
            });

            link.classList.add('active');
        });
    });

});