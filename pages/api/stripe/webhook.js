// pages/api/stripe/webhook.js
import { buffer } from 'micro';
import { verifyWebhookSignature } from '../../../lib/stripe';
import { supabaseAdmin } from '../../../lib/supabase';
import { sendAccessEmail } from '../../../lib/resend';
import { env } from '../../../lib/env.js';
import crypto from 'crypto';

// Configuration Next.js pour désactiver le body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Récupérer le body brut
    const buf = await buffer(req);
    const signature = req.headers['stripe-signature'];

    // Vérifier la signature du webhook
    const event = verifyWebhookSignature(buf.toString(), signature);

    // Gérer l'événement checkout.session.completed
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      console.log('✅ Paiement reçu:', session.id);

      // Extraire les informations du client
      const customerEmail = session.customer_email || session.customer_details?.email;
      const customerName = session.metadata?.customer_name || session.customer_details?.name || '';
      const amountPaid = session.amount_total / 100; // Convertir centimes en euros

      // Générer un token unique sécurisé
      const uniqueToken = crypto.randomBytes(32).toString('hex');

      // Créer l'audit dans Supabase
      const { data: audit, error: auditError } = await supabaseAdmin
        .from('audits')
        .insert({
          unique_token: uniqueToken,
          client_email: customerEmail,
          client_name: customerName,
          payment_status: 'paid',
          stripe_payment_id: session.id,
          stripe_customer_id: session.customer,
          amount_paid: amountPaid,
          entity_name: '',
          entity_type: 'essential',
          entity_sector: '',
          auditor_name: '',
          audit_date: new Date().toISOString().split('T')[0],
          audit_data: {},
          notes: {},
          item_documents: {},
          completion_percentage: 0,
          is_completed: false,
        })
        .select()
        .single();

      if (auditError) {
        console.error('❌ Erreur création audit:', auditError);
        throw new Error('Erreur lors de la création de l\'audit');
      }

      console.log('✅ Audit créé:', audit.id);

      // Construire le lien d'accès à l'audit
      const auditLink = `${env.BASE_URL}/audit/${uniqueToken}`;

      // Envoyer l'email avec le lien d'accès
      try {
        await sendAccessEmail({
          clientName: customerName,
          clientEmail: customerEmail,
          auditLink: auditLink,
        });

        console.log('✅ Email envoyé à:', customerEmail);

        // Mettre à jour l'audit pour indiquer que l'email a été envoyé
        await supabaseAdmin
          .from('audits')
          .update({ 
            updated_at: new Date().toISOString()
          })
          .eq('id', audit.id);

      } catch (emailError) {
        console.error('❌ Erreur envoi email:', emailError);
        // On ne bloque pas le webhook même si l'email échoue
        // L'admin pourra renvoyer l'email manuellement depuis le backoffice
      }

      console.log('🎉 Processus complet terminé pour:', customerEmail);
    }

    // Répondre à Stripe que tout est OK
    res.status(200).json({ received: true });

  } catch (error) {
    console.error('❌ Erreur webhook:', error);
    res.status(400).json({ 
      error: 'Webhook error', 
      details: error.message 
    });
  }
}
