import { useState } from 'react';
import Link from 'next/link';
import { CONTACT_INFO } from '../utils/constants';

export default function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Comprendre NIS2', href: '/comprendre-nis2' },
    { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
    { label: 'Nos tarifs', href: '/offres-complementaires' },
    { label: 'Formation', href: '/formations' },
  ];

  return (
    <>
      {/* Bouton burger - Mobile uniquement */}
      <button
        className="burger-button"
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="burger-overlay"
          onClick={closeMenu}
        />
      )}

      {/* Menu slide-in */}
      <nav className={`burger-menu ${isOpen ? 'open' : ''}`}>
        <div className="burger-header">
          <img src="/logo.png" alt="NIS2 Conformité" className="burger-logo" />
          <button
            className="burger-close"
            onClick={closeMenu}
            aria-label="Fermer le menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <ul className="burger-links">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="burger-cta">
          <a
            href={CONTACT_INFO.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="burger-cta-button"
            onClick={closeMenu}
          >
            Parler à un expert
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </nav>

      <style jsx>{`
        /* Bouton Burger - Mobile uniquement */
        .burger-button {
          display: none;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(124, 58, 237, 0.08);
          border: none;
          border-radius: 10px;
          color: #7C3AED;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-left: 12px;
          flex-shrink: 0;
        }

        .burger-button:hover {
          background: rgba(124, 58, 237, 0.15);
          color: #6D28D9;
        }

        .burger-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 9998;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .burger-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          max-width: 85vw;
          height: 100vh;
          height: 100dvh;
          background: white;
          box-shadow: -8px 0 32px rgba(0, 0, 0, 0.15);
          z-index: 9999;
          transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .burger-menu.open {
          right: 0;
        }

        .burger-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid #F3E8FF;
        }

        .burger-logo {
          height: 32px;
          width: auto;
        }

        .burger-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(124, 58, 237, 0.08);
          border: none;
          border-radius: 10px;
          color: #7C3AED;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .burger-close:hover {
          background: rgba(124, 58, 237, 0.15);
          color: #6D28D9;
        }

        .burger-links {
          list-style: none;
          padding: 16px 12px;
          margin: 0;
          flex: 1;
        }

        .burger-links li {
          margin-bottom: 4px;
        }

        .burger-links a {
          display: flex;
          align-items: center;
          padding: 14px 16px;
          font-size: 16px;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .burger-links a:hover {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%);
          color: #7C3AED;
          transform: translateX(4px);
        }

        .burger-cta {
          padding: 16px 20px 24px;
          border-top: 1px solid #F3E8FF;
        }

        .burger-cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 16px 24px;
          background: linear-gradient(135deg, #A855F7 0%, #9333EA 50%, #EC4899 100%);
          color: white;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(168, 85, 247, 0.3);
        }

        .burger-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(168, 85, 247, 0.4);
        }

        .burger-cta-button svg {
          transition: transform 0.3s ease;
        }

        .burger-cta-button:hover svg {
          transform: translateX(3px);
        }

        /* Afficher uniquement sur mobile */
        @media (max-width: 768px) {
          .burger-button {
            display: flex;
          }
        }

        /* Full width sur très petit écran */
        @media (max-width: 400px) {
          .burger-menu {
            width: 100%;
            max-width: 100vw;
          }
        }
      `}</style>
    </>
  );
}
