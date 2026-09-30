// Order Now button
const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        const foodName = button.parentElement.querySelector("h3").textContent;
        alert(`You ordered ${foodName} - ₦${foodPrice}`);
});
