document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formRemision");
    const tabla = document.getElementById("tablaRemisiones");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const proveedor = form.elements["proveedor"].value;
      const fechaRecepcion = form.elements["fechaRecepcion"].value;
      const estadoCalidad = form.elements["estadoCalidad"].value;
  
      const nuevaRemision = { proveedor, fechaRecepcion, estadoCalidad };
  
      let remisiones = JSON.parse(localStorage.getItem("remisiones")) || [];
      remisiones.push(nuevaRemision);
      localStorage.setItem("remisiones", JSON.stringify(remisiones));
  
      form.reset();
      mostrarRemisiones();
    });
  
    function mostrarRemisiones() {
      tabla.innerHTML = "";
  
      const remisiones = JSON.parse(localStorage.getItem("remisiones")) || [];
      remisiones.forEach((remision, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${remision.proveedor}</td>
          <td>${remision.fechaRecepcion}</td>
          <td>${remision.estadoCalidad}</td>
          <td><button onclick="eliminarRemision(${index})">Eliminar</button></td>
        `;
        tabla.appendChild(fila);
      });
    }
  
    window.eliminarRemision = function (index) {
      let remisiones = JSON.parse(localStorage.getItem("remisiones")) || [];
      remisiones.splice(index, 1);
      localStorage.setItem("remisiones", JSON.stringify(remisiones));
      mostrarRemisiones();
    };
  
    mostrarRemisiones(); // Mostrar al cargar la página
  });