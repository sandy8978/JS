document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-button");
    const loginStatus = document.getElementById("login-status");

    loginButton.addEventListener("click", function () {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Replace these with your actual authentication logic
        if (username === "your_username" && password === "your_password") {
            loginStatus.style.color = "green";
            loginStatus.textContent = "Login successful!";
        } else {
            loginStatus.style.color = "red";
            loginStatus.textContent = "Invalid username or password.";
        }

        loginStatus.style.display = "block";
    });
});
