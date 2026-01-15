import Head from 'next/head';
import { CONTACT_INFO } from '../utils/constants';

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
        </div>
      </header>

      <div style={{paddingTop: '66px'}}>
        {/* HERO */}
        <section className="hero-artisan-exact" style={{paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)'}}>
          <div className="hero-artisan-container">
            <div className="hero-badge-artisan">
              Experts conformité cyber • Depuis 2009
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

        {/* CROYANCE */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'linear-gradient(180deg, #F3E8FF 0%, #FFF 100%)'}}>
          <div style={{maxWidth: '1000px', margin: '0 auto', textAlign: 'center'}}>
            <div className="before-after-wrapper-design">
              <h2 style={{fontSize: '32px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-lg)'}}>
                Nous croyons que la cybersécurité doit être accessible à tous
              </h2>
              <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--color-text-secondary)'}}>
                Trop d'entreprises voient la conformité NIS2 comme une contrainte coûteuse et complexe.
                Pourtant, avec le bon accompagnement, elle devient un atout stratégique : protection contre les cyber-attaques,
                différenciation commerciale, et accès aux marchés publics et privés.
              </p>
            </div>
          </div>
        </section>

        {/* NOTRE APPROCHE - 3 BLOCS */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'var(--color-bg)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-3xl)'}}>
              Notre approche
            </h2>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)'}}>
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
                <div key={block.num} style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '2px solid #F3E8FF'}}>
                  <div style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    background: `linear-gradient(135deg, ${block.color} 0%, ${block.color}99 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: 'var(--space-md)'
                  }}>
                    {block.num}
                  </div>
                  <h3 style={{fontSize: '22px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-sm)'}}>
                    {block.title}
                  </h3>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'var(--color-text-secondary)', margin: 0}}>
                    {block.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* L'ÉQUIPE - 4 STATS */}
        <section className="cyber-encart" style={{margin: 'var(--space-3xl) var(--space-md)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'white', textAlign: 'center', marginBottom: 'var(--space-3xl)'}}>
              L'équipe derrière Cyber Solférino
            </h2>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)'}}>
              {[
                {
                  icon: (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  ),
                  title: '15+ années d\'expérience',
                  desc: 'Depuis 2009 dans l\'accompagnement cyber des PME et ETI'
                },
                {
                  icon: (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  ),
                  title: 'Experts certifiés ISO 27001',
                  desc: 'Consultants accrédités • Méthodologie validée par l\'ANSSI'
                },
                {
                  icon: (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  ),
                  title: '150+ PME accompagnées',
                  desc: '98% de conformité • 0 client sanctionné • Secteurs critiques et essentiels'
                },
                {
                  icon: (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  ),
                  title: 'Basés en France, portée européenne',
                  desc: 'Implantés à Paris • Interventions dans toute l\'Europe'
                }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-lg)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  textAlign: 'center'
                }}>
                  <div style={{color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--space-md)', display: 'flex', justifyContent: 'center'}}>
                    {stat.icon}
                  </div>
                  <h4 style={{fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: 'var(--space-sm)'}}>
                    {stat.title}
                  </h4>
                  <p style={{fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', margin: 0}}>
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTENAIRES - LOGOS CERTIFICATIONS */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'var(--color-bg)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-md)'}}>
              Reconnus par les meilleurs
            </h2>
            <p style={{fontSize: '18px', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: 'var(--space-3xl)'}}>
              Nos accréditations et partenariats garantissent la qualité de notre accompagnement
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-xl)', alignItems: 'center', justifyItems: 'center'}}>
              {[
                { src: '/logo_anssi.png', alt: 'ANSSI - Agence Nationale de la Sécurité des Systèmes d\'Information' },
                { src: '/Logo-cybermalveillance.PNG', alt: 'Cybermalveillance.gouv.fr' },
                { src: '/logo_expertcyber.jpg', alt: 'Expert Cyber' },
                { src: '/iso_27001_02-1024x704.png', alt: 'ISO 27001 Certified' }
              ].map((logo, idx) => (
                <div key={idx} style={{
                  background: 'white',
                  padding: 'var(--space-lg)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '120px',
                  width: '100%'
                }}>
                  <img src={logo.src} alt={logo.alt} style={{maxWidth: '150px', maxHeight: '80px', objectFit: 'contain'}} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALEURS - 6 CARDS */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'linear-gradient(180deg, #FFF 0%, #F3E8FF 100%)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-md)'}}>
              Nos valeurs
            </h2>
            <p style={{fontSize: '18px', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: 'var(--space-3xl)'}}>
              Les principes qui guident notre accompagnement au quotidien
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)'}}>
              {[
                { title: 'Pragmatisme', desc: 'Solutions concrètes adaptées à votre réalité. Pas de théorie, que du terrain.', gradient: '#A855F7' },
                { title: 'Transparence', desc: 'Prix clairs, méthodologie expliquée, pas de mauvaise surprise. Vous savez toujours où vous en êtes.', gradient: '#EC4899' },
                { title: 'Réactivité', desc: 'Réponse en 24h, audit livré en 48h (offre Sérénité). Nous respectons vos délais.', gradient: '#F472B6' },
                { title: 'Excellence', desc: 'Méthodologie ANSSI, experts certifiés ISO 27001. Vous méritez le meilleur accompagnement.', gradient: '#FB923C' },
                { title: 'Discrétion', desc: 'Confidentialité absolue. Vos données et vos vulnérabilités restent entre nous.', gradient: '#C084FC' },
                { title: 'Impact', desc: 'Résultats mesurables : 98% de conformité, 0 client sanctionné, 12 000€ d\'aides récupérées en moyenne.', gradient: '#F9A8D4' }
              ].map((value, idx) => (
                <div key={idx} style={{
                  background: 'white',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-lg)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  borderLeft: `4px solid ${value.gradient}`,
                  transition: 'all 0.3s ease'
                }} className="value-card-hover">
                  <h4 style={{fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-sm)'}}>
                    {value.title}
                  </h4>
                  <p style={{fontSize: '15px', lineHeight: '1.6', color: 'var(--color-text-secondary)', margin: 0}}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', textAlign: 'center'}}>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'white', marginBottom: 'var(--space-md)'}}>
              Prêt à sécuriser votre conformité ?
            </h2>
            <p style={{fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--space-xl)'}}>
              Échangez gratuitement avec un expert certifié ISO 27001 • Diagnostic personnalisé en 30 minutes
            </p>
            <a
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                background: 'white',
                color: 'var(--color-purple)',
                fontSize: '18px',
                fontWeight: '700',
                borderRadius: '9999px',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease'
              }}
            >
              Réserver un échange gratuit
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer-artisan-modern">
          <div className="footer-container-modern">
            <div className="footer-content-modern">
              <div className="footer-column-modern">
                <img src="/logo.png" alt="NIS2 Conformité" className="footer-logo-modern" />
                <p className="footer-tagline-modern">
                  La cyber sécurité : un impératif stratégique
                </p>
              </div>

              <div className="footer-column-modern">
                <h4 className="footer-title-modern">Navigation</h4>
                <ul className="footer-links-modern">
                  <li><a href="/comprendre-nis2">Comprendre NIS2</a></li>
                  <li><a href="/qui-sommes-nous">Qui sommes-nous</a></li>
                  <li><a href="/offres-complementaires">Nos tarifs</a></li>
                  <li><a href="/formations">Formation</a></li>
                </ul>
              </div>

              <div className="footer-column-modern">
                <h4 className="footer-title-modern">Contact</h4>
                <ul className="footer-links-modern">
                  <li><a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer">Prendre rendez-vous</a></li>
                  <li><a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom-modern">
              <p>&copy; 2024 {CONTACT_INFO.company}. Tous droits réservés.</p>
              <div className="footer-legal-modern">
                <a href="/mentions-legales">Mentions légales</a>
                <a href="/politique-confidentialite">Politique de confidentialité</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
