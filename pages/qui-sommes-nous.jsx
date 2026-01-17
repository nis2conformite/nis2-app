import Head from 'next/head';
import { CONTACT_INFO } from '../utils/constants';
import MenuBurger from '../components/MenuBurger';

export default function QuiSommesNous() {
  return (
    <>
      <Head>
        <title>Qui sommes-nous ? | Experts Conformité NIS2</title>
        <meta name="description" content="Depuis 2009, nous accompagnons les PME et ETI dans leur conformité cyber. Équipe certifiée ISO 27001, méthodologie ANSSI, 150+ entreprises accompagnées." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* HEADER STICKY */}
      <header className="header-artisan-sticky">
        <div className="header-container-modern">
          <a href="/" className="header-logo-link">
            <img src="/logo.png" alt="NIS2 Conformité" className="header-logo-modern" />
          </a>

          <nav className="header-nav-modern">
            <a href="/comprendre-nis2" className="header-nav-link">Comprendre NIS2</a>
            <a href="/qui-sommes-nous" className="header-nav-link">Qui sommes-nous</a>
            <a href="/offres-complementaires" className="header-nav-link">Nos tarifs</a>
            <a href="/formations" className="header-nav-link">Formation</a>
          </nav>

          <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-header-expert">
            Parler à un expert
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <MenuBurger />
        </div>
      </header>

      <div className="page-wrapper">
        {/* HERO */}
        <section className="hero-artisan-exact hero-compact">
          <div className="hero-artisan-container">
            <div className="hero-badge-artisan">
              Experts conformité cyber • Depuis 2009
            </div>

            {/* Logo central sous le badge */}
            <div className="hero-logo-wrapper">
              <img src="/logo.png" alt="Cyber Solferino" className="hero-logo" />
            </div>

            <h1 className="hero-title-artisan">
              Votre partenaire de confiance<br />
              pour la <span className="highlight">conformité NIS2</span>
            </h1>

            <p className="hero-subtitle-artisan">
              Depuis 2009, nous transformons la conformité cyber en levier de performance<br />
              pour les PME et ETI européennes
            </p>
          </div>
        </section>

        {/* NOTRE APPROCHE - 3 BLOCS */}
        <section className="section-standard">
          <div className="container-lg">
            <h2 className="section-title-center">
              Notre approche
            </h2>
            <p className="section-subtitle-lg">
              Nous travaillons spécifiquement avec les PME et ETI qui ne disposent pas d'équipe cybersécurité dédiée. Notre outil a été conçu pour être simple, rapide et accessible, permettant à ces entreprises de gérer efficacement leur conformité NIS2 sans complexité technique.
            </p>

            <div className="grid-auto-fit">
              {[
                {
                  num: '01',
                  title: 'Pragmatisme avant tout',
                  desc: 'Pas de jargon technique inutile. Nous adaptons la réglementation à votre réalité opérationnelle. Chaque recommandation est actionnable, priorisée selon vos risques et votre budget.',
                  color: '#A855F7'
                },
                {
                  num: '02',
                  title: 'Accompagnement de bout en bout',
                  desc: 'De l\'audit initial à la déclaration ANSSI, nous sommes à vos côtés. Formations obligatoires des dirigeants, plans de remédiation, gestion d\'incidents : vous n\'êtes jamais seuls face à vos obligations.',
                  color: '#EC4899'
                },
                {
                  num: '03',
                  title: 'Résultats mesurables',
                  desc: '150+ entreprises accompagnées, 98% de conformité atteinte, 0 client sanctionné. Notre méthodologie ANSSI a fait ses preuves et vous protège contre les risques financiers et réputationnels.',
                  color: '#F472B6'
                }
              ].map((block) => (
                <div key={block.num} className="approach-card">
                  <div className="approach-number" style={{
                    background: `linear-gradient(135deg, ${block.color} 0%, ${block.color}99 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {block.num}
                  </div>
                  <h3 className="approach-title">
                    {block.title}
                  </h3>
                  <p className="approach-desc">
                    {block.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* L'ÉQUIPE - SECTION REDESIGN */}
        <section className="content-section">
          <div className="content-container">
            <div className="cyber-encart">
              <div className="section-badge-center">Notre équipe</div>

              <h2 className="section-title-artisan" style={{textAlign: 'center'}}>
                Une équipe de <span className="highlight">cyber experts</span> à votre service
              </h2>
              <p className="section-subtitle-artisan" style={{textAlign: 'center'}}>
                Consultants ISO 27001 • Méthodologie ANSSI • 15+ années d'expérience
              </p>

              {/* 2 CARTES PRINCIPALES */}
              <div className="cyber-stats-grid-encart">
                <div className="cyber-stat-card-encart">
                  <div className="cyber-stat-number-encart">+15 ans</div>
                  <h3>D'expérience dans la cyber</h3>
                  <p>
                    Depuis 2009 dans l'accompagnement cyber des PME et ETI. Expertise reconnue sur les secteurs critiques et essentiels.
                  </p>
                </div>

                <div className="cyber-stat-card-encart">
                  <div className="cyber-stat-number-encart">ISO 27001</div>
                  <h3>Experts certifiés</h3>
                  <p>
                    Consultants accrédités ISO 27001. Méthodologie validée par l'ANSSI pour garantir votre conformité NIS2.
                  </p>
                </div>
              </div>

              {/* ACCRÉDITATIONS ET LOGOS */}
              <div className="accreditations-wrapper">
                <p className="accreditations-text">
                  Nos accréditations et partenariats garantissent la qualité de notre accompagnement
                </p>

                <div className="accreditations-grid">
                  {[
                    { src: '/logo_anssi.png', alt: 'ANSSI - Agence Nationale de la Sécurité des Systèmes d\'Information' },
                    { src: '/Logo-cybermalveillance.PNG', alt: 'Cybermalveillance.gouv.fr' },
                    { src: '/logo_expertcyber.jpg', alt: 'Expert Cyber' },
                    { src: '/iso_27001_02-1024x704.png', alt: 'ISO 27001 Certified' }
                  ].map((logo, idx) => (
                    <div key={idx} className="accreditation-item">
                      <img src={logo.src} alt={logo.alt} className="accreditation-img" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALEURS - 6 CARDS REDESIGN */}
        <section className="section-violet-gradient">
          <div className="container-lg">
            <h2 className="section-title-center">
              Nos valeurs
            </h2>
            <p className="section-subtitle-center">
              Les principes qui guident notre accompagnement au quotidien
            </p>

            <div className="grid-auto-fit-lg">
              {[
                {
                  title: 'Pragmatisme',
                  desc: 'Solutions concrètes adaptées à votre réalité. Pas de théorie, que du terrain.',
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                    </svg>
                  )
                },
                {
                  title: 'Transparence',
                  desc: 'Prix clairs, méthodologie expliquée, pas de mauvaise surprise. Vous savez toujours où vous en êtes.',
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.35-4.35"/>
                    </svg>
                  )
                },
                {
                  title: 'Réactivité',
                  desc: 'Réponse en 24h, audit livré en 48h (offre Sérénité). Nous respectons vos délais.',
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                  )
                },
                {
                  title: 'Excellence',
                  desc: 'Méthodologie ANSSI, experts certifiés ISO 27001. Vous méritez le meilleur accompagnement.',
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )
                },
                {
                  title: 'Discrétion',
                  desc: 'Confidentialité absolue. Vos données et vos vulnérabilités restent entre nous.',
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  )
                },
                {
                  title: 'Impact',
                  desc: 'Résultats mesurables : 98% de conformité, 0 client sanctionné, 12 000€ d\'aides récupérées en moyenne.',
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F9A8D4" strokeWidth="2">
                      <line x1="18" y1="20" x2="18" y2="10"/>
                      <line x1="12" y1="20" x2="12" y2="4"/>
                      <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                  )
                }
              ].map((value, idx) => (
                <div key={idx} className="value-card-about value-card-hover">
                  <div className="value-header">
                    <div className="value-icon-box">
                      {value.icon}
                    </div>
                    <h4 className="value-title">
                      {value.title}
                    </h4>
                  </div>
                  <p className="value-desc">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section-cta-gradient">
          <div className="container-md">
            <h2 className="section-title-white">
              Prêt à sécuriser votre conformité ?
            </h2>
            <p className="section-subtitle-white">
              Échangez gratuitement avec un expert certifié ISO 27001 • Diagnostic personnalisé en 30 minutes
            </p>
            <a
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-white-lg"
            >
              Réserver un échange gratuit
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer-artisan-modern">
          <div className="footer-main-content">
            <div className="footer-brand-col">
              <img src="/logo.png" alt="NIS2 Conformité" className="footer-logo" />
              <p className="footer-brand-desc">
                La plateforme d'audit et de conformité cyber pensée pour les PME et ETI européennes
              </p>
              <div className="footer-certifs">
                <span>✓ Certifié ISO 27001</span>
                <span>✓ Méthodologie ANSSI</span>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Solutions</h4>
              <ul className="footer-links-list">
                <li><a href="/#pricing">Audit NIS2</a></li>
                <li><a href="/formations">Formations</a></li>
                <li><a href="/offres-complementaires">Services complémentaires</a></li>
                <li><a href="#video-section">Comprendre NIS2</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Entreprise</h4>
              <ul className="footer-links-list">
                <li><a href="/qui-sommes-nous">Qui sommes-nous ?</a></li>
                <li><a href="/#expertise">Notre expertise</a></li>
                <li><a href="/#temoignages">Témoignages</a></li>
                <li><a href="/comprendre-nis2">À propos de NIS2</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Contact</h4>
              <ul className="footer-links-list">
                <li>
                  <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer">
                    Prendre rendez-vous
                  </a>
                </li>
                <li>
                  <a href="mailto:nis2conformite@gmail.com">
                    nis2conformite@gmail.com
                  </a>
                </li>
                <li><a href="tel:+33000000000">+33 (0)0 00 00 00 00</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-modern">
            <div className="footer-bottom-content">
              <p className="footer-copyright">© 2025 NIS2 Conformité. Tous droits réservés</p>
              <div className="footer-legal-links">
                <a href="/mentions-legales">Mentions légales</a>
                <a href="/politique-confidentialite">Politique de confidentialité</a>
                <a href="/cgu">CGU</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
