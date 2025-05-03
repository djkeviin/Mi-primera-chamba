document.addEventListener("DOMContentLoaded", function () {
    // Cargar los requerimientos en la tabla
    cargarRequerimientos();
  
    // Manejar el envío del formulario de orden de compra
    document.getElementById("formOrden").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const numero = document.getElementById("numero").value;
      const proveedor = document.getElementById("proveedor").value;
      const fecha = document.getElementById("fecha").value;
      const detalle = document.getElementById("detalle").value;
  
      const orden = {
        numero,
        proveedor,
        fecha,
        detalle,
        requerimientos: obtenerRequerimientosSeleccionados()
      };
  
      let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
      ordenes.push(orden);
      localStorage.setItem("ordenes", JSON.stringify(ordenes));
  
      // Limpiar formulario
      this.reset();
  
      // Mostrar las ordenes registradas
      mostrarOrdenes();
  
      alert("Orden de compra registrada con éxito.");
    });
  });
  
  function cargarRequerimientos() {
    const requerimientos = JSON.parse(localStorage.getItem("requerimientos")) || [];
    const tablaRequerimientos = document.getElementById("tablaRequerimientos");
    tablaRequerimientos.innerHTML = "";
  
    requerimientos.forEach((req, index) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td><input type="checkbox" data-index="${index}"></td>
        <td>${req.material}</td>
        <td>${req.cantidad}</td>
        <td>${req.area}</td>
        <td>${req.fecha}</td>
        <td>${req.estado}</td>
      `;
      tablaRequerimientos.appendChild(fila);
    });
  }
  
  // Obtener los requerimientos seleccionados
  function obtenerRequerimientosSeleccionados() {
    const seleccionados = [];
    const checkboxes = document.querySelectorAll("#tablaRequerimientos input[type='checkbox']:checked");
    checkboxes.forEach(checkbox => {
      const index = checkbox.getAttribute("data-index");
      const requerimientos = JSON.parse(localStorage.getItem("requerimientos"));
      seleccionados.push(requerimientos[index]);
    });
    return seleccionados;
  }
  
  function mostrarOrdenes() {
    const tablaOrdenes = document.getElementById("tablaOrdenes");
    tablaOrdenes.innerHTML = "";
  
    const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
    ordenes.forEach(orden => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${orden.numero}</td>
        <td>${orden.proveedor}</td>
        <td>${orden.fecha}</td>
        <td>${orden.detalle}</td>
        <td>
          <button onclick="verOrden(${orden.numero})">Ver</button>
        </td>
      `;
      tablaOrdenes.appendChild(fila);
    });
  }
  
  function verOrden(numero) {
    // Función para ver detalles de la orden si es necesario
    alert(`Mostrando detalles de la orden: ${numero}`);
  }
  