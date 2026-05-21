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
      <button class="btn-favorito" data-id="${servicio.id}">☆ Favorito</button>
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
// Filtro dinámico de servicios
const buscador = document.querySelector("#buscador");

buscador.addEventListener("input", function() {
  const texto = buscador.value.toLowerCase();

  const filtrados = servicios.filter((servicio) => {
    return servicio.titulo.toLowerCase().includes(texto);
  });

  renderizarServicios(filtrados);
});

// Llamar la función al cargar la página
renderizarServicios(servicios);
// Sistema de favoritos
let favoritos = [];

document.querySelector(".cards").addEventListener("click", function(e) {
  if (e.target.classList.contains("btn-favorito")) {
    const id = Number(e.target.dataset.id);

    if (favoritos.includes(id)) {
      favoritos = favoritos.filter((fav) => fav !== id);
      e.target.textContent = "☆ Favorito";
    } else {
      favoritos.push(id);
      e.target.textContent = "★ Guardado";
    }
  }
});
