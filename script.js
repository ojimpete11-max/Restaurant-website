// Order Now button
const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {
    button.addEventListener("click", function () {
        const itemName = this.dataset.name;
        const itemPrice = this.dataset.price;

        alert(`You ordered ${itemName} for ₦${itemPrice}`);
    });
});
