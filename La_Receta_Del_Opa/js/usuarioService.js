// usuarioService.js
import { supabase } from './supabaseClient.js';

export async function registrarUsuarioConEmail(email, password, username) { // Añadir 'username' como parámetro
    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (error) {
            console.error('Error al registrar usuario:', error.message);
            if (error.code === '23505') {
                return { success: false, message: 'Este correo electrónico ya está registrado. Por favor, inicia sesión o usa otro correo.' };
            }
            return { success: false, message: error.message };
        }

        if (data && data.user) {
            console.log('Usuario registrado exitosamente en autenticación:', data.user);

            // *** INSERTAR EL NOMBRE DE USUARIO EN LA TABLA 'perfiles' ***
            const { error: profileError } = await supabase
                .from('perfiles')
                .insert([
                    { id: data.user.id, nombre_usuario: username, email: data.user.email } // Usar el ID del usuario de auth
                ]);

            if (profileError) {
                console.error('Error al guardar el perfil del usuario:', profileError.message);
                // Opcional: Si el perfil falla, podrías considerar eliminar el usuario de auth también
                // await supabase.auth.admin.deleteUser(data.user.id);
                return { success: false, message: 'Registro exitoso, pero no se pudo guardar tu nombre de usuario. Inténtalo de nuevo.' };
            }

            return { success: true, message: '¡Registro exitoso! Ahora puedes iniciar sesión.', user: data.user }; // Mensaje actualizado
        } else {
            return { success: false, message: 'No se pudo completar el registro. Inténtalo de nuevo.' };
        }

    } catch (error) {
        console.error('Ocurrió una excepción inesperada al registrar usuario:', error);
        return { success: false, message: 'Ocurrió un error inesperado durante el registro.' };
    }
}