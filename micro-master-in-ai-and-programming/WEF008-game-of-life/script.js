//Use DOM to handle the active class change
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.forEach(function(navLinks) {
                navLinks.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
