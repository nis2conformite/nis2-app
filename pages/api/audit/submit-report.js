import PDFDocument from 'pdfkit';
import { supabaseAdmin } from '../../../lib/supabase';
import { sendReportEmail } from '../../../lib/resend';
import { env } from '../../../lib/env.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { auditId, token } = req.body;

    if (!auditId) {
      return res.status(400).json({ error: 'auditId requis' });
    }

    console.log('📄 Génération du rapport pour audit:', auditId);

    const { data: audit, error: fetchError } = await supabaseAdmin
      .from('audits')
      .select('*')
      .eq('id', auditId)
      .single();

    if (fetchError || !audit) {
      console.error('Erreur fetch audit:', fetchError);
      return res.status(404).json({ error: 'Audit non trouvé' });
    }

    const totalItems = 65;
let auditData = audit.audit_data;

// Si audit_data est une chaîne JSON, la parser
if (typeof auditData === 'string') {
  try {
    auditData = JSON.parse(auditData);
  } catch (e) {
    auditData = {};
  }
}

// Compter les points remplis
const completedItems = Object.keys(auditData || {}).length;

console.log('📊 Points remplis:', completedItems, '/', totalItems);
console.log('📋 Audit data:', auditData);

if (completedItems < totalItems) {
  return res.status(400).json({ 
    error: `Audit incomplet: ${completedItems}/${totalItems} points remplis` 
  });
}

    console.log('✅ Audit complet, génération du PDF...');

    const pdfBuffer = await generatePDF(audit);

    const fileName = `reports/${auditId}/rapport-nis2-${Date.now()}.pdf`;
    
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from('audit-documents')
      .upload(fileName, pdfBuffer, {
        contentType: 'application/pdf',
        upsert: false,
      });

    if (uploadError) {
      console.error('Erreur upload PDF:', uploadError);
      return res.status(500).json({ error: 'Erreur upload PDF' });
    }

    const { data: urlData } = supabaseAdmin.storage
      .from('audit-documents')
      .getPublicUrl(fileName);

    const pdfUrl = urlData.publicUrl;

    console.log('📤 PDF uploadé:', pdfUrl);

    const conformeCount = Object.values(auditData).filter(v => v === 'conforme').length;
    const conformityRate = Math.round((conformeCount / completedItems) * 100);

    await sendReportEmail({
  to: audit.client_email,
  pdfUrl: pdfUrl,
  auditId: auditId,
});

    console.log('📧 Email envoyé à:', audit.client_email);

    await supabaseAdmin
      .from('audits')
      .update({
        is_completed: true,
        completion_percentage: 100,
        pdf_url: pdfUrl,
        completed_at: new Date().toISOString(),
      })
      .eq('id', auditId);

    console.log('✅ Audit marqué comme terminé');

    return res.status(200).json({
      success: true,
      pdfUrl: pdfUrl,
      message: 'Rapport généré et envoyé par email',
    });

  } catch (error) {
    console.error('❌ Erreur:', error);
    return res.status(500).json({ 
      error: 'Erreur serveur', 
      details: error.message 
    });
  }
}

