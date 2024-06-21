function validateForm() {
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Reset error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    var isValid = true;

    // Validate username
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required";
        isValid = false;
    }

    // Validate email
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        isValid = false;
    }

    // Validate password
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent = "Please confirm your password";
        isValid = false;
    } else if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Basic email validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
