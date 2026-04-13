document.getElementById('boton').addEventListener('click', function() {
  const mensaje = document.getElementById('mensaje');
  mensaje.textContent = '✅ ¡Mensaje enviado correctamente!';
  setTimeout(function() {
    mensaje.textContent = '';
  }, 3000);
});