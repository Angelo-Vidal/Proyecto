# Mi Sitio Web

## Descripción del proyecto

Sitio web estático desarrollado con HTML, CSS y JavaScript vanilla. Incluye una página principal con sección de bienvenida, tarjetas de servicios y un formulario de contacto. El proyecto fue construido como práctica de maquetación web y organización de archivos front-end.

---

## Estructura de carpetas

```
mi-sitio-web/
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── script.js
└── README.md
```

---

## Prompts utilizados durante el desarrollo

### Prompt 1 — Expandir la página base con contenido real
**Prompt:**
> "Necesito agregar contenido a esta página, que sea contenido práctico. El style dámelo aparte."

**Para qué se usó:**
La página inicial solo tenía un header, un párrafo y un botón. Con este prompt se generaron tres secciones completas (hero, servicios y contacto), y se separó todo el CSS en su propio archivo `estilos.css` para mantener el proyecto organizado.

---

### Prompt 2 — Crear tarjetas de servicios con grid responsivo
**Prompt:**
> "Muestra los servicios en tarjetas organizadas en columnas que se adapten automáticamente al ancho de la pantalla."

**Para qué se usó:**
Este fue uno de los elementos más complejos del CSS. Requirió usar `display: grid` con `repeat(auto-fit, minmax(200px, 1fr))` para que las tarjetas se reorganicen solas según el tamaño de pantalla, sin necesidad de media queries manuales.

---

### Prompt 3 — Navegación con anclas a cada sección
**Prompt:**
> "Agrega una barra de navegación en el header con enlaces que lleven a cada sección de la página."

**Para qué se usó:**
Se necesitaba conectar los enlaces del nav con las secciones reales del HTML usando atributos `id`. También se agregó `scroll-behavior: smooth` en el CSS para que el desplazamiento entre secciones sea fluido en lugar de un salto brusco.

---

### Prompt 4 — Mensaje de confirmación al hacer clic en el botón
**Prompt:**
> "Al hacer clic en el botón de enviar, que aparezca un mensaje de confirmación que desaparezca solo después de unos segundos."

**Para qué se usó:**
Implicó usar JavaScript para seleccionar el botón con `getElementById`, escuchar el evento `click`, modificar el contenido del DOM dinámicamente y usar `setTimeout` para limpiar el mensaje automáticamente después de 3 segundos.

---
### Prompt 5 — Integrar imagen al hero sin romper el diseño
**Prompt:**
> "Esta es la imagen, ¿cómo la agrego a la página sin romper la armonía?"

**Para qué se usó:**
Se necesitaba incorporar el banner azul en la sección hero de forma que combinara con el resto del diseño. Se usó `object-fit: cover` para evitar deformaciones y se agregó un borde verde sutil para integrarla con la paleta tecnológica del sitio.