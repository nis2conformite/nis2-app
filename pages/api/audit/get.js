import { supabaseAdmin } from '../../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ 
        success: false,
        error: 'Token requis' 
      });
    }

    console.log('🔍 Recherche audit avec token:', token);

    const { data: audit, error } = await supabaseAdmin
      .from('audits')
      .select('*')
      .eq('unique_token', token)
      .single();

    if (error) {
      console.error('❌ Erreur Supabase:', error);
      return res.status(404).json({ 
        success: false,
        error: 'Audit non trouvé' 
      });
    }

    if (!audit) {
      console.log('⚠️ Aucun audit trouvé avec ce token');
      return res.status(404).json({ 
        success: false,
        error: 'Audit non trouvé' 
      });
    }

    console.log('✅ Audit trouvé:', audit.id);

    return res.status(200).json({
      success: true,
      audit: audit,
    });
  } catch (error) {
    console.error('❌ Erreur serveur:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Erreur serveur',
      details: error.message,
    });
  }
}