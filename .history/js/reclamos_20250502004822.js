// Cargar reclamos al iniciar
document.addEventListener("DOMContentLoaded", function () {
    const reclamos = JSON.parse(localStorage.getItem("reclamos")) || [];
    reclamos.forEach(reclamo => agregarFila(reclamo));
  });
  
  // Agregar reclamo al enviar el formulario
  document.getElementById("formReclamo").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const producto = this.producto.value;
    const motivo = this.motivo.value;
    const detalles = this.detalles.value;
    const estado = this.estado.value;
  
    const reclamo = { producto, motivo, detalles, estado };
    agregarFila(reclamo);
  
    // Guardar en localStorage
    const reclamos = JSON.parse(localStorage.getItem("reclamos")) || [];
    reclamos.push(reclamo);
    localStorage.setItem("reclamos", JSON.stringify(reclamos));
  
    this.reset();
  });
  
  // Función para agregar una fila a la tabla
  function agregarFila({ producto, motivo, detalles, estado }) {
    const tabla = document.getElementById("tablaReclamos");
    const fila = document.createElement("tr");
  
    fila.innerHTML = `
      <td>${producto}</td>
      <td>${motivo}</td>
      <td>${detalles}</td>
      <td>${estado}</td>
      <td>
        <button onclick="cambiarEstado(this)">Cambiar Estado</button>
        <button onclick="eliminarFila(this)">Eliminar</button>
      </td>
    `;
  
    tabla.appendChild(fila);
  }
  
  // Cambiar estado entre "Pendiente" y "Resuelto"
  function cambiarEstado(btn) {
    const fila = btn.parentNode.parentNode;
    const estadoCelda = fila.cells[3];
    estadoCelda.textContent = estadoCelda.textContent === "Pendiente" ? "Resuelto" : "Pendiente";
    actualizarLocalStorage();
  }
  
  // Eliminar fila y actualizar almacenamiento
  function eliminarFila(btn) {
    const fila = btn.parentNode.parentNode;
    fila.remove();
    actualizarLocalStorage();
  }
  
  // Reescribe el localStorage con los datos actuales de la tabla
  function actualizarLocalStorage() {
    const tabla = document.getElementById("tablaReclamos");
    const nuevasFilas = tabla.querySelectorAll("tr");
    const nuevosDatos = [];
  
    nuevasFilas.forEach(fila => {
      const celdas = fila.querySelectorAll("td");
      if (celdas.length >= 4) {
        nuevosDatos.push({
          producto: celdas[0].textContent,
          motivo: celdas[1].textContent,
          detalles: celdas[2].textContent,
          estado: celdas[3].textContent,
        });
      }
    });
  
    localStorage.setItem("reclamos", JSON.stringify(nuevosDatos));
  }