document.addEventListener("DOMContentLoaded", function() {
    // Cargar reclamos desde localStorage cuando se carga la página
    cargarReclamos();
  
    // Manejo del formulario de registro de reclamo
    document.getElementById("formReclamo").addEventListener("submit", function(e) {
      e.preventDefault();
  
      // Obtener los valores del formulario
      const fecha = this.fecha.value;
      const producto = this.producto.value;
      const descripcion = this.descripcion.value;
  
      // Crear un objeto de reclamo
      const reclamo = { fecha, producto, descripcion };
  
      // Obtener la lista de reclamos del localStorage (si existe)
      let reclamos = JSON.parse(localStorage.getItem("reclamos")) || [];
  
      // Añadir el nuevo reclamo al array
      reclamos.push(reclamo);
  
      // Guardar el array de reclamos actualizado en localStorage
      localStorage.setItem("reclamos", JSON.stringify(reclamos));
  
      // Limpiar el formulario
      this.reset();
  
      // Recargar los reclamos en la tabla
      cargarReclamos();
    });
  
    // Función para cargar los reclamos desde el localStorage
    function cargarReclamos() {
      // Obtener los reclamos del localStorage
      const reclamos = JSON.parse(localStorage.getItem("reclamos")) || [];
  
      // Obtener la referencia a la tabla
      const tablaReclamos = document.getElementById("listaReclamos");
      tablaReclamos.innerHTML = ''; // Limpiar la tabla antes de recargarla
  
      // Recorrer los reclamos y añadirlos a la tabla
      reclamos.forEach(function(reclamo, index) {
        const fila = document.createElement("tr");
  
        fila.innerHTML = `
          <td>${reclamo.fecha}</td>
          <td>${reclamo.producto}</td>
          <td>${reclamo.descripcion}</td>
          <td>
            <button onclick="eliminarReclamo(${index})">Eliminar</button>
          </td>
        `;
  
        tablaReclamos.appendChild(fila);
      });
    }
  
    // Función para eliminar un reclamo
    window.eliminarReclamo = function(index) {
      // Obtener los reclamos actuales
      let reclamos = JSON.parse(localStorage.getItem("reclamos")) || [];
  
      // Eliminar el reclamo de la lista
      reclamos.splice(index, 1);
  
      // Guardar los reclamos actualizados en localStorage
      localStorage.setItem("reclamos", JSON.stringify(reclamos));
  
      // Recargar los reclamos en la tabla
      cargarReclamos();
    };
  });