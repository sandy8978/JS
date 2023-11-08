document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        document.getElementById("message").textContent = "Passwords do not match.";
    } else {
        document.getElementById("message").textContent = "Registration successful!";
        // You can add code here to send registration data to a server for further processing.
    }
});
