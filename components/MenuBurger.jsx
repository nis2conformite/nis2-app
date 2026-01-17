import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CONTACT_INFO } from '../utils/constants';

export default function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    router.events.on('routeChangeStart', closeMenu);
    return () => router.events.off('routeChangeStart', closeMenu);
  }, [router]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Comprendre NIS2', href: '/comprendre-nis2' },
    { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
    { label: 'Nos tarifs', href: '/offres-complementaires' },
    { label: 'Formation', href: '/formations' },
  ];

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <>
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

      <div
        className={`burger-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      <nav className={`burger-menu ${isOpen ? 'open' : ''}`}>
        <div className="burger-header">
          <Link href="/" onClick={closeMenu} className="burger-logo-link">
            <img src="/logo.png" alt="Cyber Solferino" className="burger-logo" />
          </Link>
          <button className="burger-close" onClick={closeMenu} aria-label="Fermer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="burger-nav">
          <ul className="burger-links">
            {menuItems.map((item, index) => (
              <li
                key={item.href}
                className={`burger-link-item ${isOpen ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={isActive(item.href) ? 'active' : ''}
                >
                  <span className="link-number">0{index + 1}</span>
                  <span className="link-text">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="burger-footer">
          <div className="burger-contact">
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
              {CONTACT_INFO.phone}
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`}>
              {CONTACT_INFO.email}
            </a>
          </div>

          <a
            href={CONTACT_INFO.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="burger-cta-button"
            onClick={closeMenu}
          >
            Prendre rendez-vous
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </nav>

      <style jsx>{`
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
        }

        .burger-button:hover {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%);
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

        .burger-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.7);
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

        .burger-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 320px;
          max-width: 90vw;
          height: 100vh;
          height: 100dvh;
          background: white;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
        }

        .burger-menu.open {
          transform: translateX(0);
        }

        .burger-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid #F1F5F9;
        }

        .burger-logo-link {
          display: flex;
        }

        .burger-logo {
          height: 36px;
          width: auto;
        }

        .burger-close {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F8FAFC;
          border: none;
          border-radius: 50%;
          color: #64748B;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .burger-close:hover {
          background: #F1F5F9;
          color: #334155;
          transform: rotate(90deg);
        }

        .burger-nav {
          flex: 1;
          padding: 32px 24px;
        }

        .burger-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .burger-link-item {
          opacity: 0;
          transform: translateY(20px);
        }

        .burger-link-item.animate {
          animation: slideUp 0.5s ease forwards;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .burger-links a {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 0;
          text-decoration: none;
          border-bottom: 1px solid #F1F5F9;
          transition: all 0.3s ease;
        }

        .burger-links li:last-child a {
          border-bottom: none;
        }

        .link-number {
          font-size: 12px;
          font-weight: 700;
          color: #CBD5E1;
          font-family: monospace;
          transition: all 0.3s ease;
        }

        .link-text {
          font-size: 18px;
          font-weight: 600;
          color: #1E293B;
          transition: all 0.3s ease;
        }

        .burger-links a:hover .link-number,
        .burger-links a.active .link-number {
          color: #EC4899;
        }

        .burger-links a:hover .link-text,
        .burger-links a.active .link-text {
          color: #7C3AED;
          transform: translateX(8px);
        }

        .burger-links a.active {
          position: relative;
        }

        .burger-links a.active::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #A855F7 0%, #EC4899 100%);
          border-radius: 50%;
        }

        .burger-footer {
          padding: 24px;
          background: #FAFBFF;
          border-top: 1px solid #F1F5F9;
        }

        .burger-contact {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .burger-contact a {
          font-size: 14px;
          color: #64748B;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .burger-contact a:hover {
          color: #7C3AED;
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
          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(168, 85, 247, 0.3);
        }

        .burger-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(168, 85, 247, 0.4);
        }

        .burger-cta-button svg {
          transition: transform 0.3s ease;
        }

        .burger-cta-button:hover svg {
          transform: translateX(4px);
        }

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

          .link-text {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
