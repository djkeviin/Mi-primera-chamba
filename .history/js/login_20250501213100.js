document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const usuario = document.getElementById('usuario').value.trim();
    const clave = document.getElementById('clave').value.trim();
  
    // Credenciales de ejemplo (puedes cambiar o validar contra base de datos)
    const credencialesValidas = {
      usuario: 'admin',
      clave: '1234'
    };
  
    if (usuario === credencialesValidas.usuario && clave === credencialesValidas.clave) {
      // Almacenar sesión (opcional)
      localStorage.setItem('usuarioActivo', usuario);
      // Redirigir al panel principal
      window.location.href = 'views/dashboard.html';
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  });