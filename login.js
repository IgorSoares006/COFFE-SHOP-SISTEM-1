document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");
  

    // Usuário e senha fixos
    const fixedUsername = "admin";
    const fixedPassword = "1234";

    // Validação do login
    if (username === fixedUsername && password === fixedPassword) {
        window.location.href = "pedidos.html"; // Redireciona para o menu após login
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos!";
    }

    
});

document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".carousel-images img");

    if (images.length === 0) {
        console.error("Nenhuma imagem encontrada no carrossel.");
        return;
    }

    function changeImage() {
        images[currentImageIndex].classList.remove("active");
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add("active");
    }

    // Troca a imagem a cada 3 segundos
    setInterval(changeImage, 3000);
});



