// script.js

import { supabase } from './supabaseClient.js';

// Esta parte dice: "Cuando la página web esté completamente lista..."
document.addEventListener('DOMContentLoaded', () => {

    
    if (supabase) {
        // ¡ESTE ES EL MENSAJE QUE CONFIRMA LA CONEXIÓN!
        console.log('✅ ¡LA CONEXIÓN A SUPABASE SE HA REALIZADO CON ÉXITO! ✅');
        console.log('El objeto "supabase" ya está disponible para usarlo.');
        console.log('Puedes usarlo para registrar usuarios, guardar recetas, etc.');
    } else {
        // Si ves este mensaje, algo salió mal al importar o inicializar.
        console.error('❌ ERROR: El objeto "supabase" NO está disponible. La conexión no se estableció.');
        console.error('Revisa tu "supabaseClient.js" y la línea de "import" en este archivo.');
    }

    // Aquí abajo es donde empezarías a escribir el resto de tu código
    // (por ejemplo, el código para el formulario de registro).
    // Por ahora, lo dejamos vacío para no confundir.
});