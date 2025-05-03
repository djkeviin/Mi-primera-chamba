document.getElementById("formPago").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const orden = this.orden.value;
    const proveedor = this.proveedor.value;
    const monto = parseFloat(this.monto.value).toFixed(2);
    const fecha = this.fecha.value;
  
    const tabla = document.getElementById("tablaPagos");
    const fila = document.createElement("tr");
  
    fila.innerHTML = `
      <td>${orden}</td>
      <td>${proveedor}</td>
      <td>$${monto}</td>
      <td>${fecha}</td>
      <td><button onclick="eliminarFila(this)">Eliminar</button></td>
    `;
  
    tabla.appendChild(fila);
    this.reset();
  });
  
  function eliminarFila(btn) {
    btn.closest("tr").remove();
  }
  