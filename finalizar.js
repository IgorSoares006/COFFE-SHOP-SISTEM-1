// Função para carregar os produtos do pedido e calcular o total
window.onload = function() {
    const orderItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const orderItemsList = document.getElementById("order-items");
    const totalPriceElement = document.getElementById("total-price");
    let total = 0;

    // Adiciona os itens do pedido na lista
    orderItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        orderItemsList.appendChild(li);
        total += item.price;
    });

    // Atualiza o total na tela
    totalPriceElement.innerText = total.toFixed(2);

    // Função para adicionar a taxa de entrega quando a checkbox for marcada
    const deliveryFeeCheckbox = document.getElementById("delivery-fee-checkbox");
    deliveryFeeCheckbox.addEventListener("change", function() {
        let updatedTotal = total;
        if (deliveryFeeCheckbox.checked) {
            updatedTotal += 2.00; // Adiciona a taxa de entrega
        }
        totalPriceElement.innerText = updatedTotal.toFixed(2);
    });

    // Função para finalizar o pagamento
    const finalizeButton = document.getElementById("finalize-payment");
    finalizeButton.addEventListener("click", function() {
        alert("Pagamento finalizado com sucesso!");
        // Redirecionar para página de agradecimento ou outra ação
        window.location.href = "fim.html";
    });
}
