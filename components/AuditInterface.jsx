import { useState, useEffect } from 'react';

export default function AuditInterface({ audit, onUpdateAudit }) {
  const [auditData, setAuditData] = useState(audit?.audit_data || {});
  const [notes, setNotes] = useState(audit?.notes || {});
  const [documents, setDocuments] = useState(audit?.item_documents || {});
  const [companyInfo, setCompanyInfo] = useState({
    entity_name: audit?.entity_name || '',
    entity_sector: audit?.entity_sector || '',
    phone: audit?.phone || '',
    email: audit?.client_email || '',
    address: audit?.address || '',
    city: audit?.city || '',
    postal_code: audit?.postal_code || '',
    country: audit?.country || 'France',
    employees: audit?.employees || '',
    revenue: audit?.revenue || '',
  });
  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [uploadingFiles, setUploadingFiles] = useState({});

  // Recharger les documents depuis l'audit
  useEffect(() => {
    setDocuments(audit?.item_documents || {});
  }, [audit]);

  const secteurs = [
    "Énergie - Électricité",
    "Énergie - Pétrole",
    "Énergie - Gaz",
    "Énergie - Hydrogène",
    "Transports - Aérien",
    "Transports - Ferroviaire",
    "Transports - Maritime",
    "Transports - Routier",
    "Secteur bancaire",
    "Infrastructures des marchés financiers",
    "Santé",
    "Eau potable",
    "Eaux usées",
    "Infrastructures numériques",
    "Gestion des services TIC",
    "Espace",
    "Administration publique",
    "Fabrication - Production et distribution de produits chimiques"
  ];

  const saveChanges = async () => {
    setSaving(true);
    try {
      await onUpdateAudit(audit.id, {
        audit_data: auditData,
        notes: notes,
        entity_name: companyInfo.entity_name,
        entity_sector: companyInfo.entity_sector,
        phone: companyInfo.phone,
        address: companyInfo.address,
        city: companyInfo.city,
        postal_code: companyInfo.postal_code,
        country: companyInfo.country,
        employees: companyInfo.employees,
        revenue: companyInfo.revenue,
      });
      setLastSaved(new Date());
      alert('✅ Sauvegardé avec succès !');
    } catch (error) {
      console.error('Erreur:', error);
      alert('❌ Erreur lors de la sauvegarde');
    } finally {
      setSaving(false);
    }
  };

  const handleCompanyInfoChange = (field, value) => {
    setCompanyInfo({ ...companyInfo, [field]: value });
  };

  const handleStatusChange = async (itemKey, status) => {
    const newData = { ...auditData, [itemKey]: status };
    setAuditData(newData);
    try {
      await onUpdateAudit(audit.id, { audit_data: newData });
      setLastSaved(new Date());
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const handleNoteChange = (itemKey, note) => {
    setNotes({ ...notes, [itemKey]: note });
    // Ne pas sauvegarder automatiquement les notes
    // L'utilisateur devra cliquer sur "Sauvegarder"
  };

  const handleFileUpload = async (itemKey, files) => {
    if (!files || files.length === 0) return;

    setUploadingFiles({ ...uploadingFiles, [itemKey]: true });

    try {
      const formData = new FormData();
      Array.from(files).forEach(file => {
        formData.append('files', file);
      });
      formData.append('auditId', audit.id);
      formData.append('itemKey', itemKey);

      const response = await fetch('/api/audit/upload-documents', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        // Mettre à jour la liste des documents localement
        const updatedDocs = {
          ...documents,
          [itemKey]: [...(documents[itemKey] || []), ...result.files]
        };
        setDocuments(updatedDocs);
        
        alert(`✅ ${files.length} fichier(s) uploadé(s) avec succès !`);
        setLastSaved(new Date());
      } else {
        throw new Error(result.error || 'Erreur upload');
      }
    } catch (error) {
      console.error('Erreur upload:', error);
      alert('❌ Erreur lors de l\'upload : ' + error.message);
    } finally {
      setUploadingFiles({ ...uploadingFiles, [itemKey]: false });
    }
  };

  const deleteDocument = async (itemKey, docIndex) => {
    if (!confirm('Voulez-vous vraiment supprimer ce document ?')) return;

    try {
      const itemDocs = documents[itemKey] || [];
      const newItemDocs = itemDocs.filter((_, index) => index !== docIndex);
      
      const updatedDocs = {
        ...documents,
        [itemKey]: newItemDocs
      };

      await onUpdateAudit(audit.id, { item_documents: updatedDocs });
      setDocuments(updatedDocs);
      alert('✅ Document supprimé');
    } catch (error) {
      console.error('Erreur suppression:', error);
      alert('❌ Erreur lors de la suppression');
    }
  };

  const submitReport = async () => {
    const total = 65;
    const completed = Object.keys(auditData).length;
    
    if (completed < total) {
      alert(`⚠️ Impossible d'envoyer le rapport\n\nIl manque encore ${total - completed} point(s) à remplir.\n\nProgression actuelle : ${completed}/${total}`);
      return;
    }

    if (!companyInfo.entity_name || !companyInfo.entity_sector) {
      alert('⚠️ Veuillez remplir au minimum le nom de l\'entité et le secteur d\'activité avant d\'envoyer le rapport.');
      return;
    }

    if (!confirm(`✅ Tous les points sont remplis !\n\nVoulez-vous générer et envoyer votre rapport par email ?\n\n📧 Le rapport sera envoyé à : ${audit.client_email}`)) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/audit/submit-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ auditId: audit.id, token: audit.unique_token }),
      });
      const result = await res.json();
      if (result.success) {
        alert('🎉 Rapport envoyé avec succès !\n\nVous allez recevoir votre rapport PDF par email dans quelques instants.');
      } else {
        throw new Error(result.error || 'Erreur');
      }
    } catch (error) {
      alert('❌ Erreur lors de l\'envoi du rapport\n\n' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const total = 65;
  const completed = Object.keys(auditData).length;
  const progress = Math.round((completed / total) * 100);
  const isComplete = completed === total;
  const conforme = Object.values(auditData).filter(v => v === 'conforme').length;
  const conformity = completed > 0 ? Math.round((conforme / completed) * 100) : 0;

  const QuestionItem = ({ id, question, preuves, status, note, onStatusChange, onNoteChange }) => {
    const itemDocs = documents[id] || [];
    const [localNote, setLocalNote] = useState(note || '');
    
    useEffect(() => {
      setLocalNote(note || '');
    }, [note]);
    
    const handleNoteBlur = () => {
      if (localNote !== note) {
        onNoteChange(id, localNote);
      }
    };
    
    return (
      <div className="border-b border-gray-200 pb-4 mb-4 last:border-0">
        <h3 className="font-semibold text-gray-900 mb-2">{question}</h3>
        <p className="text-sm text-gray-600 mb-3">📎 Preuves attendues: {preuves}</p>
        
        <div className="flex gap-2 mb-3">
          <button 
            onClick={() => onStatusChange(id, 'conforme')} 
            className={`px-4 py-2 rounded transition-colors ${status === 'conforme' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            ✓ Conforme
          </button>
          <button 
            onClick={() => onStatusChange(id, 'partiel')} 
            className={`px-4 py-2 rounded transition-colors ${status === 'partiel' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            ~ Partiel
          </button>
          <button 
            onClick={() => onStatusChange(id, 'non_conforme')} 
            className={`px-4 py-2 rounded transition-colors ${status === 'non_conforme' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            ✗ Non conforme
          </button>
        </div>

        <textarea 
          value={localNote} 
          onChange={(e) => setLocalNote(e.target.value)} 
          onBlur={handleNoteBlur}
          placeholder="Notes et observations..." 
          className="w-full border border-gray-300 rounded p-2 text-sm mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
          rows="2" 
        />

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 cursor-pointer border border-blue-200 transition-colors text-sm">
              <span>📎 Joindre documents</span>
              <input 
                type="file" 
                multiple 
                onChange={(e) => handleFileUpload(id, e.target.files)}
                className="hidden"
                disabled={uploadingFiles[id]}
              />
            </label>
            {uploadingFiles[id] && <span className="text-sm text-gray-500">Upload en cours...</span>}
          </div>

          {/* Liste des documents uploadés */}
          {itemDocs.length > 0 && (
            <div className="bg-gray-50 rounded p-3 space-y-2">
              <p className="text-xs font-medium text-gray-700 mb-2">Documents joints ({itemDocs.length}) :</p>
              {itemDocs.map((doc, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-2 rounded border border-gray-200">
                  <a 
                    href={doc.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2 flex-1"
                  >
                    <span>📄</span>
                    <span className="truncate">{doc.name}</span>
                  </a>
                  <button
                    onClick={() => deleteDocument(id, index)}
                    className="text-red-600 hover:text-red-800 text-xs px-2 py-1 rounded hover:bg-red-50"
                    title="Supprimer"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Grille d'Audit NIS2</h1>
              <p className="text-sm text-gray-500">Progression: {completed}/{total} ({progress}%)</p>
            </div>
            <div className="flex gap-4 items-center">
              {lastSaved && <span className="text-sm text-gray-500">💾 Sauvegardé: {lastSaved.toLocaleTimeString()}</span>}
              <button 
                onClick={saveChanges} 
                disabled={saving} 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-medium transition-colors"
              >
                {saving ? 'Sauvegarde...' : '💾 Sauvegarder'}
              </button>
              <button 
                onClick={submitReport} 
                disabled={!isComplete || submitting} 
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${isComplete ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                title={isComplete ? 'Envoyer le rapport' : `Il manque ${total - completed} point(s)`}
              >
                {submitting ? 'Envoi...' : '📧 Envoyer mon rapport'}
              </button>
            </div>
          </div>
          {!isComplete && (
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{width: `${progress}%`}}></div>
              </div>
            </div>
          )}
          {isComplete && (
            <div className="mt-3 bg-green-50 border border-green-200 rounded p-3 text-green-800 text-sm font-medium">
              ✅ Audit complet ! Vous pouvez maintenant envoyer votre rapport.
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Informations Entreprise */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">🏢 Informations de l'entreprise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l'entité *</label>
              <input 
                type="text" 
                value={companyInfo.entity_name} 
                onChange={(e) => handleCompanyInfoChange('entity_name', e.target.value)}
                placeholder="Ex: ABC Corporation"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Secteur d'activité NIS2 *</label>
              <select 
                value={companyInfo.entity_sector} 
                onChange={(e) => handleCompanyInfoChange('entity_sector', e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">-- Sélectionnez un secteur --</option>
                {secteurs.map((secteur, index) => (
                  <option key={index} value={secteur}>{secteur}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
              <input 
                type="tel" 
                value={companyInfo.phone} 
                onChange={(e) => handleCompanyInfoChange('phone', e.target.value)}
                placeholder="Ex: +33 1 23 45 67 89"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                value={companyInfo.email} 
                onChange={(e) => handleCompanyInfoChange('email', e.target.value)}
                placeholder="contact@entreprise.fr"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
              <input 
                type="text" 
                value={companyInfo.address} 
                onChange={(e) => handleCompanyInfoChange('address', e.target.value)}
                placeholder="123 Rue de la Paix"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Code postal</label>
              <input 
                type="text" 
                value={companyInfo.postal_code} 
                onChange={(e) => handleCompanyInfoChange('postal_code', e.target.value)}
                placeholder="Ex: 75001"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
              <input 
                type="text" 
                value={companyInfo.city} 
                onChange={(e) => handleCompanyInfoChange('city', e.target.value)}
                placeholder="Ex: Paris"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pays</label>
              <input 
                type="text" 
                value={companyInfo.country} 
                onChange={(e) => handleCompanyInfoChange('country', e.target.value)}
                placeholder="Ex: France"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de salariés</label>
              <input 
                type="number" 
                value={companyInfo.employees} 
                onChange={(e) => handleCompanyInfoChange('employees', e.target.value)}
                placeholder="Ex: 250"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Chiffre d'affaires (€)</label>
              <input 
                type="text" 
                value={companyInfo.revenue} 
                onChange={(e) => handleCompanyInfoChange('revenue', e.target.value)}
                placeholder="Ex: 10 000 000"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">* Champs obligatoires pour l'envoi du rapport</p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-blue-600">{progress}%</div>
            <div className="text-sm text-gray-600">Progression</div>
            <div className="text-xs text-gray-400 mt-1">{completed}/{total} points</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-green-600">{conformity}%</div>
            <div className="text-sm text-gray-600">Conformité</div>
            <div className="text-xs text-gray-400 mt-1">{conforme} conformes</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-gray-900">{total - completed}</div>
            <div className="text-sm text-gray-600">Points restants</div>
            <div className="text-xs text-gray-400 mt-1">à évaluer</div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Article 20 - Gouvernance */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">📋 Article 20 - Gouvernance</h2>
            <QuestionItem id="20_1" question="Les organes de direction approuvent les mesures de gestion des risques cybersécurité" preuves="PV de conseil, décisions formelles" status={auditData['20_1']} note={notes['20_1']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="20_2" question="Les organes de direction supervisent la mise en œuvre des mesures" preuves="Reportings réguliers, tableaux de bord" status={auditData['20_2']} note={notes['20_2']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="20_3" question="Formation obligatoire en cybersécurité pour les organes de direction" preuves="Certificats de formation, attestations" status={auditData['20_3']} note={notes['20_3']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="20_4" question="Politique de gestion des risques cybersécurité approuvée" preuves="Document de politique signé" status={auditData['20_4']} note={notes['20_4']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="20_5" question="Responsabilités définies pour la cybersécurité" preuves="Organigramme, fiches de poste" status={auditData['20_5']} note={notes['20_5']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
          </div>

          {/* Article 21.1 - Analyse des risques */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">🔍 Article 21.1 - Analyse des risques</h2>
            <QuestionItem id="21_1_1" question="Identification des actifs critiques et sensibles" preuves="Inventaire des actifs, cartographie" status={auditData['21_1_1']} note={notes['21_1_1']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_1_2" question="Analyse des menaces et vulnérabilités" preuves="Rapports d'analyse de risques" status={auditData['21_1_2']} note={notes['21_1_2']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_1_3" question="Évaluation de l'impact des incidents" preuves="Matrices de risques, BIA" status={auditData['21_1_3']} note={notes['21_1_3']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_1_4" question="Plan de traitement des risques" preuves="Plan d'action, suivi des risques" status={auditData['21_1_4']} note={notes['21_1_4']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_1_5" question="Revue périodique des risques" preuves="Rapports de revue, mises à jour" status={auditData['21_1_5']} note={notes['21_1_5']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
          </div>

          {/* Article 21.2 - Politiques de sécurité */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">📜 Article 21.2 - Politiques de sécurité</h2>
            <QuestionItem id="21_2_1" question="Politique de sécurité des systèmes d'information" preuves="Document de politique approuvé" status={auditData['21_2_1']} note={notes['21_2_1']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_2_2" question="Politique de contrôle d'accès" preuves="Procédures d'accès, matrice des droits" status={auditData['21_2_2']} note={notes['21_2_2']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_2_3" question="Politique de classification des données" preuves="Grille de classification, labels" status={auditData['21_2_3']} note={notes['21_2_3']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_2_4" question="Politique de sauvegarde" preuves="Procédure de backup, tests de restauration" status={auditData['21_2_4']} note={notes['21_2_4']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_2_5" question="Communication et sensibilisation aux politiques" preuves="Campagnes de communication, accusés de réception" status={auditData['21_2_5']} note={notes['21_2_5']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
          </div>

          {/* Article 21.3 - Gestion des incidents */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">🚨 Article 21.3 - Gestion des incidents</h2>
            <QuestionItem id="21_3_1" question="Procédure de détection des incidents" preuves="SIEM, logs, alertes" status={auditData['21_3_1']} note={notes['21_3_1']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_3_2" question="Procédure de traitement des incidents" preuves="Plan de réponse aux incidents" status={auditData['21_3_2']} note={notes['21_3_2']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_3_3" question="Notification aux autorités compétentes" preuves="Procédure de notification, registre" status={auditData['21_3_3']} note={notes['21_3_3']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_3_4" question="Analyse post-incident et retour d'expérience" preuves="Rapports d'incidents, actions correctives" status={auditData['21_3_4']} note={notes['21_3_4']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_3_5" question="Tests réguliers du plan de gestion des incidents" preuves="Exercices, simulations, rapports de test" status={auditData['21_3_5']} note={notes['21_3_5']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
          </div>

          {/* Article 21.4 - Continuité d'activité */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">🔄 Article 21.4 - Continuité d'activité</h2>
            <QuestionItem id="21_4_1" question="Plan de continuité d'activité (PCA)" preuves="Document PCA approuvé" status={auditData['21_4_1']} note={notes['21_4_1']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_4_2" question="Plan de reprise d'activité (PRA)" preuves="Document PRA, procédures de reprise" status={auditData['21_4_2']} note={notes['21_4_2']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_4_3" question="Tests réguliers des plans de continuité" preuves="Rapports de tests, exercices" status={auditData['21_4_3']} note={notes['21_4_3']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_4_4" question="Sauvegarde et restauration des données critiques" preuves="Procédures de backup, tests de restauration" status={auditData['21_4_4']} note={notes['21_4_4']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_4_5" question="Sites de secours et redondance" preuves="Infrastructure de secours, contrats" status={auditData['21_4_5']} note={notes['21_4_5']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
          </div>

          {/* Article 21.5 - Sécurité de la chaîne d'approvisionnement */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">🔗 Article 21.5 - Sécurité de la chaîne d'approvisionnement</h2>
            <QuestionItem id="21_5_1" question="Évaluation des risques fournisseurs" preuves="Questionnaires sécurité, audits fournisseurs" status={auditData['21_5_1']} note={notes['21_5_1']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_5_2" question="Clauses de sécurité dans les contrats" preuves="Contrats avec clauses cyber" status={auditData['21_5_2']} note={notes['21_5_2']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_5_3" question="Contrôle et surveillance des fournisseurs" preuves="Audits, revues de sécurité" status={auditData['21_5_3']} note={notes['21_5_3']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_5_4" question="Gestion des incidents impliquant les fournisseurs" preuves="Procédure de coordination" status={auditData['21_5_4']} note={notes['21_5_4']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_5_5" question="Sécurité des développements externalisés" preuves="Revues de code, tests de sécurité" status={auditData['21_5_5']} note={notes['21_5_5']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
          </div>

          {/* Article 21.6 - Sécurité réseau */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">🌐 Article 21.6 - Sécurité réseau</h2>
            <QuestionItem id="21_6_1" question="Segmentation réseau et zones de sécurité" preuves="Architecture réseau, VLANs" status={auditData['21_6_1']} note={notes['21_6_1']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_6_2" question="Pare-feu et filtrage réseau" preuves="Configuration firewall, règles" status={auditData['21_6_2']} note={notes['21_6_2']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_6_3" question="Détection et prévention des intrusions (IDS/IPS)" preuves="Systèmes IDS/IPS, logs" status={auditData['21_6_3']} note={notes['21_6_3']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_6_4" question="VPN et chiffrement des communications" preuves="Configuration VPN, certificats" status={auditData['21_6_4']} note={notes['21_6_4']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_6_5" question="Surveillance réseau et analyse des flux" preuves="Outils de monitoring, rapports" status={auditData['21_6_5']} note={notes['21_6_5']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
          </div>

          {/* Article 21.7 - Contrôle d'accès */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">🔐 Article 21.7 - Contrôle d'accès</h2>
            <QuestionItem id="21_7_1" question="Gestion des identités et des accès (IAM)" preuves="Système IAM, processus de provisioning" status={auditData['21_7_1']} note={notes['21_7_1']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_7_2" question="Authentification forte (MFA)" preuves="Configuration MFA, taux d'adoption" status={auditData['21_7_2']} note={notes['21_7_2']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_7_3" question="Gestion des comptes privilégiés" preuves="Coffre-fort à mots de passe, PAM" status={auditData['21_7_3']} note={notes['21_7_3']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_7_4" question="Revue régulière des droits d'accès" preuves="Rapports de revue, certifications" status={auditData['21_7_4']} note={notes['21_7_4']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_7_5" question="Gestion des départs et changements de poste" preuves="Procédure de révocation, workflow" status={auditData['21_7_5']} note={notes['21_7_5']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
          </div>

          {/* Article 21.8 - Sécurité des actifs */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">💾 Article 21.8 - Sécurité des actifs</h2>
            <QuestionItem id="21_8_1" question="Inventaire des actifs IT" preuves="CMDB, inventaire à jour" status={auditData['21_8_1']} note={notes['21_8_1']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_8_2" question="Classification et étiquetage des actifs" preuves="Classification, labels de sensibilité" status={auditData['21_8_2']} note={notes['21_8_2']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_8_3" question="Gestion des supports amovibles" preuves="Politique sur supports amovibles, chiffrement" status={auditData['21_8_3']} note={notes['21_8_3']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_8_4" question="Destruction sécurisée des actifs" preuves="Procédure de destruction, certificats" status={auditData['21_8_4']} note={notes['21_8_4']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_8_5" question="Sécurité physique des actifs critiques" preuves="Contrôle d'accès physique, vidéosurveillance" status={auditData['21_8_5']} note={notes['21_8_5']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
          </div>

          {/* Article 21.9 - Chiffrement */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">🔒 Article 21.9 - Chiffrement</h2>
            <QuestionItem id="21_9_1" question="Chiffrement des données sensibles au repos" preuves="Configuration chiffrement, algorithmes" status={auditData['21_9_1']} note={notes['21_9_1']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_9_2" question="Chiffrement des données en transit" preuves="TLS/SSL, certificats" status={auditData['21_9_2']} note={notes['21_9_2']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_9_3" question="Gestion des clés cryptographiques" preuves="KMS, procédure de gestion des clés" status={auditData['21_9_3']} note={notes['21_9_3']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_9_4" question="Signature électronique" preuves="Certificats de signature, PKI" status={auditData['21_9_4']} note={notes['21_9_4']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_9_5" question="Conformité aux standards de chiffrement" preuves="Standards utilisés (AES-256, RSA-2048)" status={auditData['21_9_5']} note={notes['21_9_5']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
          </div>

          {/* Article 21.10 - Ressources humaines */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">👥 Article 21.10 - Ressources humaines</h2>
            <QuestionItem id="21_10_1" question="Sensibilisation et formation à la cybersécurité" preuves="Programme de formation, taux de participation" status={auditData['21_10_1']} note={notes['21_10_1']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_10_2" question="Tests de phishing et simulation d'attaques" preuves="Campagnes de phishing, résultats" status={auditData['21_10_2']} note={notes['21_10_2']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_10_3" question="Clauses de sécurité dans les contrats de travail" preuves="Contrats avec clauses cyber, NDA" status={auditData['21_10_3']} note={notes['21_10_3']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_10_4" question="Vérification des antécédents (screening)" preuves="Procédure de vérification, rapports" status={auditData['21_10_4']} note={notes['21_10_4']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_10_5" question="Sanctions disciplinaires en cas de non-respect" preuves="Règlement intérieur, procédures" status={auditData['21_10_5']} note={notes['21_10_5']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
          </div>

          {/* Article 21.11 - Développement sécurisé */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">💻 Article 21.11 - Développement sécurisé</h2>
            <QuestionItem id="21_11_1" question="Cycle de développement sécurisé (SDLC)" preuves="Processus SDLC documenté" status={auditData['21_11_1']} note={notes['21_11_1']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_11_2" question="Revues de code et analyse statique" preuves="Outils SAST, rapports de revue" status={auditData['21_11_2']} note={notes['21_11_2']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_11_3" question="Tests de sécurité applicatifs" preuves="Tests DAST, pentests, rapports" status={auditData['21_11_3']} note={notes['21_11_3']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_11_4" question="Gestion des vulnérabilités applicatives" preuves="Registre des vulnérabilités, patch management" status={auditData['21_11_4']} note={notes['21_11_4']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_11_5" question="Environnements de développement sécurisés" preuves="Séparation dev/prod, accès contrôlés" status={auditData['21_11_5']} note={notes['21_11_5']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
          </div>

          {/* Article 21.12 - Journalisation et surveillance */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">📊 Article 21.12 - Journalisation et surveillance</h2>
            <QuestionItem id="21_12_1" question="Centralisation des logs (SIEM)" preuves="Solution SIEM, configuration" status={auditData['21_12_1']} note={notes['21_12_1']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_12_2" question="Rétention des logs conformément aux exigences" preuves="Politique de rétention, archivage" status={auditData['21_12_2']} note={notes['21_12_2']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_12_3" question="Protection et intégrité des logs" preuves="Logs sécurisés, non modifiables" status={auditData['21_12_3']} note={notes['21_12_3']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_12_4" question="Corrélation et analyse des logs" preuves="Règles de corrélation, alertes" status={auditData['21_12_4']} note={notes['21_12_4']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
            <QuestionItem id="21_12_5" question="Surveillance en temps réel et tableaux de bord" preuves="SOC, dashboards, rapports" status={auditData['21_12_5']} note={notes['21_12_5']} onStatusChange={handleStatusChange} onNoteChange={handleNoteChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
