// Array de servicios
const servicios = [
  { id: 1, icono: "🌐", titulo: "Diseño web", descripcion: "Sitios modernos, rápidos y adaptados a todos los dispositivos." },
  { id: 2, icono: "📊", titulo: "Analítica", descripcion: "Datos e insights en tiempo real para tomar mejores decisiones." },
  { id: 3, icono: "🔒", titulo: "Seguridad", descripcion: "Protección robusta para tu plataforma y tus usuarios." },
  { id: 4, icono: "📱", titulo: "Apps móviles", descripcion: "Desarrollo de aplicaciones nativas y multiplataforma." },
  { id: 5, icono: "☁️", titulo: "Cloud", descripcion: "Infraestructura escalable en la nube para tu negocio." },
  { id: 6, icono: "🎨", titulo: "Diseño UI/UX", descripcion: "Interfaces intuitivas centradas en la experiencia del usuario." },
  { id: 7, icono: "🤖", titulo: "Inteligencia Artificial", descripcion: "Soluciones inteligentes para automatizar y optimizar tu negocio." },
  { id: 8, icono: "🛒", titulo: "E-commerce", descripcion: "Tiendas online rápidas, seguras y fáciles de administrar." },
  { id: 9, icono: "📧", titulo: "Email marketing", descripcion: "Campañas de correo efectivas para conectar con tus clientes." },
  { id: 10, icono: "🔍", titulo: "SEO", descripcion: "Posicionamiento web para que te encuentren en Google." },
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

// Llamar la función al cargar la página
renderizarServicios(servicios);

// Filtro dinámico de servicios
const buscador = document.querySelector("#buscador");

buscador.addEventListener("input", function() {
  const texto = buscador.value.toLowerCase();
  const filtrados = servicios.filter((servicio) => {
    return servicio.titulo.toLowerCase().includes(texto) ||
           servicio.descripcion.toLowerCase().includes(texto);
  });
  renderizarServicios(filtrados);
});

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