document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Navbar
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });

                navLinks.forEach((navLink) => {
                    navLink.classList.remove('active');
                });

                link.classList.add('active');
            }
        });
    });
});