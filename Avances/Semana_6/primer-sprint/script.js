document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('registro-form');

    form.addEventListener('submit', function(event) {
  
      event.preventDefault(); // Evita que el formulario se envíe por defecto
      const usuario = document.getElementById('usuario').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmarPassword = document.getElementById('confirmar-password').value;
  
      // Validar campos vacíos
  
      if (!usuario || !email || !password || !confirmarPassword) {
        alert('Por favor, completa todos los campos.');
        return;
  
      }
  
      // Validar formato de email (opcional)
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
  
      }
  
      // Validar contraseñas iguales
  
      if (password !== confirmarPassword) {
  
        alert('Las contraseñas no coinciden.');  
        return;
  
      }

      // Si todo está bien, puedes enviar el formulario (simulado aquí)
      alert('Registro exitoso!');
      // form.submit(); // Descomenta esta línea para enviar el formulario de verdad
  
    });
  
  });
  
  