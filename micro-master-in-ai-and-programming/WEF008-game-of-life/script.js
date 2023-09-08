// Use DOM to handle the active class change
document.addEventListener('DOMContentLoaded', () => {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.forEach(function(navLinks) {
                navLinks.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

// Scroll Animation
window.addEventListener('scroll', () => {
    document.body.style.setProperty(
        '--scroll',
        window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
});
