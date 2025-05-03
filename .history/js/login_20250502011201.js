document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Validación del login
    if (username === "admin" && password === "1234") {
      window.location.href = "views/dashboard.html"; // Redirige al panel principal
    } else {
      // Usamos SweetAlert2 para mostrar un mensaje de error
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Usuario o contraseña incorrectos',
        confirmButtonText: 'Aceptar'
      });
    }
  });
  