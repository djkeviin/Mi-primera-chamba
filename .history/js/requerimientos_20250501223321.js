document.getElementById("formRequerimiento").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const idRequerimiento = document.getElementById("idRequerimiento").value;
    const fecha = document.getElementById("fecha").value;
    const material = document.getElementById("material").value;
    const cantidad = document.getElementById("cantidad").value;
  
    const nuevoRequerimiento = {
      idRequerimiento,
      fecha,
      material,
      cantidad
    };
  
    // Obtener requerimientos actuales
    let requerimientos = JSON.parse(localStorage.getItem("requerimientos")) || [];
  
    // Agregar nuevo requerimiento
    requerimientos.push(nuevoRequerimiento);
  
    // Guardar en localStorage
    localStorage.setItem("requerimientos", JSON.stringify(requerimientos));
  
    alert("Requerimiento registrado con éxito");
    this.reset();
  });