document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Here, you would typically send a request to your SAP server for authentication
    // and handle the response accordingly.

    // For a basic example, you can just show an alert:
    alert(`Logging in with username: ${username}`);
});
