// checkout.js

const checkoutForm = document.getElementById('checkout-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const orderSummaryDiv = document.getElementById('order-summary');
const summaryItemsList = document.getElementById('summary-items');
const summaryTotal = document.getElementById('summary-order-total');

checkoutForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        alert('Please enter your email.');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (addressInput.value.trim() === '') {
        alert('Please enter your shipping address.');
        isValid = false;
    }

    if (isValid) {
        alert('Thank you for your order!');
        localStorage.removeItem('cart');

        displayOrderSummary();
        checkoutForm.style.display = 'none';
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayOrderSummary() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let orderTotal = 0;

    summaryItemsList.innerHTML = '';

    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        orderTotal += itemTotal;

        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} x ${item.quantity} - $${itemTotal.toFixed(2)}`;
        summaryItemsList.appendChild(listItem);
    });

    summaryTotal.textContent = '$' + orderTotal.toFixed(2);
    orderSummaryDiv.style.display = 'block';
}

orderSummaryDiv.style.display = 'none';