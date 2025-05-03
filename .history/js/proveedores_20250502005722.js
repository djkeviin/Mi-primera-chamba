document.addEventListener("DOMContentLoaded", function() {
    // Cargar proveedores desde localStorage cuando se carga la página
    cargarProveedores();
  
    // Manejo del formulario de registro de proveedor
    document.getElementById("formProveedor").addEventListener("submit", function(e) {
      e.preventDefault();
  
      // Obtener los valores del formulario
      const nombre = this.nombre.value;
      const ruc = this.ruc.value;
      const telefono = this.telefono.value;
      const correo = this.correo.value;
  
      // Crear un objeto proveedor
      const proveedor = { nombre, ruc, telefono, correo };
  
      // Obtener la lista de proveedores del localStorage (si existe)
      let proveedores = JSON.parse(localStorage.getItem("proveedores")) || [];
  
      // Añadir el nuevo proveedor al array
      proveedores.push(proveedor);
  
      // Guardar el array de proveedores actualizado en localStorage
      localStorage.setItem("proveedores", JSON.stringify(proveedores));
  
      // Limpiar el formulario
      this.reset();
  
      // Recargar los proveedores en la tabla
      cargarProveedores();
    });
  
    // Función para cargar los proveedores desde el localStorage
    function cargarProveedores() {
      // Obtener los proveedores del localStorage
      const proveedores = JSON.parse(localStorage.getItem("proveedores")) || [];
  
      // Obtener la referencia a la tabla
      const tablaProveedores = document.getElementById("tablaProveedores");
      tablaProveedores.innerHTML = ''; // Limpiar la tabla antes de recargarla
  
      // Recorrer los proveedores y añadirlos a la tabla
      proveedores.forEach(function(proveedor, index) {
        const fila = document.createElement("tr");
  
        fila.innerHTML = `
          <td>${proveedor.nombre}</td>
          <td>${proveedor.ruc}</td>
          <td>${proveedor.telefono}</td>
          <td>${proveedor.correo}</td>
          <td>
            <button onclick="eliminarProveedor(${index})">Eliminar</button>
          </td>
        `;
  
        tablaProveedores.appendChild(fila);
      });
    }
  
    // Función para eliminar un proveedor
    window.eliminarProveedor = function(index) {
      // Obtener los proveedores actuales
      let proveedores = JSON.parse(localStorage.getItem("proveedores")) || [];
  
      // Eliminar el proveedor de la lista
      proveedores.splice(index, 1);
  
      // Guardar los proveedores actualizados en localStorage
      localStorage.setItem("proveedores", JSON.stringify(proveedores));
  
      // Recargar los proveedores en la tabla
      cargarProveedores();
    };
  });
  