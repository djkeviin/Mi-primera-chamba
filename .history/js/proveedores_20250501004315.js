document.getElementById("formProveedor").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nombre = this.nombre.value;
    const ruc = this.ruc.value;
    const telefono = this.telefono.value;
    const correo = this.correo.value;
  
    const tabla = document.getElementById("tablaProveedores");
    const fila = document.createElement("tr");
  
    fila.innerHTML = `
      <td>${nombre}</td>
      <td>${ruc}</td>
      <td>${telefono}</td>
      <td>${correo}</td>
      <td><button onclick="eliminarProveedor(this)">Eliminar</button></td>
    `;
  
    tabla.appendChild(fila);
    this.reset();
  });
  
  function eliminarProveedor(btn) {
    const fila = btn.parentNode.parentNode;
    fila.remove();
  }
  