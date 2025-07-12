// script.js

// We wrap our code in a DOMContentLoaded event listener.
// This ensures the script only runs after the entire HTML page has been loaded.
document.addEventListener('DOMContentLoaded', function() {

    // --- Quantity Selector Logic ---
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');
    const quantityInput = document.getElementById('quantity');

    // This check prevents errors if the elements are not on the page for some reason.
    if (decreaseBtn && increaseBtn && quantityInput) {

        // Event listener for the '-' button
        decreaseBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value, 10);
            
            // Prevent the quantity from going below 1
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        // Event listener for the '+' button
        increaseBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value, 10);
            
            // Increase the value by 1
            quantityInput.value = currentValue + 1;
        });
    }

    // You can add more JavaScript functionality for your site here in the future.

});