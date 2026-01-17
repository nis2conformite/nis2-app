import Head from 'next/head';
import { CONTACT_INFO } from '../utils/constants';
import MenuBurger from '../components/MenuBurger';

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

          <MenuBurger />
        </div>
      </header>

      <div style={{paddingTop: '66px'}}>
        {/* HERO */}
        <section className="hero-artisan-exact" style={{paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)'}}>
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
        <section style={{padding: 'var(--space-xl) var(--space-md)', background: 'var(--color-bg)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: 'var(--space-xl)'}}>
              <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-md)'}}>
                Nos Audits de Conformité NIS2
              </h2>
              <p style={{fontSize: '18px', color: 'var(--color-text-secondary)'}}>
                3 formules d'accompagnement adaptées à votre maturité cyber
              </p>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)'}}>
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
                <button onClick={handleStripeCheckout} className="btn-artisan btn-artisan-secondary" style={{marginTop: 'auto'}}>
                  Démarrer l'audit
                </button>
              </div>

              {/* Offre Sérénité (Featured) */}
              <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 8px 24px rgba(168, 85, 247, 0.15)', border: '2px solid var(--color-purple)', position: 'relative', display: 'flex', flexDirection: 'column'}}>
                <div style={{position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', padding: '6px 20px', background: 'linear-gradient(135deg, #A855F7 0%, #9333EA 50%, #EC4899 100%)', color: 'white', borderRadius: '9999px', fontSize: '14px', fontWeight: '700'}}>
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
                <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-artisan btn-artisan-secondary" style={{marginTop: 'auto', textDecoration: 'none', textAlign: 'center'}}>
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

            {/* BANNIÈRE AIDES */}
            <div className="aide-etat-banner" style={{marginTop: 'var(--space-xl)', marginBottom: 'var(--space-xl)'}}>
              <div className="aide-etat-content">
                <div className="aide-etat-text">
                  <div className="aide-etat-title">
                    Jusqu'à 70% d'aides de l'État • Valable sur toutes nos offres
                  </div>
                  <div className="aide-etat-subtitle">
                    Réduisez le coût de votre mise en conformité NIS2
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

            {/* TABLEAU COMPARATIF */}
            <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)'}}>
              <h3 style={{fontSize: '28px', fontWeight: '700', color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: 'var(--space-xl)'}}>
                Comparatif détaillé des offres
              </h3>
              <div style={{overflowX: 'auto'}}>
                <table style={{width: '100%', borderCollapse: 'collapse'}}>
                  <thead>
                    <tr>
                      <th style={{background: '#F3F4F6', color: 'var(--color-text-primary)', padding: 'var(--space-lg)', textAlign: 'left', fontWeight: '700', fontSize: '16px', borderBottom: '3px solid #E5E7EB'}}>Fonctionnalités</th>
                      <th style={{background: 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)', color: 'var(--color-purple)', padding: 'var(--space-lg)', textAlign: 'center', fontWeight: '700', fontSize: '16px', borderBottom: '3px solid var(--color-purple)', borderLeft: '2px solid #E5E7EB'}}>Essentielle<br/><span style={{fontSize: '18px', fontWeight: '700', color: 'var(--color-text-primary)'}}>3 490€</span></th>
                      <th style={{background: 'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)', color: 'var(--color-pink)', padding: 'var(--space-lg)', textAlign: 'center', fontWeight: '700', fontSize: '16px', borderBottom: '3px solid var(--color-pink)', borderLeft: '2px solid #E5E7EB'}}>Sérénité<br/><span style={{fontSize: '18px', fontWeight: '700', color: 'var(--color-text-primary)'}}>7 990€</span></th>
                      <th style={{background: 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)', color: 'var(--color-purple)', padding: 'var(--space-lg)', textAlign: 'center', fontWeight: '700', fontSize: '16px', borderBottom: '3px solid var(--color-purple)', borderLeft: '2px solid #E5E7EB'}}>Expertise<br/><span style={{fontSize: '18px', fontWeight: '700', color: 'var(--color-text-primary)'}}>14 900€</span></th>
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
                      <tr key={idx} style={{borderBottom: '1px solid #E5E7EB', background: idx % 2 === 0 ? '#FAFAFA' : 'white'}}>
                        <td style={{padding: 'var(--space-md)', color: 'var(--color-text-primary)', fontWeight: '700', fontSize: '15px'}}>{row.name}</td>
                        <td style={{padding: 'var(--space-md)', textAlign: 'center', fontSize: '18px', borderLeft: '2px solid #E5E7EB'}}>
                          {typeof row.essential === 'boolean' ? (
                            row.essential ?
                              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #A855F7 0%, #9333EA 50%, #EC4899 100%)', color: 'white', fontWeight: '700', fontSize: '16px'}}>✓</span> :
                              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: '#F3F4F6', color: '#9CA3AF', fontWeight: '700', fontSize: '18px'}}>—</span>
                          ) : <span style={{color: 'var(--color-text-primary)', fontWeight: '600', fontSize: '14px'}}>{row.essential}</span>}
                        </td>
                        <td style={{padding: 'var(--space-md)', textAlign: 'center', fontSize: '18px', borderLeft: '2px solid #E5E7EB'}}>
                          {typeof row.serenity === 'boolean' ? (
                            row.serenity ?
                              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #A855F7 0%, #9333EA 50%, #EC4899 100%)', color: 'white', fontWeight: '700', fontSize: '16px'}}>✓</span> :
                              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: '#F3F4F6', color: '#9CA3AF', fontWeight: '700', fontSize: '18px'}}>—</span>
                          ) : <span style={{color: 'var(--color-text-primary)', fontWeight: '600', fontSize: '14px'}}>{row.serenity}</span>}
                        </td>
                        <td style={{padding: 'var(--space-md)', textAlign: 'center', fontSize: '18px', borderLeft: '2px solid #E5E7EB'}}>
                          {typeof row.expertise === 'boolean' ? (
                            row.expertise ?
                              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #A855F7 0%, #9333EA 50%, #EC4899 100%)', color: 'white', fontWeight: '700', fontSize: '16px'}}>✓</span> :
                              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: '#F3F4F6', color: '#9CA3AF', fontWeight: '700', fontSize: '18px'}}>—</span>
                          ) : <span style={{color: 'var(--color-text-primary)', fontWeight: '600', fontSize: '14px'}}>{row.expertise}</span>}
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
        <section style={{padding: 'var(--space-xl) var(--space-md)', background: 'linear-gradient(180deg, #F3E8FF 0%, #FFF 100%)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: 'var(--space-xl)'}}>
              <h2 style={{fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--space-md)'}}>
                Services Complémentaires
              </h2>
              <p style={{fontSize: '18px', color: 'var(--color-text-secondary)'}}>
                Renforcez votre conformité avec nos services additionnels
              </p>
            </div>

            <div className="services-grid-4cols">
              {[
                {
                  title: 'Modèles de documents',
                  price: '99€',
                  period: '/mois',
                  features: ['Templates conformité NIS2', 'Mises à jour régulières', 'Accès illimité', 'Politiques ANSSI']
                },
                {
                  title: 'Formations NIS2',
                  price: '349€',
                  period: '/pers',
                  features: ['Formation dirigeants', 'Prise en charge OPCO', 'Plateforme en ligne', 'Sur site : nous consulter'],
                  badge: 'RECOMMANDÉ'
                },
                {
                  title: 'Montage Subventions',
                  price: '299€',
                  period: '',
                  features: ['Identification aides (70%)', 'Constitution dossiers', 'France Num, BPI, Régions', '12 000€ récupérés / moy.']
                },
                {
                  title: 'Accompagnement incident',
                  price: '99€',
                  period: '/mois',
                  features: ['Déclaration incident', 'Conseil gestion de crise', 'Veille législative', 'Ligne expert dédiée']
                }
              ].map((service, idx) => (
                <div key={idx} className="service-card-comp value-card-hover" style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-lg)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', position: 'relative', border: service.badge ? '2px solid #EC4899' : '1px solid #E5E7EB', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column'}}>
                  {service.badge && (
                    <div style={{position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', padding: '6px 16px', background: '#EC4899', color: 'white', borderRadius: '9999px', fontSize: '11px', fontWeight: '700', whiteSpace: 'nowrap'}}>
                      {service.badge}
                    </div>
                  )}

                  {/* Zone Prix + Titre - hauteur fixe */}
                  <div style={{display: 'flex', gap: 'var(--space-sm)', alignItems: 'flex-start', marginBottom: 'var(--space-md)', marginTop: service.badge ? 'var(--space-sm)' : 0, minHeight: '70px'}}>
                    <div style={{background: 'linear-gradient(135deg, #A855F7 0%, #9333EA 50%, #EC4899 100%)', color: 'white', padding: '10px 14px', borderRadius: 'var(--radius-md)', boxShadow: '0 2px 8px rgba(168, 85, 247, 0.3)', flexShrink: 0, minHeight: '52px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <div style={{fontSize: '22px', fontWeight: '700', lineHeight: '1', textAlign: 'center'}}>
                        {service.price}
                      </div>
                      <div style={{fontSize: '10px', fontWeight: '500', opacity: 0.9, textAlign: 'center', marginTop: '3px', minHeight: '12px'}}>
                        {service.period || '\u00A0'}
                      </div>
                    </div>
                    <h3 style={{fontSize: '16px', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0, lineHeight: '1.3', paddingTop: '4px'}}>
                      {service.title}
                    </h3>
                  </div>

                  <ul style={{listStyle: 'none', padding: 0, margin: 0, flexGrow: 1}}>
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} style={{padding: '6px 0', borderBottom: fidx < service.features.length - 1 ? '1px solid #E5E7EB' : 'none', color: 'var(--color-text-secondary)', fontSize: '13px', display: 'flex', alignItems: 'flex-start', gap: '6px', lineHeight: '1.4'}}>
                        <span style={{color: 'var(--color-purple)', fontSize: '14px', flexShrink: 0}}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-artisan btn-artisan-secondary" style={{textDecoration: 'none', textAlign: 'center', marginTop: 'var(--space-md)', padding: '10px 16px', fontSize: '14px'}}>
                    En savoir plus
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{padding: 'var(--space-xl) var(--space-md)', background: 'linear-gradient(135deg, #A855F7 0%, #9333EA 50%, #EC4899 100%)', textAlign: 'center'}}>
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
