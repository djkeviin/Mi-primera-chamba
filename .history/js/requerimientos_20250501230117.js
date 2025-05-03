document.addEventListener("DOMContentLoaded", function () {
    mostrarRequerimientos(); // Cargar requerimientos al iniciar
  
    document.getElementById("formRequerimiento").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const material = document.getElementById("material").value;
      const cantidad = document.getElementById("cantidad").value;
      const area = document.getElementById("area").value;
      const fecha = document.getElementById("fecha").value;
      const estado = document.getElementById("estado").value;
  
      const nuevoRequerimiento = {
        material,
        cantidad,
        area,
        fecha,
        estado
      };
  
      let requerimientos = JSON.parse(localStorage.getItem("requerimientos")) || [];
      requerimientos.push(nuevoRequerimiento);
      localStorage.setItem("requerimientos", JSON.stringify(requerimientos));
  
      const mensaje = document.getElementById("mensajeExito");
mensaje.textContent = "✅ Requerimiento registrado con éxito.";
mensaje.style.display = "block";

document.getElementById("btnSiguiente").style.display = "inline-block";
      this.reset();
      mostrarRequerimientos();
    });
  });
  
  function mostrarRequerimientos() {
    const tabla = document.getElementById("tablaRequerimientos");
    tabla.innerHTML = "";
  
    const requerimientos = JSON.parse(localStorage.getItem("requerimientos")) || [];
  
    requerimientos.forEach((req, index) => {
      const fila = document.createElement("tr");
  
      fila.innerHTML = `
        <td>${req.material}</td>
        <td>${req.cantidad}</td>
        <td>${req.area}</td>
        <td>${req.fecha}</td>
        <td>${req.estado}</td>
        <td>
          <button onclick="eliminarRequerimiento(${index})">Eliminar</button>
        </td>
      `;
  
      tabla.appendChild(fila);
    });
  }
  
  function eliminarRequerimiento(index) {
    let requerimientos = JSON.parse(localStorage.getItem("requerimientos")) || [];
    requerimientos.splice(index, 1);
    localStorage.setItem("requerimientos", JSON.stringify(requerimientos));
    mostrarRequerimientos();
  }
  