import Stripe from 'stripe';
import { env } from '../../../lib/env.js';

const stripe = new Stripe(env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('=== STRIPE CONFIG ===');
    console.log('Secret Key présente:', env.STRIPE_SECRET_KEY ? 'OUI ✅' : 'NON ❌');
    console.log('Prix ID:', env.STRIPE_PRICE_ID);

    if (!env.STRIPE_PRICE_ID) {
      return res.status(400).json({ error: 'STRIPE_PRICE_ID manquant dans env.js' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${env.BASE_URL}/`,
    });

    return res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Erreur Stripe:', error);
    return res.status(500).json({ error: error.message });
  }
}