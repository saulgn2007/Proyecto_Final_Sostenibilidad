  function reservar(nombre, precio) {
    document.getElementById("reserva").style.display = "block";
    document.getElementById("servicioNombre").innerText = nombre;
    document.getElementById("servicioPrecio").innerText = "Precio: " + precio;
    document.getElementById("reserva").scrollIntoView({ behavior: "smooth" });
  }

  // Selección interactiva de días en el calendario
  document.addEventListener("DOMContentLoaded", () => {
    const dias = document.querySelectorAll("#calendario div");
    dias.forEach(dia => {
      dia.addEventListener("click", () => {
        dias.forEach(d => d.classList.remove("activo"));
        dia.classList.add("activo");
      });
    });
  });

  function confirmar() {
    const activo = document.querySelector("#calendario .activo");
    const dia = activo ? activo.innerText : "–";
    const servicio = document.getElementById("servicioNombre").innerText;
    alert(`✅ Reserva confirmada: ${servicio} el día ${dia} de marzo.`);
  }

  function enviarFormulario(e) {
    e.preventDefault();
    alert("✅ Mensaje enviado. Nos pondremos en contacto contigo pronto.");
  }