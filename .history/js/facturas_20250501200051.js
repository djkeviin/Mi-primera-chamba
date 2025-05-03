document.getElementById("formFactura").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const proveedor = this.proveedor.value;
    const importe = this.importe.value;
    const fecha = this.fechaEmision.value;
  
    const tabla = document.getElementById("tablaFacturas");
    const fila = document.createElement("tr");
  
    fila.innerHTML = `
      <td>${proveedor}</td>
      <td>$${parseFloat(importe).toFixed(2)}</td>
      <td>${fecha}</td>
      <td><button onclick="eliminarFila(this)">Eliminar</button></td>
    `;
  
    tabla.appendChild(fila);
    this.reset();
  });
  
  function eliminarFila(btn) {
    btn.closest("tr").remove();
  }
  