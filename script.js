document.addEventListener('DOMContentLoaded', () => {
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');
    const quantityInput = document.getElementById('quantity');
    const loginBtn = document.querySelector('.btn-login');
    const registerBtn = document.querySelector('.btn-register');

    // Functionality for the quantity selector
    decreaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    // Example functionality for buttons
    loginBtn.addEventListener('click', () => {
        alert('Login button clicked! Redirecting to login page...');
        // window.location.href = '/login'; // Uncomment to redirect
    });

    registerBtn.addEventListener('click', () => {
        alert('Register button clicked! Redirecting to registration page...');
        // window.location.href = '/register'; // Uncomment to redirect
    });
});