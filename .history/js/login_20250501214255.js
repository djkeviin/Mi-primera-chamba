<script>
  document.getElementById("loginBtn").addEventListener("click", function () {
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("contrasena").value;

    // Aquí puedes agregar una validación real
    if (user === "admin" && pass === "1234") {
      window.location.href = "views/dashboard.html";
    } else {
      alert("Credenciales incorrectas.");
    }
  });
</script>
