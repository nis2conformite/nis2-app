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
              Échange gratuit
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
          <div className="footer-column">
            <img src="/logo.png" alt="NIS2 Conformité" className="footer-logo" />
            <p className="footer-tagline">
              La plateforme d'audit et de conformité cyber pensée pour les PME et ETI européennes
            </p>
          </div>

          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/comprendre-nis2">Comprendre NIS2</Link></li>
              <li><Link href="/qui-sommes-nous">Qui sommes-nous ?</Link></li>
              <li><Link href="/offres-complementaires">Offres complémentaires</Link></li>
              <li><Link href="/formations">Formations</Link></li>
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
                <a href="mailto:contact@cyber-solferino.com">
                  contact@cyber-solferino.com
                </a>
              </li>
            </ul>
            <div className="footer-certifications">
              <span>Certifié ISO 27001</span>
              <span>Méthodologie ANSSI</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Cyber Solferino. Tous droits réservés</p>
        </div>
      </footer>

      <style jsx>{`
        .page-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* HEADER - Style Artisan minimaliste */
        .page-header {
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          padding: 16px 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 100;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .page-header.scrolled {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          padding: 12px 0;
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
          padding: 12px 28px;
          background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);
          color: white;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 14px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);
        }

        .header-cta:hover {
          background: linear-gradient(135deg, #6D28D9 0%, #5B21B6 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(124, 58, 237, 0.35);
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
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 48px;
        }

        .footer-logo {
          height: 45px;
          margin-bottom: 16px;
        }

        .footer-tagline {
          font-size: 13px;
          color: #94A3B8;
          line-height: 1.6;
          margin-top: 0;
        }

        .footer-column h4 {
          font-size: 14px;
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
          font-size: 13px;
          transition: color 0.3s ease;
        }

        .footer-column a:hover {
          color: #A78BFA;
        }

        .footer-certifications {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-certifications span {
          font-size: 12px;
          color: #64748B;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 24px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          font-size: 13px;
          color: #64748B;
        }

        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .header-cta {
            display: none;
          }

          .footer-container {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </div>
  );
}
