import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AuditLayout from '../../components/AuditLayout';

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
      <>
        <Head>
          <title>Chargement de l'audit | Cyber Solferino</title>
        </Head>
        <div className="loading-screen">
          <div className="loading-content">
            <div className="spinner"></div>
            <p>Chargement de votre audit...</p>
          </div>

          <style jsx>{`
            .loading-screen {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #F7F9FC;
            }

            .loading-content {
              text-align: center;
            }

            .spinner {
              width: 64px;
              height: 64px;
              border: 4px solid #E2E8F0;
              border-top-color: #1E3A8A;
              border-radius: 50%;
              animation: spin 0.8s linear infinite;
              margin: 0 auto 24px;
            }

            @keyframes spin {
              to { transform: rotate(360deg); }
            }

            p {
              font-size: 17px;
              color: #64748B;
              font-weight: 500;
            }
          `}</style>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>Audit introuvable | Cyber Solferino</title>
        </Head>
        <div className="error-screen">
          <div className="error-card">
            <div className="error-icon">⚠️</div>
            <h1>Audit introuvable</h1>
            <p>{error}</p>
            <button onClick={() => router.push('/')}>
              Retour à l'accueil
            </button>
          </div>

          <style jsx>{`
            .error-screen {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #F7F9FC;
              padding: 20px;
            }

            .error-card {
              background: white;
              padding: 48px 40px;
              border-radius: 20px;
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
              text-align: center;
              max-width: 480px;
            }

            .error-icon {
              font-size: 72px;
              margin-bottom: 24px;
            }

            h1 {
              font-size: 28px;
              font-weight: 800;
              color: #0F172A;
              margin-bottom: 12px;
            }

            p {
              font-size: 16px;
              color: #64748B;
              margin-bottom: 32px;
              line-height: 1.6;
            }

            button {
              background: #1E3A8A;
              color: white;
              padding: 14px 32px;
              border-radius: 12px;
              border: none;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
            }

            button:hover {
              background: #1E40AF;
              transform: translateY(-2px);
              box-shadow: 0 4px 16px rgba(30, 58, 138, 0.3);
            }
          `}</style>
        </div>
      </>
    );
  }

  if (!audit) {
    return (
      <div className="empty-state">
        <p>Aucun audit trouvé</p>
        <style jsx>{`
          .empty-state {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #F7F9FC;
          }
          
          p {
            font-size: 17px;
            color: #64748B;
          }
        `}</style>
      </div>
    );
  }

  // Charger AuditInterface dynamiquement
  const AuditInterface = require('../../components/AuditInterface').default;

  return (
    <>
      <Head>
        <title>Audit NIS2 - {audit.entity_name || 'En cours'} | Cyber Solferino</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <AuditLayout>
        <AuditInterface
          audit={audit}
          onUpdateAudit={handleUpdate}
        />
      </AuditLayout>
    </>
  );
}
