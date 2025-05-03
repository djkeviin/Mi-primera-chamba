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
  
window.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("tablaRequerimientos");
  const requerimientos = JSON.parse(localStorage.getItem("requerimientos")) || [];

  requerimientos.forEach((req, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td><input type="checkbox" name="requerimiento" value="${index}"></td>
      <td>${req.idRequerimiento}</td>
      <td>${req.fecha}</td>
      <td>${req.material}</td>
      <td>${req.cantidad}</td>
    `;
    tabla.appendChild(fila);
  });

  // Manejo del formulario para generar orden de compra
  document.getElementById("formOrdenCompra").addEventListener("submit", function(e) {
    e.preventDefault();

    const seleccionados = Array.from(document.querySelectorAll('input[name="requerimiento"]:checked'))
      .map(input => requerimientos[input.value]);

    if (seleccionados.length === 0) {
      alert("Selecciona al menos un requerimiento.");
      return;
    }

    // Aquí podrías guardar la orden como un nuevo objeto
    localStorage.setItem("ordenGenerada", JSON.stringify(seleccionados));
    alert("Orden de compra generada con los requerimientos seleccionados.");
  });
});
