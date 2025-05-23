// supabaseClient.js
// Este archivo se encarga de inicializar el cliente de Supabase
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://czedsrvuogyhxyqlxllj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ZWRzcnZ1b2d5aHh5cWx4bGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MDc2NTEsImV4cCI6MjA2Mjk4MzY1MX0.S2hP_7KVKI_JhW9SbxyPAi8gnG_1ikk_e0EUf9e9id0';

// Inicializa el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('Supabase client inicializado.'); // Para verificar en la consola