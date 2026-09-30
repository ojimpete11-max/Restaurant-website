const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = button.dataset.price;

        const customerName = prompt("Enter your name:");
        if (!customerName) return;

        const quantity = prompt(`How many ${name} would you like?`);
        if (!quantity) return;

        alert(
            `Order received!\n\n` +
            `Name: ${customerName}\n` +
            `Item: ${name}\n` +
            `Price: ₦${price}\n` +
            `Quantity: ${quantity}`
        );
    });
});
