import { Resend } from 'resend';
import { env } from './env';

const resend = new Resend(env.RESEND_API_KEY);

console.log('✅ Resend initialisé avec clé:', env.RESEND_API_KEY ? 'PRÉSENTE' : 'MANQUANTE');

/**
 * Envoyer l'email avec le lien d'audit après paiement
 */
export async function sendAuditEmail({ to, auditUrl }) {
  try {
    const { data, error } = await resend.emails.send({
      from: env.EMAIL_FROM,
      to: to,
      replyTo: env.EMAIL_REPLY_TO,
      subject: '🎯 Votre audit NIS2 est prêt !',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Paiement confirmé !</h1>
              <p>Merci pour votre confiance</p>
            </div>
            <div class="content">
              <h2>🎯 Votre audit NIS2 vous attend</h2>
              <p>Bonjour,</p>
              <p>Nous avons bien reçu votre paiement. Vous pouvez maintenant accéder à votre audit de conformité NIS2.</p>
              
              <p><strong>Que faire maintenant ?</strong></p>
              <ol>
                <li>Cliquez sur le bouton ci-dessous</li>
                <li>Répondez aux 65 questions de l'audit</li>
                <li>Recevez votre rapport détaillé par email</li>
              </ol>

              <div style="text-align: center;">
                <a href="${auditUrl}" class="button">
                  🚀 Commencer mon audit
                </a>
              </div>

              <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 5px;">
                <strong>⏰ Important :</strong> Conservez cet email. Le lien reste valide 30 jours.
              </p>

              <p style="font-size: 12px; color: #666; margin-top: 20px;">
                <strong>Lien direct :</strong><br>
                <a href="${auditUrl}" style="color: #667eea; word-break: break-all;">${auditUrl}</a>
              </p>
            </div>
            <div class="footer">
              <p>© 2025 Cyber Solferino - Expert Cybersécurité</p>
              <p>Questions ? Répondez à cet email ou contactez-nous à ${env.EMAIL_REPLY_TO}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('❌ Erreur Resend:', error);
      throw error;
    }

    console.log('✅ Email envoyé avec succès:', data);
    return data;

  } catch (error) {
    console.error('❌ Erreur envoi email:', error);
    throw error;
  }
}

/**
 * Envoyer le rapport PDF final par email
 */
export async function sendReportEmail({ to, pdfUrl, auditId }) {
  try {
    const { data, error } = await resend.emails.send({
      from: env.EMAIL_FROM,
      to: to,
      replyTo: env.EMAIL_REPLY_TO,
      subject: '📊 Votre rapport NIS2 est disponible',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #28a745; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📊 Rapport disponible !</h1>
            </div>
            <div class="content">
              <h2>Votre audit NIS2 est terminé</h2>
              <p>Félicitations ! Votre rapport de conformité NIS2 est maintenant disponible.</p>
              
              <div style="text-align: center;">
                <a href="${pdfUrl}" class="button">
                  📥 Télécharger le rapport PDF
                </a>
              </div>

              <p style="margin-top: 20px; padding: 15px; background: #d4edda; border-left: 4px solid #28a745; border-radius: 5px;">
                <strong>✅ Prochaines étapes :</strong><br>
                Analysez vos résultats et consultez nos recommandations pour améliorer votre conformité.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('❌ Erreur Resend:', error);
      throw error;
    }

    console.log('✅ Rapport envoyé avec succès');
    return data;

  } catch (error) {
    console.error('❌ Erreur envoi rapport:', error);
    throw error;
  }
}