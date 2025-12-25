// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Highlight active section in nav
    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 100;
        navLinks.forEach(link => {
            const section = document.getElementById(link.getAttribute('href').slice(1));
            if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});