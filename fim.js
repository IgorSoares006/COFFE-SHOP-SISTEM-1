document.addEventListener("DOMContentLoaded", function() {
    // Carregar os itens do carrinho do localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const orderItemsList = document.getElementById("order-items");
    const orderTotal = document.getElementById("order-total");
    const paymentMethod = document.getElementById("payment-method");
    const orderTime = document.getElementById("order-time");

    // Preencher a lista de itens do pedido
    let total = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        orderItemsList.appendChild(listItem);
        total += item.price;
    });

    // Preencher o total do pedido
    orderTotal.textContent = total.toFixed(2);

    // Preencher a forma de pagamento (exemplo simples)
    paymentMethod.textContent = "Dinheiro";  // Exemplo, você pode ajustar conforme a escolha do usuário

    // Preencher a data e hora do pedido
    const now = new Date();
    orderTime.textContent = now.toLocaleString();

    // Função para salvar o pedido como PDF
    document.getElementById("save-pdf").addEventListener("click", function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Adicionar conteúdo ao PDF
        doc.setFontSize(20);
        doc.text("Coffee Shop", 20, 20);
        doc.setFontSize(16);
        doc.text("Resumo do Pedido", 20, 30);

        let y = 40;
        cartItems.forEach(item => {
            doc.text(`${item.name} - R$ ${item.price.toFixed(2)}`, 20, y);
            y += 10;
        });

        doc.text(`Total: R$ ${total.toFixed(2)}`, 20, y);
        y += 10;
        doc.text(`Forma de Pagamento: Dinheiro`, 20, y);
        y += 10;
        doc.text(`Data e Hora: ${now.toLocaleString()}`, 20, y);

        // Gerar o PDF e permitir o download
        doc.save("nota_fiscal_coffee_shop.pdf");
    });

    // Função para redirecionar para a tela de pedidos
    document.getElementById("new-order").addEventListener("click", function() {
        window.location.href = "pedidos.html";  // Redireciona para a página de pedidos
    });
});
