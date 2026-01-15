import Head from 'next/head';
import { CONTACT_INFO } from '../utils/constants';

export default function OffresServices() {
  const handleStripeCheckout = async () => {
    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (data.error) {
        alert('Erreur: ' + data.error);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Nos Solutions NIS2 | Audits, Formations & Services Complémentaires</title>
        <meta name="description" content="Découvrez nos solutions complètes pour votre mise en conformité NIS2 : audits, formations, modèles de documents et services d'accompagnement. Prix transparents et expertise certifiée." />
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
              Solutions complètes • Prix transparents • Accompagnement expert
            </div>

            <h1 className="hero-title-artisan">
              Tout pour votre<br />
              <span className="highlight">conformité NIS2</span>
            </h1>

            <p className="hero-subtitle-artisan">
              Des audits complets aux formations en passant par les services complémentaires<br />
              Choisissez la solution adaptée à votre maturité cyber
            </p>
          </div>
        </section>

        {/* OFFRES PRINCIPALES - FORMAT SIMPLIFIÉ */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'var(--color-bg)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: 'var(--space-3xl)'}}>
              <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-md)'}}>
                Nos Audits de Conformité NIS2
              </h2>
              <p style={{fontSize: '18px', color: 'var(--color-text-secondary)'}}>
                3 formules d'accompagnement adaptées à votre maturité cyber
              </p>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-xl)', marginBottom: 'var(--space-3xl)'}}>
              {/* Offre Essentielle */}
              <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column'}}>
                <h3 style={{fontSize: '24px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-sm)'}}>
                  Essentielle
                </h3>
                <div style={{fontSize: '42px', fontWeight: '700', color: 'var(--color-purple)', marginBottom: 'var(--space-xs)'}}>
                  3 490€ <span style={{fontSize: '18px', fontWeight: '400', color: 'var(--color-text-tertiary)'}}>HT</span>
                </div>
                <p style={{fontSize: '15px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)', paddingBottom: 'var(--space-lg)', borderBottom: '1px solid #E5E7EB'}}>
                  Auto-évaluation guidée • Résultat immédiat • Score de conformité
                </p>
                <button onClick={handleStripeCheckout} className="btn-artisan btn-artisan-primary" style={{marginTop: 'auto'}}>
                  Démarrer l'audit
                </button>
              </div>

              {/* Offre Sérénité (Featured) */}
              <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 8px 24px rgba(168, 85, 247, 0.15)', border: '2px solid var(--color-purple)', position: 'relative', display: 'flex', flexDirection: 'column'}}>
                <div style={{position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', padding: '6px 20px', background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', color: 'white', borderRadius: '9999px', fontSize: '14px', fontWeight: '700'}}>
                  ⭐ LE PLUS POPULAIRE
                </div>
                <h3 style={{fontSize: '24px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-sm)', marginTop: 'var(--space-sm)'}}>
                  Sérénité
                </h3>
                <div style={{fontSize: '42px', fontWeight: '700', color: 'var(--color-purple)', marginBottom: 'var(--space-xs)'}}>
                  7 990€ <span style={{fontSize: '18px', fontWeight: '400', color: 'var(--color-text-tertiary)'}}>HT</span>
                </div>
                <p style={{fontSize: '15px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)', paddingBottom: 'var(--space-lg)', borderBottom: '1px solid #E5E7EB'}}>
                  Audit complet + Expert • Plan de remédiation • Livraison 48H
                </p>
                <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-artisan btn-artisan-primary" style={{marginTop: 'auto', textDecoration: 'none', textAlign: 'center'}}>
                  Prendre RDV
                </a>
              </div>

              {/* Offre Expertise */}
              <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column'}}>
                <h3 style={{fontSize: '24px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-sm)'}}>
                  Expertise
                </h3>
                <div style={{fontSize: '42px', fontWeight: '700', color: 'var(--color-purple)', marginBottom: 'var(--space-xs)'}}>
                  14 900€ <span style={{fontSize: '18px', fontWeight: '400', color: 'var(--color-text-tertiary)'}}>HT</span>
                </div>
                <p style={{fontSize: '15px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)', paddingBottom: 'var(--space-lg)', borderBottom: '1px solid #E5E7EB'}}>
                  Accompagnement complet • Roadmap personnalisée • 12 mois de suivi
                </p>
                <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-artisan btn-artisan-secondary" style={{marginTop: 'auto', textDecoration: 'none', textAlign: 'center'}}>
                  Prendre RDV
                </a>
              </div>
            </div>

            {/* TABLEAU COMPARATIF */}
            <div className="cyber-encart">
              <h3 style={{fontSize: '28px', fontWeight: '700', color: 'white', textAlign: 'center', marginBottom: 'var(--space-xl)', position: 'relative', zIndex: 1}}>
                Comparatif détaillé des offres
              </h3>
              <div style={{overflowX: 'auto', position: 'relative', zIndex: 1}}>
                <table style={{width: '100%', borderCollapse: 'collapse'}}>
                  <thead>
                    <tr>
                      <th style={{background: 'rgba(255,255,255,0.1)', color: 'white', padding: 'var(--space-md)', textAlign: 'left', borderBottom: '2px solid rgba(255,255,255,0.2)'}}>Fonctionnalités</th>
                      <th style={{background: 'rgba(168, 85, 247, 0.2)', color: 'white', padding: 'var(--space-md)', textAlign: 'center', borderBottom: '2px solid rgba(255,255,255,0.2)'}}>Essentielle<br/><span style={{fontSize: '14px', fontWeight: '400'}}>3 490€</span></th>
                      <th style={{background: 'rgba(236, 72, 153, 0.2)', color: 'white', padding: 'var(--space-md)', textAlign: 'center', borderBottom: '2px solid rgba(255,255,255,0.2)'}}>Sérénité<br/><span style={{fontSize: '14px', fontWeight: '400'}}>7 990€</span></th>
                      <th style={{background: 'rgba(168, 85, 247, 0.2)', color: 'white', padding: 'var(--space-md)', textAlign: 'center', borderBottom: '2px solid rgba(255,255,255,0.2)'}}>Expertise<br/><span style={{fontSize: '14px', fontWeight: '400'}}>14 900€</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Audit cyber NIS2', essential: true, serenity: true, expertise: true },
                      { name: 'Résultat immédiat', essential: true, serenity: false, expertise: false },
                      { name: 'Rapport validé par experts', essential: false, serenity: true, expertise: true },
                      { name: 'Analyse écarts de conformité', essential: false, serenity: true, expertise: true },
                      { name: 'Plan de remédiation détaillé', essential: false, serenity: true, expertise: true },
                      { name: 'Restitution avec expert', essential: false, serenity: true, expertise: true },
                      { name: 'Entretien préalable expert', essential: false, serenity: false, expertise: true },
                      { name: 'Roadmap personnalisée', essential: false, serenity: false, expertise: true },
                      { name: 'Enregistrement ANSSI', essential: false, serenity: false, expertise: true },
                      { name: 'Dossier aides d\'État', essential: false, serenity: false, expertise: true },
                      { name: 'Accès plateforme', essential: '—', serenity: '6 mois', expertise: '12 mois' },
                      { name: 'Délai de livraison', essential: 'Immédiat', serenity: '48H', expertise: '1 mois' }
                    ].map((row, idx) => (
                      <tr key={idx} style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                        <td style={{padding: 'var(--space-md)', color: 'white', fontWeight: '600', fontSize: '15px'}}>{row.name}</td>
                        <td style={{padding: 'var(--space-md)', textAlign: 'center', color: 'rgba(255,255,255,0.9)', fontSize: '18px'}}>
                          {typeof row.essential === 'boolean' ? (row.essential ? '✓' : '—') : row.essential}
                        </td>
                        <td style={{padding: 'var(--space-md)', textAlign: 'center', color: 'rgba(255,255,255,0.9)', fontSize: '18px'}}>
                          {typeof row.serenity === 'boolean' ? (row.serenity ? '✓' : '—') : row.serenity}
                        </td>
                        <td style={{padding: 'var(--space-md)', textAlign: 'center', color: 'rgba(255,255,255,0.9)', fontSize: '18px'}}>
                          {typeof row.expertise === 'boolean' ? (row.expertise ? '✓' : '—') : row.expertise}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES COMPLÉMENTAIRES */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'linear-gradient(180deg, #F3E8FF 0%, #FFF 100%)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: 'var(--space-3xl)'}}>
              <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-md)'}}>
                Services Complémentaires
              </h2>
              <p style={{fontSize: '18px', color: 'var(--color-text-secondary)'}}>
                Renforcez votre conformité avec nos services additionnels
              </p>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-xl)'}}>
              {[
                {
                  title: 'Modèles de documents',
                  price: '99€',
                  period: '/mois',
                  features: ['Templates conformité NIS2', 'Mis à jour réglementairement', 'Accès illimité', 'Politiques ANSSI'],
                  gradient: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                  )
                },
                {
                  title: 'Formations NIS2',
                  price: '349€',
                  period: '/pers',
                  features: ['Formation dirigeants (obligatoire)', 'Prise en charge OPCO', 'Plateforme en ligne', 'Formation sur site : nous consulter'],
                  gradient: 'linear-gradient(135deg, #FF5630 0%, #E64825 100%)',
                  badge: 'RECOMMANDÉ',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  )
                },
                {
                  title: 'Montage Subventions',
                  price: '299€',
                  period: '',
                  features: ['Identification des aides (70% max)', 'Constitution dossiers', 'France Num, BPI, Régions', '12 000€ récupérés en moyenne'],
                  gradient: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  )
                },
                {
                  title: 'Notification Incidents',
                  price: '99€',
                  period: '/mois',
                  features: ['Déclaration ANSSI 24h', 'Gestion de crise', 'Hotline 24/7', 'Évitez les 10M€ d\'amende'],
                  gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  )
                }
              ].map((service, idx) => (
                <div key={idx} style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', position: 'relative', display: 'flex', flexDirection: 'column', border: service.badge ? '2px solid #FF5630' : '1px solid #E5E7EB'}}>
                  {service.badge && (
                    <div style={{position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', padding: '6px 16px', background: '#FF5630', color: 'white', borderRadius: '9999px', fontSize: '12px', fontWeight: '700'}}>
                      {service.badge}
                    </div>
                  )}
                  <div style={{width: '64px', height: '64px', borderRadius: 'var(--radius-lg)', background: service.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-md)', marginTop: service.badge ? 'var(--space-sm)' : 0}}>
                    {service.icon}
                  </div>
                  <h3 style={{fontSize: '22px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-sm)'}}>
                    {service.title}
                  </h3>
                  <div style={{fontSize: '32px', fontWeight: '700', color: 'var(--color-purple)', marginBottom: 'var(--space-md)'}}>
                    {service.price}<span style={{fontSize: '16px', fontWeight: '400', color: 'var(--color-text-tertiary)'}}>{service.period}</span>
                  </div>
                  <ul style={{listStyle: 'none', padding: 0, margin: 0, flexGrow: 1, marginBottom: 'var(--space-lg)'}}>
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} style={{padding: 'var(--space-sm) 0', borderBottom: '1px solid #E5E7EB', color: 'var(--color-text-secondary)', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-sm)'}}>
                        <span style={{color: 'var(--color-purple)', fontSize: '16px', flexShrink: 0}}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-artisan btn-artisan-secondary" style={{textDecoration: 'none', textAlign: 'center'}}>
                    En savoir plus
                  </a>
                </div>
              ))}
            </div>

            {/* BANNIÈRE AIDES */}
            <div className="aide-etat-banner" style={{marginTop: 'var(--space-3xl)'}}>
              <div className="aide-etat-content">
                <div className="aide-etat-text">
                  <div className="aide-etat-title">
                    Jusqu'à 70% d'aides de l'État • France 2030 • Investissements d'avenir
                  </div>
                  <div className="aide-etat-subtitle">
                    Réduisez jusqu'à 70% le coût de votre mise en conformité NIS2 grâce aux aides publiques
                  </div>
                </div>
              </div>
              <button onClick={() => alert('Simulateur en cours de développement')} className="btn-simulateur">
                Calculer mes aides
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{padding: 'var(--space-3xl) var(--space-md)', background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', textAlign: 'center'}}>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: 'white', marginBottom: 'var(--space-md)'}}>
              Prêt à sécuriser votre conformité NIS2 ?
            </h2>
            <p style={{fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--space-xl)'}}>
              Échangez gratuitement avec un expert certifié • Réponse en 24h
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
