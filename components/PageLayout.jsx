import { useState, useEffect } from 'react';
import Link from 'next/link';
import MenuBurger from './MenuBurger';

export default function PageLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-layout">
      {/* Header sticky */}
      <header className={`page-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="NIS2 Conformité" 
              className="header-logo"
            />
          </Link>
          
          <div className="header-actions">
            <MenuBurger />
            <a 
              href="https://calendly.com/nis2conformite/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="header-cta"
            >
              📞 Échange gratuit
            </a>
          </div>
        </div>
      </header>

      {/* Contenu */}
      <main className="page-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="page-footer">
        <div className="footer-container">
          <div className="footer-logo-section">
            <img src="/logo.png" alt="NIS2 Conformité" className="footer-logo" />
            <p className="footer-tagline">
              La plateforme d'audit et de conformité cyber<br />
              pensée pour les PME et ETI européennes
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/comprendre-nis2">Comprendre NIS2</Link></li>
                <li><Link href="/qui-sommes-nous">Qui sommes-nous ?</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Nos services</h4>
              <ul>
                <li><Link href="/offres-complementaires">Offres complémentaires</Link></li>
                <li><Link href="/formations">Formations</Link></li>
                <li><Link href="/#pricing">Nos audits</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer">
                    Prendre rendez-vous
                  </a>
                </li>
                <li>
                  <a href="mailto:nis2conformite@gmail.com">
                    nis2conformite@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 NIS2 Conformité • Tous droits réservés</p>
          <div className="footer-certifications">
            <span>✓ Certifié ISO 27001</span>
            <span>✓ Méthodologie ANSSI</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .page-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* HEADER */
        .page-header {
          position: sticky;
          top: 0;
          background: white;
          border-bottom: 1px solid transparent;
          padding: 12px 0;
          transition: all 0.3s ease;
          z-index: 100;
        }

        .page-header.scrolled {
          border-bottom-color: #E2E8F0;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          padding: 8px 0;
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-logo {
          height: 50px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .header-logo:hover {
          transform: scale(1.05);
        }

        .page-header.scrolled .header-logo {
          height: 40px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .header-cta {
          padding: 12px 24px;
          background: #FF5630;
          color: white;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .header-cta:hover {
          background: #E64825;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 86, 48, 0.3);
        }

        /* CONTENT */
        .page-content {
          flex: 1;
        }

        /* FOOTER */
        .page-footer {
          background: #0F172A;
          color: white;
          padding: 60px 0 0;
          margin-top: 80px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px 40px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
        }

        .footer-logo {
          height: 60px;
          margin-bottom: 16px;
        }

        .footer-tagline {
          font-size: 14px;
          color: #94A3B8;
          line-height: 1.6;
        }

        .footer-column h4 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 16px;
          color: white;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column li {
          margin-bottom: 12px;
        }

        .footer-column a {
          color: #94A3B8;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-column a:hover {
          color: #FF5630;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 24px 20px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #64748B;
        }

        .footer-certifications {
          display: flex;
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }

          .footer-logo-section {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .header-cta {
            display: none;
          }

          .footer-container {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }

          .footer-certifications {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}
