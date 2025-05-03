document.getElementById("formFactura").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const numeroFactura = this.numeroFactura.value;
    const proveedor = this.proveedor.value;
    const monto = parseFloat(this.monto.value);
    const fecha = this.fecha.value;
    const iva = (monto * 0.19).toFixed(2);
  
    const tabla = document.getElementById("tablaFacturas");
    const fila = document.createElement("tr");
  
    fila.innerHTML = `
      <td>${numeroFactura}</td>
      <td>${proveedor}</td>
      <td>$${monto.toFixed(2)}</td>
      <td>$${iva}</td>
      <td>${fecha}</td>
      <td><button onclick="eliminarFila(this)">Eliminar</button></td>
    `;
  
    tabla.appendChild(fila);
    this.reset();
  });
  
  function eliminarFila(btn) {
    const fila = btn.parentNode.parentNode;
    fila.remove();
  }
  