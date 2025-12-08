import Stripe from 'stripe';
import { buffer } from 'micro';
import { supabaseAdmin } from '../../../lib/supabase';
import { sendAuditEmail } from '../../../lib/resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// CRITICAL: Désactiver le parsing automatique du body
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    // Vérifier la signature avec le body RAW
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    console.log('✅ Webhook vérifié:', event.type);
  } catch (err) {
    console.error('❌ Erreur webhook:', err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // Gérer l'événement checkout.session.completed
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    console.log('💳 Paiement reçu:', {
      customer_email: session.customer_details?.email,
      amount: session.amount_total / 100,
      currency: session.currency,
    });

    try {
      // Générer un token unique pour l'audit
      const token = require('crypto').randomBytes(32).toString('hex');
      
      // Créer l'audit dans Supabase
      const { data: audit, error: dbError } = await supabaseAdmin
        .from('audits')
        .insert({
          email: session.customer_details?.email,
          token: token,
          payment_status: 'paid',
          stripe_session_id: session.id,
          amount: session.amount_total / 100,
        })
        .select()
        .single();

      if (dbError) {
        console.error('❌ Erreur DB:', dbError);
        return res.status(500).json({ error: 'Database error' });
      }

      console.log('✅ Audit créé:', audit.id);

      // Envoyer l'email avec le lien d'audit
      const auditUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/audit/${token}`;
      
      await sendAuditEmail({
        to: session.customer_details?.email,
        auditUrl: auditUrl,
      });

      console.log('✅ Email envoyé à:', session.customer_details?.email);

      return res.status(200).json({ received: true, audit_id: audit.id });
      
    } catch (error) {
      console.error('❌ Erreur traitement:', error);
      return res.status(500).json({ error: error.message });
    }
  }

  // Autres événements
  console.log('ℹ️ Événement non géré:', event.type);
  return res.status(200).json({ received: true });
}