window.addEventListener('DOMContentLoaded', () => {
    const usuario = localStorage.getItem('usuarioActivo');
    if (!usuario) {
      alert('Debe iniciar sesión para acceder al panel.');
      window.location.href = '../index.html';
    }
  });