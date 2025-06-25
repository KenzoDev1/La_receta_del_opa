// registro.js
import { registrarUsuarioConEmail } from './usuarioService.js'; // Importa la función de registro

document.addEventListener('DOMContentLoaded', () => { // Espera a que el DOM esté completamente cargado
    const registroForm = document.getElementById('registroForm'); // Obtiene el formulario de registro por su ID
    const mensajeError = document.getElementById('mensajeError'); // Obtiene el elemento para mostrar mensajes de error
    const mensajeExito = document.getElementById('mensajeExito'); // Obtiene el elemento para mostrar mensajes de éxito

    if (registroForm) { // Verifica si el formulario fue encontrado
        registroForm.addEventListener('submit', async (event) => { // Agrega un event listener para el envío del formulario
            event.preventDefault(); // Evita el comportamiento por defecto del envío del formulario (recargar la página)

            mensajeError.textContent = ''; // Limpia mensajes de error previos
            mensajeExito.textContent = ''; // Limpia mensajes de éxito previos

            const email = document.getElementById('correo').value; // Obtiene el valor del campo de correo electrónico
            const password = document.getElementById('contrasena').value; // Obtiene el valor del campo de contraseña
            const confirmPassword = document.getElementById('confirmarContrasena').value; // Obtiene el valor del campo de confirmación de contraseña
            const username = document.getElementById('nombre').value; // Obtiene el valor del campo 'Usuario'

            if (password !== confirmPassword) { // Valida si las contraseñas coinciden
                mensajeError.textContent = 'Las contraseñas no coinciden.';
                return; // Detiene la ejecución si las contraseñas no coinciden
            }

            if (password.length < 6) { // Valida la longitud mínima de la contraseña
                mensajeError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
                return; // Detiene la ejecución si la contraseña es muy corta
            }

            // Validar que el nombre de usuario no esté vacío si es requerido
            if (!username.trim()) { // Valida si el nombre de usuario está vacío o solo contiene espacios
                mensajeError.textContent = 'Por favor, ingresa un nombre de usuario.';
                return; // Detiene la ejecución si el nombre de usuario está vacío
            }

            // Aquí es donde está la clave: PASAR EL USERNAME A LA FUNCIÓN DE REGISTRO
            const resultado = await registrarUsuarioConEmail(email, password, username); // Llama a la función de registro con email, password Y username

            if (resultado.success) { // Si el registro fue exitoso
                mensajeExito.textContent = resultado.message; // Muestra el mensaje de éxito
                registroForm.reset(); // Limpia los campos del formulario

                // Redirigir al usuario al login.html después de un registro exitoso
                setTimeout(() => { // Espera 2 segundos antes de redirigir
                    window.location.href = 'login.html'; // Redirige a la página de inicio de sesión
                }, 2000); // 2 segundos de espera
            } else { // Si el registro falló
                mensajeError.textContent = resultado.message; // Muestra el mensaje de error
            }
        });
    } else {
        console.error('El formulario de registro con ID "registroForm" no fue encontrado.'); // Mensaje de error si el formulario no se encuentra
    }
});