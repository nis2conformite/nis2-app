import { useState } from 'react';
import Link from 'next/link';

export default function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Comprendre NIS2', href: '/comprendre-nis2' },
    { label: 'Qui sommes-nous ?', href: '/qui-sommes-nous' },
    { label: 'Offres complémentaires', href: '/offres-complementaires' },
    { label: 'Formations', href: '/formations' },
  ];

  return (
    <>
      {/* Bouton burger */}
      <button 
        className="burger-button" 
        onClick={toggleMenu}
        aria-label="Menu"
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
        <button 
          className="burger-close" 
          onClick={closeMenu}
          aria-label="Fermer"
        >
          ✕
        </button>

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
            href="https://calendly.com/nis2conformite/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="burger-cta-button"
          >
            📞 Échange gratuit
          </a>
        </div>
      </nav>

      <style jsx>{`
        .burger-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: transparent;
          border: none;
          color: #1E3A8A;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .burger-button:hover {
          color: #FF5630;
        }

        .burger-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 998;
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
          background: white;
          box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
          z-index: 999;
          transition: right 0.3s ease;
          display: flex;
          flex-direction: column;
          padding: 24px;
        }

        .burger-menu.open {
          right: 0;
        }

        .burger-close {
          align-self: flex-end;
          background: transparent;
          border: none;
          font-size: 32px;
          color: #64748B;
          cursor: pointer;
          padding: 8px;
          margin-bottom: 32px;
          transition: color 0.3s ease;
        }

        .burger-close:hover {
          color: #1E3A8A;
        }

        .burger-links {
          list-style: none;
          padding: 0;
          margin: 0;
          flex: 1;
        }

        .burger-links li {
          margin-bottom: 8px;
        }

        .burger-links a {
          display: block;
          padding: 16px 20px;
          font-size: 16px;
          font-weight: 600;
          color: #1E3A8A;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .burger-links a:hover {
          background: #F1F5F9;
          color: #FF5630;
          transform: translateX(4px);
        }

        .burger-cta {
          border-top: 1px solid #E2E8F0;
          padding-top: 24px;
        }

        .burger-cta-button {
          display: block;
          width: 100%;
          padding: 16px;
          background: #FF5630;
          color: white;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .burger-cta-button:hover {
          background: #E64825;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 86, 48, 0.3);
        }

        @media (max-width: 768px) {
          .burger-menu {
            width: 100%;
            max-width: 100vw;
          }
        }
      `}</style>
    </>
  );
}
