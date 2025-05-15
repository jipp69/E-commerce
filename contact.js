const contactForm = document.getElementById('contact-form');
const contactNameInput = document.getElementById('contact-name');
const contactEmailInput = document.getElementById('contact-email');
const contactMessageInput = document.getElementById('contact-message');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    if (contactNameInput.value.trim() === '') {
        alert('Please enter your name.');
        isValid = false;
    }

    if (contactEmailInput.value.trim() === '') {
        alert('Please enter your email.');
        isValid = false;
    } else if (!isValidEmail(contactEmailInput.value.trim())) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (contactMessageInput.value.trim() === '') {
        alert('Please enter your message.');
        isValid = false;
    }

    if (isValid) {
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
