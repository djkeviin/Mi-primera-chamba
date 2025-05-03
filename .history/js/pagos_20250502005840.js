document.addEventListener("DOMContentLoaded", function() {
    // Cargar pagos desde localStorage cuando se carga la página
    cargarPagos();
  
    // Manejo del formulario de registro de pago
    document.getElementById("formPago").addEventListener("submit", function(e) {
      e.preventDefault();
  
      // Obtener los valores del formulario
      const orden = this.orden.value;
      const proveedor = this.proveedor.value;
      const monto = parseFloat(this.monto.value).toFixed(2);
      const fecha = this.fecha.value;
  
      // Crear un objeto de pago
      const pago = { orden, proveedor, monto, fecha };
  
      // Obtener la lista de pagos del localStorage (si existe)
      let pagos = JSON.parse(localStorage.getItem("pagos")) || [];
  
      // Añadir el nuevo pago al array
      pagos.push(pago);
  
      // Guardar el array de pagos actualizado en localStorage
      localStorage.setItem("pagos", JSON.stringify(pagos));
  
      // Limpiar el formulario
      this.reset();
  
      // Recargar los pagos en la tabla
      cargarPagos();
    });
  
    // Función para cargar los pagos desde el localStorage
    function cargarPagos() {
      // Obtener los pagos del localStorage
      const pagos = JSON.parse(localStorage.getItem("pagos")) || [];
  
      // Obtener la referencia a la tabla
      const tablaPagos = document.getElementById("tablaPagos");
      tablaPagos.innerHTML = ''; // Limpiar la tabla antes de recargarla
  
      // Recorrer los pagos y añadirlos a la tabla
      pagos.forEach(function(pago, index) {
        const fila = document.createElement("tr");
  
        fila.innerHTML = `
          <td>${pago.orden}</td>
          <td>${pago.proveedor}</td>
          <td>$${pago.monto}</td>
          <td>${pago.fecha}</td>
          <td>
            <button onclick="eliminarPago(${index})">Eliminar</button>
          </td>
        `;
  
        tablaPagos.appendChild(fila);
      });
    }
  
    // Función para eliminar un pago
    window.eliminarPago = function(index) {
      // Obtener los pagos actuales
      let pagos = JSON.parse(localStorage.getItem("pagos")) || [];
  
      // Eliminar el pago de la lista
      pagos.splice(index, 1);
  
      // Guardar los pagos actualizados en localStorage
      localStorage.setItem("pagos", JSON.stringify(pagos));
  
      // Recargar los pagos en la tabla
      cargarPagos();
    };
  });
  