export default function AuditLayout({ children }) {
  return (
    <div className="audit-layout">
      {/* Header minimal */}
      <header className="audit-header">
        <div className="audit-header-container">
          <img 
            src="/logo.png" 
            alt="Cyber Solferino" 
            className="audit-logo"
          />
          <div className="audit-header-title">
            <h1>Grille d'Audit NIS2</h1>
            <p>Évaluation de conformité</p>
          </div>
        </div>
      </header>

      {/* Contenu */}
      <main className="audit-content">
        {children}
      </main>

      {/* Footer minimal */}
      <footer className="audit-footer">
        <p>© 2025 Cyber Solferino • Confidentiel</p>
      </footer>

      <style jsx>{`
        .audit-layout {
          min-height: 100vh;
          background: #F7F9FC;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .audit-header {
          background: white;
          border-bottom: 2px solid #E2E8F0;
          padding: 20px 0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .audit-header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .audit-logo {
          height: 50px;
          width: auto;
        }

        .audit-header-title h1 {
          font-size: 24px;
          font-weight: 800;
          color: #1E3A8A;
          margin: 0;
        }

        .audit-header-title p {
          font-size: 14px;
          color: #64748B;
          margin: 0;
        }

        /* Content */
        .audit-content {
          flex: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 32px 24px;
          width: 100%;
        }

        /* Footer */
        .audit-footer {
          background: white;
          border-top: 1px solid #E2E8F0;
          padding: 20px 24px;
          text-align: center;
        }

        .audit-footer p {
          font-size: 13px;
          color: #64748B;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .audit-header-container {
            padding: 0 16px;
          }

          .audit-logo {
            height: 40px;
          }

          .audit-header-title h1 {
            font-size: 18px;
          }

          .audit-header-title p {
            font-size: 12px;
          }

          .audit-content {
            padding: 20px 16px;
          }
        }

        /* Print */
        @media print {
          .audit-header,
          .audit-footer {
            display: none;
          }

          .audit-layout {
            background: white;
          }

          .audit-content {
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
