document.addEventListener("DOMContentLoaded", function () {
    mostrarOrdenes();
    cargarRequerimientos();
  
    // Registrar orden de compra
    document.getElementById("formOrden").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const numero = this.numero.value;
      const proveedor = this.proveedor.value;
      const fecha = this.fecha.value;
      const detalle = this.detalle.value;
  
      const nuevaOrden = { numero, proveedor, fecha, detalle };
  
      let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
      ordenes.push(nuevaOrden);
      localStorage.setItem("ordenes", JSON.stringify(ordenes));
  
      this.reset();
      mostrarOrdenes();
    });
  
    // Agregar requerimientos seleccionados al detalle de la orden
    document.getElementById("btnAgregarRequerimientos").addEventListener("click", function () {
      const requerimientos = obtenerRequerimientosSeleccionados();
      if (requerimientos.length === 0) {
        alert("Por favor selecciona al menos un requerimiento.");
        return;
      }
  
      let detalleTexto = "";
      requerimientos.forEach((req, i) => {
        detalleTexto += `Requerimiento ${i + 1}:\n`;
        detalleTexto += `- Material: ${req.material}\n`;
        detalleTexto += `- Cantidad: ${req.cantidad}\n`;
        detalleTexto += `- Área: ${req.area}\n`;
        detalleTexto += `- Fecha: ${req.fecha}\n`;
        detalleTexto += `- Estado: ${req.estado}\n\n`;
      });
  
      document.querySelector("textarea[name='detalle']").value = detalleTexto;
    });
  });
  
  // Mostrar órdenes guardadas
  function mostrarOrdenes() {
    const tabla = document.getElementById("tablaOrdenes");
    tabla.innerHTML = "";
  
    const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
  
    ordenes.forEach((orden, index) => {
      const fila = document.createElement("tr");
  
      fila.innerHTML = `
        <td>${orden.numero}</td>
        <td>${orden.proveedor}</td>
        <td>${orden.fecha}</td>
        <td><pre>${orden.detalle}</pre></td>
        <td><button onclick="eliminarOrden(${index})">Eliminar</button></td>
      `;
  
      tabla.appendChild(fila);
    });
  }
  
  // Eliminar una orden
  function eliminarOrden(index) {
    let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
    ordenes.splice(index, 1);
    localStorage.setItem("ordenes", JSON.stringify(ordenes));
    mostrarOrdenes();
  }
  
  // Cargar requerimientos en la tabla con checkbox
  function cargarRequerimientos() {
    const tabla = document.getElementById("tablaRequerimientos");
    tabla.innerHTML = "";
  
    const requerimientos = JSON.parse(localStorage.getItem("requerimientos")) || [];
  
    requerimientos.forEach((req, index) => {
      const fila = document.createElement("tr");
  
      fila.innerHTML = `
        <td><input type="checkbox" class="chkRequerimiento" data-index="${index}"></td>
        <td>${req.material}</td>
        <td>${req.cantidad}</td>
        <td>${req.area}</td>
        <td>${req.fecha}</td>
        <td>${req.estado}</td>
      `;
  
      tabla.appendChild(fila);
    });
  }
  
  // Obtener requerimientos seleccionados
  function obtenerRequerimientosSeleccionados() {
    const checkboxes = document.querySelectorAll(".chkRequerimiento:checked");
    const requerimientos = JSON.parse(localStorage.getItem("requerimientos")) || [];
    const seleccionados = [];
  
    checkboxes.forEach(chk => {
      const index = parseInt(chk.dataset.index);
      if (!isNaN(index)) {
        seleccionados.push(requerimientos[index]);
      }
    });
  
    return seleccionados;
  }
  