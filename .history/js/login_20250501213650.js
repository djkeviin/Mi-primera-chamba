document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Puedes validar aquí si quieres un login real
    if (username === "admin" && password === "1234") {
      window.location.href = "dashboard.html"; // Redirige al panel principal
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });