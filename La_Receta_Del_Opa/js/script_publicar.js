document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('receta-form');
  const inputArchivo = document.getElementById('imagen');
  const botonAdjuntar = document.getElementById('boton-adjuntar');
  const nombreArchivo = document.getElementById('nombre-archivo');

  // Abrir el selector de archivos al hacer clic en el botón +
  botonAdjuntar.addEventListener('click', () => {
    inputArchivo.click();
  });

  // Mostrar el nombre del archivo seleccionado
  inputArchivo.addEventListener('change', () => {
    if (inputArchivo.files.length > 0) {
      nombreArchivo.textContent = inputArchivo.files[0].name;
    } else {
      nombreArchivo.textContent = '';
    }
  });

  // Validar y manejar envío del formulario
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();

    if (!titulo || !descripcion) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Aquí podrías guardar la receta en localStorage o enviarla a un servidor
    alert('¡Receta publicada con éxito!');
    form.reset();
    nombreArchivo.textContent = '';
  });
});
