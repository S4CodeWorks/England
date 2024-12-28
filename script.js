// JavaScript para alternar a classe 'active' no menu hambúrguer
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});
