// Smooth scroll para links de navegação com ajuste do header fixo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;

        if (!target) return;

        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Atualiza a URL sem recarregar a página
        if(history.pushState) {
            history.pushState(null, null, this.getAttribute('href'));
        }
    });
});

// Toggle menu mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
mobileMenuBtn.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});
