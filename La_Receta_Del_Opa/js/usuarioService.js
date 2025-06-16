import { supabase } from './supabaseClient.js';

/**
 * Crea un usuario en la tabla Usuario.
 * @param {number} id - Identificación del usuario (clave primaria).
 * @param {string} nombre - Nombre del usuario.
 * @param {string} correo - Correo del usuario.
 * @param {string} contraseña - Contraseña del usuario (texto plano, solo para ejemplo).
 * @returns {Promise<object|null>} - Devuelve el usuario creado o null si hubo error.
 */
export async function crearUsuario(id, nombre, correo, contraseña) {
  const { data, error } = await supabase
    .from('Usuario')
    .insert([
      { identificación: id, nombre, correo, contraseña }
    ]);

  if (error) {
    console.error('Error creando usuario:', error.message);
    return null;
  }

  console.log('Usuario creado:', data);
  return data;
}
