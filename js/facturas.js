document.addEventListener("DOMContentLoaded", function() {
    // Cargar las facturas desde localStorage cuando se carga la página
    cargarFacturas();
  
    // Manejo del formulario de registro de factura
    document.getElementById("formFactura").addEventListener("submit", function(e) {
      e.preventDefault();
  
      // Obtener los valores del formulario
      const proveedor = this.proveedor.value;
      const importe = this.importe.value;
      const fecha = this.fechaEmision.value;
  
      // Crear un objeto de factura
      const factura = { proveedor, importe, fecha };
  
      // Obtener la lista de facturas del localStorage (si existe)
      let facturas = JSON.parse(localStorage.getItem("facturas")) || [];
  
      // Añadir la nueva factura al array
      facturas.push(factura);
  
      // Guardar el array de facturas actualizado en localStorage
      localStorage.setItem("facturas", JSON.stringify(facturas));
  
      // Limpiar el formulario
      this.reset();
  
      // Recargar las facturas en la tabla
      cargarFacturas();
    });
  
    // Función para cargar las facturas desde el localStorage
    function cargarFacturas() {
      // Obtener las facturas del localStorage
      const facturas = JSON.parse(localStorage.getItem("facturas")) || [];
  
      // Obtener la referencia a la tabla
      const tablaFacturas = document.getElementById("tablaFacturas");
      tablaFacturas.innerHTML = ''; // Limpiar la tabla antes de recargarla
  
      // Recorrer las facturas y añadirlas a la tabla
      facturas.forEach(function(factura, index) {
        const fila = document.createElement("tr");
  
        fila.innerHTML = `
          <td>${factura.proveedor}</td>
          <td>$${parseFloat(factura.importe).toFixed(2)}</td>
          <td>${factura.fecha}</td>
          <td>
            <button onclick="eliminarFactura(${index})">Eliminar</button>
          </td>
        `;
  
        tablaFacturas.appendChild(fila);
      });
    }
  
    // Función para eliminar una factura
    window.eliminarFactura = function(index) {
      // Obtener las facturas actuales
      let facturas = JSON.parse(localStorage.getItem("facturas")) || [];
  
      // Eliminar la factura de la lista
      facturas.splice(index, 1);
  
      // Guardar las facturas actualizadas en localStorage
      localStorage.setItem("facturas", JSON.stringify(facturas));
  
      // Recargar las facturas en la tabla
      cargarFacturas();
    };
  });
  