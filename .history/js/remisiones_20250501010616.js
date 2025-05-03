document.getElementById("formRemision").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const producto = this.producto.value;
    const cantidad = this.cantidad.value;
    const fecha = this.fecha.value;
    const proveedor = this.proveedor.value;
    const observaciones = this.observaciones.value;
  
    const tabla = document.getElementById("tablaRemisiones");
    const fila = document.createElement("tr");
  
    fila.innerHTML = `
      <td>${producto}</td>
      <td>${cantidad}</td>
      <td>${fecha}</td>
      <td>${proveedor}</td>
      <td><button onclick="eliminarFila(this)">Eliminar</button></td>
    `;
  
    tabla.appendChild(fila);
    this.reset();
  });
  
  function eliminarFila(btn) {
    const fila = btn.parentNode.parentNode;
    fila.remove();
  }
  