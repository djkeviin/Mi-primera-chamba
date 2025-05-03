document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Validación del login
    if (username === "admin" && password === "1234") {
      window.location.href = "views/dashboard.html"; // Redirige al panel principal
    } else {
      const errorMessage = document.getElementById("errorMessage");
      errorMessage.style.display = "block"; // Muestra el mensaje de error
    }
  });
  