import { env } from '../../../lib/env.js';
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'Mot de passe requis' });
    }

    if (password === env.ADMIN_PASSWORD) {
      const token = crypto.randomBytes(32).toString('hex');
      
      return res.status(200).json({
        success: true,
        token: token,
      });
    } else {
      return res.status(401).json({
        success: false,
        error: 'Mot de passe incorrect',
      });
    }
  } catch (error) {
    console.error('Erreur login admin:', error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}