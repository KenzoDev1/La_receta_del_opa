// usuarioService.js
import { supabase } from './supabaseClient.js';

export async function registrarUsuarioConEmail(email, password, username) {
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

        // Si el registro de autenticación fue exitoso
        if (data && data.user) {
            console.log('Usuario registrado exitosamente en autenticación:', data.user);

            // *** NUEVO PASO: Esperar a que la sesión esté completamente establecida ***
            // Esto es para asegurar que el cliente de Supabase tenga el token JWT actualizado
            // antes de intentar la inserción en la tabla 'perfiles'.
            await new Promise(resolve => setTimeout(resolve, 500)); // Espera 500ms (0.5 segundos)
            const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
            if (sessionError || !sessionData.session) {
                console.error('Error al recuperar la sesión después del registro:', sessionError?.message);
                return { success: false, message: 'Registro exitoso en autenticación, pero no se pudo establecer la sesión correctamente.' };
            }
            // Fin del nuevo paso

            // *** INSERTAR EL NOMBRE DE USUARIO EN LA TABLA 'perfiles' ***
            const { error: profileError } = await supabase
                .from('perfiles')
                .insert([
                    { id: data.user.id, nombre_usuario: username, email: data.user.email }
                ]);

            if (profileError) {
                console.error('Error al guardar el perfil del usuario:', profileError.message);
                return { success: false, message: 'Registro exitoso en autenticación, pero falló al guardar tu perfil. Razón: ' + profileError.message };
            }

            return { success: true, message: '¡Registro exitoso! Ahora puedes iniciar sesión.', user: data.user };
        } else {
            return { success: false, message: 'No se pudo completar el registro. Inténtalo de nuevo. (Usuario no retornado)' };
        }

    } catch (error) {
        console.error('Ocurrió una excepción inesperada al registrar usuario:', error);
        return { success: false, message: 'Ocurrió un error inesperado durante el registro: ' + error.message };
    }
}