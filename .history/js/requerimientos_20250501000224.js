document.getElementById("formRequerimiento").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const material = this.material.value;
    const cantidad = this.cantidad.value;
    const area = this.area.value;
  
    const tabla = document.getElementById("tablaRequerimientos");
    const fila = document.createElement("tr");
  
    fila.innerHTML = `
      <td>${material}</td>
      <td>${cantidad}</td>
      <td>${area}</td>
      <td><button onclick="eliminarFila(this)">Eliminar</button></td>
    `;
  
    tabla.appendChild(fila);
    this.reset();
  });
  
  function eliminarFila(btn) {
    const fila = btn.parentNode.parentNode;
    fila.remove();
  }
  