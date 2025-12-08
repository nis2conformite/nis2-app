import { IncomingForm } from 'formidable';
import fs from 'fs';
import { supabaseAdmin } from '../../../lib/supabase';

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
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Erreur parsing:', err);
        return res.status(500).json({ error: 'Erreur parsing formulaire' });
      }

      const auditId = fields.auditId?.[0] || fields.auditId;
      const itemKey = fields.itemKey?.[0] || fields.itemKey;
      const uploadedFiles = files.files;

      if (!auditId || !itemKey) {
        return res.status(400).json({ error: 'auditId et itemKey requis' });
      }

      if (!uploadedFiles) {
        return res.status(400).json({ error: 'Aucun fichier' });
      }

      // Convertir en tableau si c'est un seul fichier
      const fileArray = Array.isArray(uploadedFiles) ? uploadedFiles : [uploadedFiles];

      const uploadedUrls = [];

      // Upload chaque fichier dans Supabase Storage
      for (const file of fileArray) {
        const fileBuffer = fs.readFileSync(file.filepath);
        const fileName = `${auditId}/${itemKey}/${Date.now()}-${file.originalFilename}`;

        const { data, error } = await supabaseAdmin.storage
          .from('audit-documents')
          .upload(fileName, fileBuffer, {
            contentType: file.mimetype,
            upsert: false,
          });

        if (error) {
          console.error('Erreur upload Supabase:', error);
          return res.status(500).json({ error: 'Erreur upload Supabase' });
        }

        // Obtenir l'URL publique
        const { data: urlData } = supabaseAdmin.storage
          .from('audit-documents')
          .getPublicUrl(fileName);

        uploadedUrls.push({
          name: file.originalFilename,
          url: urlData.publicUrl,
          path: fileName,
        });
      }

      // Mettre à jour la table audits avec les URLs
      const { data: audit, error: fetchError } = await supabaseAdmin
        .from('audits')
        .select('item_documents')
        .eq('id', auditId)
        .single();

      if (fetchError) {
        console.error('Erreur fetch audit:', fetchError);
        return res.status(500).json({ error: 'Erreur fetch audit' });
      }

      const currentDocs = audit.item_documents || {};
      const itemDocs = currentDocs[itemKey] || [];

      const updatedDocs = {
        ...currentDocs,
        [itemKey]: [...itemDocs, ...uploadedUrls],
      };

      const { error: updateError } = await supabaseAdmin
        .from('audits')
        .update({ item_documents: updatedDocs })
        .eq('id', auditId);

      if (updateError) {
        console.error('Erreur update audit:', updateError);
        return res.status(500).json({ error: 'Erreur update audit' });
      }

      return res.status(200).json({
        success: true,
        files: uploadedUrls,
      });
    });
  } catch (error) {
    console.error('Erreur:', error);
    return res.status(500).json({ error: error.message });
  }
}
