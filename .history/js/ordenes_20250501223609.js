document.getElementById("formOrden").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const numero = this.numero.value;
    const proveedor = this.proveedor.value;
    const fecha = this.fecha.value;
    const detalle = this.detalle.value;
  
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${numero}</td>
      <td>${proveedor}</td>
      <td>${fecha}</td>
      <td>${detalle}</td>
      <td><button onclick="eliminarOrden(this)">Eliminar</button></td>
    `;
  
    document.getElementById("tablaOrdenes").appendChild(fila);
    this.reset();
  });
  
  function eliminarOrden(btn) {
    btn.parentNode.parentNode.remove();
  }
  
  window.addEventListener("DOMContentLoaded", function () {
    const tabla = document.getElementById("tablaRequerimientos");
    const requerimientos = JSON.parse(localStorage.getItem("requerimientos")) || [];
  
    requerimientos.forEach(req => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${req.idRequerimiento}</td>
        <td>${req.fecha}</td>
        <td>${req.material}</td>
        <td>${req.cantidad}</td>
      `;
      tabla.appendChild(fila);
    });
  });