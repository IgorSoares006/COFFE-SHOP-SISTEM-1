document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const finalizeOrderButton = document.getElementById("finalize-order");
    const logoutButton = document.getElementById("logout-btn"); // Obtém o botão de logout
    let totalPrice = 0;

    // Array para armazenar os itens do carrinho
    let cartItems = [];

    // Função para adicionar um item ao carrinho
    function addToCart(productName, productPrice) {
        const price = parseFloat(productPrice);
        if (isNaN(price)) {
            console.error("Erro: o preço do produto não é um número válido");
            return;
        }

        // Cria um objeto do produto com nome e preço
        const product = {
            name: productName,
            price: price
        };
        cartItems.push(product);

        // Cria e exibe o item no carrinho
        const listItem = document.createElement("li");
        listItem.textContent = `${productName} - R$ ${price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);

        // Atualiza o total
        totalPrice += price;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    // Captura os botões "Adicionar ao Carrinho"
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productDiv = button.closest('.product');
            const productName = productDiv.getAttribute('data-name');
            const productPrice = productDiv.getAttribute('data-price');
            
            addToCart(productName, productPrice);
        });
    });

    // Função para salvar os itens no localStorage
    function saveCartItems() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    // Função para finalizar o pedido
    if (finalizeOrderButton) {
        finalizeOrderButton.addEventListener("click", () => {
            if (cartItems.length > 0) {
                saveCartItems();
                window.location.href = "finalizar.html";
            } else {
                alert("O carrinho está vazio. Adicione itens ao carrinho.");
            }
        });
    }

    // Função para sair da tela de pedidos e voltar para a tela de login
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            window.location.href = "login.html";  
        });
    } else {
        console.error("Erro: Botão de logout não encontrado.");
    }
});
