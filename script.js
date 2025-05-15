// script.js

// Function to add item to cart
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + ' added to cart!');
}

// Add event listeners to "Add to Cart" buttons
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('add-to-cart')) {
        const productName = event.target.dataset.name;
        const productPrice = parseFloat(event.target.dataset.price);
        addToCart(productName, productPrice);
    }
});
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
        console.log('Add to cart button clicked!'); // ADD THIS LINE
        const productName = event.target.dataset.name;
        const productPrice = parseFloat(event.target.dataset.price);
        addToCart(productName, productPrice);
    }
});
