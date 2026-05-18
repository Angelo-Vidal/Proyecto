// Array de servicios
const servicios = [
  {
    id: 1,
    icono: "🌐",
    titulo: "Diseño web",
    descripcion: "Sitios modernos, rápidos y adaptados a todos los dispositivos.",
  },
  {
    id: 2,
    icono: "📊",
    titulo: "Analítica",
    descripcion: "Datos e insights en tiempo real para tomar mejores decisiones.",
  },
  {
    id: 3,
    icono: "🔒",
    titulo: "Seguridad",
    descripcion: "Protección robusta para tu plataforma y tus usuarios.",
  },
];
// Arrow function que crea el HTML de una tarjeta
const crearTarjeta = (servicio) => {
  return `
    <div class="card" data-id="${servicio.id}">
      <span class="icono">${servicio.icono}</span>
      <h3>${servicio.titulo}</h3>
      <p>${servicio.descripcion}</p>
    </div>
  `;
};
// Función que renderiza las tarjetas en la página
function renderizarServicios(lista) {
  const contenedor = document.querySelector(".cards");

  contenedor.innerHTML = "";

  lista.forEach((servicio) => {
    contenedor.innerHTML += crearTarjeta(servicio);
  });
}

// Llamar la función al cargar la página
renderizarServicios(servicios);