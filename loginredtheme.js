document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!form || !emailInput || !passwordInput) {
        console.error('Form or input elements not found');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        let isValid = true;

        // Reset previous errors
        clearErrors();

        // Validate email
        if (email === '') {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError(emailInput, 'Invalid email format');
            isValid = false;
        }

        // Validate password
        if (password === '') {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else if (password.length < 6) {
            showError(passwordInput, 'Password must contain at least 6 characters');
            isValid = false;
        }

        // If the form is valid, proceed with login
        if (isValid) {
            // Perform AJAX request to the server
            fetch('http://localhost:3000/login', {  // Update to your server's port
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then(response => response.text())
            .then(data => {
                if (data === 'Login successful') {
                    window.location.href = 'registration.html';
                } else {
                    console.error(data);
                    showError(form, data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showError(form, 'An error occurred. Please try again later.');
            });
        }
    });

    function showError(input, message) {
        const errorDiv = input.nextElementSibling;
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        } else {
            console.error('Error element not found for input:', input);
        }
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => {
            error.textContent = '';
            error.style.display = 'none';
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
