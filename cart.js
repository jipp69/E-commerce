// cart.js

let cartItemsDiv = document.getElementById('cart-items');
let cartTotalCell = document.getElementById('cart-total');
let itemCountSpan = document.getElementById('item-count');
let summaryTotalSpan = document.getElementById('summary-total');

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    let itemCount = 0;

    cartItemsDiv.innerHTML = '';

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemCount += item.quantity;

        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input"></td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button class="btn btn-danger btn-sm remove-item" data-index="${index}">Remove</button></td>
        `;
        cartItemsDiv.appendChild(row);
    });

    cartTotalCell.textContent = '$' + total.toFixed(2);
    itemCountSpan.textContent = itemCount;
    summaryTotalSpan.textContent = '$' + total.toFixed(2);
}

cartItemsDiv.addEventListener('change', function(event) {
    if (event.target.classList.contains('quantity-input')) {
        let index = parseInt(event.target.dataset.index);
        let newQuantity = parseInt(event.target.value);
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (newQuantity > 0) {
            cart[index].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        }
    }
});

cartItemsDiv.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
        let index = parseInt(event.target.dataset.index);
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
});

displayCart();
