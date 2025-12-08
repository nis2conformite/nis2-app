// lib/resend.js
import { Resend } from 'resend';
import { env } from './env.js';

const resend = new Resend(env.RESEND_API_KEY);

console.log('✅ Resend initialisé avec clé:', env.RESEND_API_KEY ? 'PRÉSENTE' : 'MANQUANTE');

// Template email avec lien d'accès
export function getAccessEmailTemplate({ clientName, auditLink, clientEmail }) {
  return {
    from: env.EMAIL_FROM,
    to: clientEmail,
    subject: '✅ Votre audit NIS2 est prêt - Accédez maintenant',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; }
    .button { display: inline-block; background: #2563eb; color: white !important; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
    .info-box { background: white; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0; border-radius: 4px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; background: #f1f5f9; border-radius: 0 0 10px 10px; }
    ul { padding-left: 20px; }
    li { margin-bottom: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🎉 Votre audit NIS2 est prêt !</h1>
    </div>
    
    <div class="content">
      <p>Bonjour <strong>${clientName || 'cher client'}</strong>,</p>
      
      <p>Merci pour votre achat ! Votre audit de conformité NIS2 est maintenant accessible en ligne.</p>
      
      <div class="info-box">
        <h3 style="margin-top: 0;">📋 Ce que vous devez faire :</h3>
        <ul>
          <li>Remplir les 65 points de contrôle</li>
          <li>Joindre vos documents justificatifs</li>
          <li>Finaliser l'audit pour recevoir votre rapport PDF</li>
        </ul>
      </div>
      
      <div style="text-align: center;">
        <a href="${auditLink}" class="button">
          🔗 Accéder à mon audit
        </a>
      </div>
      
      <div class="info-box" style="background: #fef3c7; border-left-color: #eab308;">
        <p><strong>⏱️ Durée estimée :</strong> 2-3 heures</p>
        <p><strong>📊 Rapport :</strong> Vous recevrez automatiquement votre rapport PDF par email une fois l'audit complété à 100%</p>
      </div>
      
      <p><strong>⚠️ Important :</strong> Conservez ce lien précieusement. Il vous permettra de revenir à tout moment pour continuer votre audit.</p>
      
      <p>Vos données sont sauvegardées automatiquement à chaque modification.</p>
      
      <p>Besoin d'aide ? Répondez simplement à cet email.</p>
      
      <p>Cordialement,<br>
      <strong>L'équipe Audit NIS2</strong></p>
    </div>
    
    <div class="footer">
      <p>Cet email a été envoyé à ${clientEmail}<br>
      Vous recevez cet email suite à votre achat d'un audit NIS2</p>
    </div>
  </div>
</body>
</html>
    `,
  };
}

// Template email avec rapport PDF
export function getPdfEmailTemplate({ clientName, clientEmail, conformityRate, compliantCount, pdfUrl }) {
  return {
   from: env.EMAIL_FROM,
    to: clientEmail,
    subject: '🎉 Votre rapport d\'audit NIS2 est prêt !',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; }
    .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
    .stat-box { background: white; padding: 20px; border-radius: 8px; text-align: center; border: 2px solid #e5e7eb; }
    .stat-value { font-size: 36px; font-weight: bold; color: #2563eb; margin: 0; }
    .stat-label { font-size: 14px; color: #666; margin-top: 5px; }
    .button { display: inline-block; background: #2563eb; color: white !important; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
    .info-box { background: white; border-left: 4px solid #16a34a; padding: 15px; margin: 20px 0; border-radius: 4px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; background: #f1f5f9; border-radius: 0 0 10px 10px; }
    ul, ol { padding-left: 20px; }
    li { margin-bottom: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">✅ Félicitations !</h1>
      <p style="font-size: 18px; margin: 10px 0 0 0;">Votre audit NIS2 est terminé</p>
    </div>
    
    <div class="content">
      <p>Bonjour <strong>${clientName || 'cher client'}</strong>,</p>
      
      <p>Bravo ! Vous avez complété votre audit de conformité NIS2. Votre rapport détaillé est maintenant disponible.</p>
      
      <div class="stats">
        <div class="stat-box">
          <div class="stat-value">${conformityRate}%</div>
          <div class="stat-label">Taux de conformité</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">${compliantCount}/65</div>
          <div class="stat-label">Points conformes</div>
        </div>
      </div>
      
      <div class="info-box">
        <h3 style="margin-top: 0;">📄 Votre rapport contient :</h3>
        <ul>
          <li>Évaluation détaillée des 65 points de contrôle</li>
          <li>Statut de conformité pour chaque exigence</li>
          <li>Vos notes et observations</li>
          <li>Documents justificatifs référencés</li>
          <li>Recommandations d'amélioration</li>
        </ul>
      </div>
      
      <div style="text-align: center;">
        <a href="${pdfUrl}" class="button">
          📥 Télécharger mon rapport PDF
        </a>
      </div>
      
      <p><strong>💡 Prochaines étapes recommandées :</strong></p>
      <ol>
        <li>Consultez les recommandations dans votre rapport</li>
        <li>Priorisez les non-conformités critiques</li>
        <li>Élaborez un plan d'action de mise en conformité</li>
        <li>Planifiez les actions correctives avec votre équipe</li>
      </ol>
      
      <div class="info-box" style="border-left-color: #2563eb;">
        <p><strong>🤝 Besoin d'accompagnement ?</strong></p>
        <p>Nous proposons des services de conseil pour vous aider dans votre mise en conformité NIS2.</p>
        <p>Répondez à cet email pour plus d'informations.</p>
      </div>
      
      <p>Merci de votre confiance !</p>
      
      <p>Cordialement,<br>
      <strong>L'équipe Audit NIS2</strong></p>
    </div>
    
    <div class="footer">
      <p>Cet email a été envoyé à ${clientEmail}<br>
      Rapport généré le ${new Date().toLocaleDateString('fr-FR')}</p>
    </div>
  </div>
</body>
</html>
    `,
  };
}

// Fonction pour envoyer l'email avec le lien d'accès
export async function sendAccessEmail({ clientName, clientEmail, auditLink }) {
  try {
    const emailData = getAccessEmailTemplate({ clientName, clientEmail, auditLink });
    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Erreur envoi email:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Erreur dans sendAccessEmail:', error);
    throw error;
  }
}

// Fonction pour envoyer l'email avec le PDF
export async function sendPdfEmail({ clientName, clientEmail, conformityRate, compliantCount, pdfUrl }) {
  try {
    const emailData = getPdfEmailTemplate({ 
      clientName, 
      clientEmail, 
      conformityRate, 
      compliantCount, 
      pdfUrl 
    });
    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Erreur envoi email PDF:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Erreur dans sendPdfEmail:', error);
    throw error;
  }
}
