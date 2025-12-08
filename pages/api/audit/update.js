import { supabaseAdmin } from '../../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { token, updates } = req.body;

    if (!token) {
      return res.status(400).json({ 
        success: false,
        error: 'Token requis' 
      });
    }

    if (!updates) {
      return res.status(400).json({ 
        success: false,
        error: 'Données de mise à jour requises' 
      });
    }

    console.log('🔄 Mise à jour audit avec token:', token);
    console.log('📦 Données reçues:', JSON.stringify(updates, null, 2));

    // Récupérer l'audit actuel
    const { data: currentAudit, error: fetchError } = await supabaseAdmin
      .from('audits')
      .select('*')
      .eq('unique_token', token)
      .single();

    if (fetchError || !currentAudit) {
      console.error('❌ Audit non trouvé:', fetchError);
      return res.status(404).json({ 
        success: false,
        error: 'Audit non trouvé' 
      });
    }

    // Calculer le pourcentage de complétion
    const totalItems = 65;
    let auditData = updates.audit_data || currentAudit.audit_data || {};

    // Si c'est une chaîne JSON, parser
    if (typeof auditData === 'string') {
      try {
        auditData = JSON.parse(auditData);
      } catch (e) {
        auditData = {};
      }
    }

    const completedItems = Object.keys(auditData).length;
    const completionPercentage = Math.round((completedItems / totalItems) * 100);

    console.log('📊 Complétion:', completedItems, '/', totalItems, '=', completionPercentage + '%');

    // Préparer les données de mise à jour
    const updateData = {
      ...updates,
      completion_percentage: completionPercentage,
      is_completed: completedItems >= totalItems,
      updated_at: new Date().toISOString(),
    };

    console.log('💾 Envoi à Supabase:', JSON.stringify(updateData, null, 2));

    // Mettre à jour l'audit
    const { data: updatedAudit, error: updateError } = await supabaseAdmin
      .from('audits')
      .update(updateData)
      .eq('unique_token', token)
      .select()
      .single();

    if (updateError) {
      console.error('❌ Erreur mise à jour:', updateError);
      return res.status(500).json({ 
        success: false,
        error: 'Erreur lors de la mise à jour',
        details: updateError.message,
      });
    }

    console.log('✅ Audit mis à jour avec succès');

    return res.status(200).json({
      success: true,
      audit: updatedAudit,
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