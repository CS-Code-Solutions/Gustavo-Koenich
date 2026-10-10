document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Manipulação do Formulário de Contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;

            // Montar mensagem para o WhatsApp
            const textoWhatsApp = `Olá, meu nome é ${nome} (Tel: ${telefone}). ${mensagem}`;
            const numeroWhatsApp = '5500000000000'; // Substitua pelo número real com DDI e DDD
            
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;
            
            // Redirecionar para o WhatsApp
            window.open(url, '_blank');
        });
    }
});