async function generatePDF(audit) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ 
      size: 'A4',
      margins: { top: 50, bottom: 50, left: 50, right: 50 }
    });

    const chunks = [];
    
    doc.on('data', chunk => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    const totalItems = 65;
    const auditData = audit.audit_data || {};
    const completed = Object.keys(auditData).length;
    const conforme = Object.values(auditData).filter(v => v === 'conforme').length;
    const partiel = Object.values(auditData).filter(v => v === 'partiel').length;
    const nonConforme = Object.values(auditData).filter(v => v === 'non_conforme').length;
    const nonEvalue = totalItems - completed;
    const conformityRate = completed > 0 ? Math.round((conforme / completed) * 100) : 0;

    // ============= PAGE 1 - EN-TETE =============
    doc.fontSize(32).font('Helvetica-Bold').fillColor('#2563eb').text('RAPPORT D\'AUDIT NIS2', { align: 'center' });
    doc.moveDown(0.3);
    doc.fontSize(12).font('Helvetica').fillColor('#666').text('Conformite aux exigences de cybersecurite - Directive NIS2', { align: 'center' });
    doc.moveDown(2);

    // ENCADRE INFO ENTREPRISE
    const boxY = doc.y;
    doc.rect(50, boxY, 495, 140).fillAndStroke('#eff6ff', '#2563eb');
    
    doc.fillColor('#000').fontSize(10).font('Helvetica-Bold');
    doc.text('Entite :', 70, boxY + 20);
    doc.font('Helvetica').text(audit.entity_name || 'N/A', 160, boxY + 20, { width: 150 });
    
    doc.font('Helvetica-Bold').text('Type :', 320, boxY + 20);
    doc.font('Helvetica').text('Entite Essentielle', 380, boxY + 20);
    
    doc.font('Helvetica-Bold').text('Secteur :', 70, boxY + 45);
    doc.font('Helvetica').text(audit.entity_sector || 'N/A', 160, boxY + 45, { width: 350 });
    
    doc.font('Helvetica-Bold').text('Contact :', 70, boxY + 70);
    doc.font('Helvetica').text(audit.client_email || 'N/A', 160, boxY + 70);
    
    doc.font('Helvetica-Bold').text('Adresse :', 70, boxY + 95);
    const fullAddress = `${audit.address || ''} ${audit.postal_code || ''} ${audit.city || ''} ${audit.country || ''}`.trim();
    doc.font('Helvetica').text(fullAddress || 'N/A', 160, boxY + 95, { width: 360 });
    
    doc.font('Helvetica-Bold').text('Date generation :', 70, boxY + 115);
    doc.font('Helvetica').text(new Date().toLocaleDateString('fr-FR'), 200, boxY + 115);
    
    doc.font('Helvetica-Bold').text('Salaries :', 320, boxY + 115);
    doc.font('Helvetica').text(audit.employees || 'N/A', 380, boxY + 115);

    doc.y = boxY + 160;

    // STATISTIQUES - 5 CARTES
    const statsY = doc.y;
    const cardWidth = 90;
    const cardHeight = 80;
    const gap = 9;

    // Carte 1
    doc.rect(50, statsY, cardWidth, cardHeight).fillAndStroke('#fff', '#e5e7eb');
    doc.fontSize(28).font('Helvetica-Bold').fillColor('#2563eb').text(`${conformityRate}%`, 50, statsY + 15, { width: cardWidth, align: 'center' });
    doc.fontSize(9).font('Helvetica').fillColor('#666').text('TAUX DE', 50, statsY + 50, { width: cardWidth, align: 'center' });
    doc.text('CONFORMITE', 50, statsY + 62, { width: cardWidth, align: 'center' });

    // Carte 2
    doc.rect(50 + cardWidth + gap, statsY, cardWidth, cardHeight).fillAndStroke('#fff', '#e5e7eb');
    doc.fontSize(28).font('Helvetica-Bold').fillColor('#16a34a').text(`${conforme}`, 50 + cardWidth + gap, statsY + 15, { width: cardWidth, align: 'center' });
    doc.fontSize(9).font('Helvetica').fillColor('#666').text('CONFORMES', 50 + cardWidth + gap, statsY + 56, { width: cardWidth, align: 'center' });

    // Carte 3
    doc.rect(50 + (cardWidth + gap) * 2, statsY, cardWidth, cardHeight).fillAndStroke('#fff', '#e5e7eb');
    doc.fontSize(28).font('Helvetica-Bold').fillColor('#dc2626').text(`${nonConforme}`, 50 + (cardWidth + gap) * 2, statsY + 15, { width: cardWidth, align: 'center' });
    doc.fontSize(9).font('Helvetica').fillColor('#666').text('NON', 50 + (cardWidth + gap) * 2, statsY + 50, { width: cardWidth, align: 'center' });
    doc.text('CONFORMES', 50 + (cardWidth + gap) * 2, statsY + 62, { width: cardWidth, align: 'center' });

    // Carte 4
    doc.rect(50 + (cardWidth + gap) * 3, statsY, cardWidth, cardHeight).fillAndStroke('#fff', '#e5e7eb');
    doc.fontSize(28).font('Helvetica-Bold').fillColor('#ea580c').text(`${partiel}`, 50 + (cardWidth + gap) * 3, statsY + 15, { width: cardWidth, align: 'center' });
    doc.fontSize(9).font('Helvetica').fillColor('#666').text('PARTIELS', 50 + (cardWidth + gap) * 3, statsY + 56, { width: cardWidth, align: 'center' });

    // Carte 5
    doc.rect(50 + (cardWidth + gap) * 4, statsY, cardWidth, cardHeight).fillAndStroke('#fff', '#e5e7eb');
    doc.fontSize(28).font('Helvetica-Bold').fillColor('#64748b').text(`${nonEvalue}`, 50 + (cardWidth + gap) * 4, statsY + 15, { width: cardWidth, align: 'center' });
    doc.fontSize(9).font('Helvetica').fillColor('#666').text('NON', 50 + (cardWidth + gap) * 4, statsY + 50, { width: cardWidth, align: 'center' });
    doc.text('EVALUES', 50 + (cardWidth + gap) * 4, statsY + 62, { width: cardWidth, align: 'center' });

    doc.y = statsY + cardHeight + 30;

    // ============= QUESTIONS PAR CATEGORIES =============
    const questions = getQuestionsWithEvidence();
    const categories = [
      { title: 'Article 20 - Gouvernance', subtitle: 'Responsabilite des organes de direction', start: 0, end: 5 },
      { title: 'Article 21.1 - Analyse des risques', subtitle: 'Identification et evaluation des risques', start: 5, end: 10 },
      { title: 'Article 21.2 - Politiques de securite', subtitle: 'Cadre politique de la securite', start: 10, end: 15 },
      { title: 'Article 21.3 - Gestion des incidents', subtitle: 'Detection et traitement des incidents', start: 15, end: 20 },
      { title: 'Article 21.4 - Continuite d\'activite', subtitle: 'Plans de continuite et de reprise', start: 20, end: 25 },
      { title: 'Article 21.5 - Chaine d\'approvisionnement', subtitle: 'Securite des fournisseurs', start: 25, end: 30 },
      { title: 'Article 21.6 - Securite reseau', subtitle: 'Protection des infrastructures', start: 30, end: 35 },
      { title: 'Article 21.7 - Controle d\'acces', subtitle: 'Gestion des identites et acces', start: 35, end: 40 },
      { title: 'Article 21.8 - Securite des actifs', subtitle: 'Protection des ressources', start: 40, end: 45 },
      { title: 'Article 21.9 - Chiffrement', subtitle: 'Cryptographie et protection des donnees', start: 45, end: 50 },
      { title: 'Article 21.10 - Ressources humaines', subtitle: 'Formation et sensibilisation', start: 50, end: 55 },
      { title: 'Article 21.11 - Developpement securise', subtitle: 'Securite du cycle de vie logiciel', start: 55, end: 60 },
      { title: 'Article 21.12 - Journalisation', subtitle: 'Surveillance et traçabilite', start: 60, end: 65 }
    ];

    let questionNumber = 1;

    categories.forEach((cat, catIndex) => {
      // Vérifier si on a assez d'espace pour le titre de catégorie (50px minimum)
      if (doc.y > 750) {
        doc.addPage();
      }

      // Titre catégorie avec fond gris
      const titleY = doc.y;
      doc.rect(50, titleY, 495, 30).fillAndStroke('#f1f5f9', '#cbd5e1');
      doc.fontSize(13).font('Helvetica-Bold').fillColor('#1e293b').text(cat.title, 60, titleY + 8);
      doc.fontSize(9).font('Helvetica').fillColor('#64748b').text(cat.subtitle, 60, titleY + 22);
      doc.y = titleY + 40;

      for (let i = cat.start; i < cat.end; i++) {
        const q = questions[i];
        const status = auditData[q.id];
        const note = (audit.notes || {})[q.id];
        const docs = (audit.item_documents || {})[q.id] || [];

        // Vérifier si on a assez d'espace (minimum 100px)
        if (doc.y > 700) {
          doc.addPage();
        }

        const itemStartY = doc.y;

        // Badge statut
        let badgeColor, badgeText, badgeBg;
        if (status === 'conforme') {
          badgeColor = '#16a34a';
          badgeText = 'CONFORME';
          badgeBg = '#dcfce7';
        } else if (status === 'partiel') {
          badgeColor = '#ea580c';
          badgeText = 'PARTIEL';
          badgeBg = '#ffedd5';
        } else if (status === 'non_conforme') {
          badgeColor = '#dc2626';
          badgeText = 'NON CONFORME';
          badgeBg = '#fee2e2';
        } else {
          badgeColor = '#64748b';
          badgeText = 'NON EVALUE';
          badgeBg = '#f1f5f9';
        }

        // Badge
        doc.roundedRect(50, itemStartY, 85, 16, 3).fillAndStroke(badgeBg, badgeColor);
        doc.fontSize(7).font('Helvetica-Bold').fillColor(badgeColor).text(badgeText, 55, itemStartY + 4);

        // Question
        doc.fontSize(10).font('Helvetica-Bold').fillColor('#000').text(q.question, 145, itemStartY, { width: 400 });
        
        const questionHeight = doc.heightOfString(q.question, { width: 400 });
        doc.y = itemStartY + Math.max(16, questionHeight) + 8;

        // Preuves attendues - ALIGNÉES
        const preuveY = doc.y;
        doc.fontSize(9).font('Helvetica-Bold').fillColor('#64748b').text('Preuves attendues :', 50, preuveY);
        doc.fontSize(9).font('Helvetica').fillColor('#64748b').text(q.evidence, 155, preuveY, { width: 390 });
        
        const evidenceHeight = doc.heightOfString(q.evidence, { width: 390 });
        doc.y = preuveY + evidenceHeight + 8;

        // Note de l'auditeur (encadré jaune)
        if (note && note.trim()) {
          const noteY = doc.y;
          const noteHeader = 'Note de l\'auditeur :';
          const noteContent = note;
          
          // Calculer hauteur totale
          const headerHeight = doc.heightOfString(noteHeader, { width: 475 });
          const contentHeight = doc.heightOfString(noteContent, { width: 475 });
          const totalNoteHeight = headerHeight + contentHeight + 18;
          
          doc.roundedRect(50, noteY, 495, totalNoteHeight, 3).fillAndStroke('#fef3c7', '#eab308');
          doc.fontSize(9).font('Helvetica-Bold').fillColor('#92400e').text(noteHeader, 60, noteY + 8, { width: 475 });
          doc.font('Helvetica').text(noteContent, 60, noteY + 8 + headerHeight + 3, { width: 475 });
          doc.y = noteY + totalNoteHeight + 5;
        }

        // Pièces justificatives (si documents uploadés)
        if (docs && docs.length > 0) {
          const docsY = doc.y;
          doc.roundedRect(50, docsY, 495, 15 + (docs.length * 12), 3).fillAndStroke('#eff6ff', '#3b82f6');
          
          doc.fontSize(9).font('Helvetica-Bold').fillColor('#1e40af').text('Pieces justificatives :', 60, docsY + 5);
          
          let docItemY = docsY + 20;
          docs.forEach((docItem) => {
            doc.fontSize(8).font('Helvetica').fillColor('#3b82f6').text(`📎 ${docItem.name}`, 70, docItemY, { width: 460 });
            docItemY += 12;
          });
          
          doc.y = docsY + 15 + (docs.length * 12) + 5;
        }

        doc.moveDown(0.5);
        questionNumber++;
      }
    });

    // ============= PAGE FINALE - NOTES =============
    doc.addPage();
    
    const finalTitleY = doc.y;
    doc.rect(50, finalTitleY, 495, 25).fillAndStroke('#eff6ff', '#2563eb');
    doc.fontSize(14).font('Helvetica-Bold').fillColor('#1e40af').text('NOTES IMPORTANTES SUR LA CONFORMITE NIS2', 60, finalTitleY + 7);
    doc.y = finalTitleY + 35;

    const notesBoxY = doc.y;
    doc.roundedRect(50, notesBoxY, 495, 270, 5).fillAndStroke('#f8fafc', '#cbd5e1');
    
    doc.fontSize(10).font('Helvetica').fillColor('#000');
    let noteY = notesBoxY + 20;
    
    const notes = [
      `Perimetre : Cette grille couvre les 65 points de controle obligatoires de la directive NIS2`,
      `Total evalue : ${completed} points sur ${totalItems} ont ete evalues (${Math.round(completed/totalItems*100)}% de progression)`,
      `Taux de conformite : ${conformityRate}% des points evalues sont conformes ou partiellement conformes`,
      `Points conformes : ${conforme}/${totalItems} points sont totalement conformes`,
      `Points partiellement conformes : ${partiel} points necessitent des ameliorations`,
      `Points non conformes : ${nonConforme} points critiques identifies`,
      `Points non evalues : ${nonEvalue} points restent a evaluer`,
      `Sanctions : Jusqu'a 10M EUR ou 2% du CA annuel global pour les entites essentielles`,
      `Delai de mise en conformite : Periode de tolerance envisagee jusqu'au 31/12/2027`,
      `Recommandation : Elaborer un plan d'action priorise pour traiter les non-conformites`
    ];

    notes.forEach((note) => {
      doc.circle(65, noteY + 5, 2.5).fillColor('#2563eb').fill();
      doc.fillColor('#1e293b').text(note, 80, noteY, { width: 450 });
      noteY += 25;
    });

    doc.y = notesBoxY + 280;
    doc.moveDown(2);

    // Footer
    doc.fontSize(10).font('Helvetica-Bold').fillColor('#64748b').text('Rapport genere par l\'outil d\'audit NIS2', 50, doc.y, { align: 'center' });
    doc.fontSize(9).font('Helvetica').fillColor('#94a3b8').text('Document confidentiel - Usage interne uniquement', 50, doc.y + 15, { align: 'center' });
    doc.text(`(c) ${new Date().getFullYear()} - Tous droits reserves`, 50, doc.y + 28, { align: 'center' });

    doc.end();
  });
}

