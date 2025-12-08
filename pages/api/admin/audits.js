import { supabaseAdmin } from '../../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { data: audits, error } = await supabaseAdmin
      .from('audits')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erreur Supabase:', error);
      return res.status(500).json({ error: 'Erreur base de données' });
    }

    const stats = {
      total: audits.length,
      completed: audits.filter(a => a.is_completed).length,
      pending: audits.filter(a => !a.is_completed).length,
      revenue: audits.filter(a => a.payment_status === 'paid').length * 497,
    };

    return res.status(200).json({
      success: true,
      audits: audits,
      stats: stats,
    });
  } catch (error) {
    console.error('Erreur:', error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}