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
  
    // Mostrar mensaje y botón siguiente
    document.getElementById("mensajeExito").textContent = "✅ Requerimiento registrado correctamente.";
    document.getElementById("mensajeExito").style.display = "block";
    document.getElementById("btnSiguiente").style.display = "inline-block";
  
    mostrarRequerimientos();
    this.reset();
  });