function getQuestionsWithEvidence() {
  return [
    // Article 20
    { id: '20_1', question: 'Les organes de direction approuvent les mesures de gestion des risques cybersecurite', evidence: 'PV de conseil, decisions formelles' },
    { id: '20_2', question: 'Les organes de direction supervisent la mise en oeuvre des mesures', evidence: 'Reportings reguliers, tableaux de bord' },
    { id: '20_3', question: 'Formation obligatoire en cybersecurite pour les organes de direction', evidence: 'Certificats de formation, attestations' },
    { id: '20_4', question: 'Politique de gestion des risques cybersecurite approuvee', evidence: 'Document de politique signe' },
    { id: '20_5', question: 'Responsabilites definies pour la cybersecurite', evidence: 'Organigramme, fiches de poste' },
    
    // Article 21.1
    { id: '21_1_1', question: 'Identification des actifs critiques et sensibles', evidence: 'Inventaire des actifs, cartographie' },
    { id: '21_1_2', question: 'Analyse des menaces et vulnerabilites', evidence: 'Rapports d\'analyse de risques' },
    { id: '21_1_3', question: 'Evaluation de l impact des incidents', evidence: 'Matrices de risques, BIA' },
    { id: '21_1_4', question: 'Plan de traitement des risques', evidence: 'Plan d\'action, suivi des risques' },
    { id: '21_1_5', question: 'Revue periodique des risques', evidence: 'Rapports de revue, mises a jour' },
    
    // Article 21.2
    { id: '21_2_1', question: 'Politique de securite des systemes d information', evidence: 'Document de politique approuve' },
    { id: '21_2_2', question: 'Politique de controle d acces', evidence: 'Procedures d\'acces, matrice des droits' },
    { id: '21_2_3', question: 'Politique de classification des donnees', evidence: 'Grille de classification, labels' },
    { id: '21_2_4', question: 'Politique de sauvegarde', evidence: 'Procedure de backup, tests de restauration' },
    { id: '21_2_5', question: 'Communication et sensibilisation aux politiques', evidence: 'Campagnes, accuses de reception' },
    
    // Article 21.3
    { id: '21_3_1', question: 'Procedure de detection des incidents', evidence: 'SIEM, logs, alertes' },
    { id: '21_3_2', question: 'Procedure de traitement des incidents', evidence: 'Plan de reponse aux incidents' },
    { id: '21_3_3', question: 'Notification aux autorites competentes', evidence: 'Procedure de notification, registre' },
    { id: '21_3_4', question: 'Analyse post-incident et retour d experience', evidence: 'Rapports d\'incidents, actions correctives' },
    { id: '21_3_5', question: 'Tests reguliers du plan de gestion des incidents', evidence: 'Exercices, simulations, rapports' },
    
    // Article 21.4
    { id: '21_4_1', question: 'Plan de continuite d activite (PCA)', evidence: 'Document PCA approuve' },
    { id: '21_4_2', question: 'Plan de reprise d activite (PRA)', evidence: 'Document PRA, procedures de reprise' },
    { id: '21_4_3', question: 'Tests reguliers des plans de continuite', evidence: 'Rapports de tests, exercices' },
    { id: '21_4_4', question: 'Sauvegarde et restauration des donnees critiques', evidence: 'Procedures de backup, tests' },
    { id: '21_4_5', question: 'Sites de secours et redondance', evidence: 'Infrastructure de secours, contrats' },
    
    // Article 21.5
    { id: '21_5_1', question: 'Evaluation des risques fournisseurs', evidence: 'Questionnaires securite, audits' },
    { id: '21_5_2', question: 'Clauses de securite dans les contrats', evidence: 'Contrats avec clauses cyber' },
    { id: '21_5_3', question: 'Controle et surveillance des fournisseurs', evidence: 'Audits, revues de securite' },
    { id: '21_5_4', question: 'Gestion des incidents impliquant les fournisseurs', evidence: 'Procedure de coordination' },
    { id: '21_5_5', question: 'Securite des developpements externalises', evidence: 'Revues de code, tests' },
    
    // Article 21.6
    { id: '21_6_1', question: 'Segmentation reseau et zones de securite', evidence: 'Architecture reseau, VLANs' },
    { id: '21_6_2', question: 'Pare-feu et filtrage reseau', evidence: 'Configuration firewall, regles' },
    { id: '21_6_3', question: 'Detection et prevention des intrusions (IDS/IPS)', evidence: 'Systemes IDS/IPS, logs' },
    { id: '21_6_4', question: 'VPN et chiffrement des communications', evidence: 'Configuration VPN, certificats' },
    { id: '21_6_5', question: 'Surveillance reseau et analyse des flux', evidence: 'Outils de monitoring, rapports' },
    
    // Article 21.7
    { id: '21_7_1', question: 'Gestion des identites et des acces (IAM)', evidence: 'Systeme IAM, provisioning' },
    { id: '21_7_2', question: 'Authentification forte (MFA)', evidence: 'Configuration MFA, taux adoption' },
    { id: '21_7_3', question: 'Gestion des comptes privilegies', evidence: 'Coffre-fort mots de passe, PAM' },
    { id: '21_7_4', question: 'Revue reguliere des droits d acces', evidence: 'Rapports de revue, certifications' },
    { id: '21_7_5', question: 'Gestion des departs et changements de poste', evidence: 'Procedure de revocation, workflow' },
    
    // Article 21.8
    { id: '21_8_1', question: 'Inventaire des actifs IT', evidence: 'CMDB, inventaire a jour' },
    { id: '21_8_2', question: 'Classification et etiquetage des actifs', evidence: 'Classification, labels' },
    { id: '21_8_3', question: 'Gestion des supports amovibles', evidence: 'Politique supports, chiffrement' },
    { id: '21_8_4', question: 'Destruction securisee des actifs', evidence: 'Procedure de destruction, certificats' },
    { id: '21_8_5', question: 'Securite physique des actifs critiques', evidence: 'Controle acces, videosurveillance' },
    
    // Article 21.9
    { id: '21_9_1', question: 'Chiffrement des donnees sensibles au repos', evidence: 'Configuration chiffrement, algo' },
    { id: '21_9_2', question: 'Chiffrement des donnees en transit', evidence: 'TLS/SSL, certificats' },
    { id: '21_9_3', question: 'Gestion des cles cryptographiques', evidence: 'KMS, procedure gestion cles' },
    { id: '21_9_4', question: 'Signature electronique', evidence: 'Certificats de signature, PKI' },
    { id: '21_9_5', question: 'Conformite aux standards de chiffrement', evidence: 'Standards utilises (AES-256)' },
    
    // Article 21.10
    { id: '21_10_1', question: 'Sensibilisation et formation a la cybersecurite', evidence: 'Programme formation, taux' },
    { id: '21_10_2', question: 'Tests de phishing et simulation d attaques', evidence: 'Campagnes phishing, resultats' },
    { id: '21_10_3', question: 'Clauses de securite dans les contrats de travail', evidence: 'Contrats avec clauses, NDA' },
    { id: '21_10_4', question: 'Verification des antecedents (screening)', evidence: 'Procedure verification, rapports' },
    { id: '21_10_5', question: 'Sanctions disciplinaires en cas de non-respect', evidence: 'Reglement interieur, procedures' },
    
    // Article 21.11
    { id: '21_11_1', question: 'Cycle de developpement securise (SDLC)', evidence: 'Processus SDLC documente' },
    { id: '21_11_2', question: 'Revues de code et analyse statique', evidence: 'Outils SAST, rapports de revue' },
    { id: '21_11_3', question: 'Tests de securite applicatifs', evidence: 'Tests DAST, pentests, rapports' },
    { id: '21_11_4', question: 'Gestion des vulnerabilites applicatives', evidence: 'Registre vulnerabilites, patch' },
    { id: '21_11_5', question: 'Environnements de developpement securises', evidence: 'Separation dev/prod, acces' },
    
    // Article 21.12
    { id: '21_12_1', question: 'Centralisation des logs (SIEM)', evidence: 'Solution SIEM, configuration' },
    { id: '21_12_2', question: 'Retention des logs conformement aux exigences', evidence: 'Politique retention, archivage' },
    { id: '21_12_3', question: 'Protection et integrite des logs', evidence: 'Logs securises, non modifiables' },
    { id: '21_12_4', question: 'Correlation et analyse des logs', evidence: 'Regles correlation, alertes' },
    { id: '21_12_5', question: 'Surveillance en temps reel et tableaux de bord', evidence: 'SOC, dashboards, rapports' }
  ];
}