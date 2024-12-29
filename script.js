// Seleciona os elementos do DOM necessários
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const closeMenuButton = document.getElementById("close-menu"); // Botão de fechar

// Função para alternar o estado do menu
function toggleMenu() {
    navLinks.classList.toggle("active"); // Adiciona ou remove a classe 'active'
    hamburgerMenu.classList.toggle("open"); // Muda o ícone do hambúrguer para o estado aberto/fechado
}

// Fecha o menu automaticamente ao clicar em um link ou no botão "X"
function closeMenu() {
    navLinks.classList.remove("active"); // Remove a classe 'active'
    hamburgerMenu.classList.remove("open"); // Restaura o ícone do hambúrguer
}

// Navegação suave ao clicar em um link
function smoothScroll(event) {
    event.preventDefault(); // Previne o comportamento padrão do clique
    const targetId = event.target.getAttribute("href").substring(1); // Obtém o ID do alvo
    const targetElement = document.getElementById(targetId); // Seleciona o elemento alvo

    // Rola suavemente até o elemento
    window.scrollTo({
        top: targetElement.offsetTop - 70, // Ajusta o deslocamento para evitar sobreposição pelo cabeçalho
        behavior: "smooth"
    });

    closeMenu(); // Fecha o menu após o clique
}

// Eventos
hamburgerMenu.addEventListener("click", toggleMenu); // Alterna o menu ao clicar no ícone
navItems.forEach(link => link.addEventListener("click", smoothScroll)); // Adiciona evento de clique suave para cada link

// Evento de fechamento do menu ao clicar no botão "X"
if (closeMenuButton) {
    closeMenuButton.addEventListener('click', closeMenu);
}
