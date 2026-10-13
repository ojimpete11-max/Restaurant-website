const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {
    button.addEventListener("click", function () {
        const name = this.dataset.name;
        const price = this.dataset.price;

        alert(`You selected ${name}. Price: ₦${price}`);
    });
});
