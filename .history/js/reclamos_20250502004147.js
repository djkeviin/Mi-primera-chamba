document.getElementById("formReclamo").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const fecha = document.getElementById("fecha").value;
    const producto = document.getElementById("producto").value;
    const descripcion = document.getElementById("descripcion").value;
  
    const tabla = document.getElementById("listaReclamos");
    const fila = document.createElement("tr");
  
    fila.innerHTML = `
      <td>${fecha}</td>
      <td>${producto}</td>
      <td>${descripcion}</td>
    `;
  
    tabla.appendChild(fila);
  
    // Limpiar formulario
    this.reset();
  });
  