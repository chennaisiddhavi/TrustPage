document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let isValid = true;

    // Reset previous errors
    clearErrors();

    // Validate email
    if (email === '') {
        showError(document.getElementById('email'), 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError(document.getElementById('email'), 'Invalid email format');
        isValid = false;
    }

    // Validate password
    if (password === '') {
        showError(document.getElementById('password'), 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError(document.getElementById('password'), 'Password must contain at least 6 characters');
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword === '') {
        showError(document.getElementById('confirmPassword'), 'Please confirm your password');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError(document.getElementById('confirmPassword'), 'Passwords do not match');
        isValid = false;
    }

    // If the form is valid, proceed with signup
    if (isValid) {
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                confirm_password: confirmPassword
            })
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'Signup successful') {
                window.location.href = 'loginredtheme.html';
            } else {
                console.error(data);
            }
        })
        .catch(error => console.error('Error:', error));
    }
});

function showError(input, message) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
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
