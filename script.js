// Order Now button
const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Your order button works!");
    });
});
