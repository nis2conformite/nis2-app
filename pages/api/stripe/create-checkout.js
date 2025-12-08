import { env } from '../../lib/env';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Rediriger vers le Payment Link Stripe
    const paymentLink = 'https://buy.stripe.com/test_9B6aEP8u7eVS9hu7fw0Ba00';
    
    console.log('✅ Redirection vers Payment Link Stripe');
    
    return res.status(200).json({ 
      url: paymentLink
    });
    
  } catch (error) {
    console.error('❌ Erreur:', error);
    return res.status(500).json({ 
      error: 'Une erreur est survenue lors de la création de la session de paiement' 
    });
  }
}