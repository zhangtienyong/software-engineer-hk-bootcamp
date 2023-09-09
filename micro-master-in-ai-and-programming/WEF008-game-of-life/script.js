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

// Progress
window.addEventListener('scroll', () => {
    document.body.style.setProperty(
        '--scroll',
        window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
});

// IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
