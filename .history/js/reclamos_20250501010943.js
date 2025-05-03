document.getElementById("formReclamo").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const producto = this.producto.value;
    const motivo = this.motivo.value;
    const detalles = this.detalles.value;
    const estado = this.estado.value;
  
    const tabla = document.getElementById("tablaReclamos");
    const fila = document.createElement("tr");
  
    fila.innerHTML = `
      <td>${producto}</td>
      <td>${motivo}</td>
      <td>${detalles}</td>
      <td>${estado}</td>
      <td>
        <button onclick="cambiarEstado(this)">Cambiar Estado</button>
        <button onclick="eliminarFila(this)">Eliminar</button>
      </td>
    `;
  
    tabla.appendChild(fila);
    this.reset();
  });
  
  function cambiarEstado(btn) {
    const fila = btn.parentNode.parentNode;
    const estadoCelda = fila.cells[3];
    estadoCelda.textContent = estadoCelda.textContent === "Pendiente" ? "Resuelto" : "Pendiente";
  }
  
  function eliminarFila(btn) {
    const fila = btn.parentNode.parentNode;
    fila.remove();
  }
  