document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    const password = document.querySelector('#password');
    const email = document.querySelector('#email');
    const confirmPassword = document.querySelector('#confirmPassword');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validateInputs();
    });

    function validateInputs() {
        const passwordVal = password.value.trim();
        const emailVal = email.value.trim();
        const confirmPasswordVal = confirmPassword.value.trim();

        if (emailVal === '') {
            setError(email, 'Email is required');
        } else if (!validateEmail(emailVal)) {
            setError(email, 'Please enter a valid email');
        } else {
            setSuccess(email);
        }

        if (passwordVal === '') {
            setError(password, 'Password is required');
        }
        else if(passwordVal.length < 6){
            setError(password, 'Password must contains 6 characters ');
        } else {
            setSuccess(password);
        }

        if (confirmPasswordVal === '') {
            setError(confirmPassword, 'Password is required');
        }
        else if(confirmPasswordVal != passwordVal){
            setError(confirmPassword, 'Please enter a correct password');
        } 
        else {
            setSuccess(confirmPassword);
        }
    }

    function setError(element, message) {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('.error');

        errorElement.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    }

    function setSuccess(element) {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('.error');

        errorElement.innerText = '';
        inputGroup.classList.add('success');
        inputGroup.classList.remove('error');
    }

    function validateEmail(email) {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }
});

function gotoHomePage() {
    window.location.href = "registration.html";
}