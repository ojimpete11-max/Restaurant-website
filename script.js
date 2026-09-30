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
        `Thanks, ${customerName}! You ordered ${quantity} x ${name} for ${price} each.`
    );
    }
    });
});
