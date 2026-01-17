import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CONTACT_INFO } from '../utils/constants';

export default function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Fermer le menu lors du changement de route
  useEffect(() => {
    router.events.on('routeChangeStart', closeMenu);
    return () => router.events.off('routeChangeStart', closeMenu);
  }, [router]);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const menuItems = [
    {
      label: 'Accueil',
      href: '/',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: 'Comprendre NIS2',
      href: '/comprendre-nis2',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      label: 'Qui sommes-nous',
      href: '/qui-sommes-nous',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: 'Nos tarifs',
      href: '/offres-complementaires',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: 'Formation',
      href: '/formations',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <>
      {/* Bouton burger - Mobile uniquement */}
      <button
        className="burger-button"
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <div className={`burger-icon ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`burger-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      {/* Menu slide-in */}
      <nav className={`burger-menu ${isOpen ? 'open' : ''}`}>
        {/* Header avec logo */}
        <div className="burger-header">
          <Link href="/" onClick={closeMenu} className="burger-logo-link">
            <img src="/logo.png" alt="Cyber Solferino" className="burger-logo" />
          </Link>
          <button
            className="burger-close"
            onClick={closeMenu}
            aria-label="Fermer le menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Navigation principale */}
        <div className="burger-nav">
          <p className="burger-nav-label">Navigation</p>
          <ul className="burger-links">
            {menuItems.map((item, index) => (
              <li
                key={item.href}
                className={`burger-link-item ${isOpen ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={isActive(item.href) ? 'active' : ''}
                >
                  <span className="burger-link-icon">{item.icon}</span>
                  <span className="burger-link-text">{item.label}</span>
                  <span className="burger-link-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section contact */}
        <div className="burger-contact">
          <p className="burger-nav-label">Besoin d'aide ?</p>
          <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="burger-contact-item">
            <span className="burger-contact-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>{CONTACT_INFO.phone}</span>
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="burger-contact-item">
            <span className="burger-contact-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>{CONTACT_INFO.email}</span>
          </a>
        </div>

        {/* CTA principal */}
        <div className="burger-cta">
          <a
            href={CONTACT_INFO.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="burger-cta-button"
            onClick={closeMenu}
          >
            <span>Prendre rendez-vous</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </a>
        </div>
      </nav>

      <style jsx>{`
        /* Bouton Burger animé */
        .burger-button {
          display: none;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-left: 12px;
          flex-shrink: 0;
        }

        .burger-button:hover {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%);
          transform: scale(1.05);
        }

        .burger-icon {
          width: 22px;
          height: 16px;
          position: relative;
        }

        .burger-icon span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: linear-gradient(135deg, #A855F7 0%, #EC4899 100%);
          border-radius: 2px;
          left: 0;
          transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        }

        .burger-icon span:nth-child(1) { top: 0; }
        .burger-icon span:nth-child(2) { top: 7px; width: 70%; }
        .burger-icon span:nth-child(3) { top: 14px; width: 85%; }

        .burger-icon.open span:nth-child(1) {
          top: 7px;
          transform: rotate(45deg);
        }
        .burger-icon.open span:nth-child(2) {
          opacity: 0;
          width: 0;
        }
        .burger-icon.open span:nth-child(3) {
          top: 7px;
          width: 100%;
          transform: rotate(-45deg);
        }

        /* Overlay */
        .burger-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          z-index: 9998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
        }

        .burger-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Menu principal */
        .burger-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 340px;
          max-width: 90vw;
          height: 100vh;
          height: 100dvh;
          background: linear-gradient(180deg, #FFFFFF 0%, #FAFBFF 100%);
          box-shadow: -20px 0 60px rgba(0, 0, 0, 0.15);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
        }

        .burger-menu.open {
          transform: translateX(0);
        }

        /* Header */
        .burger-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background: white;
          border-bottom: 1px solid rgba(168, 85, 247, 0.1);
        }

        .burger-logo-link {
          display: flex;
          align-items: center;
        }

        .burger-logo {
          height: 40px;
          width: auto;
        }

        .burger-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
          border: none;
          border-radius: 10px;
          color: #7C3AED;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .burger-close:hover {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%);
          transform: rotate(90deg);
        }

        /* Navigation */
        .burger-nav {
          padding: 24px 20px;
          flex: 1;
        }

        .burger-nav-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #94A3B8;
          margin: 0 0 16px 8px;
        }

        .burger-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .burger-link-item {
          margin-bottom: 6px;
          opacity: 0;
          transform: translateX(20px);
        }

        .burger-link-item.animate {
          animation: slideIn 0.4s ease forwards;
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .burger-links a {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          font-size: 15px;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          border-radius: 14px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .burger-links a::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #A855F7 0%, #EC4899 100%);
          border-radius: 0 4px 4px 0;
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .burger-links a:hover,
        .burger-links a.active {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%);
          color: #7C3AED;
        }

        .burger-links a:hover::before,
        .burger-links a.active::before {
          transform: scaleY(1);
        }

        .burger-link-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 10px;
          color: #A855F7;
          box-shadow: 0 2px 8px rgba(168, 85, 247, 0.15);
          transition: all 0.3s ease;
        }

        .burger-links a:hover .burger-link-icon,
        .burger-links a.active .burger-link-icon {
          background: linear-gradient(135deg, #A855F7 0%, #EC4899 100%);
          color: white;
          transform: scale(1.05);
        }

        .burger-link-text {
          flex: 1;
        }

        .burger-link-arrow {
          color: #CBD5E1;
          transition: all 0.3s ease;
        }

        .burger-links a:hover .burger-link-arrow,
        .burger-links a.active .burger-link-arrow {
          color: #A855F7;
          transform: translateX(4px);
        }

        /* Section contact */
        .burger-contact {
          padding: 0 20px 20px;
        }

        .burger-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          font-size: 14px;
          color: #64748B;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .burger-contact-item:hover {
          background: rgba(168, 85, 247, 0.05);
          color: #7C3AED;
        }

        .burger-contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: rgba(168, 85, 247, 0.1);
          border-radius: 8px;
          color: #A855F7;
        }

        /* CTA */
        .burger-cta {
          padding: 20px;
          background: white;
          border-top: 1px solid rgba(168, 85, 247, 0.1);
        }

        .burger-cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px 24px;
          background: linear-gradient(135deg, #A855F7 0%, #9333EA 50%, #EC4899 100%);
          color: white;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(168, 85, 247, 0.35);
          position: relative;
          overflow: hidden;
        }

        .burger-cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }

        .burger-cta-button:hover::before {
          left: 100%;
        }

        .burger-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(168, 85, 247, 0.45);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .burger-button {
            display: flex;
          }
        }

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
