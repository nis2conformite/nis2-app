import { createClient } from '@supabase/supabase-js';
import { env } from './env.js';

// Client Supabase admin (utilise la clé service_role)
export const supabaseAdmin = createClient(
  env.SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

console.log('✅ Supabase initialisé avec URL:', env.SUPABASE_URL ? 'PRÉSENTE' : 'MANQUANTE');
console.log('✅ Supabase clé:', env.SUPABASE_SERVICE_ROLE_KEY ? 'PRÉSENTE' : 'MANQUANTE');
