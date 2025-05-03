document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Aquí validamos las credenciales (esto es solo un ejemplo)
    if (username === "admin" && password === "admin123") {
        window.location.href = "dashboard.html"; // Redirige al Dashboard
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
});
