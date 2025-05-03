// js/login.js

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lógica de validación (puedes conectar con una API para validación real)
    if (username === "admin" && password === "12345") {
        alert("Login exitoso!");
        window.location.href = 'dashboard.html'; // Redirige al panel principal
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
