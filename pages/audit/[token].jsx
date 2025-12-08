import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ClientAuditPage() {
  const router = useRouter();
  const { token } = router.query;
  const [audit, setAudit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      loadAudit();
    }
  }, [token]);

  async function loadAudit() {
    try {
      const response = await fetch(`/api/audit/get?token=${token}`);
      const result = await response.json();
      
      if (!result.success) {
        setError(result.error || 'Audit non trouvé');
        return;
      }
      
      setAudit(result.audit);
    } catch (err) {
      console.error('Erreur chargement:', err);
      setError('Impossible de charger l\'audit');
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(auditId, updates) {
    try {
      console.log('📤 Envoi mise à jour:', { auditId, updates });
      
      const response = await fetch('/api/audit/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token,
          updates: updates,
        }),
      });
      
      const result = await response.json();
      
      console.log('✅ Réponse reçue:', result);
      
      if (result.success) {
        setAudit(result.audit);
      }
    } catch (error) {
      console.error('❌ Erreur mise à jour:', error);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Chargement de votre audit...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Audit introuvable</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  if (!audit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600">Aucun audit trouvé</p>
        </div>
      </div>
    );
  }

  const AuditInterface = require('../../components/AuditInterface').default;

  return (
    <div>
      <AuditInterface
        audit={audit}
        onUpdateAudit={handleUpdate}
      />
    </div>
  );
}