document.getElementById("formOrden").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const numero = this.numero.value;
    const proveedor = this.proveedor.value;
    const fecha = this.fecha.value;
    const detalle = this.detalle.value;
  
    const nuevaOrden = {
      numero,
      proveedor,
      fecha,
      detalle
    };
  
    // Guardar orden en localStorage
    let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
    ordenes.push(nuevaOrden);
    localStorage.setItem("ordenes", JSON.stringify(ordenes));
  
    // Mostrar en la tabla
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
  
  window.addEventListener("DOMContentLoaded", () => {
    const tabla = document.getElementById("tablaRequerimientos");
    const requerimientos = JSON.parse(localStorage.getItem("requerimientos")) || [];
  
    requerimientos.forEach((req, index) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td><input type="checkbox" name="requerimiento" value="${index}"></td>
        <td>${req.material}</td>
        <td>${req.cantidad}</td>
        <td>${req.area}</td>
        <td>${req.fecha}</td>
        <td>${req.estado}</td>
      `;
      tabla.appendChild(fila);
    });
  
    // Mostrar órdenes guardadas
    const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
    const tablaOrdenes = document.getElementById("tablaOrdenes");
    ordenes.forEach(orden => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${orden.numero}</td>
        <td>${orden.proveedor}</td>
        <td>${orden.fecha}</td>
        <td>${orden.detalle}</td>
        <td><button onclick="eliminarOrden(this)">Eliminar</button></td>
      `;
      tablaOrdenes.appendChild(fila);
    });
  });